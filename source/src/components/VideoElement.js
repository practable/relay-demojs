import JSMpeg from "@cycjimmy/jsmpeg-player";
import { defineComponent } from "vue";

export default defineComponent({
  name: "VideoElement",
  props: ["url"],
  mounted() {
    this.player = new JSMpeg.VideoElement("#videoWrapper", this.url, {
      autoplay: true,
    });
  },
});
