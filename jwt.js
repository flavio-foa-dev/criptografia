import jwt from "jsonwebtoken"
import "dotenv/config"

const secretKey = process.env.SECRET_KEY

const token = jwt.sign(
  // payload
  {
    name: "Flavio Foa",
    id: 1234,
    email: "flavio.foa@gmail."
  },
  // secret key
  secretKey
)
console.log({token})

const tokenDecodificado = jwt.verify(token, secretKey)

console.log({tokenDecodificado})

