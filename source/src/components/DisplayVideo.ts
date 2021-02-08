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
  methods: {
    accessVideo: function () {
      var accessURL = this.stream.url;
      var token = this.stream.token;
      var store = this.$store;
      store.commit("deleteVideoURL");
      axios
        .post(accessURL, {}, { headers: { Authorization: token } })
        .then((response) => {
          store.commit("setVideoURL", response.data.uri);
        })
        .catch((err) => console.log(err));
    },
  },
  mounted() {
    var _this = this;
    var reconnect = function () {
      _this.accessVideo();
    };
    //make second and subsequent connections
    document.addEventListener("streams:dropped", reconnect);
  },
  watch: {
    streamOK(is: boolean, was: boolean) {
      if (is) {
        // make first connection
        this.accessVideo();
      }
    },
  },
});
