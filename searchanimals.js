function loadsvg(){
  let list = window.parent.document.getElementsByTagName("svg");
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

function search(){
    console.log("such aufruf")
    let searchstring = document.getElementById("animalsearchinput").value;
    if (searchstring == "keine Einträge"){
        window.alert('Entschuldigung, aber aktuell sind keine Eiträge vorhanden.\nErstellen Sie Einträge in dem Sie auf "Tier hinzufügen" klicken');
    }
    else if (searchstring == "") {
        alert("Bitte wählen Sie ein Eintrag aus der Liste aus");
    }
    else {
        console.log(searchstring);
        let pdoc = window.parent.document;
        element = pdoc.getElementById("tree-box");
        element.innerHTML='';
        displayXMLwithParam("data.xml","xslt/pedigree.xsl",element, searchstring);
        loadsvg();
    }
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

function loadList() 
{
  console.log("load xml");
    xml = loadXMLDoc("data.xml");
    xsl = loadXMLDoc("xslt/list.xsl");
    // code for IE
    if (window.ActiveXObject || xhttp.responseType == "msxml-document")
    {
    ex = xml.transformNode(xsl);
    document.getElementById("pet-box1").innerHTML = ex;
    }
    // code for Chrome, Firefox, Opera, etc.
    else if (document.implementation && document.implementation.createDocument)
    {
    xsltProcessor = new XSLTProcessor();
    xsltProcessor.importStylesheet(xsl);
    resultDocument = xsltProcessor.transformToFragment(xml, document);
    document.getElementById("animals-list").appendChild(resultDocument);
    }
}

function displayXMLwithParam(xmlPath, xslPath, element, searchstring) {
  console.log("load xml");
    xml = loadXMLDoc(xmlPath);
    xsl = loadXMLDoc(xslPath);
    // code for IE
    if (window.ActiveXObject || xhttp.responseType == "msxml-document")
    {
    ex = xml.transformNode(xsl);
    document.getElementById("pet-box1").innerHTML = ex;
    }
    // code for Chrome, Firefox, Opera, etc.
    else if (document.implementation && document.implementation.createDocument)
    {
    xsltProcessor = new XSLTProcessor();

    //let xmlDoc = document.implementation.createDocument("", "", null);
    //let paramValue = searchstring;
    //xmlDoc.appendChild(xmlDoc.createTextNode(paramValue));
    
    xsltProcessor.setParameter(null, "searchstring", searchstring);

    xsltProcessor.importStylesheet(xsl);
    resultDocument = xsltProcessor.transformToFragment(xml, document);
    element.appendChild(resultDocument);
    }
}