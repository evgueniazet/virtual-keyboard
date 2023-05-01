const handleButton = () => {
  const buttons = document.querySelectorAll('button');
  const entryField = document.querySelector('.entry-field');
  const buttonsArray = Array.from(buttons);
  let entryFieldString = entryField.innerText;
  let letterLowerCase = true;

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
        entryField.innerHTML = entryFieldString.slice(0, -1);
        entryFieldString = entryField.innerHTML;
      }

      if (text.innerHTML === 'Tab') {
        entryField.innerHTML = entryFieldString + ' ';
        entryFieldString = entryField.innerHTML;
      }

      if (text.innerHTML === 'CapsLock') {
        const buttonsLetters = document.querySelectorAll('.button');

        const containsOnlyLetters = (str) => {
          return /^[a-zA-Zа-яА-Я]+$/.test(str);
        }

        if (letterLowerCase) {

          buttonsLetters.forEach((button) => {

            if (containsOnlyLetters(button.innerText)) {

              button.innerText = button.innerText.toUpperCase();
            }
          })
          letterLowerCase = false;
        } else {

          buttonsLetters.forEach((button) => {

            if (containsOnlyLetters(button.innerText)) {

              button.innerText = button.innerText.toLowerCase();
            }
          })
          letterLowerCase = true;
        }
      }
      console.log('button', button);
    });

    const checkButton = (button) => {
      if (button.innerText !== 'Backspace' && button.innerText !== 'Tab' && button.innerText !== 'CapsLock') {
        return true;
      }
    };
  })

};

export default handleButton;
