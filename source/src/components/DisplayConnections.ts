import { defineComponent } from "vue";
import DisplayConnection from "./DisplayConnection.vue";

export default defineComponent({
  name: "DisplayConnections",
  components: {
    "display-connection": DisplayConnection,
  },
});
