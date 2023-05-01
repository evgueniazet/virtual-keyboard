const handleButton = () => {
  const buttons = document.querySelectorAll('button');
  const entryField = document.querySelector('.entry-field');
  const cursorPosition = entryField.selectionStart;
  console.log('cursorPosition', cursorPosition);
  const buttonsArray = Array.from(buttons);
  let entryFieldString = entryField.innerText;
  let newStr = '';

  document.addEventListener('keydown', (event) => {
    buttonsArray.forEach((button) => {
      const buttonFirstText = button.querySelectorAll('.button-first-text');
      const buttonFirstTextArr = Array.from(buttonFirstText);

      buttonFirstTextArr.forEach((item) => {
        if (item.innerText === event.key.toLocaleUpperCase()) {
          button.classList.add('button-keydown');
        }
        if (item.innerText === event.key) {
          button.classList.add('button-keydown');
        }
      });
    });
  });

  document.addEventListener('keyup', () => {
    buttons.forEach((button) => {
      button.classList.remove('button-keydown');
    });
  });

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const text = button.querySelector('.button-first-text');
      if (checkButton(button)) {
        entryFieldString = entryFieldString + text.innerText;
        entryField.innerText = entryFieldString;
      }
      if (text.innerHTML === 'Backspace') {
        // newStr = entryField.innerHTML;
        entryField.innerHTML = entryFieldString.slice(0, -1);
        entryFieldString = entryField.innerHTML;
      }

      if (text.innerHTML === 'Tab') {
        entryField.innerHTML = entryFieldString + ' ';
        entryFieldString = entryField.innerHTML;
      }
    });

    const checkButton = (button) => {
      if (button.innerText !== 'Backspace' && button.innerText !== 'Tab' && button.innerText !== 'CapsLock') {
        return true;
      }
    };
  })

};

export default handleButton;
