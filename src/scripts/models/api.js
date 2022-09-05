export class Api{

    static baseUrl = "https://m2-rede-social.herokuapp.com/api/"
    static token = localStorage.getItem("@KenzieRedeSocial:token")
    static user_uuid = localStorage.getItem("@KenzieRedeSocial:user_uuid")

    static headersAU = {
        "Content-type": "application/json",
        Authorization: `Token ${this.token}`
    }
    static headresNoAU = {
        "Content-type": "application/json"
    }

    static async loginUser (body) {
        const login = await fetch (`https://m2-rede-social.herokuapp.com/api/users/login/`, {
            method: "POST",
            headers: this.headresNoAU,
            body: JSON.stringify(body)
        })
        .then((res) => res.json())
        .then((res) => {
            localStorage.setItem("@KenzieRedeSocial:token", res.token)
            localStorage.setItem("@KenzieRedeSocial:user_uuid", res.user_uuid)

            if(res.token !== undefined){
                window.location.assign("./src/pages/homepage.html")
            }
        })
        .catch((err) => err)

        return login
    }

    static async creatUser (body) {

        const newUser = await fetch (`https://m2-rede-social.herokuapp.com/api/users/`, {
            method: "POST",
            headers: this.headresNoAU,
            body: JSON.stringify(body)
        })
        .then((res) => res.json())
        .catch(err => err)

        return newUser
    }

    static async getUsers () {
        const users = await fetch (`https://m2-rede-social.herokuapp.com/api/users/`, {
            method: "GET",
            headers: this.headersAU
        })
        .then((res) => res.json())
        .catch((err) => err)

        return users
    }

    static async getLogedUser () {
        const getLogedUser = await fetch (`https://m2-rede-social.herokuapp.com/api/users/${this.user_uuid}/`, {
            method: "GET",
            headers: this.headersAU
        })
        .then((res) => res.json())
        .catch((err) => err)

        return getLogedUser
    }

    static async userFollow () {
        const follow = await fetch (`https://m2-rede-social.herokuapp.com/api/users/follow/`, {
            method: "POST",
            headers: this.headersAU,
            body: JSON.stringify(this.user_uuid)
        })
        .then((res) => res.json())
        .then((res) => {
            localStorage.setItem("@KenzieRedeSocial:follow_uuid", res.uuid)
        })
        .catch((err) => err)

        return follow
    }

    static async unfollowUser () {
        const unfollow = await fetch(`https://m2-rede-social.herokuapp.com/api/users/unfollow/${localStorage.getItem("@KenzieRedeSocial:follow_uuid")}/`, {
            method: "DELETE",
            headers: this.headersAU
        })
        .then((res) => console.log(res))
        .catch((err) => err)

        return unfollow
    }

    static async creatPost (body) {
        const newPost = await fetch (`https://m2-rede-social.herokuapp.com/api/posts/`, {
            method: "POST",
            headers: this.headersAU,
            body: JSON.stringify(body)
        })
        .then((res) => res.json())
        .catch((err) => err)

        return newPost 
    }

    static async getPageNumbers () {
        const posts = await fetch (`https://m2-rede-social.herokuapp.com/api/posts/`, {
            method: "GET",
            headers: this.headersAU
        })
        .then((res) => res.json())
        .catch((err) => err)

        return posts
    }

    static async getAllPosts (page) {
        const posts = await fetch (`https://m2-rede-social.herokuapp.com/api/posts/?limit=10&offset=${page}`, {
            method: "GET",
            headers: this.headersAU
        })
        .then((res) => res.json())
        .catch((err) => err)

        return posts
    }

    static async likePost (postId) {
        const like = await fetch (`https://m2-rede-social.herokuapp.com/api/likes/`, {
            method: "POST",
            headers: this.headersAU,
            body: JSON.stringify(postId)
        })
        .then((res) => res.json())
        .catch((err) => err)

        return like
    }

    static async deslikePost (postId) {
        const unfollow = await fetch (`https://m2-rede-social.herokuapp.com/api/likes/${postId}/`, {
            method: "DELETE",
            headers: this.headersAU
        })
        .then((res) => console.log(res))
        .catch((err) => err)

        return unfollow
    }
}
