const express = require("express");

const app = express();

app.use("/", (req, res) => {
  res.send("안녕! node.js와 Docker 그리고 github actions cl/cd test 중이야!");
});

app.listen(3000, () => {
  console.log("3000번 포트에서 서버가 실행중입니다.");
});
