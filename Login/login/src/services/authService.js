import { api, requestConfig } from '../utils/config'

// Registrar usuario
const register = async(data) => {

    const config = requestConfig("POST", data)

    try {

        const res = await fetch(api + "/users/register", config)
            .then((res) => res.json())
            .catch((err) => err)

        if(res) {
            localStorage.setItem("user", JSON.stringify(res))
        }

        return res

    } catch (error){
        console.log(error)
    }

}

// sair da conta
const logout = () => {
    localStorage.removeItem("user")
}

// entrar na conta
const login = async (data) => {

    const config = requestConfig("POST", data)

    try {

        const res = await fetch(api + "/users/login", config)
            .then((res) => res.json())
            .catch((err) => err)

        if( res) {
            localStorage.setItem("user", JSON.stringify(res))
        }

        return res

    } catch(error) {
        console.log(error)
    }

}

const authService = {
    register,
    logout,
    login,
}

export default authService