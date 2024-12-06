export const listaPerfis = [];
export const cursos = ['JavaScript', 'Python', 'C++', 'C#', 'Ruby', 'PHP', 'Java', 'HTML e CSS', 'Node.js', 'TypeScript', 'ReactJS', 'ReactNative'];

export class User {
    constructor(nome, email, nascimento, role = 'estudante', ativo = true) {
        this.nome = nome
        this.email = email
        this.nascimento = nascimento
        this.role = role
        this.ativo = ativo
    }

    criarPerfil() {
        listaPerfis.push(this);
        console.log('Perfil criado.')
    }

    apagarPerfil() {
        listaPerfis.forEach((perfil) => {
            if (perfil[this.nome] === this[this.nome]) {
                const pos = listaPerfis.indexOf(perfil)
                listaPerfis.splice(pos, 1);
                console.log('Perfil excluído.');
                
            }
        })
    }

    exibirInfos() {
        console.log(this);
    }

    exibirListaCursos() {
        console.log('LISTA DE CURSOS');
        for (let i = 0; i < cursos.length; i++) {
            console.log(`${i}: ${cursos[i]}`);
        }
    }

    matricularEmCurso(Ic) {
        if (!this.cursosMatriculados) {
            this.cursosMatriculados = [];
        }
        this.cursosMatriculados.push(cursos[Ic]);
        // console.log(`Matriculado no curso ${cursos[Ic]}.`);
        
    }

    exibirCursosMatriculado() {
        console.log(`Matriculado nos cursos:`, this.cursosMatriculados);
    }

}

novoUser = new User('Isaque', 'isaquebbg@gmail.com', '10-07-2007')
listaPerfis.criarPerfil()
console.log(listaPerfis);
