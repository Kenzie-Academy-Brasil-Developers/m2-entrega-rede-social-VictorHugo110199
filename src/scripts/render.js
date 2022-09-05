export class Render {
    static renderUser (obj) {
        let user_informations = document.getElementById("user_informations")

        let img  = document.createElement("img")
        let div1 = document.createElement("div")
        let div2 = document.createElement("div")
        let h2   = document.createElement("h2")
        let p1   = document.createElement("p")
        let p2   = document.createElement("p")

        img.src = obj.image
        h2.innerText = obj.username
        p1.innerText = `${obj.following_amount} seguidores`
        p2.innerText = obj.work_at

        div2.append(h2, p1)
        div1.append(div2, p2)
        user_informations.append(img, div1)
    }

    static followSugestion (obj) {
        let sugestion_to_follow = document.getElementById("sugestion_to_follow")

        let div1 = document.createElement("div")
        let div2 = document.createElement("div")
        let div3 = document.createElement("div")
        let div4 = document.createElement("div")
        let img  = document.createElement("img")
        let h2   = document.createElement("h2")
        let p    = document.createElement("p")
        let btn  = document.createElement("button")

        img.src = obj.image
        img.alt = `Foto de perfil`
        h2.innerText = obj.username
        p.innerText = obj.work_at
        btn.innerText = `Seguir`

        div4.append(h2)
        div3.append(div4, p)
        div2.append(img, div3)
        div1.append(div2, btn)

        sugestion_to_follow.append(div1)
    }

    static creatPost (obj) {
        let main__posts = document.querySelector(".main__posts")

        let div1 = document.createElement("div")
        let div2 = document.createElement("div")
        let div3 = document.createElement("div")
        let div4 = document.createElement("div")
        let div5 = document.createElement("div")
        let div6 = document.createElement("div")
        let img1 = document.createElement("img")
        let h2   = document.createElement("h2")
        let p1   = document.createElement("p")
        let h3   = document.createElement("h3")
        let p2   = document.createElement("p")
        let btn  = document.createElement("button")
        let img2 = document.createElement("img")
        let p3   = document.createElement("p")

        div1.classList.add("post")
        div2.classList.add("post--header")
        btn. classList.add("abrirPost")
        div6.classList.add("like_counter")
        div5.classList.add("post_info")

        img1.src = obj.author.image
        img2.src = "../assets/heartBlack.png"

        img1.alt = `Foto de perfil de ${obj.author.username}`
        img2.alt = "imagem de coração"

        h2.innerText  = obj.author.username
        p1.innerText  = obj.author.work_at
        h3.innerText  = obj.title
        p2.innerText  = obj.description
        btn.innerText = `Abrir Post`
        p3.innerText  = obj.likes.length

        div4.append(h2)
        div3.append(div4, p1)
        div2.append(img1, div3)
        div6.append(img2, p3)
        div5.append(btn, div6)
        div1.append(div2, h3, p2, div5)
        main__posts.append(div1)
    }
}
