document.addEventListener('DOMContentLoaded', () => {
    const starContainer = document.querySelector('.stars');
    
    for (let i = 0; i < 200; i++) { // 별의 개수를 200개로 증가
        let star = document.createElement('div');
        star.className = 'star';
        star.style.top = Math.random() * window.innerHeight + 'px';
        star.style.left = Math.random() * window.innerWidth + 'px';
        star.style.animationDuration = Math.random() * 10 + 40 + 's';
        star.style.animationDelay = Math.random() * 50 + 's';
        starContainer.appendChild(star);
    }

    const telegramButton = document.getElementById('telegram-button');
    const telegramButtonLarge = document.getElementById('telegram-button-large');
    const floatingTelegramButton = document.getElementById('floating-telegram-button');

    const telegramUrl = 'https://t.me/andy2030';

    telegramButton.addEventListener('click', () => {
        window.open(telegramUrl, '_blank');
    });

    telegramButtonLarge.addEventListener('click', () => {
        window.open(telegramUrl, '_blank');
    });

    floatingTelegramButton.addEventListener('click', () => {
        window.open(telegramUrl, '_blank');
    });
});
