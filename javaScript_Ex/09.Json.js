let student = {
    kor:90,
    eng:80,
    mat:100
};

// 역슬래쉬 \  한문장으로 취급
let datas = '[\
    student,\
    student,\
    student\
];'


//eval
eval('var y = 50;'); //var만 지원 가능(let,const 지원X)
console.log(y);

eval("var ar = "+datas+";");
console.log(ar);


let user = {
        "id":1,
        "title":"aaa"
}

// parse
let users = JSON.parse('{"id":1,"title":"aaa"}');
console.log(users.id);

// stringify: 객체->문자열 
var data1 = {id:2, title:"bbb"};
var json = JSON.stringify(data1);
console.log(json);