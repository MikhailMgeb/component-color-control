import React, { useState } from 'react';

import { cnColorControl } from './ColorControl.classname';
import { ColorRGB, PickerColor } from './ColorControl/Picker/Picker';

import './ColorControl.css';
import { ColorArticle } from './ColorArticle/ColorArticle';

const DEFAULT_COLOR = { blue: 11, green: 148, red: 170, opacity: 0.7 };

const ColorControl = () => {
    const [color, setColor] = useState(DEFAULT_COLOR);

    const handleOnChange = (value: ColorRGB) => {

        console.log(color)
        setColor(prev => ({
            ...prev, ...value
        }));
    }

    const customColor = `rgb(${color.red}, ${color.blue}, ${color.green}, ${color.opacity})`;

    return (
        <div className={cnColorControl('')}>
            <PickerColor OnChange={handleOnChange} />
            <div className={cnColorControl('BoxColor')} style={{ backgroundColor: customColor }} />
            <ColorArticle title={'Самокритика'} text={'Что ты написал парень!'} color={color} />
        </div>
    );
}

export { ColorControl };
