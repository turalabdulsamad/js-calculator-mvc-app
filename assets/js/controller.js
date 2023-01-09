import Model from '/assets/js/model.js'
import View from '/assets/js/view.js'
import Util from '/assets/js/utils.js'

class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view
        this.view.getEvent(this.validate, this.getDisplayingText)
    }

    validate = (input) => {
        let hasPoint = this.model.getHasPointFromLocalStorage()
        let displayingText = this.getDisplayingText()

        if (input === "C") {
            displayingText = this.view.setToValue("")
            this.model.commitInput("")
            this.model.commitHasPoint(false)
            return
        }
        else if (displayingText == "" && input === "-") {
            displayingText = this.view.setText(displayingText + input)
            this.model.commitInput(displayingText)
            return
        }
        else if (input === "." && !hasPoint) {
            this.model.commitHasPoint(true)
            console.log(input)

        } else if (input === "." && hasPoint) {
            return
        } else if (!parseInt(input) && !parseInt(displayingText[displayingText.length - 1]) && (input !== "0")) {
            return
        } else if (!parseInt(input)) {
            this.model.commitHasPoint(false)
        }

        if (input === "=") {
            let result = this.view.setToValue(this.calculate(displayingText))
            this.model.commitInput(result)

            if (Util.isFloat(result)) {
                console.log("Sasa")
                this.model.commitHasPoint(true)
            }

            return
        }

        let result = this.view.setText(input)
        this.model.commitInput(result)
    }

    calculate = (input) => {
        try {
            return eval(input)
        } catch {
            return "Invalid input"
        }
    }

    getDisplayingText = () => {
        return this.model.getInputFromLocalStorage()
    }
}


new Controller(new Model(), new View())  