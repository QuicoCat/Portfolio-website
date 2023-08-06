//Random joke project --------------------------------------------------------------------------------------------

const buttonOpener = (button, link) => {
    let firstButton = document.getElementById("first-button");
    let secondButton = document.getElementById("second-button");
    let thirdButton = document.getElementById("third-button");
    let fourthButton = document.getElementById("fourth-button");
        switch (button) {
            case 1:
                firstButton.addEventListener('click', function() {
                window.open(link);
                });
                break;
            case 2:
                secondButton.addEventListener('click', function() {
                    window.open(link);
                });
                break;
            case 3:
                thirdButton.addEventListener('click', function() {
                    window.open(link);
                });
                break;
            case 4:
                fourthButton.addEventListener('click', function() {
                    window.open(link);
                });
                break;
        }
}

buttonOpener(1, './fictional-club/fictional-club.html');
buttonOpener(2, 'https://github.com/QuicoCat/message_generator');
buttonOpener(3, 'https://github.com/QuicoCat/JavascriptCodecademy/blob/main/crediccardchecker.js');
buttonOpener(4, 'https://github.com/QuicoCat/JavascriptCodecademy/blob/main/mysteriousorganismchallenge.js');

const randomJoke = () => {
    let firstWords = ['What', 'Why'];
    let secondParts = [' do you call a', ' did the', ' do'];
    let thirdParts = [' well-balanced horse? Stable.', ' pile of cats? A meow-ntain.',
    ' cows wear bells? Because their horns don’t work.', ' hummingbirds hum? Because they don’t know the words!', ' bicycle fall over? Because it was two tired.',
' cookie go to the hospital? Because he felt crumby.', ' triangle say to the circle? You’re pointless.',
' tomato say to the other tomato during a race? Ketchup.']
    const numberRandomizer = () => {
        return Math.floor(Math.random() * 2)
    }
    let randomNumber = numberRandomizer();
    let joke = [];
    let firstWord = firstWords[randomNumber];
    joke.push(firstWord);
    if (firstWord === 'What') {
        randomNumber = numberRandomizer();
        let secondPart = secondParts[randomNumber];
        joke.push(secondPart);
        if (secondPart === ' do you call a') {
            randomNumber = numberRandomizer();
            let thirdPart = thirdParts[randomNumber];
            joke.push(thirdPart);
        } else if (secondPart === ' did the') {
            randomNumber = numberRandomizer() + 6;
            let thirdPart = thirdParts[randomNumber];
            joke.push(thirdPart);
        }
    } else if (firstWord === 'Why') {
        randomNumber = numberRandomizer() + 1;
        let secondPart = secondParts[randomNumber];
        joke.push(secondPart);
        if (secondPart === ' did the') {
            randomNumber = numberRandomizer() + 4;
            let thirdPart = thirdParts[randomNumber];
            joke.push(thirdPart);
        } else if (secondPart === ' do') {
            randomNumber = numberRandomizer() + 2;
            let thirdPart = thirdParts[randomNumber];
            joke.push(thirdPart);
        }
    }
    return joke.join('');
}


document.getElementById('first-test-button').addEventListener ('click', function() {
    let jokeText = randomJoke();
    let jokeLine = document.getElementById('joke');
    jokeLine.innerHTML = jokeText;
});

document.getElementById('photography-club-preview').addEventListener('click', function() {
    window.open('./fictional-club/fictional-club.html');
});

document.getElementById('hamburguer-anchor').addEventListener('click', function() {
    let navHeader = document.getElementById('nav-header');
    if (navHeader.style.display === 'none') {
        navHeader.style.display = 'flex';
    } else if (navHeader.style.display === 'flex') {
        navHeader.style.display = 'none';
    }
});