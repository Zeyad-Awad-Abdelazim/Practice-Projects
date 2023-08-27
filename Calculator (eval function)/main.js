let btns = document.querySelectorAll('.btn');
// console.log(btns[1].value);
let output = document.querySelector('#displayScreen');
let input = "";

// let arr = Array.from(btns);
btns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        if(e.target.value == '=')
        {
            output.value = eval(input);
        }
        else if(e.target.className == "btn val")
        {
            input += e.target.value;
            output.value = input;
        }
        else if(e.target.value == "AC")
        {
            input = "";
            output.value = "";
        }
        else if(e.target.value == "DE")
        {
            input = input.substring(0, input.length-1);
            output.value = input;
        }
    });
});
