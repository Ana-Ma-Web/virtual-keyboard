const data = {
  isCaps: false,
  isShift: false,
  isRightShift: false,
  isRightAlt: false,
  isBackquote: false,
  isShiftBackquote: false,
  isQuote: false,
  isAltQuote: false,
  isAltBackslash: false,
  lang: localStorage.getItem('lang') ? localStorage.getItem('lang') : 'en',
  textareaValue: '',
  currentSelection: 0,
  icelandic: [
    {
      code: 'Backquote',
      key: '°',
      shiftKey: '¨',
    },
    {
      code: 'Digit1',
      key: '1',
      shiftKey: '!',
    },
    {
      code: 'Digit2',
      key: '2',
      shiftKey: '"',
    },
    {
      code: 'Digit3',
      key: '3',
      shiftKey: '#',
    },
    {
      code: 'Digit4',
      key: '4',
      shiftKey: '$',
    },
    {
      code: 'Digit5',
      key: '5',
      shiftKey: '%',
      rightAlt: '€',
    },
    {
      code: 'Digit6',
      key: '6',
      shiftKey: '&',
    },
    {
      code: 'Digit7',
      key: '7',
      shiftKey: '/',
      rightAlt: '€',
    },
    {
      code: 'Digit8',
      key: '8',
      shiftKey: '¨',
      rightAlt: '{',
    },
    {
      code: 'Digit9',
      key: '9',
      shiftKey: ')',
      rightAlt: ']',
    },
    {
      code: 'Digit0',
      key: '0',
      shiftKey: '=',
      rightAlt: '}',
    },
    {
      code: 'Minus',
      key: 'ö',
      capsKey: 'Ö',
      rightAlt: '&#92',
    },
    {
      code: 'Equal',
      key: '-',
      shiftKey: '_',
    },
    {
      code: 'Backspace',
      key: 'Backspace',
    },
    {
      code: 'Tab',
      key: 'Tab',
    },
    {
      code: 'KeyQ',
      key: 'q',
      capsKey: 'Q',
      rightAlt: '@',
    },
    {
      code: 'KeyW',
      key: 'w',
      capsKey: 'W',
    },
    {
      code: 'KeyE',
      key: 'e',
      capsKey: 'E',
      rightAlt: '€',
      shiftBackquote: 'ë',
      shiftBackquoteShift: 'Ë',
      quote: 'é',
      quoteShift: 'É',
      altQuote: 'ê',
      altQuoteShift: 'Ê',
      altBackslash: 'è',
      altBackslashShift: 'È',
    },
    {
      code: 'KeyR',
      key: 'r',
      capsKey: 'R',
    },
    {
      code: 'KeyT',
      key: 't',
      capsKey: 'T',
    },
    {
      code: 'KeyY',
      key: 'y',
      capsKey: 'Y',
      shiftBackquote: 'ÿ',
      shiftBackquoteShift: 'Ÿ',
      quote: 'ý',
      quoteShift: 'Ý',
    },
    {
      code: 'KeyU',
      key: 'u',
      capsKey: 'U',
      shiftBackquote: 'ü',
      shiftBackquoteShift: 'Ü',
      quote: 'ú',
      quoteShift: 'Ú',
      altQuote: 'û',
      altQuoteShift: 'Û',
      altBackslash: 'ù',
      altBackslashShift: 'Ù',
    },
    {
      code: 'KeyI',
      key: 'i',
      capsKey: 'I',
      shiftBackquote: 'ï',
      shiftBackquoteShift: 'Ï',
      quote: 'í',
      quoteShift: 'Í',
      altQuote: 'î',
      altQuoteShift: 'Î',
      altBackslash: 'ì',
      altBackslashShift: 'Ì',
    },
    {
      code: 'KeyO',
      key: 'o',
      capsKey: 'O',
      shiftBackquote: 'ö',
      shiftBackquoteShift: 'Ö',
      quote: 'ó',
      quoteShift: 'Ó',
      altQuote: 'ô',
      altQuoteShift: 'Ô',
      altBackslash: 'ò',
      altBackslashShift: 'Ò',
    },
    {
      code: 'KeyP',
      key: 'p',
      capsKey: 'P',
    },
    {
      code: 'BracketLeft',
      key: 'ð',
      capsKey: 'Ð',
    },
    {
      code: 'BracketRight',
      key: "'",
      shiftKey: '?',
      rightAlt: '~',
    },
    {
      code: 'Backslash',
      key: '+',
      shiftKey: '*',
      rightAlt: '`',
    },
    {
      code: 'Delete',
      key: 'Del',
    },
    {
      code: 'CapsLock',
      key: 'CapsLock',
    },
    {
      code: 'KeyA',
      key: 'a',
      capsKey: 'A',
      backquote: 'å',
      backquoteShift: 'Å',
      shiftBackquote: 'ä',
      shiftBackquoteShift: 'Ä',
      quote: 'á',
      quoteShift: 'Á',
      altQuote: 'â',
      altQuoteShift: 'Â',
      altBackslash: 'à',
      altBackslashShift: 'À',
    },
    {
      code: 'KeyS',
      key: 's',
      capsKey: 'S',
    },
    {
      code: 'KeyD',
      key: 'd',
      capsKey: 'D',
    },
    {
      code: 'KeyF',
      key: 'f',
      capsKey: 'F',
    },
    {
      code: 'KeyG',
      key: 'g',
      capsKey: 'G',
    },
    {
      code: 'KeyH',
      key: 'h',
      capsKey: 'H',
    },
    {
      code: 'KeyJ',
      key: 'j',
      capsKey: 'J',
    },
    {
      code: 'KeyK',
      key: 'k',
      capsKey: 'K',
    },
    {
      code: 'KeyL',
      key: 'l',
      capsKey: 'L',
    },
    {
      code: 'Semicolon',
      key: 'æ',
      capsKey: 'Æ',
    },
    {
      code: 'Quote',
      key: '&#180;',
      shiftKey: "'",
      rightAlt: '^',
    },
    {
      code: 'Enter',
      key: 'Enter',
    },
    {
      code: 'ShiftLeft',
      key: 'Shift',
    },
    {
      code: 'KeyZ',
      key: 'z',
      capsKey: 'Z',
    },
    {
      code: 'KeyX',
      key: 'x',
      capsKey: 'X',
    },
    {
      code: 'KeyC',
      key: 'c',
      capsKey: 'C',
    },
    {
      code: 'KeyV',
      key: 'v',
      capsKey: 'V',
    },
    {
      code: 'KeyB',
      key: 'b',
      capsKey: 'B',
    },
    {
      code: 'KeyN',
      key: 'n',
      capsKey: 'N',
    },
    {
      code: 'KeyM',
      key: 'm',
      capsKey: 'M',
      rightAlt: 'µ',
    },
    {
      code: 'Comma',
      key: ',',
      shiftKey: ';',
    },
    {
      code: 'Period',
      key: '.',
      shiftKey: ':',
    },
    {
      code: 'Slash',
      key: 'þ',
      capsKey: 'Þ',
    },
    {
      code: 'ArrowUp',
      key: '&uarr;',
    },
    {
      code: 'ShiftRight',
      key: 'Shift',
    },
    {
      code: 'ControlLeft',
      key: 'Ctrl',
    },
    {
      code: 'MetaLeft',
      key: 'Win',
    },
    {
      code: 'AltLeft',
      key: 'Alt',
    },
    {
      code: 'Space',
      key: ' ',
    },
    {
      code: 'AltRight',
      key: 'Alt',
    },
    {
      code: 'ArrowLeft',
      key: '&larr;',
    },
    {
      code: 'ArrowDown',
      key: '&darr;',
    },
    {
      code: 'ArrowRight',
      key: '&rarr;',
    },
    {
      code: 'ControlRight',
      key: 'Ctrl',
    },
  ],
  english: [
    {
      code: 'Backquote',
      key: '`',
      shiftKey: '~',
    },
    {
      code: 'Digit1',
      key: '1',
      shiftKey: '!',
    },
    {
      code: 'Digit2',
      key: '2',
      shiftKey: '@',
    },
    {
      code: 'Digit3',
      key: '3',
      shiftKey: '#',
    },
    {
      code: 'Digit4',
      key: '4',
      shiftKey: '$',
    },
    {
      code: 'Digit5',
      key: '5',
      shiftKey: '%',
    },
    {
      code: 'Digit6',
      key: '6',
      shiftKey: '^',
    },
    {
      code: 'Digit7',
      key: '7',
      shiftKey: '&',
    },
    {
      code: 'Digit8',
      key: '8',
      shiftKey: '*',
    },
    {
      code: 'Digit9',
      key: '9',
      shiftKey: '(',
    },
    {
      code: 'Digit0',
      key: '0',
      shiftKey: ')',
    },
    {
      code: 'Minus',
      key: '-',
      shiftKey: '_',
    },
    {
      code: 'Equal',
      key: '=',
      shiftKey: '+',
    },
    {
      code: 'Backspace',
      key: 'Backspace',
    },
    {
      code: 'Tab',
      key: 'Tab',
    },
    {
      code: 'KeyQ',
      key: 'q',
      capsKey: 'Q',
    },
    {
      code: 'KeyW',
      key: 'w',
      capsKey: 'W',
    },
    {
      code: 'KeyE',
      key: 'e',
      capsKey: 'E',
    },
    {
      code: 'KeyR',
      key: 'r',
      capsKey: 'R',
    },
    {
      code: 'KeyT',
      key: 't',
      capsKey: 'T',
    },
    {
      code: 'KeyY',
      key: 'y',
      capsKey: 'Y',
    },
    {
      code: 'KeyU',
      key: 'u',
      capsKey: 'U',
    },
    {
      code: 'KeyI',
      key: 'i',
      capsKey: 'I',
    },
    {
      code: 'KeyO',
      key: 'o',
      capsKey: 'O',
    },
    {
      code: 'KeyP',
      key: 'p',
      capsKey: 'P',
    },
    {
      code: 'BracketLeft',
      key: '[',
      shiftKey: '{',
    },
    {
      code: 'BracketRight',
      key: ']',
      shiftKey: '}',
    },
    {
      code: 'Backslash',
      key: '&#92',
      shiftKey: '|',
    },
    {
      code: 'Delete',
      key: 'Del',
    },
    {
      code: 'CapsLock',
      key: 'CapsLock',
    },
    {
      code: 'KeyA',
      key: 'a',
      capsKey: 'A',
    },
    {
      code: 'KeyS',
      key: 's',
      capsKey: 'S',
    },
    {
      code: 'KeyD',
      key: 'd',
      capsKey: 'D',
    },
    {
      code: 'KeyF',
      key: 'f',
      capsKey: 'F',
    },
    {
      code: 'KeyG',
      key: 'g',
      capsKey: 'G',
    },
    {
      code: 'KeyH',
      key: 'h',
      capsKey: 'H',
    },
    {
      code: 'KeyJ',
      key: 'j',
      capsKey: 'J',
    },
    {
      code: 'KeyK',
      key: 'k',
      capsKey: 'K',
    },
    {
      code: 'KeyL',
      key: 'l',
      capsKey: 'L',
    },
    {
      code: 'Semicolon',
      key: ';',
      shiftKey: ':',
    },
    {
      code: 'Quote',
      key: "'",
      shiftKey: '"',
    },
    {
      code: 'Enter',
      key: 'Enter',
    },
    {
      code: 'ShiftLeft',
      key: 'Shift',
    },
    {
      code: 'KeyZ',
      key: 'z',
      capsKey: 'Z',
    },
    {
      code: 'KeyX',
      key: 'x',
      capsKey: 'X',
    },
    {
      code: 'KeyC',
      key: 'c',
      capsKey: 'C',
    },
    {
      code: 'KeyV',
      key: 'v',
      capsKey: 'V',
    },
    {
      code: 'KeyB',
      key: 'b',
      capsKey: 'B',
    },
    {
      code: 'KeyN',
      key: 'n',
      capsKey: 'N',
    },
    {
      code: 'KeyM',
      key: 'm',
      capsKey: 'M',
    },
    {
      code: 'Comma',
      key: ',',
      shiftKey: '<',
    },
    {
      code: 'Period',
      key: '.',
      shiftKey: '>',
    },
    {
      code: 'Slash',
      key: '/',
      shiftKey: '?',
    },
    {
      code: 'ArrowUp',
      key: '&uarr;',
    },
    {
      code: 'ShiftRight',
      key: 'Shift',
    },
    {
      code: 'ControlLeft',
      key: 'Ctrl',
    },
    {
      code: 'MetaLeft',
      key: 'Win',
    },
    {
      code: 'AltLeft',
      key: 'Alt',
    },
    {
      code: 'Space',
      key: ' ',
    },
    {
      code: 'AltRight',
      key: 'Alt',
    },
    {
      code: 'ArrowLeft',
      key: '&larr;',
    },
    {
      code: 'ArrowDown',
      key: '&darr;',
    },
    {
      code: 'ArrowRight',
      key: '&rarr;',
    },
    {
      code: 'ControlRight',
      key: 'Ctrl',
    },
  ],
};

