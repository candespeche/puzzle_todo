import {colors} from './index';

const generateRandomColor = () => {
  const number = Math.floor(Math.random() * 3);
  return colors.randomColors[number];
};

export default {generateRandomColor};
