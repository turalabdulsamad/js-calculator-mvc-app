import Model from './model.js'
import View from './view.js'

class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view
        this.view.getEvent(this.validate)
    }
     

    validate = (input) => {
         let hasPoint = false
        let displayingText = this.view.getText()

        if (input === "C") {
            this.view.showResult("")
            return
        }
        else if (displayingText == "" && input === "-") {
            this.view.setText(displayingText + input)
            return
        }
        else if (input === "." && !hasPoint) {
            hasPoint = true
        } else if (input === "." && hasPoint) {
            return
        } else if (!parseInt(input) && !parseInt(displayingText[displayingText.length - 1]) && (input !== "0")) {
            return
        } else if (!parseInt(input) && parseInt(input !== "0")) {
            hasPoint = false
        }
        if (input === "=") {
            this.view.showResult(this.calculate(displayingText))
            hasPoint = false
            return
        }
        this.view.setText(input)
    }

    calculate = (input) => {
        try {
            return eval(input)
        } catch {
            return "Invalid input"
        }
    }
}

new Controller(new Model(), new View())  