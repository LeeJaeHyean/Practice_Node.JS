const express = require("express");
const app = express();

console.log("여기는 게시판 DTO다아아아ㅏ1ㅏ1ㅏ1!!!!!!!!!!!!!!!!");

class BoardDto {
  constructor(no, title, contents) {
    this.no = no;
    this.title = title;
    this.contents = contents;
  }

  getNo() {
    return this.no;
  }

  setNo(wirteBoard) {
    this.no = wirteBoard.no;
  }

  getTitle() {
    return this.title;
  }

  setTitle(wirteBoard) {
    this.title = wirteBoard.title;
  }

  getContents() {
    return this.contents;
  }

  setContents(wirteBoard) {
    this.contents = wirteBoard.contents;
  }
}


module.exports = BoardDto;