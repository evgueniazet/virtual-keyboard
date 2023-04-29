import './styles.scss';
import addButtons from './scripts/addButtons';
import data from './data';
import handleButton from './scripts/handleButton';

const createWrapper = () => {
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

  const keyboardContainer = document.createElement('div');
  keyboardContainer.classList.add('keyboard-container');
  wrapper.appendChild(keyboardContainer);
};
createWrapper();
addButtons(data);
handleButton();
