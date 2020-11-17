
window.onload = () => {
  const keyboard = new Keyboard(localStorage.getItem('lang') || 'en');
  keyboard.renderKeyboard();
};
const keyArr = [{
  text: {
    en: '`',
    ge: '„',
  },
  width: 1,
  upKey: {
    en: '~',
    ge: '“',
  },
  lastKey: false,
  code: 'Backquote',
},
{
  text: {
    en: '1',
    ge: '1',
  },
  width: 1,
  upKey: {
    en: '!',
    ge: '!',
  },
  lastKey: false,
  code: 'Digit1',
},
{
  text: {
    en: '2',
    ge: '2',
  },
  width: 1,
  upKey: {
    en: '@',
    ge: '@',
  },
  lastKey: false,
  code: 'Digit2',
},
{
  text: {
    en: '3',
    ge: '3',
  },
  width: 1,
  upKey: {
    en: '#',
    ge: '#',
  },
  lastKey: false,
  code: 'Digit3',
},
{
  text: {
    en: '4',
    ge: '4',
  },
  width: 1,
  upKey: {
    en: '$',
    ge: '$',
  },
  lastKey: false,
  code: 'Digit4',
},
{
  text: {
    en: '5',
    ge: '5',
  },
  width: 1,
  upKey: {
    en: '%',
    ge: '%',
  },
  lastKey: false,
  code: 'Digit5',
},
{
  text: {
    en: '6',
    ge: '6',
  },
  width: 1,
  upKey: {
    en: '^',
    ge: '^',
  },
  lastKey: false,
  code: 'Digit6',
},
{
  text: {
    en: '7',
    ge: '7',
  },
  width: 1,
  upKey: {
    en: '&amp;',
    ge: '&',
  },
  lastKey: false,
  code: 'Digit7',
},
{
  text: {
    en: '8',
    ge: '8',
  },
  width: 1,
  upKey: {
    en: '*',
    ge: '*',
  },
  lastKey: false,
  code: 'Digit8',
},
{
  text: {
    en: '9',
    ge: '9',
  },
  width: 1,
  upKey: {
    en: '(',
    ge: '(',
  },
  lastKey: false,
  code: 'Digit9',
},
{
  text: {
    en: '0',
    ge: '0',
  },
  width: 1,
  upKey: {
    en: ')',
    ge: ')',
  },
  lastKey: false,
  code: 'Digit0',
},
{
  text: {
    en: '-',
    ge: '-',
  },
  width: 1,
  upKey: {
    en: '_',
    ge: '_',
  },
  lastKey: false,
  code: 'Minus',
},
{
  text: {
    en: '=',
    ge: '=',
  },
  width: 1,
  upKey: {
    en: '+',
    ge: '+',
  },
  lastKey: false,
  code: 'Equal',
},
{
  text: {
    en: 'Backspace',
    ge: 'Backspace',
  },
  width: 3,
  upKey: {
    en: 'Backspace',
    ge: 'Backspace',
  },
  lastKey: true,
  code: 'Backspace',
  extra: true,
},
{
  text: {
    en: 'Tab',
    ge: 'Tab',
  },
  width: 1,
  upKey: {
    en: 'Tab',
    ge: 'Tab',
  },
  lastKey: false,
  code: 'Tab',
  extra: true,
},
{
  text: {
    en: 'q',
    ge: 'ქ',
  },
  width: 1,
  upKey: {
    en: 'Q',
    ge: 'ქ',
  },
  lastKey: false,
  code: 'KeyQ',
},
{
  text: {
    en: 'w',
    ge: 'წ',
  },
  width: 1,
  upKey: {
    en: 'W',
    ge: 'ჭ',
  },
  lastKey: false,
  code: 'KeyW',
},
{
  text: {
    en: 'e',
    ge: 'ე',
  },
  width: 1,
  upKey: {
    en: 'E',
    ge: 'ე',
  },
  lastKey: false,
  code: 'KeyE',
},
{
  text: {
    en: 'r',
    ge: 'რ',
  },
  width: 1,
  upKey: {
    en: 'R',
    ge: 'ღ',
  },
  lastKey: false,
  code: 'KeyR',
},
{
  text: {
    en: 't',
    ge: 'ტ',
  },
  width: 1,
  upKey: {
    en: 'T',
    ge: 'თ',
  },
  lastKey: false,
  code: 'KeyT',
},
{
  text: {
    en: 'y',
    ge: 'ყ',
  },
  width: 1,
  upKey: {
    en: 'Y',
    ge: 'ყ',
  },
  lastKey: false,
  code: 'KeyY',
},
{
  text: {
    en: 'u',
    ge: 'უ',
  },
  width: 1,
  upKey: {
    en: 'U',
    ge: 'უ',
  },
  lastKey: false,
  code: 'KeyU',
},
{
  text: {
    en: 'i',
    ge: 'ი',
  },
  width: 1,
  upKey: {
    en: 'I',
    ge: 'ი',
  },
  lastKey: false,
  code: 'KeyI',
},
{
  text: {
    en: 'o',
    ge: 'ო',
  },
  width: 1,
  upKey: {
    en: 'O',
    ge: 'ო',
  },
  lastKey: false,
  code: 'KeyO',
},
{
  text: {
    en: 'p',
    ge: 'პ',
  },
  width: 1,
  upKey: {
    en: 'P',
    ge: 'პ',
  },
  lastKey: false,
  code: 'KeyP',
},
{
  text: {
    en: '[',
    ge: '[',
  },
  width: 1,
  upKey: {
    en: '{',
    ge: '{',
  },
  lastKey: false,
  code: 'BracketLeft',
},
{
  text: {
    en: ']',
    ge: ']',
  },
  width: 1,
  upKey: {
    en: '}',
    ge: '}',
  },
  lastKey: false,
  code: 'BracketRight',
},
{
  text: {
    en: '\\',
    ge: '~',
  },
  width: 1,
  upKey: {
    en: '|',
    ge: '~|',
  },
  lastKey: true,
  code: 'Backslash',
},
{
  text: {
    en: 'Caps Lock',
    ge: 'Caps Lock',
  },
  width: 3,
  upKey: {
    en: 'Caps Lock',
    ge: 'Caps Lock',
  },
  lastKey: false,
  code: 'CapsLock',
  extra: true,
},
{
  text: {
    en: 'a',
    ge: 'ა',
  },
  width: 1,
  upKey: {
    en: 'A',
    ge: 'ა',
  },
  lastKey: false,
  code: 'KeyA',
},
{
  text: {
    en: 's',
    ge: 'ს',
  },
  width: 1,
  upKey: {
    en: 'S',
    ge: 'შ',
  },
  lastKey: false,
  code: 'KeyS',
},
{
  text: {
    en: 'd',
    ge: 'დ',
  },
  width: 1,
  upKey: {
    en: 'D',
    ge: 'დ',
  },
  lastKey: false,
  code: 'KeyD',
},
{
  text: {
    en: 'f',
    ge: 'ფ',
  },
  width: 1,
  upKey: {
    en: 'F',
    ge: 'ფ',
  },
  lastKey: false,
  code: 'KeyF',
},
{
  text: {
    en: 'g',
    ge: 'გ',
  },
  width: 1,
  upKey: {
    en: 'G',
    ge: 'გ',
  },
  lastKey: false,
  code: 'KeyG',
},
{
  text: {
    en: 'h',
    ge: 'ჰ',
  },
  width: 1,
  upKey: {
    en: 'H',
    ge: 'ჰ',
  },
  lastKey: false,
  code: 'KeyH',
},
{
  text: {
    en: 'j',
    ge: 'ჯ',
  },
  width: 1,
  upKey: {
    en: 'J',
    ge: 'ჟ',
  },
  lastKey: false,
  code: 'KeyJ',
},
{
  text: {
    en: 'k',
    ge: 'კ',
  },
  width: 1,
  upKey: {
    en: 'K',
    ge: 'კ',
  },
  lastKey: false,
  code: 'KeyK',
},
{
  text: {
    en: 'l',
    ge: 'ლ',
  },
  width: 1,
  upKey: {
    en: 'L',
    ge: '₾',
  },
  lastKey: false,
  code: 'KeyL',
},
{
  text: {
    en: ';',
    ge: ';',
  },
  width: 1,
  upKey: {
    en: ':',
    ge: ':',
  },
  lastKey: false,
  code: 'Semicolon',
},
{
  text: {
    en: '\'',
    ge: "'",
  },
  width: 1,
  upKey: {
    en: '"',
    ge: '"',
  },
  lastKey: false,
  code: 'Quote',
},
{
  text: {
    en: 'Enter',
    ge: 'Enter',
  },
  width: 3,
  upKey: {
    en: 'Enter',
    ge: 'Enter',
  },
  lastKey: true,
  code: 'Enter',
  extra: false,
},
{
  text: {
    en: 'Shift',
    ge: 'Shift',
  },
  width: 3,
  upKey: {
    en: 'Shift',
    ge: 'Shift',
  },
  lastKey: false,
  code: 'ShiftLeft',
  extra: false,
},
{
  text: {
    en: 'z',
    ge: 'ზ',
  },
  width: 1,
  upKey: {
    en: 'Z',
    ge: 'ძ',
  },
  lastKey: false,
  code: 'KeyZ',
},
{
  text: {
    en: 'x',
    ge: 'ხ',
  },
  width: 1,
  upKey: {
    en: 'X',
    ge: 'ხ',
  },
  lastKey: false,
  code: 'KeyX',
},
{
  text: {
    en: 'c',
    ge: 'ც',
  },
  width: 1,
  upKey: {
    en: 'C',
    ge: 'ჩ',
  },
  lastKey: false,
  code: 'KeyC',
},
{
  text: {
    en: 'v',
    ge: 'ვ',
  },
  width: 1,
  upKey: {
    en: 'V',
    ge: 'ვ',
  },
  lastKey: false,
  code: 'KeyV',
},
{
  text: {
    en: 'b',
    ge: 'ბ',
  },
  width: 1,
  upKey: {
    en: 'B',
    ge: 'ბ',
  },
  lastKey: false,
  code: 'KeyB',
},
{
  text: {
    en: 'n',
    ge: 'ნ',
  },
  width: 1,
  upKey: {
    en: 'N',
    ge: 'N',
  },
  lastKey: false,
  code: 'KeyN',
},
{
  text: {
    en: 'm',
    ge: 'მ',
  },
  width: 1,
  upKey: {
    en: 'M',
    ge: 'მ',
  },
  lastKey: false,
  code: 'KeyM',
},
{
  text: {
    en: ',',
    ge: ',',
  },
  width: 1,
  upKey: {
    en: '&lt;',
    ge: '<',
  },
  lastKey: false,
  code: 'Comma',
},
{
  text: {
    en: '.',
    ge: '.',
  },
  width: 1,
  upKey: {
    en: '&gt;',
    ge: '>',
  },
  lastKey: false,
  code: 'Period',
},
{
  text: {
    en: '/',
    ge: '/',
  },
  width: 1,
  upKey: {
    en: '?',
    ge: '?',
  },
  lastKey: false,
  code: 'Slash',
},
{
  text: {
    en: '&uarr;',
    ge: '&uarr',
  },
  width: 1,
  upKey: {
    en: '&uarr;',
    ge: '&uarr',
  },
  lastKey: false,
  code: 'ArrowUp',
  extra: true,
},
{
  text: {
    en: 'Shift',
    ge: 'Shift',
  },
  width: 3,
  upKey: {
    en: 'Shift',
    ge: 'Shift',
  },
  lastKey: true,
  code: 'ShiftRight',
  extra: false,
},
{
  text: {
    en: 'Ctrl',
    ge: 'Ctrl',
  },
  width: 1,
  upKey: {
    en: 'Ctrl',
    ge: 'Ctrl',
  },
  lastKey: false,
  code: 'ControlLeft',
  extra: true,
},
{
  text: {
    en: 'Win',
    ge: 'Win',
  },
  width: 1,
  upKey: {
    en: 'Win',
    ge: 'Win',
  },
  lastKey: false,
  code: 'MetaLeft',
  extra: true,
},
{
  text: {
    en: 'Alt',
    ge: 'Alt',
  },
  width: 1,
  upKey: {
    en: 'Alt',
    ge: 'Alt',
  },
  lastKey: false,
  code: 'AltLeft',
  extra: true,
},
{
  text: {
    en: ' ',
    ge: ' ',
  },
  width: 3,
  upKey: {
    en: ' ',
    ge: ' ',
  },
  lastKey: false,
  code: 'Space',
},
{
  text: {
    en: 'Alt',
    ge: 'Alt',
  },
  width: 1,
  upKey: {
    en: 'Alt',
    ge: 'Alt',
  },
  lastKey: false,
  code: 'AltRight',
  extra: true,
},
{
  text: {
    en: '&larr;',
    ge: '&larr',
  },
  width: 1,
  upKey: {
    en: '&larr;',
    ge: '&larr',
  },
  lastKey: false,
  code: 'ArrowLeft',
  extra: false,
},
{
  text: {
    en: '&darr;',
    ge: '&darr',
  },
  width: 1,
  upKey: {
    en: '&darr;',
    ge: '&darr',
  },
  lastKey: false,
  code: 'ArrowDown',
  extra: false,
},
{
  text: {
    en: '&rarr;',
    ge: '&rarr',
  },
  width: 1,
  upKey: {
    en: '&rarr;',
    ge: '&rarr',
  },
  lastKey: false,
  code: 'ArrowRight',
  extra: false,
},
{
  text: {
    en: 'Ctrl',
    ge: 'Ctrl',
  },
  width: 1,
  upKey: {
    en: 'Ctrl',
    ge: 'Ctrl',
  },
  lastKey: true,
  code: 'ControlRight',
  extra: true,
},
];

