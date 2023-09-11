import {scryptSync, randomBytes, timingSafeEqual} from "crypto"

function createHashSalKey(password){
  const salt = randomBytes(16).toString("hex")

  const passwordHash = scryptSync(password, salt, 32).toString("hex")

 return {salt, passwordHash}
}





export class Users {

  constructor(name, email, password) {
    this.name = name
    this.email = email
    this.hash = createHashSalKey(password)
  }

  authenticate(email, password) {
    if(email === this.email) {
      const testhash = scryptSync(password, this.hash.salt, 32).toString("hex")
      const hashReal = this.hash.passwordHash
      console.log("Authentication successful", testhash, hashReal)
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


function criaHashComSal(senha){
  const sal = randomBytes(16).toString('hex');

  const senhaHasheada = scryptSync(senha, sal, 64).toString('hex');

  return `${sal}:${senhaHasheada}`
}

class Usuario{
  constructor(nome, senha){
      this.nome = nome;
      [this.sal, this.hash] = criaHashComSal(senha).split(':')
  }
  autentica(nome, senha){
      if (nome === this.nome){
          const testeHash = scryptSync(senha, this.sal, 64);
          const hashReal = Buffer.from(this.hash, 'hex');

          const hashesCorrespondem = timingSafeEqual(testeHash, hashReal)

          if (hashesCorrespondem){
              console.log("Usuário autenticado com sucesso")
              return true;
          }
      }

      console.log("Usuário ou senha incorretos.")
      return false;
  }
}

