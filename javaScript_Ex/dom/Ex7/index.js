const on_click = function(){

    let trNode = noticeList.querySelector("tbody tr");
    let cloneNode = trNode.cloneNode(true);//false: 껍데기만 복제, true:모든 자식노드 다 복제
    let tds = cloneNode.querySelectorAll("td");

    for(let i=0; i<notices.length; i++){
        tds[0].innerHTML = notices[i].id;
        tds[1].innerHTML = `<a href = "${notices[i].id}">${notices[i].title}</a>`
        tds[2].innerHTML = notices[i].regDate;
        tds[3].innerHTML = notices[i].writerId;
        tds[4].innerHTML = notices[i].hit;
        tbodyNode.append(cloneNode);
    }
   
 
}

function init(){
    let notices = [
        {id:5,title:"집...", regDate:"2020-05-13", writerId:"nyny", hit:3},
        {id:6,title:"집집집", regDate:"2020-05-14", writerId:"ny", hit:10}
    ];

    let section = document.querySelector("#section7");
    let noticeList = section.querySelector(".notice-list");
    let tbodyNode = noticeList.querySelector("tbody");
    let cloneBtn = section.querySelector(".clone-button");
    let cloneTempBtn = section.querySelector(".template-button");

    if(tbodyNode.children.length!==0){
        cloneBtn.onclick = on_click;
    }
    

    cloneTempBtn.onclick = function(){
        let template = section.querySelector("template");

        for(let i=0; i<notices.length; i++){
            let cloneNode = document.importNode(template.content,true); 
            let tds = cloneNode.querySelectorAll("td");
            tds[0].innerHTML = notices[i].id;
            tds[1].innerHTML = `<a href = "${notices[i].id}">${notices[i].title}</a>`
            tds[2].innerHTML = notices[i].regDate;
            tds[3].innerHTML = notices[i].writerId;
            tds[4].innerHTML = notices[i].hit;
            console.log(notices[i].id);
            tbodyNode.append(cloneNode);
            console.log(tbodyNode);
        }
    };
}

window.addEventListener("load",init);