class Key {
  constructor({
    text = {
      en: 'a',
      ge: 'а',
    },
    width = 1,
    upKey = {
      en: 'A',
      ge: 'А',
    },
    lastKey = false,
    code = 'KeyA',
    extra = false,
  },
  lang = 'en') {
    this.text = text;
    this.width = width;
    this.upKey = upKey;
    this.lastKey = lastKey;
    this.code = code;
    this.extra = extra;
    this.lang = lang;
  }

  renderKey() {
    const key = document.createElement('span');
    key.classList.add('keyboard_box-key');

    if (this.width === 2) {
      key.classList.add('keyboard_box-key-wide');
    } else if (this.width === 3) {
      key.classList.add('keyboard_box-key-space');
    }
    if (this.extra) {
      key.classList.add('keyboard_box-key-extra');
    }

    key.innerHTML = this.text[this.lang];

    return key;
  }

  lastRow() {
    return this.lastKey;
  }
}

class Keyboard {
  constructor(lang = 'en') {
    this.caps = false;
    this.ctrl = false;
    this.alt = false;
    this.keys = [];
    this.shift = false;
    this.lang = lang;
  }

  renderKeyboard() {
    const textReference = document.createElement('p');
    textReference.classList.add('reference');
    textReference.innerHTML = 'Press Ctrl + Alt to switch between languages';
    document.body.append(textReference);

    const container = document.createElement('div');
    container.classList.add('container');
    document.body.appendChild(container);

    const textArea = document.createElement('textarea');
    textArea.classList.add('textarea');
    container.append(textArea);

    const keyboard = document.createElement('div');
    keyboard.classList.add('keyboard');
    container.append(keyboard);

    const keyboardKeys = document.createElement('div');
    keyboard.append(keyboardKeys);

    keyboardKeys.append(this.createKeys());

    this.keys = document.querySelectorAll('.keyboard_box-key');

    document.addEventListener('keydown', this.typeIn.bind(this));
    document.addEventListener('keyup', this.typeOut.bind(this));
    keyboardKeys.addEventListener('click', this.textClick.bind(this));
  }

