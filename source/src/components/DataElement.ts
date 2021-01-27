import { defineComponent } from "vue";

export default defineComponent({
  name: "DataElement",
  props: ["url"],
  mounted() {
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
    });
  },
});