class Key {
  constructor(obj) {
    this.code = obj.code;
    this.key = obj.key;
    this.capsKey = obj.capsKey;
    this.shiftKey = obj.shiftKey;
    this.rightAlt = obj.rightAlt;
    this.backquote = obj.backquote;
    this.backquoteShift = obj.backquoteShift;
    this.shiftBackquote = obj.shiftBackquote;
    this.shiftBackquoteShift = obj.shiftBackquoteShift;
    this.quote = obj.quote;
    this.quoteShift = obj.quoteShift;
    this.altQuote = obj.altQuote;
    this.altQuoteShift = obj.altQuoteShift;
    this.altBackslash = obj.altBackslash;
    this.altBackslashShift = obj.altBackslashShift;
  }

  generateKey() {
    let template = '';
    const key = document.createElement('div');
    key.className = 'key';

    key.setAttribute('data-code', this.code);

    template += `<button class="key__button">
        <div class="key__bg key__bg_primary"></div>
        <div class="key__bg key__bg_active"></div>
        <span class="key__text"></span>
        </button>`;

    key.innerHTML = template;
    return key;
  }
}

const renderWrapper = () => {
  const wrapper = `<div class="wrapper">
    <div class="main">
      <div class="text-wrapper block">
        <div class="textboard">
          <textarea 
          class="textboard__text-area" 
          name="text" 
          cols="72" 
          rows="4">Þat mælti mín móðir: at mér skyldi kaupa</textarea>
        </div>  
      </div>  
      <div class="keyboard block" data-lang="${data.lang}"></div>
      <div class="info block">
        Клавиатура сделана на Windows. Сменить язык: Shift + Ctrl <br>
        <span>Внимание!</span><br>
        Из-за большого количества вариантов букв исландская раскладка работает 
        немного необычно<br> 
        Ключевые кнопки <span> ° </span>, <span> ´ </span>, <span> ^ </span> 
        и некоторые их варианты c Shift и AltRight добавляют модификации<br>
        С их помощью можно написать разные веселые буквы, 
        например <span> å ü ò ý ê </span>
      </div>
    </div>  
  </div>`;
  document.body.innerHTML = wrapper;
};