  createKeys() {
    const keys = document.createElement('div');
    let row = document.createElement('div');
    row.classList.add('keyboard_row');

    keyArr.forEach((k) => {
      const newKey = new Key(k, this.lang);
      row.append(newKey.renderKey());

      if (newKey.lastRow()) {
        keys.append(row);
        row = document.createElement('div');
        row.classList.add('keyboard_row');
      }
    });

    return keys;
  }

  textClick(event) {
    if (event.target.classList.contains('keyboard_box-key')) {
      this.selectedKey(event.target.innerHTML);
    }
  }

  typeIn(event) {
    const operatedKey = keyArr.find((k) => k.code === event.code);
    if (!operatedKey) return;
    let key = operatedKey.text[this.lang];
    key = this.shift ? operatedKey.upKey[this.lang] : operatedKey.text[this.lang];
    this.selectedKey(key);
    let target;
    for (const k of this.keys) {
      if (k.innerHTML === key || (k.innerHTML === '↑' && key === '&uarr;') || (k.innerHTML === '←' && key === '&larr;') || (k.innerHTML === '↓' && key === '&darr;') || (k.innerHTML === '→' && key === '&rarr;')) {
        if (k.classList.contains('keyboard_box-key-extra')) {
          if (event.code === operatedKey.code) {
            target = k;
            if (event.code.includes('Left')) break;
            else if (event.code.includes('Right')) continue;
          }
        } else {
          target = k;
          break;
        }
      }
    }
    if (target) {
      if (target.classList.contains('pressed') && target.innerHTML === 'Caps Lock') {
        target.classList.remove('pressed');
      } else {
        target.classList.add('pressed');
      }
    }
  }

