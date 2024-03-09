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
}

const PickerColor: FC<PickerColorProps> = ({ OnChange }) => {

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        OnChange({ [event.target.name]: event.target.value });
    }

    return (
        <div className={cnPickerColor('')}>
            <div className={cnPickerColor('Container')} onChange={handleOnChange}>
                <label htmlFor="color">Выбор цвета</label>
                <input type="range" id="color" min="0" max="255" name="red" className={cnPickerColor('Input')} />
                <input type="range" id="color" min="0" max="255" name="green" className={cnPickerColor('Input')} />
                <input type="range" id="color" min="0" max="255" name="blue" className={cnPickerColor('Input')} />
                <input type="range" id="color" min="0" max="1.1" step="0.1" name="opacity" className={cnPickerColor('Input')} />
            </div>
        </div>
    );
}

export { PickerColor };