const updateChar = (code, index) => {
  const langList = (data.lang === 'ice') ? data.icelandic : data.english;
  const key = langList[index];
  let newChar = key?.key;

  const defaultCharChange = () => {
    if (data.isBackquote) {
      newChar = key.backquote ? key.backquote : newChar;
    }
    if (data.isShiftBackquote) {
      newChar = key.shiftBackquote ? key.shiftBackquote : newChar;
      if (key.code === 'Backquote') {
        newChar = key.shiftKey;
      }
    }
    if (data.isQuote) {
      newChar = key.quote ? key.quote : newChar;
    }
    if (data.isAltQuote) {
      newChar = key.altQuote ? key.altQuote : newChar;
      if (key.code === 'Quote') {
        newChar = key.rightAlt;
      }
    }
    if (data.isAltBackslash) {
      newChar = key.altBackslash ? key.altBackslash : newChar;
      if (key.code === 'Backslash') {
        newChar = key.rightAlt;
      }
    }
  };

  const changeLetterToCaps = () => {
    if (!data.isShift && !data.isRightShift) {
      newChar = key.capsKey ? key.capsKey : newChar;
      if (data.isBackquote) {
        newChar = key.backquoteShift ? key.backquoteShift : newChar;
      }
      if (data.isShiftBackquote) {
        newChar = key.shiftBackquoteShift ? key.shiftBackquoteShift : newChar;
      }
      if (data.isQuote) {
        newChar = key.quoteShift ? key.quoteShift : newChar;
      }
      if (data.isAltQuote) {
        newChar = key.altQuoteShift ? key.altQuoteShift : newChar;
      }
      if (data.isAltBackslash) {
        newChar = key.altBackslashShift ? key.altBackslashShift : newChar;
      }
    }
  };

  const changeCharToShift = () => {
    newChar = key.shiftKey ? key.shiftKey : newChar;
    if (!data.isCaps) {
      newChar = key.capsKey ? key.capsKey : newChar;
    }
    if (data.isBackquote) {
      if (key.code === 'Backquote') {
        newChar = key.key;
      } else {
        newChar = key.backquoteShift ? key.backquoteShift : newChar;
      }
    }
    if (data.isShiftBackquote) {
      newChar = key.shiftBackquoteShift ? key.shiftBackquoteShift : newChar;
      if (key.code === 'Backquote') {
        newChar = key.shiftKey;
      }
    }
    if (data.isQuote) {
      if (key.code === 'Quote') {
        newChar = key.key;
      } else {
        newChar = key.quoteShift ? key.quoteShift : newChar;
      }
    }
    if (data.isAltQuote) {
      if (key.code === 'Quote') {
        newChar = key.rightAlt;
      } else {
        newChar = key.altQuoteShift ? key.altQuoteShift : newChar;
      }
    }
    if (data.isAltBackslash) {
      if (key.code === 'Backslash') {
        newChar = key.rightAlt;
      } else {
        newChar = key.altBackslashShift ? key.altBackslashShift : newChar;
      }
    }
  };

  const changeCharToRightAlt = () => {
    if (data.isQuote) {
      if (key.code === 'Quote') {
        newChar = key.key;
      } else {
        newChar = key.rightAlt ? key.rightAlt : newChar;
      }
    } else {
      newChar = key.rightAlt ? key.rightAlt : newChar;
    }
  };

  defaultCharChange();

  if (data.isCaps) {
    changeLetterToCaps();
  }
  if (data.isShift || data.isRightShift) {
    changeCharToShift();
  }
  if (data.isRightAlt) {
    changeCharToRightAlt();
  }

  return newChar;
};

