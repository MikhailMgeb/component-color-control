import React, { ChangeEvent, FC } from 'react';

import { cnColorControl } from '../ColorControl.classname';

import './Picker.css';

export type ColorRGB = {
    blue?: number;
    green?: number;
    red?: number;
    opacity?: number;
}

type PickerColorProps = {
    OnChange: (Color: ColorRGB) => void;
    currentColors: ColorRGB;
}

const PickerColor: FC<PickerColorProps> = ({ OnChange, currentColors }) => {
    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        OnChange({ ...currentColors, [event.target.name]: event.target.value });
    }

    return (
        <div className={cnColorControl('Picker')} onChange={handleOnChange}>
            <label htmlFor="color">Выбор цвета</label>
            <input type="range" id="color" min="0" max="255" name="red" defaultValue={currentColors.red} className={cnColorControl('InputRed')} />
            <input type="range" id="color" min="0" max="255" name="green" defaultValue={currentColors.green} className={cnColorControl('InputGreen')} />
            <input type="range" id="color" min="0" max="255" name="blue" defaultValue={currentColors.blue} className={cnColorControl('InputBlue')} />
            <input type="range" id="color" min="0" max="1.0" step="0.1" defaultValue={currentColors.opacity} name="opacity" className={cnColorControl('InputOpacity')} />
        </div>
    );
}

export { PickerColor };





