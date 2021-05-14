const init = function(){

    let notices = [
        {"id":1, "title":"근데 조회수가 ㅜㅜ..", "regDate":"2019-01-25", "writerId":"newlec", "hit":0},
        {"id":2, "title":"유투브에 끌려다니지 않으려고 했는데....ㅜㅜ..", "regDate":"2019-02-05", "writerId":"newlec", "hit":2},
        {"id":3, "title":"자바스크립트란..", "regDate":"2019-02-02", "writerId":"newlec", "hit":0},
        {"id":4, "title":"기본기가 튼튼해야....", "regDate":"2019-02-01", "writerId":"newlec", "hit":1}
    ];
    

    const section = document.querySelector("#section10");

    const noticeList = section.querySelector(".notice-list");
    const titleTd = section.querySelector(".title");
    const tbodyNode = section.querySelector("tbody");

    let bindData = function(){
        let template = section.querySelector("template");

        for(let i=0; i<notices.length; i++){
            let cloneNode = document.importNode(template.content,true); 
            let tds = cloneNode.querySelectorAll("td");
            tds[0].innerHTML = notices[i].id;
            tds[1].innerHTML = `<a href = "${notices[i].id}">${notices[i].title}</a>`
            tds[2].innerHTML = notices[i].regDate;
            tds[3].innerHTML = notices[i].writerId;
            tds[4].innerHTML = notices[i].hit;
            tbodyNode.append(cloneNode);
        }
    };

    let titleSorted = false;

    titleTd.onclick = function(){  
        tbodyNode.innerHTML = ""; 

        if(!titleSorted){
            titleSorted = true;
    
            notices=notices.sort((a,b)=>{
                if(a.title<b.title) //오름차순ㄱ~ㅎ
                    return -1;
                else if(a.title>b.title)
                    return 1;
                else 
                    return 
            });
        }else{
            notices.reverse();
        }
      
        bindData();
       
    };


    bindData();
};

window.addEventListener("load",init);