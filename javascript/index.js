let firstButton = document.getElementById("first-button");

const buttonOpener = (button, link) => {
    button.addEventListener('click', function() {
        window.open(link)
    })
}

buttonOpener(firstButton, './fictional-club/fictional-club.html');


