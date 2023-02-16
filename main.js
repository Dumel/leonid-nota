'use strict'

const adicionar = document.getElementById('add')

// const adicionarCard = () => {
//     const container = document.getElementById('container')
//     container.innerHTML = container.innerHTML += '<div class="items"></div>'
// }

const adicionarCard = (aluno, nota) => {
    const container = document.getElementById('container')
    const novaDiv = document.createElement('div')
    novaDiv.classList.add('aluno')
    novaDiv.classList.add('nota')
    novaDiv.innerHTML = `<h2 class="aluno__title">${aluno}
                        </h2>
                        <span class="nota__aluno">${nota}
                        </span>`

    if( nota >=6)
        novaDiv.classList.add('azul')
    
    else
        novaDiv.classList.add('vermelho')
    

    container.appendChild(novaDiv)
    return 'teste'
}

// function adicionarCard() {
//     alert('Olá mundo')
// }

const handleClick = () => {
    const nomeAluno = prompt('Digite um nome para o card:\n')
    const notaAzul = prompt('Digite a nota:\n')
    adicionarCard(nomeAluno, notaAzul)
    // adicionarCard(notaAzul)
}

adicionar.addEventListener('click', handleClick)