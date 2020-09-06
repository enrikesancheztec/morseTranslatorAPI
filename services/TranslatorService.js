const { MorseCodeMessage } = require('./../model/MorseCodeMessage');

exports.translate = function (text) {
    var translation = '';
    
    for (var letterIndex in text) {
        let letterTranslation = morseMap.get(text[letterIndex].toUpperCase());
        if (letterTranslation != undefined) {
            translation += letterTranslation + "/";
        }
    }
    
    if (translation.endsWith('/')) {
        translation = translation.substring(0, translation.length - 1);
    }

    let morseCodeMessage = new MorseCodeMessage(text, translation);

    return morseCodeMessage;
};

let morseMap = new Map()
morseMap.set(' ', ' ');
morseMap.set('A', '.-');
morseMap.set('B', '-...');
morseMap.set('C', '-.-.');
morseMap.set('D', '-..');
morseMap.set('E', '.');
morseMap.set('F', '..-.');
morseMap.set('G', '--.');
morseMap.set('H', '....');
morseMap.set('I', '..');
morseMap.set('J', '.---');
morseMap.set('K', '-.-');
morseMap.set('L', '.-..');
morseMap.set('M', '--');
morseMap.set('N', '-.');
morseMap.set('O', '---');
morseMap.set('P', '.--.');
morseMap.set('Q', '--.-');
morseMap.set('R', '.-.');
morseMap.set('S', '...');
morseMap.set('T', '-');
morseMap.set('U', '..-');
morseMap.set('V', '...-');
morseMap.set('W', '.--');
morseMap.set('X', '-..-');
morseMap.set('Y', '-.--');
morseMap.set('Z', '--..');
morseMap.set('0', '-----');
morseMap.set('1', '.----');
morseMap.set('2', '..---');
morseMap.set('3', '...--');
morseMap.set('4', '....-');
morseMap.set('5', '.....');
morseMap.set('6', '-....');
morseMap.set('7', '--...');
morseMap.set('8', '---..');
morseMap.set('9', '----.');
