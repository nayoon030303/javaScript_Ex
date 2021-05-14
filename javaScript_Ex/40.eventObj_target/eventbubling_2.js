
function init(){
    const section = document.querySelector("#section1-2");

    const tbody = section.querySelector("tbody");
    
    tbody.onclick = function(e){
        if(e.target.nodeName==="INPUT"){
            tbody.removeChild(e.target.parentElement.parentElement);
        }
    
    }

  
};


window.addEventListener("load",init);