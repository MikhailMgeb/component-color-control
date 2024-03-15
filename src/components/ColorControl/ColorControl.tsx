import React, { useState } from 'react';

import { cnColorControl } from './ColorControl.classname';
import { ColorRGB, PickerColor } from './Picker/Picker';

import './ColorControl.css';
import { ColorArticle } from '../ColorArticle/ColorArticle';

const DEFAULT_COLOR = { blue: 11, green: 148, red: 170, opacity: 0.7 };

const ColorControl = () => {
    const [color, setColor] = useState(DEFAULT_COLOR);

    const handleOnChange = (value: ColorRGB) => {
        console.log(value)
        setColor(prev => ({
            ...prev, ...value
        }));
    }

    const customColor = (color: ColorRGB) => {
        return `rgb(${color.red}, ${color.blue}, ${color.green}, ${color.opacity})`
    }

    return (
        <div className={cnColorControl('')}>
            <PickerColor OnChange={handleOnChange} currentColors={color} />
            <div className={cnColorControl('BoxColor')} style={{ backgroundColor: customColor(color) }} />
            <ColorArticle title={'Самокритика'} text={'Что ты написал парень!'} color={color} customColor={customColor} />
        </div>
    );
}

export { ColorControl };
