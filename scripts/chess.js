const main = document.querySelector("main");

(() => {
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            const div = document.createElement("div");
            if ((i + j) % 2 === 0) {
                div.style.background = "white";
            } else {
                div.style.background = "black";
            }
            main.appendChild(div);
        }
    }
})();
