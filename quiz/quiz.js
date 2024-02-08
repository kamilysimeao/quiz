const perguntasRespostas = [
    { pergunta: "Qual é a fonte primária de energia para a energia solar?", alternativas: ["Vento", "Água", "Sol", "Gás"], resposta: "Sol" },
    { pergunta: "O que é um painel solar?", alternativas: ["Dispositivo que converte água em energia elétrica", "Dispositivo que converte luz solar em energia elétrica", "Dispositivo que converte vento em energia elétrica", "Dispositivo que converte gás em energia elétrica"], resposta: "Dispositivo que converte luz solar em energia elétrica" },
    { pergunta: "Qual é o componente chave de um sistema de energia solar?", alternativas: ["Bateria", "Inversor", "Painel Solar", "Gerador"], resposta: "Painel Solar" },
    { pergunta: "Como é chamado o processo de converter a luz solar em eletricidade?", alternativas: ["Termodinâmico", "Fotovoltaico", "Eletromagnético", "Gravitacional"], resposta: "Fotovoltaico" },
    { pergunta: "Qual é a unidade de medida da potência de um painel solar?", alternativas: ["Watt", "Volt", "Ampere", "Ohm"], resposta: "Watt" },
    { pergunta: "Quais são os dois principais tipos de sistemas de energia solar?", alternativas: ["Fotovoltaico e Hidrelétrico", "Fotovoltaico e Eólico", "Fotovoltaico e Térmico", "Fotovoltaico e Nuclear"], resposta: "Fotovoltaico e Térmico" }
];

let indicePerguntaAtual = 0;
let pontuacao = 0;

function exibirPergunta() {
    const perguntaAtual = perguntasRespostas[indicePerguntaAtual];
    document.getElementById('pergunta').textContent = perguntaAtual.pergunta;
    
    const alternativasDiv = document.getElementById('alternativas');
    alternativasDiv.innerHTML = '';
    perguntaAtual.alternativas.forEach((alternativa, index) => {
        const input = document.createElement('input');
        input.type = 'radio';
        input.name = 'resposta';
        input.value = alternativa;
        input.id = `alternativa-${index}`;

        const label = document.createElement('label');
        label.textContent = alternativa;
        label.setAttribute('for', `alternativa-${index}`);

        const div = document.createElement('div');
        div.appendChild(input);
        div.appendChild(label);

        alternativasDiv.appendChild(div);
    });
}

function verificarResposta() {
    const respostaUsuario = document.querySelector('input[name="resposta"]:checked');
    if (!respostaUsuario) {
        alert('Por favor, selecione uma alternativa.');
        return;
    }

    const respostaCorreta = perguntasRespostas[indicePerguntaAtual].resposta;

    if (respostaUsuario.value === respostaCorreta) {
        pontuacao++;
    }

    indicePerguntaAtual++;

    if (indicePerguntaAtual < perguntasRespostas.length) {
        exibirPergunta();
    } else {
        exibirResultado();
    }
}

function exibirResultado() {
    let resultado = '';
    if (pontuacao > 3) {
        resultado = "Parabéns! Você ganhou um brinde.";
    } else {
        resultado = "Você não acertou o suficiente para ganhar um brinde. Tente novamente!";
    }
    document.getElementById('resultado').textContent = resultado;
}

// Iniciar o quiz
exibirPergunta();
