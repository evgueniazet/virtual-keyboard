import './styles.scss';
import addButtons from './scripts/addButtons.js';
import data from './data.js';
import handleButton from './scripts/handleButton.js';

const createWrapper = () => {
  const changeLanguage = 'Press Shift and Alt at the same time to switch the language to English';
  const body = document.querySelector('body');

  const wrapper = document.createElement('section');
  wrapper.classList.add('wrapper');
  body.appendChild(wrapper);

  const header = document.createElement('header');
  header.classList.add('header');
  wrapper.appendChild(header);
  header.append('Virtual Keyboard');

  const entryField = document.createElement('textarea');
  entryField.classList.add('entry-field');
  wrapper.appendChild(entryField);

  const entryFieldText = document.createElement('div');
  entryFieldText.classList.add('entry-field-text');
  wrapper.appendChild(entryFieldText);
  entryFieldText.innerText = changeLanguage;

  const keyboardContainer = document.createElement('div');
  keyboardContainer.classList.add('keyboard-container');
  wrapper.appendChild(keyboardContainer);
};

createWrapper();
addButtons(data);
handleButton();