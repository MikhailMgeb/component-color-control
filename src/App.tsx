import React, { useState } from 'react';

import { ColorArticle } from './components/ColorArticle/ColorArticle';
import { ColorControl } from './components/ColorControl/ColorControl';
import type { ColorRGB } from './components/ColorControl/ColorControl';

const title = 'Тяни и крась';
const text = 'Сделайте собственный контрол для выбора цвета, состоящий из четырех input';

const INITIAL_COLORS = { blue: 11, green: 148, red: 170, opacity: 0.7 };

const changeRGB = (color: ColorRGB) => {
  return `rgb(${color.red}, ${color.blue}, ${color.green},${color.opacity})`;
}

const App = () => {
  const [colorText, setColorText] = useState(INITIAL_COLORS);
  const [colorBackground, setColorBackground] = useState(INITIAL_COLORS);

  const handleChangeColorText = (color: ColorRGB) => {
    setColorText((prev) => ({ ...prev, ...color }))
  }

  const handleChangeColorBackground = (color: ColorRGB) => {
    setColorBackground((prev) => ({ ...prev, ...color }))
  }

  const generalColors = {
    textColor: changeRGB(colorText),
    backgroundColor: changeRGB(colorBackground)
  }

  return (
    <div className="App">
      <ColorControl value={colorText} onChange={handleChangeColorText} />
      <ColorControl value={colorBackground} onChange={handleChangeColorBackground} />
      <ColorArticle title={title} text={text} colors={generalColors} />
    </div>
  );
}

export { App };
