import React, { FC } from 'react';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';

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
    onChangeUser: (arg: ColorRGB) => void;
}

const ColorControl: FC<initialValueProps> = ({ value, onChangeUser }) => {

    const handleChange = (event: Event, newValue: number | number[]) => {
        const target = event.target as HTMLInputElement;

        onChangeUser({ [target.name]: newValue });
    };

    return (
        <div className={cnColorControl('')}>
            <label className={cnColorControl('Label')} htmlFor='ColorRed'>Красный</label>
            <Box sx={{ width: 150 }}>
                <Slider value={value.red} aria-label="Default" valueLabelDisplay="auto" name='red' min={0} max={255} step={1}
                    onChange={handleChange} />
            </Box>
            <label className={cnColorControl('Label')} htmlFor='ColorBlue'>Синий</label>
            <Box sx={{ width: 150 }}>
                <Slider value={value.blue} aria-label="Default" valueLabelDisplay="auto" name='blue' min={0} max={255} step={1}
                    onChange={handleChange} />
            </Box>
            <label className={cnColorControl('Label')} htmlFor='ColorGreen' >Зеленый</label>
            <Box sx={{ width: 150 }}>
                <Slider value={value.green} aria-label="Default" valueLabelDisplay="auto" name='green' min={0} max={255} step={1}
                    onChange={handleChange} />
            </Box>
            <label className={cnColorControl('Label')} >Прозрачность</label>
            <Box sx={{ width: 150 }}>
                <Slider value={value.opacity} aria-label="Default" valueLabelDisplay="auto" name='opacity' min={0} max={255} step={1}
                    onChange={handleChange} />
            </Box>
        </div>
    )
}

export { ColorControl };
