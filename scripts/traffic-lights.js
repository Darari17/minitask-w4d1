(() => {
  try {
    const red = document.querySelector(".red");
    const yellow = document.querySelector(".yellow");
    const green = document.querySelector(".green");

    red.style.backgroundColor = "#FF0000";
    yellow.style.backgroundColor = "darkgoldenrod";
    green.style.backgroundColor = "darkgreen";

    setTimeout(() => {
      red.style.backgroundColor = "darkred";
      yellow.style.backgroundColor = "yellow";
    }, 3000);

    setTimeout(() => {
      yellow.style.backgroundColor = "darkgoldenrod";
      green.style.backgroundColor = "#7FFF00";
    }, 5000);
    setTimeout(() => {
      green.style.backgroundColor = "darkgreen";
      red.style.backgroundColor = "red";
    }, 8000);
  } catch (error) {}
})();
