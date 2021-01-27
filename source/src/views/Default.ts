import DisplayConnections from "../components/DisplayConnections.vue";
import DisplayExpiry from "../components/DisplayExpiry.vue";
import DisplayData from "../components/DisplayData.vue";
import DisplayVideo from "../components/DisplayVideo.vue";
import { defineComponent } from "vue";

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
  },
  watch: {
    $route(to, from) {
      console.log("Activity:", to, from);
    },
  },
});
