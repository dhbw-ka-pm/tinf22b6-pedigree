function loadsvg(){
    displayResult();
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


function loadXMLDoc(filename)
{
if (window.ActiveXObject)
  {
  xhttp = new ActiveXObject("Msxml2.XMLHTTP");
  }
else
  {
  xhttp = new XMLHttpRequest();
  }
xhttp.open("GET", filename, false);
try {xhttp.responseType = "msxml-document"} catch(err) {} // Helping IE11
xhttp.send("");
return xhttp.responseXML;
}

function displayResult()
{
console.log("Funktion aufgerufen");
xml = loadXMLDoc("data.xml");
console.log("XML geladen");
xsl = loadXMLDoc("transform.xsl");
console.log("XSLT geladen");
// code for IE
if (window.ActiveXObject || xhttp.responseType == "msxml-document")
  {
    console.log("IE");
  ex = xml.transformNode(xsl);
  document.getElementById("pet-box1").innerHTML = ex;
  }
// code for Chrome, Firefox, Opera, etc.
else if (document.implementation && document.implementation.createDocument)
  {
    console.log("not IE");
  xsltProcessor = new XSLTProcessor();
  xsltProcessor.importStylesheet(xsl);
  resultDocument = xsltProcessor.transformToFragment(xml, document);
  document.getElementById("pet-box1").appendChild(resultDocument);
  }
}