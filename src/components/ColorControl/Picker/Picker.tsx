import React, { ChangeEvent, FC } from 'react';

import { cnPickerColor } from './PickerСolor.classname';

import './Picker.css'

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
        OnChange({ [event.target.name]: event.target.value });
    }

    return (
        <div className={cnPickerColor('')}>
            <div className={cnPickerColor('Container')} onChange={handleOnChange}>
                <label htmlFor="color">Выбор цвета</label>
                <input type="range" id="color" min="0" max="255" name="red" value={currentColors.red} className={cnPickerColor('Input')} />
                <input type="range" id="color" min="0" max="255" name="green" value={currentColors.green} className={cnPickerColor('Input')} />
                <input type="range" id="color" min="0" max="255" name="blue" value={currentColors.blue} className={cnPickerColor('Input')} />
                <input type="range" id="color" min="0" max="1.1" step="0.1" value={currentColors.opacity} name="opacity" className={cnPickerColor('Input')} />
            </div>
        </div>
    );
}

export { PickerColor };





