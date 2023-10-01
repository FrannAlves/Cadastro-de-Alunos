const express = require("express");
const alunos = require("./controladores/alunos");

const rotas = express();


rotas.get("/alunos", alunos.listarAlunos);
rotas.get("/alunos/:id", alunos.retornarAluno);
rotas.post("/alunos", alunos.cadastrarAluno);
rotas.delete("/alunos/:id", alunos.excluirAluno);
rotas.put("/alunos/:id", alunos.atualizarAluno);
rotas.patch("/alunos/:id/curso", alunos.atualizarCursoAluno);


module.exports = rotas;