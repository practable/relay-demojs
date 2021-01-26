import JSMpeg from "@cycjimmy/jsmpeg-player";
import { defineComponent } from "vue";

export default defineComponent({
  name: "VideoElement",
  props: ["url"],
  mounted() {
    new JSMpeg.VideoElement(
      "#videoWrapper",
      "https://cycjimmy.github.io/staticFiles/media/big_buck_bunny_640x360.ts"
    );
  },
});
