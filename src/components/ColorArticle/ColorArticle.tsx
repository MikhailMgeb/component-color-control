import { FC } from 'react';

import { cnColorArticle } from './ColorArticle.classname';
import { ColorRGB } from '../ColorControl/Picker/Picker';

import './ColorArticle.css';

type ColorArticleProps = {
    title: string;
    text: string;
    color: ColorRGB;
    customColor: (arg1: ColorRGB) => string;
}

const ColorArticle: FC<ColorArticleProps> = ({ title, text, color, customColor }) => {
    return (
        <div className={cnColorArticle('')}>
            <h2 className={cnColorArticle('Title')} style={{ color: customColor(color) }}>{title}</h2>
            <p className={cnColorArticle('Text')} style={{ color: customColor(color) }}>{text}</p>
        </div>
    );
}

export { ColorArticle };