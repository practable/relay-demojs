import { defineComponent } from "vue";
import jwt_decode from "jwt-decode";
import VideoElement from "./VideoElement.vue";

export default defineComponent({
  name: "DisplayVideo",
  components: {
    "video-element": VideoElement,
  },
  props: ["stream"],
  computed: {
    topic: function (): string {
      if (!this.stream) {
        return "(none)";
      }
      if (this.stream.hasOwnProperty("pemission")) {
        return this.stream.permission.topic;
      }
      return "(none)";
    },
    tokenSnippet: function (): string {
      if (!this.stream) {
        return "(none)";
      }
      if (this.stream.hasOwnProperty("token")) {
        var t = this.stream.token;
        var ts = t.substring(0, 6);
        var tn = t.length.toString();
        var te = t.slice(t.length - 6);

        return ts + "..." + te + " (" + tn + " chars)";
      } else {
        return "(none supplied)";
      }
    },
    url: function (): string {
      var url = "https://tsduck.io/streams/usa-atsc/473.ts";
      return url;
    },
  },
});
