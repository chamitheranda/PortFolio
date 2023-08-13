const longParagraph = document.getElementById("longParagraph1");
const container = document.getElementById("container1");

const longParagraph2 = document.getElementById("longParagraph2");
const container2 = document.getElementById("container2");

const longParagraph3 = document.getElementById("longParagraph3");
const container3 = document.getElementById("container3");

const contentScrollHeight = longParagraph.scrollHeight;

function click1(){

    if(container.getAttribute("max-height") < 13){
        container.classList.toggle("newexpandable-container1")
    }else if(container.getAttribute("max-height") > 13){
        container.classList.add("expandable-container1");
    }
}

function click2(){
    if(container2.getAttribute("max-height") < 13){
        container2.classList.toggle("newexpandable-container2");
    }else if(container2.getAttribute("max-height") > 13){
        container2.classList.add("expandable-container2");
    }
}

function click3(){
    if(container.getAttribute("max-height") < 13){
        container3.classList.toggle("newexpandable-container3");
    }else if(container.getAttribute("max-height") > 13){
        container3.classList.add("expandable-container3");
    }
}








  
