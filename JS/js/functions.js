// 함수는 특정한 기능을 수행하도록 정의된 코드의 집합이다.

// 1. 함수의 기본 형태(기명함수, 선언함수)
// signiture : function name(parameter){logics};
// - 함수는 먼저 특정 기능 알고리즘을 정의하고(정의부), 정의된 함수를 호출(호출부)하는 형태로 사용한다.
// - 함수의 형태 : https://velog.io/@inyong_pang/JavaScript-Function%ED%95%A8%EC%88%98-7wk400kzxh
// - 함수는 기본 형태, 함수 내부로 전달되는 파라미터, 내부에 정의된 값을 밖으로 내보내는 return으로 구성된다.

// 정의부(defined): 없으면 ...is not defined 오류
function sumFunc(a, b) {
   return a + b;
}

// 호출부
sumFunc(1, 2);

// 1. 숫자를 더하는 공통 기능
// 2. 총 더해지는 숫자를 지정하는 커스텀 기능
// let sum100 = 0;
// for (let i = 1; i <= 100; i++) {
//    sum100 += i;
// }

function sumNumber(num) {
   let sum = 0;
   for (let i = 1; i <= num; i++) {
      sum += i;
   }
   return sum;
}

console.log(sumNumber(50));

const zodiac = [
   '원숭이',
   '닭',
   '개',
   '돼지',
   '쥐',
   '소',
   '호랑이',
   '토끼',
   '용',
   '뱀',
   '말',
   '양',
];

function printZodiac(year) {
   return zodiac[year % 12];
}

console.log(printZodiac(1995));

// - 함수의 이름 식별자는 동사 형태로 작성한다 : ex) eventListener, startSlide...
// - parameter(매개변수)는 호출 시 작성한 매개변수를 함수를 정의한 로직 내부에 전달하는 역할을 한다
// - return(반환)은 함수 내부에서 작성한 결과값을 함수블럭 외부로 반환한다.
// - 기본(선언형, 기명) 함수는 호이스팅된다.

// 2. 함수의 역할
// - 반복되는 코드를 한 번만 정의하고 필요 시 호출하여 반복을 피한다
// - 여러 기능을 분리하여 모듈화할 수 있다

// 3. 익명함수
// - 함수를 정의할때 함수의 이름(식별자) 없이 정의하는 형태를 말한다.
// - 이름이 정해지지 않았지만 함수 자체를 변수에 저장했기 때문에 변수 이름이 기명함수의 이름과 같이 사용된다.
// setNoName(); // 익명함수는 호이스팅 되지 않는다.
const nonameFunc = function () {
   console.log('no name function');
};

nonameFunc();

// 함수의 매개변수(parameter)의 개수
// - 매개변수는 기본적으로 선언시 개수와 정의시 개수가 같은게 일반적이다.
// - 하지만 개수가 다르더라도 오류가 나지는 않지만 남는 매개변수는 undefined로 할당된다.

function overParams(a, b, c) {
   console.log(a, b, c);
}

overParams(1, 2, 3);
overParams(1, 2); // 없는 부분 undefined
overParams(1, 2, 3, 4, 5); // 남는 부분 무시

// 가변 매개변수
// - 호출 시 매개변수의 개수가 고정되어 있지 않을 경우 사용할 수 있는 방법이 나머지 매개변수(rest parameter)라 한다.
// - signiture : function fName(...rest parameter) {}
// - 나머지 매개변수는 배열 형태로 리턴된다

function restParams(...a) {
   return a;
}

console.log(restParams(1, 2, 3, 4));
console.log(restParams(1, 2, 3, 4, 5, 6, 7, 8));

// - 화살표 함수는 es6부터 제공되는 함수 작성 방식이다.
// - 일반 함수 작성 방식과 차이점은 this 키워드로 접근되는 대상이 다르다. 참조 : https://velog.io/@padoling/JavaScript-%ED%99%94%EC%82%B4%ED%91%9C-%ED%95%A8%EC%88%98%EC%99%80-this-%EB%B0%94%EC%9D%B8%EB%94%A9

const a = function () {}; // 익명함수
function b() {} // 기명함수
const c = () => {}; // 화살표 함수

const top1 = document.querySelector('.top');

// top1.addEventListener('click', function () {
//    console.log(this);
// });

// top1.addEventListener('click', () => {
//    console.log(this);
// });

top1.addEventListener('click', (e) => {
   console.log(e.target); //이벤트 대상
});

// 함수 리턴 값이 하나의 리터럴이면 {} 제외 가능
// function sumNum(a, b) {
//    return a + b;
// }
const sumNum = (a, b) => a + b;
console.log(sumNum(1, 2));
