const message = "minha casa fica do outro lado"

let parseMessage = message.trim()
parseMessage = parseMessage.split(" ").join("")
console.log(parseMessage)

function changesPositionAfter(message, moves ){
  const result = message.split("")
    .map((char)=> {
      const codigoChar = char.charCodeAt(0)
      const pos = String.fromCharCode(codigoChar + moves)
      return ({codigoChar, pos})
    })
  console.log(result)
}

function changesPositionBefor(message, moves ){
  const result = message.split("")
    .map((char)=> {
      const codigoChar = char.charCodeAt(0)
      const pos = String.fromCharCode(codigoChar - moves)
      return ({codigoChar, pos})
    })
  console.log(result)
}

function cifrarMensagem (mensagem, movimentos){
 const mensagemCifrada = mensagem.split('').map((caractere) => {
 const codigoCaractere = caractere.charCodeAt(0);
 return String.fromCharCode(codigoCaractere + movimentos)
})
 return mensagemCifrada.join("")
}

const mensagem = parseMessage

for (let i = 0; i < mensagem.length; i++) {
 console.log(mensagem.charCodeAt(i));
}

const teste = cifrarMensagem(parseMessage, 4);

console.log("teste",teste)

changesPositionAfter(parseMessage, 3)
changesPositionBefor(parseMessage, 3)
