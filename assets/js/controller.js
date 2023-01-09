import Model from '/assets/js/model.js'
import View from '/assets/js/view.js'

class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view
        this.view.getEvent(this.validate, this.getDisplayingText)
        this.hasPoint = false
    }

    validate = (input) => {
        let displayingText = this.getDisplayingText()

        if (input === "C") {
            displayingText = this.view.setToValue("")
            this.model.commit("")
            return
        }
        else if (displayingText == "" && input === "-") {
            displayingText = this.view.setText(displayingText + input)
            this.model.commit(displayingText)
            return
        }
        else if (input === "." && !this.hasPoint) {
            this.hasPoint = true
         } else if (input === "." && this.hasPoint) {
                return
        } else if (!parseInt(input) && !parseInt(displayingText[displayingText.length - 1]) && (input !== "0")) {
            return
        } else if (!parseInt(input)) {
            this.hasPoint = false
        }
        
        if (input === "=") {
            let result = this.view.setToValue(this.calculate(displayingText))
            this.model.commit(result)
            this.hasPoint = false
            return
        }
 
        let result = this.view.setText(input)
        this.model.commit(result)
    }

    calculate = (input) => {
        try {
            return eval(input)
        } catch {
            return "Invalid input"
        }
    }

    getDisplayingText = () => {
        return this.model.getFromLocalStorage()
    }
}

new Controller(new Model(), new View())  