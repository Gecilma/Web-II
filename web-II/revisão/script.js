/*


// variáveis
 
var nome; //global
let idade; // escopo


function teste(){
    let vitor
    var carol
}


//funções  //sempre tem parenteses
 
function nome_funcao(a, b){
    return a + b
}


//estruturas


for (let i = 0; i<10; i++){
     console.log(i)
}




//objeto


var turma = {
    curso: " Informática",
    alunos: 14,
    professor:{
        nome: "Fabiano" ,
        idade: 38
    }
       


}


console.log(turma.professor)
*/





turma = [
    {
        curso: "Técnico em Biocombustíveis",
        disciplina: "Projeto Integrador",
        professor: "Eliomar Gomes",
        turno: "Vespertino",
        alunos: 20
    },
    {
        curso: "Técnico em Informática",
        disciplina: "Desenvolvimento Web II",
        professor: "Fabiano Vaz",
        turno: "Noturno",
        alunos: 14
    },
]

//objeto.adicionarEvento('tipo', 'função')

document.querySelector("#carregar").addEventListener('click', mostrar)
document.querySelector("#navegar").addEventListener('click', proximo)

function mostrar(){
    document.querySelector("#curso").textContent = turma[0].curso
    document.querySelector("#disc").textContent = turma[0].disciplina
    document.querySelector("#professor").textContent = turma[0].professor
    document.querySelector("#turno").textContent = turma[0].turno
    document.querySelector("#qtd").textContent = turma[0].alunos
}
var cont = 0
function proximo(){
    document.querySelector("#curso").textContent = turma[cont].curso
    document.querySelector("#disc").textContent = turma[cont].disciplina
    document.querySelector("#professor").textContent = turma[cont].professor
    document.querySelector("#turno").textContent = turma[cont].turno
    document.querySelector("#qtd").textContent = turma[cont].alunos
    cont++
}

function teste(){
    /* for (let i=0; i < 2; i++) {
        const prof = turma[i].professor
        alert(prof)
    } */

    /* turma.forEach(item => {
        const prof = item.professor
        alert(prof)
    }); */

    /* turma.map(item => {
        const prof = item.professor
        alert(prof)
    }); */

}
