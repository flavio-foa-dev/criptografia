import { createCipheriv, createDecipheriv, randomBytes } from "crypto"


const message = "Minha mensafem de crypto"
const key = randomBytes(32)
const IVinicializationVetor = randomBytes(16)

const cifra = createCipheriv("aes256", key, IVinicializationVetor)

const messageCifrada = cifra.update(message, "utf-8", "hex") + cifra.final("hex")


console.log({message, key, IVinicializationVetor, cifra, messageCifrada})


const decifra = createDecipheriv("aes256", key, IVinicializationVetor)

const messageDecifrada = decifra.update(messageCifrada, "hex", "utf-8") + decifra.final("utf-8")

console.log({decifra, messageDecifrada })