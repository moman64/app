import * as importModule from "./newjavascript4";
const $eventTitle = document.getElementsByClassName("inputName");
const $eventDate = document.getElementsByClassName("inputDate");
const $startBtn = document.getElementsByClassName("startbtn");
const $stopBtn = document.getElementsByclassName("stopbtn");
const $result = document.getElementsByClassName("result");
$stopBtn.classList.add("disabled");

        $eventTitle.classList.add("disabled");
    $eventDate.classList.add("disabled");
    $startBtn.classList.add("disabled");
    $stopBtn.classList.remove("disabled");
    $stopBtn.addEventListener('click',function () {
        clearInterval(x);
        $eventTitle.classList.remove("disabled");
        $eventDate.classList.remove("disabled");
        $startBtn.classList.remove("disabled");
        $stopBtn.classList.add("disabled");
    });


$startBtn.addEventListener('click',function () {
    if ($evTitle.value!=""&&$evDate.value!="") {
        startCount();
    }
    else {alert("Please, Fill all the fields");}
});