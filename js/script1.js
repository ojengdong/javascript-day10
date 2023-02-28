console.log("시작");

function func1(함수) {
  setTimeout(() => {
    const sum = 10 + 20;
    console.log(sum);
    함수(); // 콜백함수 호출
  }, 1000);
}

function func2() {
  const sum = 20 + 30;
  console.log(sum);
}

func1(func2); //콜백함수 사용법

// setTimeout(func1, 1000);
// for(let i = 0; i < 3; i++){
//     func1();
// }

console.log("끝");