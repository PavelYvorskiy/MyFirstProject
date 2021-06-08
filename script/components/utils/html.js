export const htmlUtils = {
  createElement: ({ name, classes, id, text, innerHTML, type,  placeholder, required}) => {
    if (!name) {
      throw 'Element name is required'
    }

    const element = document.createElement(name)

    if (Array.isArray(classes) && classes.length) {
      element.classList.add(...classes)
    }

    if (id) {
      element.id = id
    }

    if (text) {
      element.textContent = text
    }
    if (type) {
      element.type = type
    }
    if (placeholder) {
      element.placeholder = placeholder
    }
    if (required) {
      element.required = required
    }
    if ( innerHTML) {
      element.innerHTML = innerHTML
    }

    return element
  }
}
