import { defineComponent } from "vue";
import jwt_decode from "jwt-decode";
import VideoElement from "./VideoElement.vue";
import axios from "axios";

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
    urlOK: function (): boolean {
      return this.$store.getters.getVideoURLObtained;
    },
    streamOK: function (): boolean {
      return this.stream;
    },
    url: function (): string {
      return this.$store.getters.getVideoURL;
    },
    testUrl: function (): string {
      var url =
        "https://cycjimmy.github.io/staticFiles/media/big_buck_bunny_640x360.ts";
      return url;
    },
  },
  watch: {
    streamOK(is: boolean, was: boolean) {
      if (is) {
        var accessURL = this.stream.url;
        var token = this.stream.token;
        var store = this.$store;
        axios
          .post(accessURL, {}, { headers: { Authorization: token } })
          .then((response) => {
            store.commit("setVideoURL", response.data.uri);
          })
          .catch((err) => console.log(err));
      }
    },
    urlOK(is: boolean, was: boolean) {
      if (is) {
        console.log("get videoURL", this.urlOK, this.url);
      }
    },
  },
});
