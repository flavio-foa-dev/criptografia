import { createHash } from "crypto"

const secretKey = "createHashmypass"

function createHashKey(password) {
  const result = createHash("sha256").update(password).digest("hex")
  return result
}


export class Users {

  constructor(name, email, password) {
    this.name = name
    this.email = email
    this.hash = createHashKey(password)
  }

  authenticate(email, password) {
    if(email === this.email && this.hash === createHashKey(password)) {
      console.log("Authentication successful")
      return true
    }else {
      console.log("Authentication failed")
      return false
    }
  }
}

const user = new Users("Flavio", "foa@foa.com", "123456")
console.log(user)
const result = user.authenticate("foa@foa.com", "1234566")
console.log(result)