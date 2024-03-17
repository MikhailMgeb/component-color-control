import { FC } from 'react';

import { cnColorArticle } from './ColorArticle.classname';

import './ColorArticle.css';

type ColorArticleProps = {
    title: string;
    text: string;
    colors: {
        textColor: string;
        backgroundColor: string;
    };
}

const ColorArticle: FC<ColorArticleProps> = ({ title, text, colors }) => {
    return (
        <div className={cnColorArticle('')}>
            <h2 className={cnColorArticle('Title')} style={{ color: colors.textColor }}>{title}</h2>
            <p className={cnColorArticle('Text')} style={{ background: colors.backgroundColor }}>{text}</p>
        </div>
    );
}

export { ColorArticle };