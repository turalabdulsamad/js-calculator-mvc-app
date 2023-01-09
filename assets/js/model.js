export default class Model {
    constructor() {
        this.input = localStorage.getItem('input')
    }

    commitInput(input) {
        localStorage.setItem('input', input)
    }

    commitHasPoint(hasPoint){
        localStorage.setItem('hasPoint',hasPoint)
    }

    getInputFromLocalStorage(){
        return localStorage.getItem('input')
    }

    getHasPointFromLocalStorage(){
        return JSON.parse(localStorage.getItem('hasPoint'))
    }
}