const highlightUpdate = (node) => {
  const parent = node.closest('.key');
  const { code } = parent.dataset;
  if (code === 'Backquote') {
    if (data.isBackquote || data.isShiftBackquote) {
      if (!parent.classList.contains('key_active')) {
        parent.classList.add('key_active');
      }
    } else if (parent.classList.contains('key_active')) {
      parent.classList.remove('key_active');
    }
  }
  if (code === 'Quote') {
    if (data.isQuote || data.isAltQuote) {
      parent.classList.add('key_active');
    } else {
      parent.classList.remove('key_active');
    }
  }
  if (code === 'Backslash') {
    if (data.isAltBackslash) {
      parent.classList.add('key_active');
    } else {
      parent.classList.remove('key_active');
    }
  }
  if (code === 'CapsLock') {
    if (data.isCaps) {
      parent.classList.add('key_active');
    } else {
      parent.classList.remove('key_active');
    }
  }
};

const updateKeyboard = (code) => {
  const keys = document.querySelectorAll('.key__text');
  for (let i = 0; i < keys.length; i += 1) {
    const currentChar = keys[i].innerText;
    const newChar = updateChar(code, i);
    if (newChar !== currentChar) keys[i].innerHTML = newChar;
    highlightUpdate(keys[i]);
  }
};

