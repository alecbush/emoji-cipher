const app = new Vue({
    el: '#app',
    data: {
        text: '',
        key: ''
    },
    methods: {
        encode: function () {
            this.text = new EmojiCipher(this.key).encode(this.text);
            this.key = '';
        },
        decode: function () {
            this.text = new EmojiCipher(this.key).decode(this.text);
            this.key = '';
        }
    }
});
