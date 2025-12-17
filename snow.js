const snowContainer = document.getElementById("snow-container");

function createSnow() {
    const snow = document.createElement("div");
    snow.classList.add("snowflake");
    snow.innerHTML = "❄";

    snow.style.left = Math.random() * window.innerWidth + "px";
    snow.style.fontSize = (Math.random() * 20 + 10) + "px";
    snow.style.animationDuration = (Math.random() * 3 + 3) + "s";

    snowContainer.appendChild(snow);

    setTimeout(() => {
        snow.remove();
    }, 6000);
}

setInterval(createSnow, 120);
