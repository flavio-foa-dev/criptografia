import { generateKeyPairSync, createSign, createVerify} from "crypto"


const { privateKey, publicKey } = generateKeyPairSync("rsa",
  {
    modulusLength: 2048,

        publicKeyEncoding: {
            type: 'spki',
            format: 'pem',
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
        },
  }
)
// console.log (publicKey)
// console.log (privateKey)

let message = "Minha Mensagem Secreta com assinatura"
console.log(message)

const assinador = createSign('rsa-sha256')
assinador.update(message)

const assinatura = assinador.sign(privateKey, "hex")
console.log("assinatura",assinatura)

//teste de assinatura
message += ""

// envio {message, assinatura, publicKey}
const verificador = createVerify("rsa-sha256")
verificador.update(message)

const isVerifay = verificador.verify(publicKey, assinatura, "hex")

console.log({"consistente":isVerifay})