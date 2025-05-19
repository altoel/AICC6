// 산술연산자 (+, -, *, /)
// 숫자형 문자의 경우 암묵적 타입 변환
console.log('java' + 'script');

const a = '7';
const b = '5';
console.log(a + b, typeof (a + b));
console.log(a - b, typeof (a - b));
console.log(a * b, typeof (a * b));
console.log(a / b, typeof (a / b));

// % 연산자(나머지 연산자)
// 두 수를 나눈 나머지 값을 반환
console.log(3 % 5);

const num = 21;
if (num % 2 === 0) {
   console.log('짝수');
} else {
   console.log('홀수');
}

console.log('---------------------');

// 비교연산자
// boolean 타입 변환: >, <, <=, >=, ==, ==
console.log('2' == 2);
console.log('2' === 2);
console.log(2 === 2);

console.log('---------------------');

// 부정연산자: 현재 boolean 타입의 반대를 반환
console.log(true);
console.log(!true);

const email = '한창호';
const password = '1234';

// if (!email) {
//    alert('없는 이름입니다');
// } else {
//    if (!password) {
//       alert('비밀번호가 없습니다.');
//    } else {
//       alert('메인 창으로 이동합니다.');
//    }
// }

console.log('---------------------');

// 논리 연산자
// && 합성곱
// || 합성합
console.log(2 > 1 && 3 > 1);
console.log(2 > 1 || 3 < 1);

// 복합 대입 연산자
// +=, -=, *=, /=, %=
let num1 = 10;
num1++; // num += 1; num1 = num1 + 1; 모두 같은 문장
num1 += 3;

console.log(num1);

let mnum = 10;
mnum = mnum - 1;
console.log(mnum);
mnum -= 1;
console.log(mnum);
mnum--;
console.log(mnum);

for (let i = 0; i < 10; i++) {}
