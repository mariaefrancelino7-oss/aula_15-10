// arquivo != pasta
/* 
const { useReducer } = require("react");
 */
// Arrays === lista

/* let compras = ["ovos","arroz","feijão branco",
"sabao","sabao em po","sabao em barra"];
//
// let busca = prompt("Digite o item a buscar");

// let listaFiltrada = compras.find(compra =>
    compra.toLowerCase().includes(busca.
    toLowerCase().trim())

// )
let encontar = compras.indexOf(listaFiltrada)
console.log(listaFiltrada); */


let users = ["pedro", "Ana", "Joana", "Diego", "Davi", "Messias", "Cristiano"];

let searchUser = prompt("Digite o nome do usuario");

// Trata entrada vazia ou apenas com espaços
if (!searchUser || searchUser.trim() === "") {
    console.log("Não pode enviar em branco");
} else {
    // Retorna o elemento ou undefined
    let user = users.find(user =>
        user.toLowerCase().includes(searchUser.toLowerCase().trim())
    );

    // Se user for undefined, significa que não encontrou
    if (!user) {
        console.log("User not found");
    } else {
        console.log("Usuário encontrado: ".concat(user));
        
        // Buscar o índice do usuário 
        let index = users.indexOf(user);
        
        // Alterar o elemento
        users[index] = "novo valor";
        console.log(users);
    }
}

