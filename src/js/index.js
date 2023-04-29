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
  lang: 'ice',
  textareaValue: '',
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
      rightAlt: '"',
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
      <div class="textboard">
        <textarea 
        class="textboard__text-area" 
        name="text" 
        cols="72" 
        rows="4">Þat mælti mín móðir: at mér skyldi kaupa</textarea>
      </div>  
      <div class="keyboard" data-lang="${data.lang}"></div>
    </div>  
  </div>`;
  document.body.innerHTML = wrapper;
};

const updateChar = (code, index) => {
  const langList = (data.lang === 'ice') ? data.icelandic : data.english;
  const key = langList[index];
  let newChar = key.key;

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
    if (!data.isCaps) {
      newChar = key.shiftKey ? key.shiftKey : newChar;
      newChar = key.capsKey ? key.capsKey : newChar;
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
      case 'AltRight':
        if (!data.isRightAlt) {
          data.isRightAlt = true;
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
  } else if (data.lang === 'en') {
    data.lang = 'ice';
    document.querySelector('.keyboard').dataset.lang = 'ice';
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
  node.innerHTML = char;

  const textArr = data.textareaValue.split('');
  textArr.splice(place, 0, node.innerText);

  data.textareaValue = textArr.join('');
};

const deleteCharInTextarea = (isBack) => {
  const textarea = document.querySelector('.textboard__text-area');
  const currentSelectionStart = textarea.selectionStart;
  const textArr = data.textareaValue.split('');

  const count = isBack ? 1 : 0;

  textArr.splice(textarea.selectionStart - count, 1);

  data.textareaValue = textArr.join('');
  textareaUpdate();

  textarea.selectionStart = currentSelectionStart - count;
  textarea.selectionEnd = currentSelectionStart - count;
};

const textareaInputHandler = (code) => {
  const textarea = document.querySelector('.textboard__text-area');
  const currentSelectionStart = textarea.selectionStart;

  if (
    code !== 'Tab'
    && code !== 'CapsLock'
    && code !== 'ShiftLeft'
    && code !== 'ShiftRight'
    && code !== 'ControlLeft'
    && code !== 'MetaLeft'
    && code !== 'AltLeft'
    && code !== 'AltRight'
    && code !== 'ControlRight') {
    if (
      code === 'Backquote'
      && code === 'Backslash'
      && code === 'Quote'
    ) {

    } else if (code === 'Enter') {
      textareaInput('\n', textarea.selectionStart);
      textareaUpdate();
      textarea.selectionStart = currentSelectionStart + 1;
      textarea.selectionEnd = currentSelectionStart + 1;
    } else if (code === 'Delete') {
      deleteCharInTextarea(false);
    } else if (code === 'Backspace') {
      deleteCharInTextarea(true);
    } else {
      const keyArr = data.lang === 'ice' ? data.icelandic : data.english;
      let index = -1;
      keyArr.forEach((el, i) => {
        if (el.code === code) index = i;
      });
      const char = updateChar(code, index);

      textareaInput(char, textarea.selectionStart);
      textareaUpdate();
      textarea.selectionStart = currentSelectionStart + 1;
      textarea.selectionEnd = currentSelectionStart + 1;
    }
  }
};

const keyCkickHandler = () => {
  const doc = document.body;

  doc.addEventListener('keydown', (e) => {
    e.preventDefault();
    toggleCaps(e);
    shiftOn(e);
    toggleIceMods(e.code);
    highlightKey(e);
    updateKeyboard(e.code);
    textareaInputHandler(e.code);
    textareaUpdate();
  });

  doc.addEventListener('keyup', (e) => {
    e.preventDefault();
    shiftOff(e);
    updateKeyboard(e.code);
    turnOffKey(e);
  });
};

const initKeyboard = () => {
  document.body.innerHTML = '';
  renderWrapper();
  renderKeyboard();
  updateKeyboard();
  textareaReset();
  textareaUpdate();
  keyCkickHandler();
};

window.onload = function () {
  initKeyboard();
};
