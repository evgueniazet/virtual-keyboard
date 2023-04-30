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
      first: 'Q',
      russian: 'Й',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'W',
      russian: 'Ц',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'E',
      russian: 'У',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'R',
      russian: 'К',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'T',
      russian: 'Е',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'Y',
      russian: 'Н',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'U',
      russian: 'Г',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'I',
      russian: 'Ш',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'O',
      russian: 'Щ',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'P',
      russian: 'З',
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
      /* eslint-disable */
      first: "'\'",
      second: '/',
      classes: ['button'],
    },
    {
      first: 'DEL',
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
      first: 'A',
      russian: 'Ф',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'S',
      russian: 'Ы',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'D',
      russian: 'В',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'F',
      russian: 'А',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'G',
      russian: 'П',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'H',
      russian: 'Р',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'J',
      russian: 'О',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'K',
      russian: 'Л',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'L',
      russian: 'Д',
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
      key: 'Shift',
      classes: ['button-selected', 'button-shift'],
      value: true,
    },
    {
      /* eslint-disable */
      first: "'\'",
      classes: ['button'],
    },
    {
      first: 'Z',
      russian: 'Я',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'X',
      russian: 'Ч',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'C',
      russian: 'С',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'V',
      russian: 'М',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'B',
      russian: 'И',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'N',
      russian: 'Т',
      isEnglish: true,
      classes: ['button'],
    },
    {
      first: 'M',
      russian: 'Ь',
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
      classes: ['button'],
    },
    {
      first: ']',
      classes: ['button'],
    },
    {
      first: '&#8593;',
      key: 'ArrowUp',
      classes: ['button-selected'],
    },
    {
      first: 'Shift',
      key: 'Shift',
      classes: ['button-selected'],
    },
  ],
  [
    {
      first: 'Ctrl',
      key: 'Control',
      classes: ['button-selected'],
    },
    {
      first: 'Win',
      key: 'Meta',
      classes: ['button-selected'],
    },
    {
      first: 'Alt',
      key: 'Alt',
      classes: ['button-selected'],
    },
    {
      first: '',
      key: '',
      classes: ['button-space'],
    },
    {
      first: 'Alt',
      key: 'Alt',
      classes: ['button-selected'],
    },
    {
      first: 'Ctrl',
      key: 'Control',
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