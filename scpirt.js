const objs = [
    {
     nome: "Jhonatan",
     idade: 32,
     esta_trabalhando: true,
     detalhes_profissao: {
         profissao: "programador",
        empresa: "DevSerafim",
    },
    hobbies: ["Eletrônica", "Fotografia", "Ler" ],
    },
    {
    nome: "Amanda",
    idade: 30,
    esta_trabalhando: false,
    detalhes_profissao: {
        profissao: null,
        empresa: null,
    },
       hobbies: ["Comer", "Fotografia"],
       }
]

//  JSON
//  converter ojeto para json

const jsonData = JSON.stringify(objs)
console.log(jsonData)
console.log(typeof jsonData)

// converter json para objeto
const objData = JSON.parse(jsonData);

console.log(objData)
console.log(typeof objData)

objData.map((pessoa) => {
    console.log(pessoa.nome)
});









