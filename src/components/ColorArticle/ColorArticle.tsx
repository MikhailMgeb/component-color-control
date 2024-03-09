import { FC } from 'react';

import { cnColorArticle } from './ColorArticle.classname';
import { ColorRGB } from '../ColorControl/Picker/Picker';

import './ColorArticle.css';

type ColorArticleProps = {
    title: string;
    text: string;
    color: ColorRGB;
}

const ColorArticle: FC<ColorArticleProps> = ({ title, text, color }) => {

    const customColor = `rgb(${color.red}, ${color.blue}, ${color.green}, ${color.opacity})`;

    return (
        <div className={cnColorArticle('')}>
            <h2 className={cnColorArticle('Title')} style={{ color: customColor }}>{title}</h2>
            <p className={cnColorArticle('Text')} style={{ color: customColor }}>{text}</p>
        </div>
    );
}

export { ColorArticle };