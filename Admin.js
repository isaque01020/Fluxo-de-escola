import { User, listaPerfis, cursos } from './User.js';

class Admin extends User {
    constructor(nome, email, nascimento, role = 'admin', ativo = true) {
        super(nome, email, nascimento, role, ativo)
    }

    criarCurso(curso) {
        cursos.push(curso);
    }

    excluirCurso(cursoDel) {
        cursos.forEach((curso) => {
            if (curso.toLowerCase() === cursoDel.toLowerCase()) {
                const pos = cursos.indexOf(curso);
                cursos.splice(pos, 1)
            }
        })
    }

    desativarPefil(nome) {
        listaPerfis.forEach((perfil) => {
            if (perfil.nome === nome) {
                perfil.ativo = false;
            }
        })
    }
}
