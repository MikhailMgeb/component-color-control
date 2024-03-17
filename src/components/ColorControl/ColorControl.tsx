import React, { ChangeEvent, FC } from 'react';

import { cnColorControl } from './ColorControl.classname';

import './ColorControl.css';

export type ColorRGB = {
    red?: number;
    blue?: number;
    green?: number;
    opacity?: number;
}

type initialValueProps = {
    value: {
        red: number;
        blue: number;
        green: number;
        opacity: number;
    }
    onChange: (arg: ColorRGB) => void;
}

const ColorControl: FC<initialValueProps> = ({ value, onChange }) => {

    const changeColor = (event: ChangeEvent<HTMLInputElement>) => {
        onChange({ [event.target.name]: event.target.value });
    }

    return (
        <div className={cnColorControl('')}>
            <label className={cnColorControl('Label')} htmlFor='ColorRed'>Красный</label>
            <input className={cnColorControl('Input')}
                id='ColorRed'
                type='range'
                name='red'
                min={0}
                max={255}
                step={1}
                value={value.red}
                onChange={changeColor}
            />
            <label className={cnColorControl('Label')} htmlFor='ColorBlue'>Синий</label>
            <input className={cnColorControl('Input')}
                id='ColorBlue'
                type='range'
                name='blue'
                min={0}
                max={255}
                step={1}
                value={value.blue}
                onChange={changeColor}
            />
            <label className={cnColorControl('Label')} htmlFor='ColorGreen' >Зеленый</label>
            <input className={cnColorControl('Input')}
                id='ColorGreen'
                type='range'
                name='green'
                min={0}
                max={255}
                step={1}
                value={value.green}
                onChange={changeColor}
            />
            <label className={cnColorControl('Label')} >Прозрачность</label>
            <input className={cnColorControl('Input')}
                id='ColorOpacity'
                type='range'
                name='opacity'
                min={0}
                max={1}
                step={0.1}
                value={value.opacity}
                onChange={changeColor}
            />
        </div>
    )
}

export { ColorControl };