const generateKeys = (arr) => {
  const keys = [];
  arr.forEach((e) => {
    keys.push(new Key(e));
  });
  return keys;
};

const renderKeyboard = () => {
  const arr = ((data.lang === 'ice')
    ? data.icelandic : data.english);
  const keyboard = document.querySelector('.keyboard');
  generateKeys(arr).forEach((e) => {
    if (e.code) {
      keyboard.append(e.generateKey());
    }
  });
};

const highlightKey = (event) => {
  const pressedKey = document.querySelector(`.key[data-code=${event.code}]`);
  pressedKey?.classList.add('key_active');
};

const resetIceMods = () => {
  data.isShiftBackquote = false;
  data.isAltBackslash = false;
  data.isAltQuote = false;
  data.isQuote = false;
  data.isBackquote = false;
};

const toggleIceMods = (code) => {
  if (data.lang === 'ice') {
    switch (code) {
      case 'Backquote':
        if (data.isShift || data.isRightShift) {
          data.isShiftBackquote = !data.isShiftBackquote;
          data.isAltBackslash = false;
          data.isAltQuote = false;
          data.isQuote = false;
          data.isBackquote = false;
        } else {
          data.isBackquote = !data.isBackquote;
          data.isShiftBackquote = false;
          data.isAltBackslash = false;
          data.isAltQuote = false;
          data.isQuote = false;
        }
        break;
      case 'Quote':
        if (data.isRightAlt) {
          data.isAltQuote = !data.isAltQuote;
          data.isShiftBackquote = false;
          data.isAltBackslash = false;
          data.isQuote = false;
          data.isBackquote = false;
        } else {
          data.isQuote = !data.isQuote;
          data.isShiftBackquote = false;
          data.isAltBackslash = false;
          data.isAltQuote = false;
          data.isBackquote = false;
        }
        break;
      case 'Backslash':
        if (data.isRightAlt) {
          data.isAltBackslash = !data.isAltBackslash;
          data.isShiftBackquote = false;
          data.isAltQuote = false;
          data.isQuote = false;
          data.isBackquote = false;
        }
        break;
      default:
        break;
    }
  }
};

const toggleLanguage = () => {
  if (data.lang === 'ice') {
    data.lang = 'en';
    document.querySelector('.keyboard').dataset.lang = 'en';
    localStorage.setItem('lang', 'en');
  } else if (data.lang === 'en') {
    data.lang = 'ice';
    document.querySelector('.keyboard').dataset.lang = 'ice';
    localStorage.setItem('lang', 'ice');
  }
  data.isShiftBackquote = false;
  data.isAltBackslash = false;
  data.isAltQuote = false;
  data.isQuote = false;
  data.isBackquote = false;
};

const toggleCaps = (e) => {
  if (e.code === 'CapsLock') {
    data.isCaps = !data.isCaps;
  }
  if (e.code === 'ControlLeft') {
    if (e.getModifierState('Shift')) {
      toggleLanguage();
    }
  }
};

