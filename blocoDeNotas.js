"use strict";
const notas = document.querySelector(".notes");

const adicionaTitulo = document.querySelector(".tituloNota");
const adicionaTexto = document.querySelector(".textoNota");
const botaoAdiciona = document.querySelector(".botaoAdicionar");
const deletarNotas = document.querySelector(".botaoDeletar");

let i = 0;
let article;
let inputTitle;
let textArea;
let buttons;
let deleteNote;

function adicionarNota(){
    article = document.createElement("ARTICLE");
    inputTitle = document.createElement("INPUT");
    textArea = document.createElement("TEXTAREA");
    buttons = document.createElement("DIV");
    deleteNote = document.createElement("BUTTON");

    article.appendChild(inputTitle);
    article.appendChild(textArea);
    article.appendChild(buttons);
    buttons.appendChild(deleteNote);
    notas.appendChild(article); 

    article.classList.add("boxNota");
    inputTitle.classList.add("boxNota_title");
    textArea.classList.add("boxNota_text");
    buttons.classList.add("button_action");
    deleteNote.classList.add("boxNota_btn");

    deleteNote.textContent = "Deletar";
}

function atribuirValor(){
    const yourNoteTitle = document.querySelector(".boxNota_title");
    const yourNoteText = document.querySelector(".boxNota_text");

    yourNoteTitle.value = adicionaTitulo.value;
    yourNoteText.value = adicionaTexto.value;

    adicionaTitulo.value = "";
    adicionaTexto.value = "";
}

function eliminarNota(deleteButton){
    deleteButton.addEventListener("click", (e)=>{
        let resposta = confirm("Tem certeza de que deseja excluir esta nota?");
        if(resposta){
            notas.removeChild(e.target.closest("ARTICLE"));
        }
    });
}

botaoAdiciona.addEventListener("click", ()=>{
    if(adicionaTitulo.value.length != 0 && adicionaTexto.value.length != 0){
        adicionarNota();
        atribuirValor();
        i++;
        const currentDeleteButton = document.querySelector(".boxNota_btn");
        eliminarNota(currentDeleteButton);
    }
});

deletarNotas.addEventListener("click", (e)=>{
    let resposta = confirm("Tem certeza de que deseja excluir Tudo?");
    if(resposta){
        while (notas.firstChild) {
            notas.removeChild(notas.firstChild);
        }
    }
});
