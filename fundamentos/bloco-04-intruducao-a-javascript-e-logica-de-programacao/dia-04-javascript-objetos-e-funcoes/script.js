// Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.

// let info = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   };
//   console.log('Bem-vinda, ', info.personagem)

// 2 -* Insira no objeto uma nova propriedade com o nome de chave 'recorrente' 
// e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:

// let character = {
//     personagem: 'Margarida',
//     origem: 'Pato Donald',
//     nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
//   }

//   character.recorrente = 'sim'
//   console.log(character)

// 3 - Faça um for/in que mostre todas as chaves do objeto. 

// for (index in character) {
//     console.log(index)
// }

// 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.

// for (chave in character){
//     console.log(character[chave])
// }

let character = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'sim',
  }


 let pairOfCharacter = {
     personagem: 'Tio Patinhas' ,
     origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178" ,
     nota: "O último Tio Patinhas",
     recorrente: 'sim',
 }

for(nova in character){
  if (pairOfCharacter[nova] === character[nova]){
      character.recorrente = 'Ambos Recorrentes'
      pairOfCharacter.recorrente = ''
      console.log(character[nova])
  }
  else{
character[nova] = character[nova] + " e " + pairOfCharacter[nova]
console.log(character[nova])
  }
} 

