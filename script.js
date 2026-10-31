const nav = document.querySelector('#nav');
document.querySelector('.menu-toggle').addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));

document.querySelector('#blowBtn').addEventListener('click', () => {
  document.querySelector('.candles').classList.add('off');
  document.querySelector('#cakeMessage').textContent = 'Wish made! May all your dreams come true. ❤️';
  document.querySelector('#blowBtn').textContent = '✨ Wish sent!';
});

document.querySelector('#openLetter').addEventListener('click', () => {
  document.querySelector('#letterPaper').classList.toggle('show');
  document.querySelector('#openLetter').textContent =
    document.querySelector('#letterPaper').classList.contains('show') ? '♡ Your letter is open ♡' : 'Tap to open your letter';
});

const reasons = [
  'You have the most adorable smile. 😍',
  'You make even ordinary days feel special.',
  'Your laugh is my favourite sound.',
  'You are beautifully, wonderfully you.',
  'Talking to you is my favourite part of the day.',
  'You make me want to become a better person.',
  'There is always something new to adore about you.',
  'Because life feels sweeter with you in it. 🌻'
];
let reasonIndex = 0;
function showReason() {
  document.querySelector('#reasonNumber').textContent = `Reason #${reasonIndex + 1}`;
  document.querySelector('#reasonText').textContent = reasons[reasonIndex];
}
document.querySelector('#nextReason').addEventListener('click', () => { reasonIndex = (reasonIndex + 1) % reasons.length; showReason(); });
document.querySelector('#prevReason').addEventListener('click', () => { reasonIndex = (reasonIndex - 1 + reasons.length) % reasons.length; showReason(); });

document.querySelector('#openGift').addEventListener('click', () => {
  const box = document.querySelector('#openGift');
  box.classList.toggle('open');
  document.querySelector('#giftMessage').textContent = box.classList.contains('open')
    ? 'Surprise! My biggest gift is getting to know you. I love you! 💗'
    : 'Open your gift 🎁';
});
