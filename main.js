

// 생성자 함수 방식
// const regexp = new RegExp('the', 'gi')

// 리터럴 방식
// const regexp = /the/gi
// console.log(str.match(regexp))

// let str = `
// 010-1234-5678
// theabc123@gmail.com
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbcccdddd
// `

// const regexp = /fox/gi
// str = str.replace(regexp, 'AAA')
// console.log(str) // 이런 경우엔 원본 데이터 변형됨

// console.log(str.match(/\./gi)) // ['.', '.', '.', '.']

// $ 이 의미하는 것: . 으로 끝나는 부분
// console.log(str.match(/\.$/gi)) // null

// multiline 플래그 추가 (줄바꿈된 여러 줄에 일치)
// console.log(str.match(/\.$/gim)) // ['.']


// console.log(str.match(/d$/g)) // null
// console.log(str.match(/d$/gm)) // ['d']

// console.log(str.match(/^t/gim)) // ['t', 'T']

// 문자 데이터의 각각의 모든 글자들과 일치
// console.log(str.match(/./g))

// console.log(str.match(/fox|dog/)) // fox만 찾음
// 이 경우도 fox가 먼저 찾아지기 때문에 fox만 찾음
// console.log(str.match(/dog|fox/))

// let str = `
// 010-1234-5678
// theabc123@gmail.com
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbcccdddd
// http://localhost:1234
// `

// console.log(str.match(/https/g)) // ['https']
// console.log(str.match(/https?/g)) // ['https', 'http']

// console.log(str.match(/d{2}/)) // dd
// console.log(str.match(/d{2}/g)) // ['dd', 'dd']
// console.log(str.match(/d{2,}/)) // dddd

// /w: 숫자를 포함한 영어 알파벳들을 의미
// /b /b: 알파벳과 숫자가 아닌 부분에 경계를 생성
// console.log(str.match(/\b\w{2,3}\b/g))
// ['010', 'com', 'www', 'com', 'The', 'fox', 'the', 'dog']

// console.log(str.match(/[fox]/g)) // f 또는 o 또는 x 모두 찾기
// console.log(str.match(/[0-9]{1,}/g))
// ['010', '1234', '5678', '123', '7035', '60', '1234']

// let str = `
// 010-1234-5678
// theabc123@gmail.com
// https://www.omdbapi.com/?apikey=7035c60c&s=frozen
// The quick brown fox jumps over the lazy dog.
// abbcccdddd
// http://localhost:1234
// `

// 63개 문자가 아닌 경계에서 시작을 해서
// f라는 알파벳 단어로 시작하고
// 그 뒤에 63개 문자가 1개 이상 오는 연속 일치
// 63개 문자가 아닌 경계에서 끝나는 부분 찾기
// console.log(str.match(/\bf\w{1,}\b/g)) // ['frozen', 'fox']

// const h = `   the hello  world   !

// `
// console.log(h.replace(/\s/g, '')) // thehelloworld!


const str = `
010-1234-5678
theabc123@gmail.com
https://www.omdbapi.com/?apikey=7035c60c&s=frozen
The quick brown fox jumps over the lazy dog.
abbcccdddd
`

// 임의의 문자를 의미하는 마침표(.)와
// 1개 이상 일치시키기
// 이메일 주소의 아이디만 출력
console.log(str.match(/.{1,}(?=@)/g)) // ['theabc123']

console.log(str.match(/(?<=@).{1,}/g)) // ['gmail.com']

