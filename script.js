document.body.addEventListener("keyup", (event) => {
    playSound(event.code.toLowerCase());
});

document.querySelector(".composer button").addEventListener("click", () => {
    let getLetter = document.querySelector("#input").value;

    // console.log(getLetter);

    playSoundComposition(getLetter);
});

function playSound(event) {
    let soundKey = document.querySelector(`#s_${event}`);
    let keyUp = document.querySelector(`div[data-key='${event}']`);

    if (event) {
        // play no sound de acordo com a tecla
        soundKey.currentTime = 0;
        soundKey.play();

        // adicionando classe
        keyUp.classList.add("active");

        // removendo classe .active apos 200ms
        setTimeout(() => {
            keyUp.classList.remove("active");
        }, 200);
    }
}

function playSoundComposition(composition) {
    // capturando texto digitado e transformando em um array
    let soundComposition = composition.split("");

    // console.log(soundComposition);

    let wait = 0;

    // passando um loop para a cada 250ms que vao ser incrementados + 250 dependendo da
    // quantidade de valores no array para os sons serem executados em ordem
    for (let i of soundComposition) {
        setTimeout(() => {
            playSound(`key${[i]}`);
        }, wait);

        wait += 250;
    }
}
