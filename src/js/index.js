const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const resultado = document.querySelector('#resultado');
const calcular = document.querySelector('#calcular');

function calculoImc() {
    const pesoValue = parseFloat(peso.value);
    const alturaValue = parseFloat(altura.value);
    const imc = pesoValue / (alturaValue * alturaValue);
    let classificacao;

    if (imc >= 40) {
        classificacao = 'Obesidade Grave III';
    } else if (imc <= 39.9 && imc >= 30) {
        classificacao = 'Obesidade II';
    } else if (imc <= 29.9 && imc >= 25) {
        classificacao = 'Sobrepeso I';
    } else if (imc <= 24.9 && imc >= 18.5) {
        classificacao = 'Normal';
    } else if (imc <= 18.5) {
        classificacao = 'Magreza';
    }
    resultado.innerHTML = `${imc.toFixed(1)} - ${classificacao}`;
};

function validacaoAltura() {
    let alturaValue = altura.value;
    let comSucesso = (alturaValue !== "") ? true : false;
    return comSucesso;
}

function validacaoPeso() {
    let pesoValue = peso.value;
    let comSucesso = (pesoValue !== "") ? true : false;
    return comSucesso;
}

function colorBorder(seletor, cor) {
    seletor.style.borderColor = cor;
}

calcular.addEventListener('click', () => {
    const vAltura = validacaoAltura();
    const vPeso = validacaoPeso();
    if (vAltura && vPeso) {
        calculoImc()
        console.log('calculei')
        colorBorder(peso, 'green')
        colorBorder(altura, 'green');
    } else {
        colorBorder(peso, 'red');
        colorBorder(altura, 'red')
        console.log('preencha os dados')
    }
})

const limpar = document.querySelector('#limpar');
limpar.addEventListener('click', () => {
    if (peso.value === '' && altura.value === '' && resultado.innerHTML === '') {
        console.log('os dados já estão limpos')
    } else {
        altura.value = '';
        peso.value = '';
        resultado.innerHTML = '';
        console.log('dados limpos')
    }
})


function createTable() {
    const tableContainer = document.querySelector('.tabela')
    data.forEach((item) => {
        const template = `
            <tr>
                <td class="resultTable">${item.imc}</td>
                <td class="resultTable">${item.classificacao}</td>
                <td class="resultTable">${item.obesidade}</td>
            </tr>
        `;

        tableContainer.innerHTML += template;
    })

    return tableContainer;
}

createTable();
