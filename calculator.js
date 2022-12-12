class Model {
    constructor() { }

    calculate = (input) => {
        try {
            const output = eval(input)
            return output
        } catch {
            return "Invalid input"
        }
    }
}

class View {
    constructor() {
        this.displayElement = this.getElementByID("display")
        this.querySelector = this.getElement(".item")
    }

    getElementByID = (id) => {
        const element = document.getElementById(id)
        return element
    }

    getElement = (selector) => {
        const element = document.querySelectorAll(selector)
        return element
    }

    displayText = (handler) => {
        let calculated = false
        let hasPoint = false

        for (let i = 0; i < this.querySelector.length; i++) {
            this.querySelector[i].addEventListener('click', event => {
                event.preventDefault()
                if (calculated) {
                    this.displayElement.innerText = ""
                    calculated = false
                }

                if (this.querySelector[i].value === "C") {
                    this.displayElement.innerText = ""
                    return
                }
                else if (this.displayElement.innerText == "" && this.querySelector[i].value === "-") {
                    this.displayElement.innerText += this.querySelector[i].value
                    return
                }
                else if (this.querySelector[i].value === "." && !hasPoint) {
                    hasPoint = true

                } else if (this.querySelector[i].value === "." && hasPoint) {
                    return
                } else if (!parseInt(this.querySelector[i].value) && !parseInt(this.displayElement.innerText[this.displayElement.innerText.length - 1]) && (this.querySelector[i].value !== "0")) {
                    return
                }
                else if (!parseInt(this.querySelector[i].value) && parseInt(this.querySelector[i].value !=="0")) {
                    hasPoint = false
                }
             
                if (this.querySelector[i].value === "=") {
                    const output = handler(this.displayElement.innerText)
                    this.displayElement.innerText = output
                    calculated = true
                    hasPoint = false
                    return
                }

                this.displayElement.innerText += this.querySelector[i].value
            }
            )
        }
    }
}

class Controller {
    constructor(model, view) {
        this.model = model
        this.view = view
        this.view.displayText(this.handleCalculate)
    }

    handleCalculate = (input) => {
        const output = this.model.calculate(input)
        return output
    }
}

const app = new Controller(new Model(), new View())

