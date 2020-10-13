var i = 2;
var flag = 0; //флаг для определения конца строки
var block = document.createElement("div");
var board = document.querySelector(".board");
board.appendChild(block);
block.setAttribute("style", "text-align: center; padding-top: 1.5em;");
block.innerText = 8;
var NumRow = 7;
while (i <= 72) {
    if (flag == 1) { // создаём столбец с цифрами
        var block_num = document.createElement("div");
        board.appendChild(block_num);
        block_num.setAttribute("style", "text-align: center; padding-top: 1.5em;");
        if (NumRow > 0) {
            block_num.innerText = NumRow;
        }
        NumRow--
        i++
        flag = 0;
    }

    var block = document.createElement("div"); //создаём клетку
    board.appendChild(block);
    if (i % 9 == 0) { //фиксируем конец строки
        flag = 1;
    }
    Choice() //окрашиваем клетку
    i++;
}
var block = document.createElement("div"); //клетка в углу
board.appendChild(block);
var j = 0;
while (j <= 9) { //создаём строку с буквами
    var block = document.createElement("div");
    board.appendChild(block);
    block.innerText = "ABCDEFGH".slice(j, j + 1);
    block.setAttribute("style", "text-align: center; padding-top: 1em;");
    j++;
}
function Choice() { //функция выббора цвета
    if (i % 2) {
        block.setAttribute("style", "background-color: black;");
    }
    else {
        block.setAttribute("style", "background-color: bisque;");
    }
}