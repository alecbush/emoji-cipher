(function () {
        
    document.getElementById('encode').addEventListener('click', function () {
        cipher(true);
    });
    
    document.getElementById('decode').addEventListener('click', function () {
        cipher(false);
    });

    const cipher = encode => {

        const text = document.getElementById('text').value;
        
        const key = (() => {
            const keyArg = document.getElementById('key').value;
            if (keyArg.length !== 0 && !isNaN(keyArg)) {
                return parseInt(keyArg);
            }
            return keyArg;
        })();
    
        document.getElementById('text').value = (() => {
            const emoji = new EmojiCipher(key);
            return encode ? emoji.encode(text) : emoji.decode(text);
        })();
    
        document.getElementById('key').value = '';
    };

})();
