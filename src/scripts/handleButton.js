export const handleButton = () => {
    const buttons = document.querySelectorAll('.button-default');
    document.addEventListener('keydown', (event) => {
        buttons.forEach((button) => {
            const buttonFirstText = button.querySelector('.button-first-text');
            const firstText = buttonFirstText.innerText;
            if (firstText === event.key) {
                button.classList.add('button-keydown');
            }
        })
    });

    document.addEventListener('keyup', () => {
        buttons.forEach((button) => {
            button.classList.remove('button-keydown');
        })

    })
};