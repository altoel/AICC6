// 반복문은 수없이 반복되는 데이터들을 다룰 수 있는 프로그래밍의 중요한 문법이다.
// 반복문은 주로 배열의 요소나 DOM에서 선택된 반복 객체 등을 다룰때 사용된다.

// 1. for in
// signiture : for(const loop variable in array or object){}
// for in문은 배열의 반복 인덱스를 리턴하고, 해당 배열의 인덱스 요소값을 배열접근 방식으로 리턴할 수 있다.

const forArr = ['a', 'b', 'c', 'd', 'e'];

for (const i in forArr) {
   console.log(i);
   console.log(forArr[i]);
}

// 2. for of
// signiture : for(const loop variable of array or object){}
// for in문과 다르게 for of문의 경우 변수에 할달된 데이터를 인덱스가 아니라 해당 인덱스이 값을 직접 리턴한다.

for (let i = 0; i < forArr.length; i++) {
   console.log(forArr[i]);
}

const forArrNum = [1, 2, 3, 4, 5];

let sum = 0;
for (let i = 0; i < forArrNum.length; i++) {
   console.log(forArrNum[i]);
   sum = sum + forArrNum[i];
}
console.log(sum);

let sum100 = 0;
for (let i = 1; i <= 100; i++) {
   sum100 += i;
}
console.log(sum100);
