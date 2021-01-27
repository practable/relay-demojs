import { defineComponent } from "vue";
import jwt_decode from "jwt-decode";
import dayjs from "dayjs-with-plugins";

export default defineComponent({
  name: "DisplayExpiry",
  props: ["exp"],
  data() {
    return {
      timerCount: 0,
    };
  },
  computed: {
    finishes: function (): string {
      return dayjs.unix(this.exp).format("h:mm A");
    },
    finishWord: function (): string {
      if (this.expired) {
        return "finished";
      } else {
        return "finishes";
      }
    },
    expired: function (): boolean {
      return this.timerCount < 1;
    },
    ago: function (): number {
      return this.timerCount * -1;
    },
  },
  watch: {
    exp(is: bigint, was: bigint) {
      this.timerCount = this.exp - dayjs().unix();
    },
    //https://stackoverflow.com/questions/55773602/how-do-i-create-a-simple-10-seconds-countdown-in-vue-js
    timerCount: {
      handler(value) {
        setTimeout(() => {
          this.timerCount--;
        }, 1000);
      },
      immediate: true, // This ensures the watcher is triggered upon creation
    },
  },
});
