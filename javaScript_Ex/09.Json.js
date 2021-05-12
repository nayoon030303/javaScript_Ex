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


eval('var y = 50;'); //var만 지원 가능(let,const 지원X)
console.log(y);

eval("var ar = "+datas+";");
console.log(ar);