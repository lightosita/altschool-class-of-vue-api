import { ref } from "vue";


const ColorPicker = () => {
  const colors = ["green", "red", "blue", "purple"];
  let message = ref("Pick a color...");

  const matchColor = (value) => {
    // do a random color based on the array index;
    const randomNumber = Math.floor(Math.random() * colors.length); // 0 - 3

    if (colors[randomNumber] === value) {
      message.value = `You win... [answer: ${colors[randomNumber]}]`;
      return;
    }

    message.value = `You loose [answer: ${colors[randomNumber]}]`;
  };

  return {
    colors,
    message,
    matchColor,
  };
};
export default ColorPicker;
