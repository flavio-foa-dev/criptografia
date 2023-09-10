import {scryptSync, randomBytes, timingSafeEqual} from "crypto"

function createHashSalKey(password){
  const salt = randomBytes(16).toString("hex")

  const passwordHash = scryptSync(password, salt, 32).toString("hex")

  console.log(salt, passwordHash)
}


createHashSalKey("minhasenha")