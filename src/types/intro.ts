/* 
typescript é uma super-set de javascript é uma versão tipada de javascript
typescript adiciona tipagem ao javascript que é considerada uma linguagem dinamica ou solta

para usar o typescript precisamos instlar o compilador dele 

usando npm (node package manager) que vem com o com o NODEJS 
usando o NPM se instala o typescript "npm install typescriot --save-dev"
pontro o pacote está instalado agora pode usar o "npx tsc" que é o compilador do ts

agora para editar o compilador do ts
use o "npx tsc --init ou npm --init"
para rodar um arquivo typescript tem que instalar o typescript e colocar o compilador tsc 
"npx ts-node src/build/date.ts"
*/ 

async function PassString (){
    let hello = await console.log("hello world!");
    return hello;
}

PassString();
