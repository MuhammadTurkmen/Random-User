import get from "./utils/getElement"
import getUser from "./utils/fetchUser"

const img = get('.user-img')
const title = get('.user-title')
const value = get('.user-value')
const btn = get('.btn')
const btns = [...document.querySelectorAll('.icon')]




const showUser = async () => {
    // get user from api
    const person = await getUser()
    // display user
}

window.addEventListener('DOMContentLoaded', showUser)
btn.addEventListener('click', showUser)