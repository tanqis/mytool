// 根级别的action
export default {
  data() {
    return {
      increment(context) {
        context.commit('increment');
      },
      increment2(context) {
        context.commit('increment2');
      },
    }
  }
}
