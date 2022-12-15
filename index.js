const express = require("express");
// CORS 묘듈
const cors = require("cors");
const app = express();
const pokeData = require("./data.js");
// CORS 설정 : 모두 허용
app.use(cors());
//get 요청 응답 접속을 받으면 평션안에있는것을 실행하는것
app.get("/", (요청, 응답) => {
  응답.send(`./index.html`);
  //send텍스트로보임
});

// API 요청
app.get("/api/:id", (req, res) => {
  //   res.json(pokeData);
  //json데이터로 보임
  console.log(req.params.id);
  if (req.params.id == "all") {
    res.json(pokeData);
  } else {
    //요청한 변수 (prams.id)의 포케몬 데이터보내기
    res.json(pokeData[req.params.id]);
  }
});

//서버 오픈
app.listen(3000, function () {
  console.log("서버가 열림");
});

/*  
크롬 확장자 JSON Formatter를 설치할 경우 
(문자열)스트링으로 나오는것을 (오브젝트)parsed값으로보여준다.
*/
