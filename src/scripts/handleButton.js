// import data from "../data";

const handleButton = () => {
  const buttons = document.querySelectorAll('.button');
  const buttonsArray = Array.from(buttons);

  document.addEventListener('keydown', (event) => {
    buttonsArray.forEach((button) => {
      const buttonFirstText = button.querySelectorAll('.button-first-text');
      const buttonFirstTextArr = Array.from(buttonFirstText);

      buttonFirstTextArr.forEach((item) => {
        if (item.innerText === event.key.toLocaleUpperCase()) {
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
};

export default handleButton;
