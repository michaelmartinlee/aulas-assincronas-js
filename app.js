const livros = require('./database');


// pegar o input

const readLine = require('readLine-sync');

const entradaInicial = readLine.question('Deseja buscar um livro?S/N');

// Se for sim, mostrar categorias disponíveis, perguntar qual categoria escolher, 
// Se for não, mostrar todos os livros em ordem crescente de páginas

if(entradaInicial.toLocaleUpperCase() === 'S') {
    console.log('Essas são as categorias disponiveis:');
    console.log(' /Produtividade','/Entreterimento e Ficcao',' /Desenvolvimento de softwares /');

    const entradaCategoria = readLine.question('Qual categoria você gostaria de escolher:');

    const retorno = livros.filter(livros => livros.categoria == entradaCategoria);

    console.table(retorno)
} else if(entradaInicial.toLocaleUpperCase() === 'N'){
    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas);
    console.log('Esses são todos o livros disponiveis:');
    console.table(livrosOrdenados);
} else {
    console.log('Somente inserir "s" para Sim ou "n" para NÃO')
    console.log('Por favor, reinicie o programa novamente')   
}
