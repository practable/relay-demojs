import DisplayConnections from "../components/DisplayConnections.vue";
import DisplayVideo from "../components/DisplayVideo.vue";
import DisplayData from "../components/DisplayData.vue";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Activity",
  components: {
    "display-connections": DisplayConnections,
    "display-video": DisplayVideo,
    "display-data": DisplayData,
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
      console.log("error decoding streams");
      this.$store.commit("deleteStreams");
    }
  },
  watch: {
    $route(to, from) {
      console.log("Activity:", to, from);
    },
  },
});
