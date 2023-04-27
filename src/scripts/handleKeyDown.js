export const handleKeyDown = () => {
    document.addEventListener('keydown', function (event) {
        console.log('event', event.key);
        const buttons = document.querySelectorAll('.button-default');
        buttons.forEach((button) => {
            const buttonFirstText = button.querySelector('.button-first-text');
            const firstText = buttonFirstText.innerText;
            if (firstText === event.key) {
                button.classList.add('button-keydown');
            }
        })
    });
};