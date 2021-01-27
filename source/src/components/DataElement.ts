import { defineComponent } from "vue";

export default defineComponent({
  name: "DataElement",
  props: ["url"],
  mounted() {
    console.log("data", this.url);
  },
});
