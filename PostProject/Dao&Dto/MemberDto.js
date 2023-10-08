const express = require("express");
const app = express();

let id;
let pw;
let name;
let nickName;
let email;
let gender;

function getid() {
    return id;
}

function setid(id) {
    this.id = id;
}

function getpw() {
    return pw;
}

function setpw() {
    this.pw = pw;
}

function getname() {
    return name;
}

function setname(name) {
    this.name = name;
}

function getNickName() {
    return nickName;
}

function setNickName(nickName) {
    this.nickName = nickName;
}

function getEmail() {
    return email;
}

function setEmail(email) {
    this.email = email;
}

function getGender() {
    return gender
}

function setGender(gender) {
    this.gender = gender;
}
module.exports = {
    MemberDto: function (userInfo, callback) {
        if(userInfo.requestValue === "joinMemberShip") {
            console.log("Value : ",userInfo.requestValue);
            setid(userInfo.id);
            setpw(userInfo.pw);
            setNickName(userInfo.nickName);
            setEmail(userInfo.email);
            setGender(userInfo.gender);
            result ={
                id : this.id,
                pw : this.pw,
                name : this.name,
                nickName : this.nickName,
                email : this.email,
                gender : this.gender
            };
            return result;
        } else if(userInfo.requestValue === "Login" ) {
        }
    }
};