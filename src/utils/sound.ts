const clickSound = new Audio('/sounds/click.wav');
const smallClickSound = new Audio('/sounds/small-click.wav');

export const playClick = () => {
    // Позволяет воспроизвести заново даже при быстром нажатии
    clickSound.currentTime = 0;
    clickSound.play().catch((e) => {
        // Иногда браузер может блокировать звук без взаимодействия
        console.warn('Звук не воспроизведён:', e);
    });
};

export const smallPlayClick = () => {
    // Позволяет воспроизвести заново даже при быстром нажатии
    smallClickSound.currentTime = 0;
    smallClickSound.play().catch((e) => {
        // Иногда браузер может блокировать звук без взаимодействия
        console.warn('Звук не воспроизведён:', e);
    });
};
