const generateRandomNum = (min = 1, max = 50) => Math.floor(Math.random() * (max - min)) + min;

export default generateRandomNum;