  typeOut(event) {
    const operatedKey = keyArr.find((k) => k.code === event.code);
    if (!operatedKey) return;
    let key = operatedKey.text[this.lang];
    key = this.shift ? operatedKey.upKey[this.lang] : operatedKey.text[this.lang];
    if (key === 'Caps Lock') return;
    if (key === 'Ctrl') this.ctrl = false;
    if (key === 'Alt') this.alt = false;
    if (key === 'Shift') {
      if (this.caps) {
        this.shift = false;
        this.caps = !this.caps;
        this.capsKey();
        this.shiftKey();
        this.caps = !this.caps;
        this.capsKey();
      } else {
        this.shift = false;
        this.shiftKey();
      }
    }
    let target;
    for (const k of this.keys) {
      if (k.innerHTML === key || (k.innerHTML === '↑' && key === '&uarr;') || (k.innerHTML === '←' && key === '&larr;') || (k.innerHTML === '↓' && key === '&darr;') || (k.innerHTML === '→' && key === '&rarr;')) {
        if (k.classList.contains('keyboard_box-key-extra')) {
          if (event.code === operatedKey.code) {
            target = k;
            if (event.code.includes('Left')) break;
            else if (event.code.includes('Right')) continue;
          }
        } else {
          target = k;
          break;
        }
      }
    }
    if (target) {
      target.classList.remove('pressed');
    }
  }

