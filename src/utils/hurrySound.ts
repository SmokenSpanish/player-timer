let hurryAudio: HTMLAudioElement | null = null;

export const playHurrySound = () => {
    if (!hurryAudio) {
        hurryAudio = new Audio('/sounds/hurry.mp3');
        hurryAudio.loop = true;
    }

    if (hurryAudio.paused) {
        hurryAudio.currentTime = 0;
        hurryAudio.play().catch((e) => {
            console.warn('Ошибка воспроизведения hurrySound:', e);
        });
    }
};

export const stopHurrySound = () => {
    if (hurryAudio && !hurryAudio.paused) {
        hurryAudio.pause();
        hurryAudio.currentTime = 0;
    }
};

