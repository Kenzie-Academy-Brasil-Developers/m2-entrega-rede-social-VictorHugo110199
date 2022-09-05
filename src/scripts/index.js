import { Api } from "../scripts/models/api.js"

let registro = document.getElementById("registro")
let irPara = document.getElementById("irPara")

irPara.addEventListener("click", () => {
    event.preventDefault()
    window.location.assign("./src/pages/cadastro.html")
})

registro.addEventListener("click", () => {
    window.location.assign("./src/pages/cadastro.html")
})

class Index {
    static login () {
        const userEmail = document.getElementById("email")
        const userSenha = document.getElementById("senha")
        const btnLogin  = document.getElementById("btn_logar")
        
        btnLogin.addEventListener("click", async () => {
            event.preventDefault()
            const body = {
                email: userEmail.value,
                password: userSenha.value
            }
            const logar = await Api.loginUser(body)
            return logar
        })
    }
}

Index.login();
