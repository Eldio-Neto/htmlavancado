let video = document.getElementById("video1")
let controles = document.getElementById("controle")

function play() {
    video.play()
}
function pause() {
    video.pause()
}
function avancar() {
    video.currentTime += 15;
}
function voltar() {
    video.currentTime -= 15;
}

function diminuir() {
    video.playbackRate -= 0.1;
}

function aumentar() {
    video.playbackRate += 0.1;
}

function showDisplay(){

    controles.style.opacity = "1";
    controles.style.transition = "1s"

}

function hideDisplay(){
    controles.style.opacity = "0";
}
