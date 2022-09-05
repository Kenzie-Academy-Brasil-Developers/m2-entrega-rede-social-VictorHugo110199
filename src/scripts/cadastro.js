import { Api } from "../scripts/models/api.js"

let login   = document.getElementById("login")
let ir_para = document.getElementById("ir_para")

ir_para.addEventListener("click", () => {
    event.preventDefault()
    window.location.assign("../../index.html")
})

login.addEventListener("click", () => {
    window.location.assign("../../index.html")
})

class Cadastro {
    static cadastrar () {
        const name         = document.getElementById("nome")
        const e_mail       = document.getElementById("email")
        const senha        = document.getElementById("senha")
        const trabalho     = document.getElementById("trabalho")
        const img          = document.getElementById("img")
        const btnCadastrar = document.getElementById("cadastrar")

        btnCadastrar.addEventListener("click", async () => {
            event.preventDefault()
            const body = {
                username: name.value,
                email: e_mail.value,
                password: senha.value,
                work_at: trabalho.value,
                image: img.value
            }
            name.value     = ""
            e_mail.value   = ""
            senha.value    = ""
            trabalho.value = ""
            img.value      = ""


            const creat = await Api.creatUser (body)
            return console.log( await creat)
        })
    }
}

Cadastro.cadastrar()