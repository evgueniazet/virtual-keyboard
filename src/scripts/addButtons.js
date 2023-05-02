const addButtons = (array) => {
  const keyboardContainer = document.querySelector('.keyboard-container');
  const keyboard = document.createElement('div');
  const language = localStorage.getItem('language');
  keyboard.classList.add('keyboard');
  keyboardContainer.appendChild(keyboard);

  array.forEach((row) => {
    const rowWrapper = document.createElement('div');
    rowWrapper.classList.add('row-wrapper');
    keyboard.appendChild(rowWrapper);

    row.forEach(({ classes, first, second, russian, key }) => {
      const button = document.createElement('button');
      button.classList.add(...classes);
      rowWrapper.appendChild(button);

      const buttonFirstText = document.createElement('span');
      buttonFirstText.classList.add('button-first-text');
      button.appendChild(buttonFirstText);

      buttonFirstText.innerHTML = first;

      if (russian) {
        if (language === 'english') {
          buttonFirstText.innerHTML = first;
        } else {
          buttonFirstText.innerHTML = russian;
        }
      }

      if (second) {
        const buttonSecondText = document.createElement('span');
        buttonSecondText.classList.add('button-second-text');
        button.appendChild(buttonSecondText);
        buttonSecondText.append(second);
      }

      if (key) {
        const keyText = document.createElement('span');
        keyText.classList.add('key-text');
        button.appendChild(keyText);
        keyText.append(key);
      }

      document.addEventListener('keydown', (event) => {
        if (event.shiftKey && event.altKey && russian) {
          if (buttonFirstText.innerHTML === first) {
            buttonFirstText.innerHTML = russian;
            localStorage.setItem('language', 'russian');
          } else {
            buttonFirstText.innerHTML = first;
            localStorage.setItem('language', 'english');
          }
        }
      });
    });
  });
};

export default addButtons;
