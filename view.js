export default class View {
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

  getEvent = (handler) => {
    for (let i = 0; i < this.querySelector.length; i++) {
      this.querySelector[i].addEventListener('click', event => {
        event.preventDefault()
        handler(this.querySelector[i].value)
      }
      )
    } 
  }

  setText = (text) => {
    this.displayElement.innerText += text
     return 
  }

  getText = () => {
    return this.displayElement.innerText
  }
  
  showResult = (text) =>{
    this.displayElement.innerText = text
  }

}


