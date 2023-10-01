let { alunos, identificadorAluno } = require("../bancodedados/dadosAlunos");
let cursos = require("../bancodedados/dadoscursos");

const listarAlunos = (req, res) => {
    return res.status(200).json(alunos);
}


const retornarAluno = (req, res) => {
    const { id } = req.params;

    if (isNaN(Number(id)) || Number(id) <= 0) {
        return res.status(400).json({ mensagem: "O ID deve ser um número válido." });
    }


    const aluno = alunos.find((aluno) => {
        return aluno.id === Number(id);
    })


    if (!aluno) {
        return res.status(404).json({ mensagem: "O aluno não foi encontrado." });
    } else {
        res.status(200).json(aluno);
    }
}


const cadastrarAluno = (req, res) => {
    const { nome, sobrenome, idade, curso } = req.body

    if (!nome) {
        return res.status(400).json({ mensagem: "O nome é obrogatório." });
    }
    if (!sobrenome) {
        return res.status(400).json({ mensagem: "O sobrenome é obrigatório." });
    }
    if (!idade) {
        return res.status(400).json({ mensagem: "A idade é obigatória." });
    }
    if (!curso) {
        return res.status(400).json({ mensagem: "O curso é obrigatório." });
    }

    if (nome.trim() === "" || sobrenome.trim() === "" || curso.trim() === "") {
        return res.status(400).json({ menssagem: "O campo não pode estar vazio ou conter apenas espaço em branco" });
    }
    if (Number(idade) < 18) {
        return res.status(400).json({ menssagem: "O aluno deve ser maior de idade." });
    }
    if (!cursos.includes(curso)) {
        res.status(404).json({ mensagem: "O nome do curso informado não foi encontrado." })
    } else {
        const aluno = {
            id: identificadorAluno++,
            nome,
            sobrenome,
            idade,
            curso
        }

        alunos.push(aluno);
        return res.status(201).json(aluno);
    }

}

const excluirAluno = (req, res) => {
    const { id } = req.params;

    if (isNaN(Number(id)) || Number(id) <= 0) {
        return res.status(400).json({ mensagem: "O ID deve ser um número válido." })
    }


    const aluno = alunos.find((aluno) => {
        return aluno.id === Number(id)
    });



    if (!aluno) {
        return res.status(404).json({ mensagem: "O aluno a ser excluído não foi encontrado." })
    } else {
        alunos = alunos.filter((aluno) => {
            return aluno.id !== Number(id);
        })
    }
    return res.status(200).json(aluno);
}



const atualizarAluno = (req, res) => {
    const { id } = req.params;
    const { nome, sobrenome, idade, curso } = req.body;


    if (isNaN(Number(id)) || Number(id) <= 0) {
        return res.status(400).json({ mensagem: "O ID deve ser um número válido." });
    }


    const aluno = alunos.find((aluno) => {
        return aluno.id === Number(id);
    })

    if (!aluno) {
        return res.status(404).json({ mensagem: "O aluno não existe" })
    }

    if (!nome) {
        return res.status(400).json({ mensagem: "O nome é obrogatório." });
    }
    if (!sobrenome) {
        return res.status(400).json({ mensagem: "O sobrenome é obrigatório." });
    }
    if (!idade) {
        return res.status(400).json({ mensagem: "A idade é obigatória." });
    }
    if (!curso) {
        return res.status(400).json({ mensagem: "O curso é obrigatório." });
    }

    if (nome.trim() === "" || sobrenome.trim() === "" || curso.trim() === "") {
        return res.status(400).json({ menssagem: "O campo não pode estar vazio ou conter apenas espaço em branco" });
    }
    if (Number(idade) < 18) {
        return res.status(400).json({ menssagem: "O aluno deve ser maior de idade." });
    }
    if (!cursos.includes(curso)) {
        res.status(404).json({ mensagem: "O nome do curso informado não foi encontrado." })
    } else {
        aluno.nome = nome;
        aluno.sobrenome = sobrenome;
        aluno.idade = idade;
        aluno.curso = curso;

        return res.status(204).send();
    }
}


const atualizarCursoAluno = (req, res) => {
    const { id } = req.params;
    const { nome, sobrenome, idade, curso } = req.body;


    if (isNaN(Number(id)) || Number(id) <= 0) {
        return res.status(400).json({ mensagem: "O ID deve ser um número válido." });
    }


    const aluno = alunos.find((aluno) => {
        return aluno.id === Number(id);
    })

    if (!aluno) {
        return res.status(404).json({ mensagem: "O aluno não existe" })
    }

    if (!nome) {
        return res.status(400).json({ mensagem: "O nome é obrigatório." });
    }
    if (!sobrenome) {
        return res.status(400).json({ mensagem: "O sobrenome é obrigatório." });
    }
    if (!idade) {
        return res.status(400).json({ mensagem: "A idade é obigatória." });
    }
    if (!curso) {
        return res.status(400).json({ mensagem: "O curso é obrigatório." });
    }

    if (nome.trim() === "" || sobrenome.trim() === "" || curso.trim() === "") {
        return res.status(400).json({ menssagem: "O campo não pode estar vazio ou conter apenas espaço em branco" });
    }
    if (Number(idade) < 18) {
        return res.status(400).json({ menssagem: "O aluno deve ser maior de idade." });
    }
    if (!cursos.includes(curso)) {
        res.status(404).json({ mensagem: "O nome do curso informado não foi encontrado." })
    } else {
        aluno.curso = curso;

        return res.status(204).send();
    }
}




module.exports = {
    listarAlunos,
    retornarAluno,
    cadastrarAluno,
    excluirAluno,
    atualizarAluno,
    atualizarCursoAluno

}