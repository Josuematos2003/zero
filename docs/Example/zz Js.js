

/* #Promises */

const nomeConst = new Promise((resolve, reject) => {
try {
resolve(funcaoX())
} catch(e) {
reject(e)
}
})

// Executando a Promise

nomeConst
.then((parametros) => /* sucesso */)
.catch((erro) => /* erro */)

// Tratatando erros e sucessos no then
nomeConst
.then(resposta => { /* tratar resposta */}, erro => { /*tratar erro/* })



/* */