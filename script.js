// Mobile Navigation
const nav = document.querySelector('#nav');
const menuToggle = document.querySelector('.menu-toggle');

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
});

nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('open');
    });
});


// Birthday Cake - Blow Candles
const blowBtn = document.querySelector('#blowBtn');

blowBtn.addEventListener('click', () => {
    document.querySelector('.candles').classList.add('off');

    document.querySelector('#cakeMessage').textContent =
        'Wish made! May all your dreams come true. ❤️';

    blowBtn.textContent = '✨ Wish sent to your Santa 😚!';
});


// Open Love Letter
const openLetter = document.querySelector('#openLetter');
const letterPaper = document.querySelector('#letterPaper');

openLetter.addEventListener('click', () => {
    letterPaper.classList.toggle('show');

    openLetter.textContent = letterPaper.classList.contains('show')
        ? '♡ Your letter is open ♡'
        : 'Tap to open your letter';
});


// Gift Box Surprise
const giftBox = document.querySelector('#openGift');
const giftMessage = document.querySelector('#giftMessage');

giftBox.addEventListener('click', () => {
    giftBox.classList.toggle('open');

    if (giftBox.classList.contains('open')) {
        giftMessage.textContent =
            'Surprise! My biggest gift is getting to know you. I love you! 💗';
    } else {
        giftMessage.textContent = 'Open your gift 🎁';
    }
});