const rightAltOn = (code) => {
  if (code === 'AltRight') {
    if (!data.isRightAlt) {
      data.isRightAlt = true;
    }
  }
};

const rightAltOff = (code) => {
  if (code === 'AltRight') {
    if (data.isRightAlt) {
      data.isRightAlt = false;
    }
  }
};

const shiftOn = (e) => {
  if (e.code === 'ShiftLeft') {
    if (e.getModifierState('Control')) {
      toggleLanguage();
    }
    if (!data.isShift && !data.isRightShift) {
      data.isShift = true;
    }
  } else if (e.code === 'ShiftRight') {
    if (!data.isShift && !data.isRightShift) {
      data.isRightShift = true;
    }
  }
};

const shiftOff = (e) => {
  if (e.code === 'ShiftLeft') {
    if (data.isShift) {
      data.isShift = false;
    }
  } else if (e.code === 'ShiftRight') {
    if (data.isRightShift) {
      data.isRightShift = false;
    }
  } else if (e.code === 'AltRight') {
    if (data.isRightAlt) {
      data.isRightAlt = false;
    }
  }
};

const turnOffKey = (e) => {
  if (e.code !== 'CapsLock'
    && e.code !== 'Backquote'
    && e.code !== 'Quote'
    && e.code !== 'Backslash') {
    const pressedKey = document.querySelector(`.key[data-code=${e.code}]`);
    pressedKey?.classList.remove('key_active');
  }
};

const findEnterPositionsInTextarea = () => {
  let prevRowLength = 0;
  let nextRowLength = 0;
  let prevPrevPosition = 0;
  let prevPosition = 0;
  let nextPosition = 0;
  let nextNextPosition = 0;
  const currentPosition = data.currentSelection;
  const string = data.textareaValue;

  let pos = 0;
  const trueForEslint = true;
  while (trueForEslint) {
    const foundPos = string.indexOf('\n', pos);
    if (foundPos === -1 || nextPosition) break;
    if (foundPos < currentPosition) {
      prevPrevPosition = prevPosition > 0 ? prevPosition : 0;
      prevPosition = foundPos;
      prevRowLength = prevPosition - prevPrevPosition - 1;
      if (!prevPrevPosition) {
        prevRowLength += 1;
      }
    } else nextPosition = foundPos;

    pos = foundPos + 1;
  }
  if (string.indexOf('\n', pos) > 0) {
    nextNextPosition = string.indexOf('\n', pos);
  }
  if ((nextNextPosition - nextPosition) > 0) {
    nextRowLength = nextNextPosition - nextPosition - 1;
  }
  return {
    prevPosition,
    nextPosition,
    prevRowLength,
    nextRowLength,
    nextNextPosition,
  };
};

const moveTextCursor = (direction) => {
  const textarea = document.querySelector('.textboard__text-area');
  const currentPosition = data.currentSelection;
  const {
    prevPosition,
    nextPosition,
    prevRowLength,
    nextRowLength,
    nextNextPosition,
  } = findEnterPositionsInTextarea();
  switch (direction) {
    case 'ArrowUp':
      if ((currentPosition - 1 - prevPosition) > prevRowLength) {
        if (prevPosition) data.currentSelection = prevPosition;
      } else {
        data.currentSelection = currentPosition - prevRowLength - 1;
      }
      break;
    case 'ArrowDown':
      if (nextRowLength < (currentPosition - prevPosition)) {
        if (nextNextPosition > 0) {
          data.currentSelection = nextNextPosition;
        } else if (nextPosition > 0) {
          const nextSelection = currentPosition - prevPosition + nextPosition;
          if (nextSelection > textarea.value.length) {
            data.currentSelection = textarea.value.length;
          } else {
            data.currentSelection = currentPosition - prevPosition + nextPosition;
          }
        }
      } else {
        data.currentSelection = currentPosition - prevPosition + nextPosition;
        if (!prevPosition) data.currentSelection += 1;
      }
      break;
    case 'ArrowLeft':
      data.currentSelection -= 1;
      break;
    case 'ArrowRight':
      data.currentSelection += 1;
      break;
    default:
      break;
  }
  textarea.selectionStart = data.currentSelection;
  textarea.selectionEnd = data.currentSelection;
};

const textareaReset = () => {
  const textarea = document.querySelector('.textboard__text-area');
  textarea.autofocus = true;
  textarea.value = '';
};
const textareaUpdate = () => {
  const textarea = document.querySelector('.textboard__text-area');
  textarea.value = data.textareaValue;
};

const textareaInput = (char, place) => {
  const node = document.createElement('div');
  const textArr = data.textareaValue.split('');

  if (char === 'Tab') {
    node.innerHTML = '&#9;';
  } else {
    node.innerHTML = char;
  }
  textArr.splice(place, 0, node.innerText);
  data.textareaValue = textArr.join('');
};

