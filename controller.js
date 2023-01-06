import Model  from './model.js'
import View from './view.js'

class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view
        this.view.displayText(this.handleCalculate)
    }
    
    handleCalculate = (input) => {
        return this.model.calculate(input)
    }
}

new Controller(new Model(), new View())  