import React, { ChangeEvent, useState } from 'react';

import { cnColorControl } from './ColorControl.classname';

import './ColorControl.css';

const DEFAULT_COLOR = { blue: '116', green: '148', red: '170', opacity: '0.7' };

const ColorControl = () => {
    const [color, setColor] = useState(DEFAULT_COLOR);

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        const eventNameColor = event.target.name;

        setColor({ ...color, [eventNameColor]: event.target.value });
    }

    const customColor = `rgb(${color.red}, ${color.blue}, ${color.green}, ${color.opacity})`;

    return (
        <div className={cnColorControl('')}>
            <div className={cnColorControl('Container')} onChange={handleOnChange}>
                <label htmlFor="color">Выбор цвета</label>
                <input type="range" id="color" min="0" max="255" name="red" className={cnColorControl('Input')} />
                <input type="range" id="color" min="0" max="255" name="green" className={cnColorControl('Input')} />
                <input type="range" id="color" min="0" max="255" name="blue" className={cnColorControl('Input')} />
                <input type="range" id="color" min="0" max="1.1" step="0.1" name="opacity" className={cnColorControl('Input')} />
                <div className={cnColorControl('BoxColor')} style={{ backgroundColor: customColor }} />
            </div>
        </div>
    );
}

export { ColorControl };