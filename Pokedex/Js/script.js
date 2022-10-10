let nome_pok = document.querySelector(".nome")
let id_pok = document.querySelector(".id")
let img_pok = document.querySelector(".pokemon_img")
let pesquisar = document.querySelector(".search")
let enviar = document.querySelector(".send")
let prev = document.querySelector(".prev")
let next = document.querySelector(".next")
let numero_id = 1
let id_do_pok = 1
async function buscar_pok(pokemon){
    let search = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`
    )
    // -----Pego os dados da API e leio com o JSON

    console.log(search)
    if (search.status === 200){
        let dados = await search.json();
        nome_pok.innerHTML = dados.name;
        id_pok.innerHTML = dados.id;
        img_pok.src = dados["sprites"]["versions"]["generation-v"]["black-white"]["animated"]["front_default"];
        id_do_pok = dados.id //assim se torna uma variavel global
    }else{
        nome_pok.innerHTML = 'Not Found :C';
        id_pok.innerHTML = '';
        img_pok.style.display = 'none';
    }

}

function executar(){
    let pesquisar = document.querySelector(".search")
    let pesqui = pesquisar.value
    buscar_pok(pesqui)
}

function carregarprox(){
    if (id_do_pok>= 1 && id_do_pok<=320)
    id_do_pok = id_do_pok + 1
    buscar_pok(id_do_pok)


}
function carregarant(){
    if (id_do_pok === 1){
        id_do_pok ===1
        buscar_pok(id_do_pok)
    }
    else {
        id_do_pok = id_do_pok - 1
        buscar_pok(id_do_pok)
    }
}
