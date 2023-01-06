export default class Model {
    constructor() {
        this.input = JSON.parse(localStorage.getItem('input'))
    }

    commit(input) {
        localStorage.setItem('input', JSON.stringify(input))
    }
}

