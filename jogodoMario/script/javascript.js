let mario = document.querySelector(".mario");
let pipe = document.querySelector(".pipe");

function jump(){
    mario.classList.add("jump");

    setTimeout(function remove(){
        mario.classList.remove("jump")
    }, 
    500) /* Adiciona a class jump no mario e dps exclui para poder repetir a operacao */
}
 
document.addEventListener("keydown",jump)

let loop = setInterval(() => {
    let pipeposition = pipe.offsetLeft;
    let marioposition = +window.getComputedStyle(mario).bottom.replace('px',''); //Para converter para numero coloca o mais na frente

    if (pipeposition <= 145 && pipeposition >= 80 && marioposition <=145){
        pipe.style.animation = 'none';
        pipe.style.left = `${pipeposition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioposition}px`;

        mario.src = './imagens/game-over.png';
        mario.style.width = "75px"
        mario.style.marginLeft = "75px"

        clearInterval(loop); /* acaba o jogo o loop para */
    }

}, 10);