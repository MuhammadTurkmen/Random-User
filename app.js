const URL = 'https://randomuser.me/api/' 

const img = document.querySelector('.user-img')

const getElement = (selection) => {
    const element = document.querySelector(selection)
    if(element) return element
    throw new Error('no element selected')
}