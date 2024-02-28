import getUser from "./utils/fetchUser.js"


const btn = get('.btn')



 

const showUser = async () => {
    // get user from api 
    const person = await getUser()
    displayUser(person)
    // display user
}

window.addEventListener('DOMContentLoaded', showUser)
btn.addEventListener('click', showUser)