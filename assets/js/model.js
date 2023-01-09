export default class Model {
    constructor() {
        this.input = localStorage.getItem('input')
    }

    commit(input) {
        localStorage.setItem('input', input)
    }

    getFromLocalStorage(){
        return localStorage.getItem('input')
    }
}

