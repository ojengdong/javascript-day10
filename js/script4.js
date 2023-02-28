let count = 0;
const value = document.querySelector("#value");
const btns = document.querySelectorAll('.btn');
// const decrease = document.querySelector('.decrease');
// const reset = document.querySelector('.reset');
// const increase = document.querySelector('.increase');

// //parseInt : 문자열을 숫자로 변화해주는 함수
// //10을 넣어준것은, 10진수로 받아오겠다는 의미
// increase.onclick = () => {
//    const current = parseInt(value.innerText, 10);
//    value.innerText = current + 1;
//    // value.style.color = 'green'
//    colorChange();
// }

// decrease.onclick = () => {
//     const current = parseInt(value.innerText, 10);
//     value.innerText = current - 1;
//     // value.style.color = 'red'
//     colorChange();
//  }

//  reset.onclick = () => {
//     value.textContent = 0;
//     colorChange();
//  }

//  function colorChange() {
//     if(Number(value.textContent > 0)) {
//         value.style.color = 'green';
//     }else if(Number(value.textContent < 0)) {
//         value.style.color = 'red';
//     }else{
//         value.style.color = 'black';
//     }
//  }

btns.forEach((btn) => {
    btn.addEventListener('click', function(e){
        // const styles = e.currentTarget.classList;
        const current = parseInt(value.innerText, 10);
        if(btn.classList.contains('decrease')) {
            value.innerText = current - 1;
        } else if (btn.classList.contains('increase')){
            value.innerText = current + 1;
        }else{
            value.innerText = 0;
        }
        colorChange();

         function colorChange() {
           if (Number(value.textContent > 0)) {
             value.style.color = "green";
           } else if (Number(value.textContent < 0)) {
             value.style.color = "red";
           } else {
             value.style.color = "black";
           }
         }
    })
})