  selectedKey(key) {
    switch (key) {
      case 'Backspace':
        this.backspaceKey();
        break;
      case 'Tab':
        this.tabKey();
        break;
      case 'Caps Lock':
        this.caps = !this.caps;
        this.capsKey();
        break;
      case 'Shift':
        this.shift = true;
        this.shiftKey();
        break;
      case 'Ctrl':
        this.ctrlKey();
        break;
      case 'Win':
        break;
      case 'Alt':
        this.altKey();
        break;
      case 'Enter':
        this.enterKey();
        break;
      case '&uarr;':
      case '&larr;':
      case '&darr;':
      case '&rarr;':
        this.arrKey(key);
        break;
      default:
        this.signKey(key);
        break;
    }
  }

  signKey(key) {
    const inputArea = document.querySelector('.textarea');

    switch (key) {
      case '&amp;':
        key = '&';
        break;
      case '&lt;':
        key = '<';
        break;
      case '&gt;':
        key = '>';
        break;
      default:
        break;
    }

    const value = this.caps ^ this.shift ? key.toUpperCase() : key.toLowerCase();
    const positionStart = inputArea.selectionStart;
    inputArea.value = inputArea.value.substring(0, positionStart) + value + inputArea.value.substring(positionStart);
    this.setPosition(positionStart + 1);
  }

