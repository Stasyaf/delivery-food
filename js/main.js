var cardButton = document.querySelector("#card-button");//кнопка корзина
var modal = document.querySelector(".modal"); //модальное окно
var close = document.querySelector(".close"); // переменная для закрытие

/* Первый вариант открытия/закрытия
cartButton.addEventListener("click", function (event) { //открывается окно при нажатие на корзина
    modal.classList.add("is-open"); 
});

close.addEventListener("click", function (event) { //закрывает окно при нажатие на крестик
    modal.classList.remove("is-open");
});*/

//второй способ открытия/закрытия корзины
cardButton.addEventListener("click", toggleModal);//клик по кнопке корзина
close.addEventListener("click", toggleModal);//клик по кнопке крестик

function toggleModal() {
    modal.classList.toggle("is-open");//включает/выключает
}

new WOW().init();