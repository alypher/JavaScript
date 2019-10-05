var a = 3
let b = 4.2
let pqp = false //produto quimico perigoso... kkk
//let nao se declara novamente

const c = 5

//const nao pode fazer nova atribuicao

//console.log(a,b, c)

//--------

//let qualquer = 'legal'

//tipagem nao é necessária

//console.log(typeof qualquer)

//-------

//evitar nomes genéricos e siglas

//console.log(Number.isInteger(b))

//-----

let num = 3.214567

//console.log(num.toFixed(2)) //saida com no maximo 2 casas decimais

//console.log(num.toString(2)) //faz conversao para binario

//console.log(typeof num)

//-------

//console.log(7/0) // tipo infinity
//console.log("10" / 2) // divisao em string 
//console.log(0.1 + 0.7) //IEEE padrao que é usada para melhorar a perfonmance e diminuir a precisão

//-------

let raio = 5.5

//const area = Math.PI * Math.pow(raio, 2) //pi * raio elevado ao quadrado

//console.log(typeof Math) // Math é um objeto

//--------

let txt = "texto"

//console.log(txt.toUpperCase()) //Capslock
//console.log(txt.charAt(2)) // imprime o terceiro digito da variaveis (0,1,2,3....)
//console.log(txt.charCodeAt(2)) // imprime o codigo unicode HTML do terceiro digito da variaveis (0,1,2,3....)
//console.log(txt.indexOf("x")) //procura se a palavra vem a letra na variavel e imprime a posição
//console.log(txt.substring(1)) //imprimir apartir do indice 1 da variavel
//console.log(txt.substring(0,3)) //imprimir apartir do indice 0 até a 3 letra da variavel
//console.log('esse '.concat(txt).concat("!")) //concatenação de strings
//console.log('esse '+ txt + "!") //concatenação de strings
//console.log(`esse ${txt} !`) //concatenação de strings com template string
//console.log(txt.replace('t', 'd')) // substitui o 't' pelo 'd' na primeira ocorrencia
//console.log(txt.replace(/\d/g, 'd')) // substitui todas os numeros para o 'd'
//console.log(txt.replace(/\w/g, 'd')) // substitui todas as letras para o 'd'
//console.log('Ana, maria, jose'.split(',')) //converter string para array

//-------

//console.log(!true) //inverte o boo
//console.log(!!true) //valor original do boo

//--------

const array = [1,2,3,4,5] //criar array de 6 espaços

//console.log(array.length) //imprime o tamanho do array 
//array.push(6,7,8,9) //adiciona novos itens ao array
//array.pop() // exclui o ultimo valor
//delete array[2] //exclui item 2 do arrai
//console.log(array) // array é um objeto

//-------

const objeto = {}

objeto.nome = "alypher"
objeto.peso = 80

const objeto2 = 
{
    nome: "",
    peso: 0
}

//console.log(objeto2)

//---------

let nulo = null // variavel sem espaco de memoria alocada
let indefinido = Infinity // variavel nao iniciada

//----------

function soma(a=0,b=0) //funcao sem retorno
{
    console.log(a+b)
}

//soma(2,3)

function somaC(a,b=0) //funcao com retorno
{
    return a+b
}

//console.log(somaC(2,4))

const somaV = function (a, b) //atribuir funcao a uma variavel
{
    console.log(a+b)
}

//somaV(1,2)

const somaA = (a, b) => { 
    return a+b 
} // funcao arrow em uma variavel

// ou

const somaB = (a, b) => a + b // funcao arrow com return implicito em uma variavel

//console.log(somaA(1,3))

//-----------

a = 1
{
    a = 2
    console.log("dentro = " + a) //var tem escopo global quando nao usada dentro de uma função
}
console.log("fora = " + a)

a = 1
{
    let a = 2
    console.log("dentro = " + a) //let tem escopo de bloco neste caso e também global e de funcao
}
console.log("fora = " + a)

//-----------

console.log(variavel)
var variavel = 2
console.log(variavel)
//isso é o hoisting, que o js nao apresenta erro pq o interpretador joga a var para cima sem valor, mas declarada
//isso nao acontece com let, let nao é declarado

//-------------

