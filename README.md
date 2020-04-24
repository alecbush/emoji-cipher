# EmojiCipher-JS
An emoji-based cipher written in less than 100 lines of JavaScript.

DISCLAIMER: this was written for fun and personal use. This is NOT intended to be a secure form of text encryption.

## Browser Requirements

[TextEncoder](https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder) and [TextDecoder](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder) support.

| Browser  | Supported Version |
|----------|-------------------|
| Chrome   | 38                |
| Edge     | ≤79               |
| Firefox  | 19                |
| IE       | No Support        |
| Opera    | 25                |
| Safari   | 10.1              |

View full compatibility for [TextEncoder](https://developer.mozilla.org/en-US/docs/Web/API/TextEncoder/#Browser_compatibility) and [TextDecoder](https://developer.mozilla.org/en-US/docs/Web/API/TextDecoder/#Browser_compatibility).

Polyfill is available [here](https://github.com/anonyco/FastestSmallestTextEncoderDecoder).

## Install 
### Include Script - HTML
```
<script src="emojiCipher.js" type="text/javascript"></script>
```
### Include Module - Node.js
```
const EmojiCipher = require('./emojiCipher')
```
## Usage

### Declare new EmojiCipher w/ Key
```
const emoji = new EmojiCipher('🤫shhh');
```

### Encode
```
const cipherText = emoji.encode('Hello, World! 😄');

// 🐔📘🐅🤞🧚💅🔡🦓📼🔲👵🤶🤦👣🤗🐪🐙🐩
```
### Decode
```
const plainText = emoji.decode(cipherText);

// Hello, World! 😄
```
