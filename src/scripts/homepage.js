import { Api } from "../scripts/models/api.js";
import { Render } from"../scripts/render.js"

let token = localStorage.getItem("@KenzieRedeSocial:token")

class HomePage {

    static tokentrue (token) {
        if(token == undefined){
             return window.location.assign("../../index.html")
        }
    }

    static async logedUser () {
        const getUser = await Api.getLogedUser()
        Render.renderUser(getUser)
    }

    static creatPost () {
        const postar = document.getElementById("postar")

        postar.addEventListener("click", async () => {
            event.preventDefault()

            let post_title = document.getElementById("post_title")
            let post_body  = document.getElementById("post_body")

            const newPost = {
                title: post_title.value,
                description: post_body.value
            }

            const creat = await Api.creatPost(newPost)

            post_body.value  = ""
            post_title.value = ""

            console.log(creat)
        })
    }

    static async getPage () {
        const getPage = await Api.getPageNumbers()
        const page = (getPage.count / 10)

        return Math.floor(page)
    }

    static async getAllPosts (page) {
        const getPosts = await Api.getAllPosts(page)
        const lastPosts = await getPosts.results
        lastPosts.forEach((elem) => {
            Render.creatPost(elem)
        })
    }

    static async getUsers () {
        const users = await Api.getUsers()
        const arrUsers =  await users.results
        arrUsers.forEach((elem, index) => {
            if(index < 3) {
                Render.followSugestion(elem)
            }
        })
    }
}

HomePage.tokentrue(token)
HomePage.logedUser()
HomePage.creatPost()
const finalPage = await HomePage.getPage()
HomePage.getAllPosts( finalPage)
HomePage.getUsers()