  tabKey() {
    const inputArea = document.querySelector('.textarea');

    const value = '    ';
    const positionStart = inputArea.selectionStart;
    inputArea.value = inputArea.value.substring(0, positionStart) + value + inputArea.value.substring(positionStart);
    this.setPosition(positionStart + 4);
  }

  backspaceKey() {
    const inputArea = document.querySelector('.textarea');

    const positionStart = inputArea.selectionStart;
    inputArea.value = inputArea.value.substring(0, positionStart - 1) + inputArea.value.substring(positionStart);
    this.setPosition(positionStart - 1);
  }

  altKey() {
    this.alt = !this.alt;
    if (this.ctrl && this.alt) {
      this.chooseLanguage();
    }
  }

  enterKey() {
    const inputArea = document.querySelector('.textarea');

    const value = '\n';
    const positionStart = inputArea.selectionStart;
    inputArea.value = inputArea.value.substring(0, positionStart) + value + inputArea.value.substring(positionStart);
    this.setPosition(positionStart + 1);
  }

  ctrlKey() {
    this.ctrl = !this.ctrl;
    if (this.ctrl && this.alt) {
      this.chooseLanguage();
    }
  }

  capsKey() {
    this.keys.forEach((keyItem) => {
      let key = keyArr.find((k) => k.text[this.lang] === keyItem.innerHTML || k.upKey[this.lang] === keyItem.innerHTML);
      let caseChange = false;
      if (key) {
        if (key.code.includes('Key')) {
          caseChange = true;
        }
        if (this.lang === 'ge') {
          if (key.code === 'Backquote' || key.code === 'BracketLeft' || key.code === 'BracketRight' || key.code === 'Semicolon' || key.code === 'Quote' || key.code === 'Comma' || key.code === 'Period') {
            caseChange = true;
          }
        }
      }
      if (caseChange) {
        key = this.caps ^ this.shift ? key.upKey[this.lang] : key.text[this.lang];
        keyItem.innerHTML = key;
      }
    });
  }

  arrKey(arrow) {
    const inputArea = document.querySelector('.textarea');

    switch (arrow) {
      case '&uarr;':
        this.setPosition(0);
        break;
      case '&larr;':
        this.setPosition(inputArea.selectionStart - 1);
        break;
      case '&darr;':
        this.setPosition(inputArea.value.length);
        break;
      case '&rarr;':
        this.setPosition(inputArea.selectionStart + 1);
        break;
      default:
        break;
    }
  }

  chooseLanguage() {
    if (this.shift) this.shiftKey();
    const language = this.lang;
    this.lang = this.lang === 'en' ? 'ge' : 'en';
    localStorage.setItem('lang', this.lang);
    for (const keyItem of this.keys) {
      let key = keyArr.find((k) => k.text[language] === keyItem.innerHTML || k.upKey[language] === keyItem.innerHTML);
      if (key) {
        if (key.code.includes('Digit')) continue;
        if (key.code.includes('Key') || key.code === 'Backquote' || key.code === 'Slash' || key.code === 'BracketLeft' || key.code === 'BracketRight' || key.code === 'Quote' || key.code === 'Comma' || key.code === 'Period' || key.code === 'Semicolon') {
          key = this.caps ? key.upKey[this.lang] : key.text[this.lang];
          keyItem.innerHTML = key;
        }
      }
    }
  }

  shiftKey() {
    let caseChange = false;
    this.keys.forEach((keyItem) => {
      let key = keyArr.find((k) => k.text[this.lang] === keyItem.innerHTML || k.upKey[this.lang] === keyItem.innerHTML);
      if (key) {
        key = this.shift ? key.upKey[this.lang] : key.text[this.lang];
        keyItem.innerHTML = key;
        caseChange = true;
      }
    });
    if (this.caps && this.shift) {
      this.capsKey();
    }
  }

  setPosition(pos) {
    const inputArea = document.querySelector('.textarea');

    inputArea.focus();
    inputArea.selectionStart = pos;
    inputArea.selectionEnd = pos;
  }
}
