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
    da: function (): string {
      return String(this.$route.query.da);
    },
    dt: function (): string {
      return String(this.$route.query.dt);
    },
    va: function (): string {
      return String(this.$route.query.va);
    },
    vt: function (): string {
      return String(this.$route.query.vt);
    },
    dw: function (): string {
      return String(this.$route.query.dw);
    },
    vw: function (): string {
      return String(this.$route.query.vw);
    },
  },
  watch: {
    $route(to, from) {
      console.log("Activity:", to, from);
    },
  },
});
