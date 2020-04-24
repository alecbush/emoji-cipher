(function () {
        
    document.getElementById('encode').addEventListener('click', function () {
        cipher(true);
    });
    
    document.getElementById('decode').addEventListener('click', function () {
        cipher(false);
    });

    const cipher = encode => {

        const text = document.getElementById('text').value;
        const key = document.getElementById('key').value;
        
        document.getElementById('text').value = (() => {
            const emoji = new EmojiCipher(key);
            return encode ? emoji.encode(text) : emoji.decode(text);
        })();
    
        document.getElementById('key').value = '';
    };

})();
