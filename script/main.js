let hamb = document.querySelector('#hamb')
let popup = document.querySelector('.popup')
let menu = document.querySelector('.menu').cloneNode('1');
let body = document.body
let btnPlus = document.querySelector('#amount-plus')
let btnMinus = document.querySelector('#amount-minus')
let btnNumber = document.querySelector('#amount-number')
let btnSize = document.querySelectorAll('.size-btn')
let sizeV = document.querySelector(".size-variants")


hamb.addEventListener('click', hambHandler);

function hambHandler(e) {
    e.preventDefault();
    popup.classList.toggle("open");
    hamb.classList.toggle("active")
    body.classList.toggle("noscroll")

    renderPopup();
}

function renderPopup() {
    popup.appendChild(menu);
}

btnPlus.addEventListener('click', addNumber)
btnMinus.addEventListener('click', minusNumber)

function addNumber() {
    let num = parseInt(btnNumber.value);
    num = num + 1;
    btnNumber.value = num;
}

function minusNumber() {
    let num = parseInt(btnNumber.value)
    num = num - 1;
    btnNumber.value = num;
}



sizeV.addEventListener('click', checkedClick)

function checkedClick(e) {
    let sizeBtn = e.target.closest('.size-btn')

    if(sizeBtn) {
        btnSize.forEach((item) => {
            item.classList.remove('btn-active')
        })
        sizeBtn.classList.add('btn-active')
    }
}



