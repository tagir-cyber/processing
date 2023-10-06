let orderBtn = document.getElementById("order-btn"),
    orderForm = document.getElementById("order-form");

// orderBtn.addEventListener("click", function(){
   
// });

orderForm.addEventListener("submit", function(e){
    e.preventDefault();
    alert('hell')
});

// Селект из раздела "Топливо с доставкой"
const element = document.querySelector('#select');

const choices = new Choices(element, {
    searchEnabled: false
});

// range
var rangeSlider = document.getElementById('range');
let max = 2000;

if(rangeSlider){
    noUiSlider.create(rangeSlider, {
        start: [1670],
        step: 1,
        range: {
            'min': 0,
            'max': max
        }
    });
    rangeSlider.noUiSlider.on('update', function (values) {
        console.log(values);
        let input = document.getElementById("input-range"),
            val = Math.round(values[0]);

        input.value = `${val} литров`;


        calculate(val)
    });
}

// Функция расчитывает стоимость топлива
function calculate(val){
    let price = document.getElementById("price-per-one"),
        total = document.getElementById("total");
    
    console.log(price);
    total.textContent = (+price.textContent*val)+" ₽";
}

