// JSON은 javascript object notation의 약자로 데이터를 표현할 수 있는 방식 중 하나다.
// 기존에는 XML, CSV 등의 형식으로 데이터를 전달했지만 최근에는 데이터 크기 등의 효율성 측면에서 JSON이 우수하기 때문에 대부분 JSON 방식으로 데이터를 전달한다.

// json의 형태: {} 객체 형식
// const myClass = [
//    {
//       name: 'Marshall',
//       age: 25,
//    },
//    {
//       name: 'Jane',
//       age: 20,
//    },
// ]; //자바스크립트 객체

const myClass = [
   {
      name: 'Marshall',
      age: 25,
   },
   {
      name: 'Jane',
      age: 20,
   },
];

// console.log(myClass);
// // 데이터를 보낼때는 문자 형태로 보내야 함
// console.log(JSON.stringify(myClass));
// // 스트링 형태의 JSON 문자열을 자바스크립트 형태로 바꾼다.
// console.log(JSON.parse(myClass));

const data = fetch(
   'https://www.dabipyeung.com/baexang_back/product/get_products?cate=dp&limit=8&sort=new'
)
   .then((res) => {
      return res.json();
   })
   .then((json) => {
      console.log(json);
   });

// json 데이터는 반복문을 사용해 접근한다
// for, forEash, map, filter, for in, for of
// forEash: DOM 반복 객체를 읽을 수 있다. 변수 저장이 안 된다.
// map: DOM 반복 객체를 읽을 수 없다. 변수 저장이 된다.
// json 데이터를 읽을 경우 일반적으로 map을 많이 사용한다.

const classMembers = myClass.map((member) => {
   console.log(member);
   console.log(`${member.name}의 나이는 ${member.age}세 입니다.`);
});

// 4. JSON 작성 규칙
// - 값을 표현할 때는 문자열, 숫자, boolean 자료만 사용할 수 있다.
// - 문자열과 키에는 큰 따옴표만를 사용한다.
// - 하지만 JSON 작성 시에는 큰 따옴표 규칙을 적용하지 않아도 되지만 데이터를 JSON.stringify를 사용하게 되면 큰 따옴표 규칙이 적용된다.
// - 실제 오픈API 데이터는 이 형식으로 데이터를 제공한다. : ex) https://yts.torrentbay.to/api/v2/list_movies.json

// - JSON.stringify는 데이터를 문자열로 만들기 때문에 반복 문법 접근이 안된다.
// - 브라우저에서 확인할 때는 별도의 확장팩을 사용하여 확인할 수 있다. 크롬의 경우 크롬 웹스토어에서 json formetter를 설치하거나 formetter를 제공하는 사이트를 이용하면 된다.
// - JSON.parse() : 따라서 공공데이터에서 제공받은 JSON 문자열 데이터는 다시 자바스크립트 형식으로 만들어야 한다. 이때 사용하는 것이 JSON.parse()다.
