import get from "./utils/getElement.js"
import getUser from "./utils/fetchUser.js"

const img = get('.user-img')
const title = get('.user-title')
const value = get('.user-value')
const btn = get('.btn')
const btns = [...document.querySelectorAll('.icon')]


const displayUser = (person) => {
      img.src = person.image
}


const showUser = async () => {
    // get user from api
    const person = await getUser()
    displayUser(person)
    // display user
}

window.addEventListener('DOMContentLoaded', showUser)
btn.addEventListener('click', showUser)