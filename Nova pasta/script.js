const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "O que voce ja decidiu oq irá faer no futuro?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Pretendo trabalhar/ faculdade"
            },
            {
                texto: "Não",
                afirmacao: "Ainda estou em duvia"
            }
        ]
    },
    {
        enunciado: "Voce quer fazer faculdade?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "Já decii o cuso."
            },
            {
                texto: "Não",
                afirmacao: "Não quero fazer faculdade? Não decide."
            }
        ]
    },
    {
        enunciado: "Voc já trabalha?",
        alternativas: [
            {
                texto: "Sim.",
                afirmacao: " Ja estou a um tempo."
            },
            {
                texto: "Não.",
                afirmacao: "Não quero/ estou a procura."
            }
        ]
    },
    {
        enunciado: "Ja tem seus projetos e futuro? Ja esta colocando m pratica?",
        alternativas: [
            {
                texto: "sim",
                afirmacao: "Ja estou trilhano meu caminho."
            },
            {
                texto: "Naõ",
                afirmacao: "Não tenho projetos/ Tenho preguiça de começar os projetos/ Não tenho tempo!"
            }
        ]
    },
    
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();
