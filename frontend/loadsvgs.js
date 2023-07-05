function loadsvg(){
    let list = document.getElementsByTagName("svg");
    for (let l of list){
        let childs = l.children;
        let vMiddle = l.clientHeight / 2;
        let hMiddle = l.clientWidth / 2;
            setLineAttributes(childs[0], 0, hMiddle, vMiddle, vMiddle);
            setLineAttributes(childs[1],hMiddle,hMiddle,vMiddle*0.5,vMiddle*1.5);
            setLineAttributes(childs[2], hMiddle, l.clientWidth, vMiddle*0.5, vMiddle*0.5);
            setLineAttributes(childs[3], hMiddle, l.clientWidth, vMiddle*1.5, vMiddle*1.5);
        
    }
}


function loadsinglesvg(element){
    //let element = document.getElementByClass(svgs);
    let leftLine = document.getElementByClass("ll");
    let verticalLine = document.getElementByClass("vl");
    let rightLine1 = document.getElementByClass("rl"+1);
    let rightLine2 = document.getElementByClass("rl"+2);
    let vMiddle = (lBound - uBound) / 2;
    let hMiddle = element.clientWidth / 2;
    setLineAttributes(leftLine, 0, hMiddle, vMiddle, vMiddle);
    setLineAttributes(verticalLine,hMiddle,hMiddle,vMiddle*0.5,vMiddle*1.5);
    setLineAttributes(rightLine1, hMiddle, element.clientWidth, vMiddle*0.5, vMiddle*0.5);
    setLineAttributes(rightLine2, hMiddle, element.clientWidth, vMiddle*1.5, vMiddle*1.5);
}

function setLineAttributes(element, x1, x2, y1, y2){
    element.setAttribute("x1", x1);
    element.setAttribute("x2", x2);
    element.setAttribute("y1", y1);
    element.setAttribute("y2", y2);
}