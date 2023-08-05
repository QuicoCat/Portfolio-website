let firstButton = document.getElementById("first-button");
let secondButton = document.getElementById("second-button");
let thirdButton = document.getElementById("third-button");
let fourthButton = document.getElementById("fourth-button");

const buttonOpener = (button, link) => {
    button.addEventListener('click', function() {
        window.open(link)
    })
}

buttonOpener(firstButton, './fictional-club/fictional-club.html');
buttonOpener(secondButton, 'https://github.com/QuicoCat/message_generator');
buttonOpener(thirdButton, 'https://github.com/QuicoCat/JavascriptCodecademy/blob/main/crediccardchecker.js');
buttonOpener(fourthButton, 'https://github.com/QuicoCat/JavascriptCodecademy/blob/main/mysteriousorganismchallenge.js');

