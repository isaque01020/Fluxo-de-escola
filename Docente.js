import { User, listaPerfis, cursos } from "./User.js";
const [ alunosAprovados, alunosReprovados ] = [[], []];

class Docente extends User {
    constructor(nome, email, nascimento, role = 'docente', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    aprovarEstudante(nome) {
        listaPerfis.forEach((aluno) => {
            if (aluno.nome === nome)
                alunosAprovados.push(aluno);
        })
        console.log(`O aluno ${nome} foi aprovado pelo(a) docente ${this.nome}`);
    }
    
    reprovarEstudante(nome) {
        listaPerfis.forEach((aluno) => {
            if (aluno.nome === nome)
                alunosReprovados.push(aluno);
        })
        console.log(`O aluno ${nome} foi reprovado pelo(a) docente ${this.nome}`)
    }
}
