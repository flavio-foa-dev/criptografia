import { generateKeyPairSync } from "crypto"
import { publicEncrypt, privateDecrypt } from "crypto"


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




const dadosCriptografados = publicEncrypt(
  publicKey,
  Buffer.from("Minha Mensagenm")
)

const dadosDecriptografados = privateDecrypt(
  privateKey,
  dadosCriptografados
)

console.log("criptografados", dadosCriptografados.toString('hex'))
console.log("descriptografados", dadosDecriptografados.toString('utf-8'))
