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
    urlOK: function (): boolean {
      return this.$store.getters.getVideoURLObtained;
    },
    streamOK: function (): boolean {
      return this.stream;
    },
    url: function (): string {
      return this.$store.getters.getVideoURL;
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
