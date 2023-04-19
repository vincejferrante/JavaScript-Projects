const increase = document.querySelector('.add');
const decrease = document.querySelector('.minus');
var total = 0;

increase.addEventListener("click", function () {
    total += 1;
    document.querySelector(".amount").innerHTML = total;
})

decrease.addEventListener("click", function () {
    total -= 1;
    document.querySelector(".amount").innerHTML = total;
})



