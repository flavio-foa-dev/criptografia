import { createHash } from "crypto"

const secretKey = "createHashmypass"

function createHashKey(password) {
  const result = createHash("sha256").update(password).digest("hex")
  console.log(result)
}


createHashKey(secretKey)