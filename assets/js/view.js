export default class View {
  constructor() {
    this.displayElement = this.getElementByID("display")
    this.querySelector = this.getElement(".item")
  }

  getElementByID = (id) => {
     return document.getElementById(id)
  }

  getElement = (selector) => {
    return document.querySelectorAll(selector)
  }

  getEvent = (handler, textInLocalStorage) => {
    this.displayElement.innerText = textInLocalStorage()
    for (let i = 0; i < this.querySelector.length; i++) {
      this.querySelector[i].addEventListener('click', event => {
        event.preventDefault()
        handler(this.querySelector[i].value)
      }
      )
    }
  }

  setText = (text) => {
    return this.displayElement.innerText += text
  }

  setToValue = (text) => {
   return  this.displayElement.innerText = text
  }
}