import './styles.scss';
import addButtons from './scripts/addButtons.js';
import data from './data.js';
import handleButton from './scripts/handleButton.js';

class VirtualKeyboard {
  constructor() {
    this.changeLanguage = 'Press Shift and Alt at the same time to switch the language to English';
    this.createWrapper();
  }

  createWrapper() {
    const body = document.querySelector('body');

    this.wrapper = document.createElement('section');
    this.wrapper.classList.add('wrapper');
    body.appendChild(this.wrapper);

    const header = document.createElement('header');
    header.classList.add('header');
    this.wrapper.appendChild(header);
    header.append('Virtual Keyboard');

    this.entryField = document.createElement('textarea');
    this.entryField.classList.add('entry-field');
    this.wrapper.appendChild(this.entryField);

    this.entryFieldText = document.createElement('div');
    this.entryFieldText.classList.add('entry-field-text');
    this.wrapper.appendChild(this.entryFieldText);
    this.entryFieldText.innerText = this.changeLanguage;

    this.keyboardContainer = document.createElement('div');
    this.keyboardContainer.classList.add('keyboard-container');
    this.wrapper.appendChild(this.keyboardContainer);

    addButtons(data);
    handleButton();
  }
}

new VirtualKeyboard();

// alert('Из фич ES6+ использованы классы и деструктуризация');