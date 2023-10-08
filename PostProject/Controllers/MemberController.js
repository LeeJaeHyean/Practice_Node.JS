// import jwt from "jsonwebtoken";
// const jwt = require("jsonwebtoken");
const port = 3000;
const express = require("express");
const ejs = require('ejs');
const path = require('path');

const mainModuel = require('../Dao&Dto/MemberDao');
// const Member = require("../Dao&Dto/MemberDto");

const bodyParser = require('body-parser');
const session = require("express-session");
const app = express();

app.use('/node_modules', express.static(path.join(__dirname, 'node_modules')));

app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: false}));
app.set('view engine', 'ejs');
app.set('views','../views');
app.use(session({
    secret : "1234",
    resave : false,
    saveUninitialized : true,
    cookie : { secure : true }
}));


app.listen(port, () => {
    console.log(`express app listening on port ${port}`);
});

app.get('/', (req, res) => {
    res.render('main');
});

app.get('/main', (req, res) => {
    res.render('main');
});

app.get('/login', (req, res) => {
    console.log("Here is Get Login");
    res.render('login');
});

app.get('/JoinMember', (req, res) => {
    console.log("Join Member");
    res.render('JoinMember');
});

app.post('/main', (req, res) => {
    if(req.session === null) {
        console.log("SESSION IS NULL!!!!!!!!!!!!!!!!!!!!");
        return;
    } 
    console.log("Session :", req.session);
    res.redirect('main');
});

app.post('/acceptLogin', (req, res) => {
    console.log(" HELLLLLLLLLLLLLLLLLLLLLLLO!!!!!!!");
    let userInfo = { 
        id : req.body.id,
        pw : req.body.pw
    };
    let temp = document.getElementsByClassName("logDiv");

    mainModuel.loginfo(userInfo, (result) => {
        if (!result) {
            req.session.userId = null; 
            console.log("세션 저장이 안됐습니다.");
            document.addEventListener(visib)
            res.render('login');
        } else {
            req.session.userId = userInfo.id; 
            req.session.save(() => {
                console.log("SESSION : ", req.session);
                temp[0].style.visibility = "hidden";
                res.redirect('main');
                return;
            });
        }
    });

});


app.post('/JoinMemberShip', (req, res) => {
    let userEmail = req.body.firstEmail.trim().concat(req.body.lastEmail);
    // Email 정규식
    const regExp = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    const email = userEmail;

    const userinfo = {
        id : req.body.id, 
        pw : req.body.pw, 
        name : req.body.name, 
        nickName : req.body.NickName, 
        email : email,
        gender : req.body.gender
    }
    
    // const sendDTO = Member.MemberDto(userinfo);
    // console.log("HA SSEBAL");
    console.log(userinfo);
    if(req.body.pw !== req.body.rpw && req.body.pw.length <= 12 && req.body.pw.length > 16) {
        console.log("비밀번호 오류");
        return;
    } else if (!regExp.test(email)) {
        console.log("Email 오류");
        return;
    }
    else {
        mainModuel.processUserInfo(userinfo, (result) => {
            res.redirect('login');
            return;
        });
    }
});

