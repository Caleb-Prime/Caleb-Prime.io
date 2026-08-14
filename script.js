document.addEventListener("mousemove", (e) => {

    for (let i = 0; i < 2; i++) {

        const dot = document.createElement("div");
        dot.className = "trail";

        dot.style.left = (e.clientX + (Math.random()*12-6)) + "px";
        dot.style.top = (e.clientY + (Math.random()*12-6)) + "px";

        document.body.appendChild(dot);

        setTimeout(() => {
            dot.remove();
        }, 600);

    }

});
