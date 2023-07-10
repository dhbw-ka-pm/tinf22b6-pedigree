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
        let element = pdoc.getElementById("pet-box1");
        console.log(element);
        element.innerHTML = searchstring;
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
xsl = loadXMLDoc("list.xsl");
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