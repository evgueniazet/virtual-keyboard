const handleButton = () => {
  const buttons = document.querySelectorAll('button');
  const entryField = document.querySelector('.entry-field');
  const buttonsArray = Array.from(buttons);
  let entryFieldString = entryField.innerText;
  let letterLowerCase = true;
  let buttonElemText = '';
  let elemText = '';

  document.addEventListener('keydown', (event) => {
    buttonsArray.forEach((btn) => {
      const buttonFirstText = btn.querySelectorAll('.button-first-text');
      const buttonFirstTextArr = Array.from(buttonFirstText);
      const keyText = btn.querySelector('.key-text');

      buttonFirstTextArr.forEach((item) => {
        if (keyText && keyText.innerText === event.code) {
          btn.classList.add('button-keydown');
        }

        if (item.innerText === event.key.toLowerCase()) {
          btn.classList.add('button-keydown');
        }

        return btn;
      });
    });
  });

  document.addEventListener('keyup', () => {
    buttons.forEach((button) => {
      button.classList.remove('button-keydown');
    });
  });

  buttons.forEach((buttonItem) => {
    buttonItem.addEventListener('click', () => {
      const text = buttonItem.querySelector('.button-first-text');

      console.log('text', text);
      // console.log('buttonItem', text);

      const checkButton = (buttonElement) => {
        if (buttonElement.innerText !== 'Backspace' && buttonElement.innerText !== 'Tab' && buttonElement.innerText !== 'CapsLock') {
          return true;
        }
        return false;
      };

      if (text) {
        console.log('text', text);
        if (checkButton(buttonItem)) {
          entryFieldString += text.innerText;
          entryField.innerText = entryFieldString;
        }

        if (text.innerHTML === 'Backspace') {
          entryField.innerHTML = entryFieldString.slice(0, -1);
          entryFieldString = entryField.innerHTML;
        }

        if (text.innerHTML === 'Tab') {
          entryField.innerHTML = `${entryFieldString} `;
          entryFieldString = entryField.innerHTML;
        }

        if (text.innerHTML === 'CapsLock') {
          const buttonsLetters = document.querySelectorAll('.button');

          const containsOnlyLetters = (str) => /^[a-zA-Zа-яА-Я]+$/.test(str);

          if (letterLowerCase) {
            buttonsLetters.forEach((buttonElem) => {
              buttonElemText = buttonElem.innerText;
              if (containsOnlyLetters(buttonElemText)) {
                buttonElemText = buttonElem.innerHTML.toUpperCase();
                // buttonElem.innerHTML = buttonElemText;
              }
            });
            letterLowerCase = false;
          } else {
            buttonsLetters.forEach((elem) => {
              elemText = elem.innerText;
              if (containsOnlyLetters(elemText)) {
                elemText = elem.innerText.toLowerCase();
                // elem.innerText = elemText;
              }
            });
            letterLowerCase = true;
          }
        }
      }
    });
  });
};

export default handleButton;
