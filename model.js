export default class Model {
    constructor() { }

    calculate = (input) => {
        try {
            return eval(input)
        } catch {
            return "Invalid input"
        }
    }
}

