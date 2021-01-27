import { defineComponent } from "vue";

export default defineComponent({
  name: "DataElement",
  props: ["url"],
  data: function () {
    return {
      connection: null,
    };
  },
  methods: {
    send: function () {
      let ele = document.getElementById("cmd-box");
      if (ele) {
        if (this.connection) {
          this.connection.send(ele.innerHTML);
        }
      }
    },
    clear: function () {
      let ele = document.getElementById("cmd-box");
      if (ele) {
        ele.innerHTML = "";
      }
    },
  },
  mounted() {
    this.connection = new WebSocket(this.url);
    console.log("opening data socket");
    this.connection.addEventListener("open", function (event) {
      console.log("data connection open");
    });
    this.connection.addEventListener("message", function (event) {
      let ele = document.getElementById("data-box");
      if (ele) {
        ele.innerHTML = event.data;
      }
    });
  },
});
