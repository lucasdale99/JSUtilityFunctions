export function addGlobalEventListern(
    type,
    selector,
    callback,
    options,
    parent = document
){
    parent.addEventListener(
        type,
        e => {
            if (e.target.matches(selector)) callback(e)
        },
        options
    )
}

export function qa(selector, parent = document){
    return parent.querySelector(selector);
}

//same as
qs(".class")
//this
document.querySelector(".class")

export function qsa(selector, parent = document){
    return [...parent.querySelectorAll(selector)];
    //we get find, map, etc.
}

export function createElement(type, options = {}) {
    const element = document.createElement(type)
    Object.entries(options).forEach(([key], value) => {
        if(key === "class") {
            element.classList.add(value)
            return
        }

        if(key === "dataset") {
            Object.entries(value).forEach(([dataKey, dataValue]) => {
                element.dataset[dataKey] = dataValue
            })
            return
        }

        if(key === "text"){
            element.textContent = value
            return
        }

        element.setAttribute(key, value)
    })
    return element
}