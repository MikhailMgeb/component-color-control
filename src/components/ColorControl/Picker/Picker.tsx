import React, { ChangeEvent, FC } from 'react';

import { cnColorControl } from '../ColorControl.classname';
import { Slider } from '@material-ui/core';

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
    const handleOnChange = (colorName: string, value: number | number[]) => {
        OnChange({ ...currentColors, [colorName]: value });
    }

    return (
        <div className={cnColorControl('Picker')}>
            <label htmlFor="color">Выбор цвета</label>
            <Slider min={0} max={255} className={cnColorControl('SliderRed')}
                value={currentColors.red} onChange={(event, value) => handleOnChange('red', value)} />
            <Slider min={0} max={255} className={cnColorControl('SliderGreen')}
                value={currentColors.green} onChange={(event, value) => handleOnChange('green', value)} />
            <Slider min={0} max={255} className={cnColorControl('SliderBlue')}
                value={currentColors.blue} onChange={(event, value) => handleOnChange('blue', value)} />
            <Slider min={0} max={1} step={0.1} className={cnColorControl('SliderOpacity')}
                value={currentColors.opacity} onChange={(event, value) => handleOnChange('opacity', value)} />

        </div>
    );
}

export { PickerColor };




