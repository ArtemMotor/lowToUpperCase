const userInput = document.querySelector('#user-text')
const placeForUpperUserText = document.querySelector('.user-upper-string-div')
const upperUserInput = document.querySelector('#upper-user-text')
const copyBtn = document.querySelector('.copy-btn')
const copyAlert = document.querySelector('.fade-out')
const clearUserTextBtn = document.querySelector('.clear-user-text-btn')
const convertToUpperCaseBtn = document.querySelector(
  '.convert-to-upper-case-btn'
)

convertToUpperCaseBtn.addEventListener('click', handleConvertBtnClick)

copyBtn.addEventListener('click', copyUpperText)

clearUserTextBtn.addEventListener('click', clearUserTextInForm)

function handleConvertBtnClick() {
  if (userInput.value.length === 0) {
    userInput.placeholder = 'Сначала введите текст!'
  } else {
    let userText = userInput.value
    clearUserTextBtn.style.display = 'inline'
    placeForUpperUserText.style.display = 'block'
    upperUserInput.value = userText.toUpperCase()
  }
}

function clearUserTextInForm() {
  userInput.value = ''
  userInput.placeholder = 'Введите ваш текст для конвертации'
}

function copyUpperText() {
  upperUserInput.select()
  document.execCommand('copy')
  copyAlert.style.display = 'block'
  setTimeout(deleteMsgCopy, 4000)
}

function deleteMsgCopy() {
  copyAlert.style.display = 'none'
}
