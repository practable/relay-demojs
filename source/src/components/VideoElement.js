import JSMpeg from "@cycjimmy/jsmpeg-player";
import { defineComponent } from "vue";

export default defineComponent({
  name: "VideoElement",
  props: ["url"],
  mounted() {
    new JSMpeg.VideoElement("#videoWrapper", this.url);
  },
});
