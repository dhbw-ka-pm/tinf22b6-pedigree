// SVGs ---------------------------------------------------------------------------
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

function setLineAttributes(element, x1, x2, y1, y2){
    element.setAttribute("x1", x1);
    element.setAttribute("x2", x2);
    element.setAttribute("y1", y1);
    element.setAttribute("y2", y2);
}

// Info-Pop-Up ----------------------------------------------------------------
function popup(button){
  document.getElementById("overlay").classList.toggle("active");
  document.getElementById("pop-up-title").innerHTML = button.childNodes[0].nodeValue;
  console.log(button.childNodes[0].nodeValue);
  loadXML();
}

function loadXML(){
  const oXHR = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');

  function reportStatus() {
    if (oXHR.readyState == 4)       //  request completed.
        loadAnimalValues(this.responseXML);      // Now show the data.
  }

  oXHR.onreadystatechange = reportStatus;
  oXHR.open("GET", "data.xml", true);      
  oXHR.send();
}

function loadAnimalValues(){
  
}
