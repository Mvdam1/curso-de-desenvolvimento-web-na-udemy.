//Exemplo 1 
const nome = "matheus" ; 
const concatenacao = 'Olá '  + nome  + '!';
  console.log(concatenacao)

  // exemplo 2 , o mais pratico

  const template =  ` Olá ${nome}`
  console.log (template)

  //expressões 
console.log(`1+1=${1+1}`)

//função arrow 
const up = texto => texto.toUpperCase();
    console.log (`Ei... ${up('cuidado')}`)


    // a crase é necessaria para a função de interpolação funcionar, sem ela o compilador ira apresentar erro
    //sendo sincero, diria que é um trabalho desnecessario e esquecer disso pode ser fatal pra algo banal
    // vindo da linguagem ruby, sinto semelhança na parte de usar o $ para chamar a variavel, porem acredito que é maneira universal.
    