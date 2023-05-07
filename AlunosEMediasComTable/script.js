var notas = [[1,2,3],[6,5,3],[10,9,6]];
var alunos = ["Natan","Carlos","Arthur"];
function calculaMediasEAprova(notas1){
    let statusAluno = [];
    let media = 0;
    let medias = [];
    for(let i = 0; i < notas.length; i++){
        let soma = 0;
        for(let j = 0; j < notas[i].length; j++){
            soma = soma + notas1[i][j];
            media = soma/3;
        }
        medias[i] = media.toFixed(1);
        if(medias[i]>=7){
            statusAluno[i] = "Aprovado!"
        }else{
            statusAluno[i] = "Recuperação!"
        }
    }
    var tabela = {
        Alunos: alunos,
        Médias: medias,
        Status: statusAluno
    }
    return tabela;
}

console.table(calculaMediasEAprova(notas));
