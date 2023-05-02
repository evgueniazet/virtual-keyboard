const data = [
  [
    {
      first: '`',
      second: '~',
      classes: ['button'],
    },
    {
      first: '1',
      second: '!',
      classes: ['button'],
    },
    {
      first: '2',
      second: '@',
      classes: ['button'],
    },
    {
      first: '3',
      second: '#',
      classes: ['button'],
    },
    {
      first: '4',
      second: '$',
      classes: ['button'],
    },
    {
      first: '5',
      second: '%',
      classes: ['button'],
    },
    {
      first: '6',
      second: ':',
      classes: ['button'],
    },
    {
      first: '7',
      second: '?',
      classes: ['button'],
    },
    {
      first: '8',
      second: '*',
      classes: ['button'],
    },
    {
      first: '9',
      second: '(',
      classes: ['button'],
    },
    {
      first: '0',
      second: ')',
      classes: ['button'],
    },
    {
      first: '-',
      second: '_',
      classes: ['button'],
    },
    {
      first: '=',
      second: '+',
      classes: ['button'],
    },
    {
      first: 'Backspace',
      key: 'Backspace',
      classes: ['button-selected', 'button-backspace'],
    },
  ],
  [
    {
      first: 'Tab',
      key: 'Tab',
      classes: ['button-selected'],
    },
    {
      first: 'q',
      russian: 'й',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'w',
      russian: 'ц',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'e',
      russian: 'у',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'r',
      russian: 'к',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 't',
      russian: 'е',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'y',
      russian: 'н',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'u',
      russian: 'г',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'i',
      russian: 'ш',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'o',
      russian: 'щ',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'p',
      russian: 'з',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: '[',
      classes: ['button'],
    },
    {
      first: ']',
      classes: ['button'],
    },
    {
      first: '&#92;',
      second: '/',
      key: 'Backsplash',
      classes: ['button'],
    },
    {
      first: 'Delete',
      key: 'Delete',
      classes: ['button-selected'],
    },
  ],
  [
    {
      first: 'CapsLock',
      key: 'CapsLock',
      classes: ['button-selected', 'button-capslock'],
    },
    {
      first: 'a',
      russian: 'ф',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 's',
      russian: 'ы',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'd',
      russian: 'в',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'f',
      russian: 'а',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'g',
      russian: 'п',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'h',
      russian: 'р',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'j',
      russian: 'о',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'k',
      russian: 'л',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'l',
      russian: 'д',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: ';',
      classes: ['button'],
    },
    {
      first: "'",
      classes: ['button'],
    },
    {
      first: 'ENTER',
      key: 'Enter',
      classes: ['button-selected', 'button-enter'],
    },
  ],
  [
    {
      first: 'Shift',
      key: 'ShiftLeft',
      classes: ['button-selected', 'button-shift'],
      value: true,
    },
    // {
    //   first: '&#92;',
    //   classes: ['button'],
    // },
    {
      first: 'z',
      russian: 'я',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'x',
      russian: 'ч',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'c',
      russian: 'c',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'v',
      russian: 'м',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'b',
      russian: 'и',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'n',
      russian: 'т',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'm',
      russian: 'ь',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: '.',
      classes: ['button'],
    },
    {
      first: ',',
      classes: ['button'],
    },
    {
      first: '/',
      key: 'Splash',
      classes: ['button'],
    },
    {
      first: '&#8593;',
      key: 'ArrowUp',
      classes: ['button-selected'],
    },
    {
      first: 'Shift',
      key: 'ShiftRight',
      classes: ['button-selected'],
    },
  ],
  [
    {
      first: 'Ctrl',
      key: 'ControlLeft',
      classes: ['button-selected'],
    },
    {
      first: 'Win',
      key: 'MetaLeft',
      classes: ['button-selected'],
    },
    {
      first: 'Alt',
      key: 'AltLeft',
      classes: ['button-selected'],
    },
    {
      first: '',
      key: 'Space',
      classes: ['button-space'],
    },
    {
      first: 'Alt',
      key: 'AltRight',
      classes: ['button-selected'],
    },
    {
      first: 'Ctrl',
      key: 'ControlRight',
      classes: ['button-selected'],
    },
    {
      first: '&#8592;',
      key: 'ArrowLeft',
      classes: ['button-selected'],
    },
    {
      first: '&#8595;',
      key: 'ArrowDown',
      classes: ['button-selected'],
    },
    {
      first: '&#8594;',
      key: 'ArrowRight',
      classes: ['button-selected'],
    },
  ],
];

export default data;