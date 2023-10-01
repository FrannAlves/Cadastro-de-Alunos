const validarSenha = (req, res, next) => {
    const { senha } = req.query;

    if (!senha) {
        return res.satus(401).json({ mensagem: "A senha não foi informada." });
    }

    if (senha !== "cubos123") {
        return res.status(401).json({ mensagem: "A senha está incorreta." });
    } else {
            next();
    }

}

module.exports = {
    validarSenha
}