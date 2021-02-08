import DisplayConnections from "../components/DisplayConnections.vue";
import DisplayExpiry from "../components/DisplayExpiry.vue";
import DisplayData from "../components/DisplayData.vue";
import DisplayVideo from "../components/DisplayVideo.vue";
import { defineComponent } from "vue";
import dayjs from "dayjs";

export default defineComponent({
  name: "Activity",
  components: {
    "display-connections": DisplayConnections,
    "display-video": DisplayVideo,
    "display-data": DisplayData,
    "display-expiry": DisplayExpiry,
  },
  computed: {
    id: function (): string | string[] {
      return this.$route.params.id;
    },
    decodedStreams: function (): object {
      return this.$store.getters.getStreams;
    },
    streamsObtained: function (): boolean {
      return this.$store.getters.getStreamsObtained;
    },
    videoStream: function (): object {
      return this.$store.getters.getStream("video");
    },
    dataStream: function (): object {
      return this.$store.getters.getStream("data");
    },
    exp: function (): bigint {
      return this.$store.getters.getExpiry;
    },
    expObtained: function (): boolean {
      return this.$store.getters.getExpiryObtained;
    },
  },
  mounted() {
    if (this.streamsObtained) {
      return;
    }
    try {
      var decodedStreams = JSON.parse(
        decodeURIComponent(String(this.$route.query.streams))
      );

      this.$store.commit("setStreams", decodedStreams);
    } catch (e) {
      console.log("error decoding streams", e);
      this.$store.commit("deleteStreams");
    }
    try {
      var exp = this.$route.query.exp;
      this.$store.commit("setExpiry", exp);
    } catch (e) {
      console.log("error obtaining expiry", e);
      this.$store.commit("deleteExpiry");
    }
    var _this = this;
    var cvb = function (bytes: bigint) {
      _this.$store.commit("setVideoBytes", bytes);
    };

    document.addEventListener("jsmpeg:write", function (val: any) {
      //console.log("setVideoBytes", val.detail.bytes);
      cvb(val.detail.bytes);
    });

    var wd = function () {
      var exp = _this.$store.getters.getExpiry;

      if (exp <= dayjs().unix()) {
        //expired, stop checking
        var expiredEvent = new Event("streams:expired");
        document.dispatchEvent(expiredEvent);
        return;
      }

      var cb = _this.$store.getters.getVideoBytes;
      var lb = _this.$store.getters.getLastVideoBytes;
      var dropped = function () {
        _this.$store.commit("setConnectionIsDropped", true);
        _this.$store.commit("setConnectionDroppedAt", dayjs().unix());
        var reconnectEvent = new Event("streams:dropped");
        document.dispatchEvent(reconnectEvent);
        console.log("******************connection dropped**************");
      };
      console.log("counts", cb, lb);
      if (cb <= lb) {
        if (_this.$store.getters.getConnectionIsDropped) {
          var when = _this.$store.getters.getConnectionDroppedAt;
          var since = dayjs().unix() - when;
          if (since > 10) {
            //oh oh, haven't managed to reconnect, let's try again
            // note on slow network or heavy load on relay-access, this might time out over and over again
            // but user experience on a network that slow/server that loaded is questionable anyway
            // given usually connect delay is  <<1sec; so we might consider that an edge case we are
            // not likely to hit, so long as provisioning is ok (Server side)
            // as for user network quality, never say never....
            dropped();
          }
          return;
        }
        // handle the drop, zero counters to match new connection
        _this.$store.commit("setVideoBytes", 0);
        _this.$store.commit("setLastVideoBytes", 0);
        dropped();
      } else {
        _this.$store.commit("setLastVideoBytes", cb);
        _this.$store.commit("setConnectionIsDropped", false);
        console.log("connection OK");
      }
    };

    var connectionChecker = setInterval(wd, 1000);

    document.addEventListener("streams:expired", function () {
      clearInterval(connectionChecker);
    });
  },
  watch: {
    $route(to, from) {
      console.log("Activity:", to, from);
    },
  },
});
