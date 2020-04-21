/**
 * EmojiCipher-JS
 * Copyright (c) 2020 Alec Bush
 * Version: 0.1.0
 * Licensed under the MIT License (http://opensource.org/licenses/MIT)
 */

(function () {

    const EmojiCipher = function (keyArg = 0) {

        const key = (() => {
            if (typeof keyArg === 'number') {
                return [Math.floor(keyArg) % 256];
            }
            else if (typeof keyArg === 'string' && keyArg.length > 0) {
                let keyMod = 1;
                return Array.from(new TextEncoder().encode(keyArg))
                    .map(keyVal => {
                        keyMod = ((31 * keyMod) + keyVal) % 256;
                        return keyMod;
                    });
            }
            return [0];
        })();
    
        const getKeyVal = pos => key[pos % key.length];
    
        const emojis = (() => {
            function *intRange(start, end) {
                for (let i = start; i <= end; i++) {
                    yield i;
                }
            }
            const emojiCodePoints = [].concat(
                [...intRange(128000, 128317)],
                [...intRange(128512, 128519)],
                [...intRange(129296, 129338)],
                [...intRange(129351, 129387)],
                [...intRange(129408, 129431)],
                [...intRange(129488, 129510)]
            );
            for (let idx = emojiCodePoints.length - 1; idx > 0; idx--) {
                const newIdx = Math.floor((getKeyVal(idx) % 0.9) * idx);
                [emojiCodePoints[idx], emojiCodePoints[newIdx]] = 
                [emojiCodePoints[newIdx], emojiCodePoints[idx]];
            }
            return emojiCodePoints;
        })();
    
        const cipher = (array, toUint8, transformOutput) => {
            let keyMod = 1;
            return array.map((val, idx) => {
                keyMod = ((31 * keyMod) + getKeyVal(idx)) % 256;
                return transformOutput(toUint8(val) ^ keyMod);
            });
        };
    
        const emojiCipher = { 
            encode: str => {
                return cipher(
                    Array.from(new TextEncoder().encode(str)), 
                    val => val,
                    val => String.fromCodePoint(emojis[val])
                ).join('');
            },
            decode: str => {
                return new TextDecoder().decode(
                    Uint8Array.from(
                        cipher(
                            [...str],
                            val => {
                                const codePointIndex = emojis.indexOf(val.codePointAt(0));
                                return (codePointIndex >= 0) ? codePointIndex : 0;
                            },
                            val => val
                        )
                    )
                );
            }
        }
    
        return emojiCipher;
    };
    
    if (typeof define === 'function' && define.amd) {
        define([], function() {
            return EmojiCipher;
        });
    } else {
        window.EmojiCipher = EmojiCipher;
    }

})();
