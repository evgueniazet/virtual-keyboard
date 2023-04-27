import './styles.scss';
import { addRow } from './scripts/addRow';
import { data } from './data';
import { handleButton } from './scripts/handleButton';

const createWrapper = () => {
    const body = document.querySelector('body');

    const wrapper = document.createElement('section');
    wrapper.classList.add('wrapper');
    body.appendChild(wrapper);

    const header = document.createElement('header');
    header.classList.add('header');
    wrapper.appendChild(header);
    header.append('Virtual Keyboard')

    const entryField = document.createElement('input');
    entryField.classList.add('entry-field');
    wrapper.appendChild(entryField);

    const keyboardContainer = document.createElement('div');
    keyboardContainer.classList.add('keyboard-container');
    wrapper.appendChild(keyboardContainer);
};
createWrapper();
addRow(data);
handleButton();