const addButtons = (array) => {
  const keyboardContainer = document.querySelector('.keyboard-container');
  const keyboard = document.createElement('div');
  keyboard.classList.add('keyboard');
  keyboardContainer.appendChild(keyboard);

  array.forEach((element) => {
    const rowWrapper = document.createElement('div');
    rowWrapper.classList.add('row-wrapper');
    keyboard.appendChild(rowWrapper);

    element.forEach((item) => {
      const button = document.createElement('button');
      item.classes.forEach((elem) => {
        button.classList.add(elem);
      });
      rowWrapper.appendChild(button);

      const buttonFirstText = document.createElement('span');
      buttonFirstText.classList.add('button-first-text');
      button.appendChild(buttonFirstText);
      buttonFirstText.innerHTML = item.first;

      if (item.second) {
        const buttonSecondText = document.createElement('span');
        buttonSecondText.classList.add('button-second-text');
        button.appendChild(buttonSecondText);
        buttonSecondText.append(item.second);
      }
    });
  });
};

export default addButtons;
