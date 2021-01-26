import DisplayConnections from "../components/DisplayConnections.vue";
import { mapGetters } from "vuex";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Activity",
  components: {
    "display-connections": DisplayConnections,
  },
  computed: {
    id: function (): string | string[] {
      return this.$route.params.id;
    },
    decodedStreams: function (): object {
      return JSON.parse(decodeURIComponent(String(this.$route.query.streams)));
    },
  },
  watch: {
    $route(to, from) {
      console.log("Activity:", to, from);
    },
  },
});
