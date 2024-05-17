// Projeto Semáforo 

const buttonEl = document.querySelector("#start")
const resetEl = document.querySelector("#reset")
const redEl = document.querySelector("#red")
const greenEl = document.querySelector("#green")
const yellowEl = document.querySelector("#yellow")

function red() {
  greenEl.classList.add("green")
  redEl.classList.remove("red")
  time2 = setTimeout(green, 1000)
}

function green() {
  yellowEl.classList.add("yellow")
  greenEl.classList.remove("green")
  time3 = setTimeout(yellow, 1000)
}

function yellow() {
  yellowEl.classList.remove("yellow")
  start()
}

function start() {
  redEl.classList.add("red")
  time1 = setTimeout(red, 1000)
}

function button() {
  if (redEl.classList.contains("red") || 
  greenEl.classList.contains("green") || 
  yellowEl.classList.contains("yellow")) {
  } else {
    start()
  }
}

function reset() {
  redEl.classList.remove("red")
  greenEl.classList.remove("green")
  yellowEl.classList.remove("yellow")
  clearTimeout(time1)
  clearTimeout(time2)
  clearTimeout(time3)
}

buttonEl.addEventListener("click", button)
resetEl.addEventListener("click", reset)
