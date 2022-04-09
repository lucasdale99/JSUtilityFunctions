import { addGlobalEventListern, createElement, qs, qsa } from "./domUtils";

console.log("Buttons:\n", qsa(".btn"))
console.log("Wrapper:\n", qa(".wrapper"))
console.log("Buttons in Wrapper:\n", qsa(".btn", qa(".wrapper")))

addGlobalEventListern("click", ".btn", e => {
    console.log(e.target.textContent)
})

addGlobalEventListener("click", ".btn", () => console.log("Runs once"), {
    once: true,
})

addGlobalEventListern(
    "click",
    ".btn",
    () => console.log("Only works on buttons in modal"),
    {},
    qa(".wrapper")
)

const element = createElement("button", {
    class: "btn",
    text: "New",
    dataset: {test: true},
    id: "new",
    "data-hi": "yes",
})
qs(".wrapper").append(element)