const deleteCharInTextarea = (isBack) => {
  const textarea = document.querySelector('.textboard__text-area');
  const currentSelectionStart = data.currentSelection;
  const textArr = data.textareaValue.split('');

  if (isBack && textarea.selectionStart > 0) {
    textArr.splice(textarea.selectionStart - 1, 1);
    data.textareaValue = textArr.join('');
    textareaUpdate();

    data.currentSelection = currentSelectionStart - 1;
    textarea.selectionStart = data.currentSelection;
    textarea.selectionEnd = data.currentSelection;
  } else if (!isBack) {
    textArr.splice(textarea.selectionStart, 1);
    data.textareaValue = textArr.join('');
    textareaUpdate();

    data.currentSelection = currentSelectionStart;
    textarea.selectionStart = data.currentSelection;
    textarea.selectionEnd = data.currentSelection;
  }
};

const printCharToTextarea = (code) => {
  const textarea = document.querySelector('.textboard__text-area');
  const currentSelectionStart = data.currentSelection;

  const keyArr = data.lang === 'ice' ? data.icelandic : data.english;
  let index = -1;
  keyArr.forEach((el, i) => {
    if (el.code === code) index = i;
  });

  if (index !== -1) {
    const char = updateChar(code, index);

    textareaInput(char, data.currentSelection);
    textareaUpdate();
    data.currentSelection = currentSelectionStart + 1;
    textarea.selectionStart = data.currentSelection;
    textarea.selectionEnd = data.currentSelection;
  }
};

const textareaInputHandler = (code) => {
  const textarea = document.querySelector('.textboard__text-area');
  const currentSelectionStart = data.currentSelection;

  if (
    code !== 'CapsLock'
    && code !== 'ShiftLeft'
    && code !== 'ShiftRight'
    && code !== 'ControlLeft'
    && code !== 'MetaLeft'
    && code !== 'AltLeft'
    && code !== 'AltRight'
    && code !== 'ControlRight') {
    if (code === 'Backquote') {
      if (data.lang === 'ice') {
        if (data.isAltBackslash) {
          if (data.isRightAlt) {
            printCharToTextarea('Backslash');
            printCharToTextarea(code);
          } else {
            rightAltOn('AltRight');
            printCharToTextarea('Backslash');
            rightAltOff('AltRight');
            printCharToTextarea(code);
          }
          resetIceMods();
        } else if (data.isAltQuote) {
          printCharToTextarea('Quote');
          printCharToTextarea(code);
          resetIceMods();
        } else if (data.isQuote) {
          printCharToTextarea('Quote');
          printCharToTextarea(code);
          resetIceMods();
        } else if (data.isBackquote) {
          printCharToTextarea(code);
          toggleIceMods(code);
          printCharToTextarea(code);
          resetIceMods();
        } else if (data.isShiftBackquote) {
          printCharToTextarea(code);
          toggleIceMods(code);
          printCharToTextarea(code);
          resetIceMods();
        } else {
          toggleIceMods(code);
        }
      } else {
        printCharToTextarea(code);
      }
    } else if (code === 'Backslash') {
      if (data.lang === 'ice') {
        if (data.isRightAlt) {
          if (data.isAltBackslash) {
            printCharToTextarea(code);
            toggleIceMods(code);
            printCharToTextarea(code);
            resetIceMods();
          } else if (data.isBackquote) {
            printCharToTextarea('Backquote');
            printCharToTextarea(code);
            resetIceMods();
          } else if (data.isShiftBackquote) {
            shiftOn('ShiftLeft');
            printCharToTextarea('Backquote');
            shiftOff('ShiftLeft');
            printCharToTextarea(code);
            resetIceMods();
          } else if (data.isQuote) {
            printCharToTextarea('Quote');
            printCharToTextarea(code);
            resetIceMods();
          } else if (data.isAltQuote) {
            printCharToTextarea('Quote');
            printCharToTextarea(code);
            resetIceMods();
          } else {
            toggleIceMods(code);
          }
        } else if (data.isAltBackslash) {
          printCharToTextarea(code);
          resetIceMods();
          printCharToTextarea(code);
        } else {
          printCharToTextarea(code);
        }
      } else {
        printCharToTextarea(code);
      }
    } else if (code === 'Quote') {
      if (data.lang === 'ice') {
        if (data.isBackquote) {
          printCharToTextarea('Backquote');
          printCharToTextarea(code);
          resetIceMods();
        } else if (data.isShiftBackquote) {
          shiftOn('ShiftLeft');
          printCharToTextarea('Backquote');
          shiftOff('ShiftLeft');
          printCharToTextarea(code);
          resetIceMods();
        } else if (data.isAltBackslash) {
          if (data.isRightAlt) {
            printCharToTextarea('Backslash');
            printCharToTextarea(code);
          } else {
            rightAltOn('AltRight');
            printCharToTextarea('Backslash');
            rightAltOff('AltRight');
            printCharToTextarea(code);
          }
          resetIceMods();
        } else if (data.isQuote) {
          if (data.isRightAlt) {
            printCharToTextarea(code);
            toggleIceMods(code);
            printCharToTextarea(code);
            resetIceMods();
          } else {
            printCharToTextarea(code);
            printCharToTextarea(code);
            resetIceMods();
          }
        } else if (data.isAltQuote) {
          if (data.isRightAlt) {
            printCharToTextarea(code);
            printCharToTextarea(code);
          } else {
            printCharToTextarea(code);
            toggleIceMods(code);
            printCharToTextarea(code);
          }
          resetIceMods();
        } else {
          toggleIceMods(code);
        }
      } else {
        printCharToTextarea(code);
      }
    } else if (code === 'Space') {
      if (data.lang === 'ice') {
        if (data.isAltBackslash) {
          if (data.isRightAlt) {
            printCharToTextarea('Backslash');
          } else {
            rightAltOn('AltRight');
            printCharToTextarea('Backslash');
            rightAltOff('AltRight');
          }
        } else if (data.isBackquote) {
          printCharToTextarea('Backquote');
        } else if (data.isShiftBackquote) {
          shiftOn('ShiftLeft');
          printCharToTextarea('Backquote');
          shiftOff('ShiftLeft');
        } else if (data.isQuote) {
          printCharToTextarea('Quote');
        } else if (data.isAltQuote) {
          rightAltOn('AltRight');
          printCharToTextarea('Quote');
          rightAltOff('AltRight');
        } else {
          printCharToTextarea(code);
        }
        resetIceMods();
      } else {
        printCharToTextarea(code);
      }
    } else if (code === 'Enter') {
      textareaInput('\n', textarea.selectionStart);
      textareaUpdate();
      data.currentSelection = currentSelectionStart + 1;
      textarea.selectionStart = data.currentSelection;
      textarea.selectionEnd = data.currentSelection;
    } else if (code === 'Delete') {
      deleteCharInTextarea(false);
    } else if (code === 'Backspace') {
      deleteCharInTextarea(true);
    } else if (code === 'ArrowUp'
      || code === 'ArrowLeft'
      || code === 'ArrowDown'
      || code === 'ArrowRight'
    ) {
      moveTextCursor(code);
    } else {
      printCharToTextarea(code);
      resetIceMods();
    }
  }
};

