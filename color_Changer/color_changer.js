document.addEventListener("DOMContentLoaded", () => {
  // 1. Select elements using getElementById
  const colorBox = document.getElementById("color-box");
  const changeColorBtn = document.getElementById("change-color-btn");

  // 2. Function to generate a random hexadecimal color code
  function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  // 3. Add event listener to the button
  changeColorBtn.addEventListener("click", () => {
    const randomColor = getRandomColor();
    colorBox.style.backgroundColor = randomColor;
  });
});
