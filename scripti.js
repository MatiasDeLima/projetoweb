/*=============== MOSTRAR OPÇÕES ===============*/
const createContainer = document.getElementById('create-container'),
      buttonCreate = document.getElementById('button-create'),
      formClose = document.getElementById('form-close')

/* CHAMA O MENU */
if(buttonCreate){
    buttonCreate.addEventListener('click', () =>{
        createContainer.classList.add('show-form')
    })
}

/* FECHA O MENU */
if(formClose){
    formClose.addEventListener('click', () =>{
        createContainer.classList.remove('show-form')
    })
}


/*=============== LOGICA DO PROGRAMA ===============*/

class Aluno {

    nome;
  
    matricula;
  
    nota1;
  
    nota2;
  
    nota3;
  
    constructor(nome, matricula, n1, n2, n3) {
  
       this.nome = nome;
  
       this.matricula = matricula;
  
       this.nota1 = n1;
  
       this.nota2 = n2;
  
       this.nota3 = n3;
  
    }
  
    exibeInfo() {
  
       return `Aluno: ${this.nome} - mat: ${this.matricula}
  
      Notas: N1: ${this.nota1} - N2: ${this.nota2} - N3: ${this.nota3}
  
      Média:${this.calculaMedia()} 
  
      `;
  
    }
  
    calculaMedia() {
  
       return ((this.nota1 + this.nota2 + this.nota3) / 3).toFixed(2);
  
    }

    criaAluno(dados) {
        // Cria aluno na memoria
        const bancoDeNotas = {
            usuarios: [
              {
                username: 'lucas',
              }
            ],
            alunos: [
              {
                id: 1,
                nome: 'lucas',
                matricula: 123,
                nota1: 4,
                nota2: 4,
                nota3: 4,
              }
            ],
        
        }

        bancoDeNotas.notas.push({
           id: bancoDeNotas.notas.length + 1,
           nome: dados.nome,
           matricula: dados.matricula,
           nota1: dados.nota1,
           nota2: dados.nota2,
           nota3: dados.nota3,
  
        });

        // cria post no HTML
     
    }
}


let $meuForm = document.querySelector('.container__form');

$meuForm.addEventListener('submit', function criaAlunoController(infosDoEvent) {
  infosDoEvent.preventDefault();

  let aluno = new Aluno();

  let $nome = aluno.nome;
  let $matricula = aluno.matricula;
  let $nota1 = aluno.nota1;
  let $nota2 = aluno.nota2;
  let $nota3 = aluno.nota3;
    
  $nome = document.querySelector('nome-input');
  $matricula = document.querySelector('matricula-input');
  $nota1 = document.querySelector('nota1-input');
  $nota2 = document.querySelector('nota2-input');
  $nota3 = document.querySelector('nota3-input');

  let $listaDeAlunos = document.querySelector('.dados__tabela');
  $listaDeAlunos.insertAdjacentHTML('afterbegin', `<tr> <td>Nome</td> <td>Matricula</td> <td>Nota 1</td> <td>Nota 2</td> <td>Nota 3</td> <td>Média</td></tr><td>${$nome.value}</td><td>${$matricula.value}</td><td>${$nota1.value}</td><td>${$nota2.value}</td><td>${$nota3.value}${$media}</td>`)
    
})