const keyClickHandler = () => {
  const doc = document.body;
  doc.addEventListener('keydown', (e) => {
    e.preventDefault();
    toggleCaps(e);
    shiftOn(e);
    rightAltOn(e.code);
    highlightKey(e);
    textareaInputHandler(e.code);
    updateKeyboard(e.code);
  });

  doc.addEventListener('keyup', (e) => {
    e.preventDefault();
    shiftOff(e);
    rightAltOff(e.code);
    updateKeyboard(e.code);
    turnOffKey(e);
  });
};

const mouseClickHandler = () => {
  const textarea = document.querySelector('.textboard__text-area');
  document.body.addEventListener('click', (e) => {
    if (e.target.closest('.key')?.dataset.code) {
      const { code } = e.target.closest('.key').dataset;
      e.code = code;

      toggleCaps(e);
      textareaInputHandler(code);
      updateKeyboard(code);
    } else {
      data.currentSelection = textarea.selectionStart;
    }
    textarea.focus();
  });

  document.body.addEventListener('mousedown', (e) => {
    const parent = e.target.closest('.key');
    if (parent?.dataset?.code) {
      const { code } = parent.dataset;

      e.code = code;
      shiftOn(e);
      rightAltOn(e.code);
      updateKeyboard(e.code);
    }
    textarea.focus();
  });

  document.body.addEventListener('mouseup', (e) => {
    const parent = e.target.closest('.key');
    if (parent?.dataset?.code) {
      const { code } = parent.dataset;

      e.code = code;
      shiftOff(e);
      rightAltOff(e.code);
      updateKeyboard(e.code);
    }
    textarea.focus();
  });
  textarea.focus();
};

const initKeyboard = () => {
  document.body.innerHTML = '';
  renderWrapper();
  renderKeyboard();
  updateKeyboard();
  textareaReset();
  textareaUpdate();
  keyClickHandler();
  mouseClickHandler();
};

window.onload = function start() {
  initKeyboard();
};
