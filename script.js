document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById('display');
    const buttons = document.querySelectorAll('#btn');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const buttonText = button.textContent;

            if (buttonText === '=') {
                try {
                    display.value = eval(display.value);
                } catch(error) {
                    display.value = 'Erro';
                }
            } else {
         
                display.value += buttonText;
            }

            audio();
        });
    });
  
});

function audio() {
    const audio = document.getElementById('myAudio');
    audio.play();
}
