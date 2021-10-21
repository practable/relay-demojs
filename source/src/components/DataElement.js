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
    var _this = this;
    this.connection = new WebSocket(this.url);
    console.log("opening data socket");
    this.connection.addEventListener("open", function (event) {
      console.log("data connection open");
    });
    this.connection.addEventListener("message", function (event) {
      var dataEvent = new Event("data:write");
      document.dispatchEvent(dataEvent);
      let ele = document.getElementById("data-box");
      var lm = _this.$store.getters.getLastMessage;
      var mh = _this.$store.getters.getMessageHistory;
      var mc = _this.$store.getters.getMessageCount;
      console.log(event.data);
      if (lm === event.data) {
        //repeat message
        //console.log("repeat message", event.data, mc);
        mc++;
        _this.$store.commit("setMessageCount", mc);
        mh += "<br>" + lm + " ×" + mc.toString();
      } else {
        //new message
        //console.log("new message", event.data);
        _this.$store.commit("setLastMessage", event.data);
        _this.$store.commit("setMessageCount", 1);
        mh += "<br>" + lm + " ×" + mc.toString();
        _this.$store.commit("setMessageHistory", mh);
        mh += "<br>" + event.data;
      }

      if (ele) {
        ele.innerHTML = mh;
      }
    });
  },
});
