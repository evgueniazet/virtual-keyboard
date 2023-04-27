export const addRow = (array) => {

   const keyboardContainer = document.querySelector('.keyboard-container');

   const rowWrapper = document.createElement('div');
   rowWrapper.classList.add('row-wrapper');

   keyboardContainer.appendChild(rowWrapper);

   array.forEach((element) => {

      const button = document.createElement('button');
      button.classList.add('button-default');
      rowWrapper.appendChild(button);

      const buttonFirstText = document.createElement('span');
      buttonFirstText.classList.add('button-first-text');
      button.appendChild(buttonFirstText);
      buttonFirstText.append(element.first);

      if (element.second) {
         const buttonSecondText = document.createElement('span');
         buttonSecondText.classList.add('button-second-text');
         button.appendChild(buttonSecondText);
         buttonSecondText.append(element.second);
      }



   })
};

