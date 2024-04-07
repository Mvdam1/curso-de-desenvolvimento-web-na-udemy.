
let preco = 19.90;
let desconto = 0.4; 
let precoComDesconto = preco * (1- desconto);
// Seguindo a logica que eu entendi, o motivo da respectiva função preco *(1- desconto)
// se da pelo fato de que se voce calcular somente o valor 0.4 * preco ira resultar no total do qual
// se deve ser descontado, ate porque pagamos por 0.6 do valor. Então, com essa expressão, entende-se que preço estará 
// multiplicando pelo valor e que o 1 representa o total (100%) menos o desconto (0.4)
console.log(precoComDesconto);
