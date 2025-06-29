import {smallPlayClick} from "../utils/sound.ts";

type PlayerTimerProps = {
    name: string;
    time: number;
    active: boolean;
    color?: string;
    onReset: () => void;
    onClick: () => void;
    onAdjustTime: (delta: number) => void;
    mode: 'stopwatch' | 'timer';
};

function formatTime(seconds: number): string {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;

    if (h > 0) {
        return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    } else {
        return `${m}:${s.toString().padStart(2, '0')}`;
    }
}

function getLuminance(hexColor: string): number {
    // hexColor в формате '#rrggbb'
    const r = parseInt(hexColor.substr(1, 2), 16) / 255;
    const g = parseInt(hexColor.substr(3, 2), 16) / 255;
    const b = parseInt(hexColor.substr(5, 2), 16) / 255;

    // по формуле яркости
    return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

const PlayerTimer = ({
                         name,
                         time,
                         active,
                         color = '#ccc',
                         onReset,
                         onClick,
                         onAdjustTime,
                         mode
                     }: PlayerTimerProps) => {
    const luminance = getLuminance(color);
    const isDark = luminance < 0.4;

    return (
        <div
            role="button"
            tabIndex={0}
            onClick={onClick}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    onClick();
                    e.preventDefault();
                }
            }}
            className={`player-card ${active ? 'active' : ''}`}
            style={{backgroundColor: color, cursor: 'pointer'}}
        >
            <div className="player-name">{name}</div>
            <div className={`player-time
                            ${mode === 'timer' && time <= 60 ? 'warning' : ''}
                            ${isDark ? 'player-time--light-text' : ''}
                            `}
            >
                {formatTime(time)}
            </div>

            {/* Крестовина */}
            <div className="dpad">
                <button className="dpad-button dpad-up" onClick={(e) => {
                    smallPlayClick();
                    e.stopPropagation();
                    onAdjustTime(300);
                }}>＋5
                </button>
                <button className="dpad-button dpad-left" onClick={(e) => {
                    smallPlayClick();
                    e.stopPropagation();
                    onAdjustTime(-60);
                }}>−1
                </button>
                <button className="dpad-button dpad-right" onClick={(e) => {
                    smallPlayClick();
                    e.stopPropagation();
                    onAdjustTime(60);
                }}>＋1
                </button>
                <button className="dpad-button dpad-down" onClick={(e) => {
                    smallPlayClick();
                    e.stopPropagation();
                    onAdjustTime(-300);
                }}>−5
                </button>
            </div>

            {/* Сброс */}
            <button className="reset-button"
                    onClick={(e) => {
                        smallPlayClick();
                        e.stopPropagation();
                        onReset();
                    }}
                    title="Сбросить таймер">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path
                        d="M13 3a9 9 0 1 0 8.94 10h-2.02a7 7 0 1 1-1.76-5.29l-2.16 2.17H21V3l-2.59 2.59A8.96 8.96 0 0 0 13 3z"/>
                </svg>
            </button>
        </div>
    );
};

export default PlayerTimer;
