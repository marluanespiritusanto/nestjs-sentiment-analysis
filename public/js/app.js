const EMOJI = {
  sad: '😭',
  neutral: '😐',
  happy: '😃',
};

new Vue({
  el: '#app',
  data: {
    comments: [],
    enter_key: 13,
  },
  methods: {
    postComment(event) {
      const { value: comment } = event.target;

      if (event.keyCode === this.enter_key) {
        event.target.value = '';
        axios
          .post('/comment', { comment })
          .then(({ data }) => {
            const mood =
              data > 0 ? EMOJI.happy : data === 0 ? EMOJI.neutral : EMOJI.sad;

            this.comments.push({
              comment,
              mood,
            });
          })
          .catch(console.log);
      }
    },
  },
});
