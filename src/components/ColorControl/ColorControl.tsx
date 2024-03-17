import React, { ChangeEvent, FC } from 'react';
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
    onChange: (arg: ColorRGB) => void;
}

const ColorControl: FC<initialValueProps> = ({ value, onChange }) => {

    const changeColor = (event: ChangeEvent<HTMLInputElement>) => {
        onChange({ [event.target.name]: event.target.value });
    }

    return (
        <div className={cnColorControl('')}>
            <label className={cnColorControl('Label')} htmlFor='ColorRed'>Красный</label>
            <Box sx={{ width: 150 }}>
                <Slider value={value.red} aria-label="Default" valueLabelDisplay="auto" name='red' min={0} max={255} step={1}
                    onChange={(event: any) => { changeColor(event) }} />
            </Box>
            <label className={cnColorControl('Label')} htmlFor='ColorBlue'>Синий</label>
            <Box sx={{ width: 150 }}>
                <Slider value={value.blue} aria-label="Default" valueLabelDisplay="auto" name='blue' min={0} max={255} step={1}
                    onChange={(event: any) => { changeColor(event) }} />
            </Box>
            <label className={cnColorControl('Label')} htmlFor='ColorGreen' >Зеленый</label>
            <Box sx={{ width: 150 }}>
                <Slider value={value.green} aria-label="Default" valueLabelDisplay="auto" name='green' min={0} max={255} step={1}
                    onChange={(event: any) => { changeColor(event) }} />
            </Box>
            <label className={cnColorControl('Label')} >Прозрачность</label>
            <Box sx={{ width: 150 }}>
                <Slider value={value.opacity} aria-label="Default" valueLabelDisplay="auto" name='opacity' min={0} max={255} step={1}
                    onChange={(event: any) => { changeColor(event) }} />
            </Box>
        </div>
    )
}

export { ColorControl };
