import { defineComponent } from "vue";
import jwt_decode from "jwt-decode";
import DataElement from "./DataElement.vue";
import axios from "axios";

export default defineComponent({
  name: "DisplayData",
  components: {
    "data-element": DataElement,
  },
  props: ["stream"],
  computed: {
    urlOK: function (): boolean {
      return this.$store.getters.getDataURLObtained;
    },
    streamOK: function (): boolean {
      return this.stream;
    },
    url: function (): string {
      return this.$store.getters.getDataURL;
    },
  },
  methods: {
    open: function () {
      console.log("opening data socket");
      const socket = new WebSocket(this.url);
      socket.addEventListener("open", function (event) {
        console.log("data connection open");
      });
      socket.addEventListener("message", function (event) {
        let ele = document.getElementById("data-box");
        if (ele) {
          ele.innerHTML += event.data;
        }
        console.log("Message from server ", event.data);
      });
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
            store.commit("setDataURL", response.data.uri);
          })
          .catch((err) => console.log(err));
      }
    },
    urlOK(is: boolean, was: boolean) {
      if (is) {
        console.log("get dataURL", this.urlOK, this.url);
        this.open();
      }
    },
  },
});
