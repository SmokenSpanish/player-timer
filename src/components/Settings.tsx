import {useState} from 'react';
import type {Player} from '../types';

type SettingsProps = {
    players: Player[];
    setPlayers: (players: Player[]) => void;
    close: () => void;
    mode: 'stopwatch' | 'timer';
    setMode: (mode: 'stopwatch' | 'timer') => void;
    startTime: number;
    setStartTime: (value: number) => void;
};

const Settings = ({
                      players,
                      setPlayers,
                      close,
                      mode,
                      setMode,
                      startTime,
                      setStartTime,
                  }: SettingsProps) => {
    const [localPlayers, setLocalPlayers] = useState<Player[]>([...players]);

    const handleNameChange = (index: number, name: string) => {
        const updated = [...localPlayers];
        updated[index].name = name;
        setLocalPlayers(updated);
    };

    const handleColorChange = (index: number, color: string) => {
        const updated = [...localPlayers];
        updated[index].color = color;
        setLocalPlayers(updated);
    };

    const addPlayer = () => {
        if (localPlayers.length >= 6) return;
        setLocalPlayers([
            ...localPlayers,
            {name: `Игрок ${localPlayers.length + 1}`, time: 0, color: getRandomColor()},
        ]);
    };

    const removePlayer = (index: number) => {
        setLocalPlayers(localPlayers.filter((_, i) => i !== index));
    };

    const handleSave = () => {
        // Если таймер — задаём всем игрокам стартовое время
        const updatedPlayers =
            mode === 'timer'
                ? localPlayers.map((p) => ({ ...p, time: startTime }))
                : localPlayers;

        setPlayers(updatedPlayers);
        close();
    };

    const getRandomColor = (): string => {
        // Возвращаем цвет в HEX, например #A1B2C3
        return '#' + Math.floor(Math.random() * 0xffffff).toString(16).padStart(6, '0');
    };

    return (
        <div className="settings-panel">
            <h2>Настройки игроков</h2>
            <div className="settings-mode">
                <label>
                    Режим:
                    <select value={mode} onChange={(e) => setMode(e.target.value as 'stopwatch' | 'timer')}>
                        <option value="stopwatch">Секундомер</option>
                        <option value="timer">Таймер</option>
                    </select>
                </label>

                {mode === 'timer' && (
                    <label>
                        Время (мин):
                        <input
                            type="number"
                            min={1}
                            value={startTime / 60}
                            onChange={(e) => setStartTime(Number(e.target.value) * 60)}
                        />
                    </label>
                )}
            </div>

            {localPlayers.map((player, index) => (
                <div key={index} className="player-settings">
                    <input
                        type="text"
                        value={player.name}
                        onChange={(e) => handleNameChange(index, e.target.value)}
                        maxLength={15}
                    />
                    <input
                        type="color"
                        value={player.color || '#cccccc'}
                        onChange={(e) => handleColorChange(index, e.target.value)}
                    />
                    {localPlayers.length > 2 && (
                        <button onClick={() => removePlayer(index)}>🗑️</button>
                    )}
                </div>
            ))}

            <button onClick={addPlayer} disabled={localPlayers.length >= 6}>
                ➕ Добавить игрока
            </button>

            <div className="settings-buttons">
                <button onClick={handleSave}>💾 Сохранить</button>
                <button onClick={close}>❌ Закрыть</button>
            </div>
        </div>
    );
};

export default Settings;
