//SVG ----------------------------------------------------------------------------------------
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

// Auswahl Tier aus der Liste --------------------------------------------------

function search(){
    //console.log("such aufruf")
    let searchstring = document.getElementById("animalsearchinput").value;
    if (searchstring == "keine Einträge"){
        window.alert('Entschuldigung, aber aktuell sind keine Eiträge vorhanden.\nErstellen Sie Einträge in dem Sie auf "Tier hinzufügen" klicken');
    }
    else if (searchstring == "") {
        alert("Bitte wählen Sie ein Eintrag aus der Liste aus");
    }
    else {
        //console.log(searchstring);
        let pdoc = window.parent.document;
        element = pdoc.getElementById("tree-box");
        element.innerHTML='';
        displayXMLwithParam("data.xml","xslt/pedigree.xsl",element, searchstring);
        loadsvg();
    }
}


// XSLT ---------------------------------------------------------------------

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
  //console.log("load xml");
    xml = loadXMLDoc("data.xml");
    xsl = loadXMLDoc("xslt/list.xsl");

    if (window.ActiveXObject || xhttp.responseType == "msxml-document")
    {
    ex = xml.transformNode(xsl);
    document.getElementById("pet-box1").innerHTML = ex;
    }

    else if (document.implementation && document.implementation.createDocument)
    {
    xsltProcessor = new XSLTProcessor();
    xsltProcessor.importStylesheet(xsl);
    resultDocument = xsltProcessor.transformToFragment(xml, document);
    document.getElementById("animals-list").innerHTML = "";
    document.getElementById("animals-list").appendChild(resultDocument);
    }
}

function displayXMLwithParam(xmlPath, xslPath, element, searchstring) {
  //console.log("load xml");
    xml = loadXMLDoc(xmlPath);
    xsl = loadXMLDoc(xslPath);

    if (window.ActiveXObject || xhttp.responseType == "msxml-document")
    {
    ex = xml.transformNode(xsl);
    document.getElementById("pet-box1").innerHTML = ex;
    }

    else if (document.implementation && document.implementation.createDocument)
    {
    xsltProcessor = new XSLTProcessor();
    
    xsltProcessor.setParameter(null, "searchstring", searchstring);

    xsltProcessor.importStylesheet(xsl);
    resultDocument = xsltProcessor.transformToFragment(xml, document);
    element.appendChild(resultDocument);
    }
}


// Verwandschaftsrechner ------------------------------------------------------------------------
function testAnimals(){
  let animal1 = document.getElementById("animalsearchinput1").value;
  let animal2 = document.getElementById("animalsearchinput2").value;
  let result = testOneAnimal(animal1, animal2);
  console.log("result" + result);
  if(result == undefined){
    result = testOneAnimal(animal2, animal1);
  }
  if(result == undefined){
    result = "Es konnte kein Verwandschaftsverhältnis <= 3 Grades (ausgenommen Urgroßeltern-/enkel) festgestellt werden";
  }
  document.getElementById("output-field").innerHTML = result;
}

function testOneAnimal(testedAnimal, searchedAnimal){
  let parent1;
  let parent2;
  let grandparents = [];
  let animals = xml.getElementsByTagName("animal");
  console.log(xml);
  //ließt die Eltern
  for (let i = 0; i < animals.length; i++) {
    if(animals[i].getElementsByTagName("name")[0].childNodes[0].nodeValue == testedAnimal){
      if(animals[i].getElementsByTagName("parent1")[0].childNodes[0]!=undefined){
        parent1 = animals[i].getElementsByTagName("parent1")[0].childNodes[0].nodeValue;
      }
      if(animals[i].getElementsByTagName("parent2")[0].childNodes[0]!=undefined){
        parent2 = animals[i].getElementsByTagName("parent2")[0].childNodes[0].nodeValue;
      }
    }
  }
  //Überprüft die Eltern
  if(parent1 == searchedAnimal || parent2 == searchedAnimal){
    return testedAnimal + " ist ein Kind von " + searchedAnimal;
  }
  //Testet auf Geschwister
  for (let i = 0; i < animals.length; i++) {
    if(animals[i].getElementsByTagName("name")[0].childNodes[0].nodeValue == searchedAnimal){
      if(((animals[i].getElementsByTagName("parent1")[0].childNodes[0]!=undefined) && (animals[i].getElementsByTagName("parent2")[0].childNodes[0]!=undefined)) &&
        (((animals[i].getElementsByTagName("parent1")[0].childNodes[0].nodeValue == parent1) || (animals[i].getElementsByTagName("parent1")[0].childNodes[0].nodeValue == parent2)) &&
         ((animals[i].getElementsByTagName("parent2")[0].childNodes[0].nodeValue == parent1) || (animals[i].getElementsByTagName("parent2")[0].childNodes[0].nodeValue == parent2)))){
          return testedAnimal + " ist ein Geschwisterkind von " + searchedAnimal;
      }
      else {
        break;
      }
    }
  }

  //Ließt die Großeltern
  for (let i = 0; i < animals.length; i++) {
    if((animals[i].getElementsByTagName("name")[0].childNodes[0].nodeValue == parent1) || (animals[i].getElementsByTagName("name")[0].childNodes[0].nodeValue == parent2)){
      if(animals[i].getElementsByTagName("parent1")[0].childNodes[0]!=undefined){
        console.log(animals[i].getElementsByTagName("parent1")[0].childNodes[0].nodeValue);
        grandparents.push(animals[i].getElementsByTagName("parent1")[0].childNodes[0].nodeValue); 
      }
      if(animals[i].getElementsByTagName("parent2")[0].childNodes[0]!=undefined){
        grandparents.push(animals[i].getElementsByTagName("parent2")[0].childNodes[0].nodeValue);
      }
    }
  }
  //testet auf Großeltern
  for (let i = 0; i < grandparents.length; i++) {
    //console.log("GP: "+ grandparents[i] + " SA:" + searchedAnimal);
    //console.log(grandparents[i] == searchedAnimal);
    if(grandparents[i] == searchedAnimal){
      return testedAnimal + " ist ein Enkel von " + searchedAnimal;
    }
  }
  console.log("kein Großelternteil");
  //Testet auf Onkel/Tante
  for (let i = 0; i < animals.length; i++) {
    if(animals[i].getElementsByTagName("name")[0].childNodes[0].nodeValue == searchedAnimal){
      console.log("N: " + animals[i].getElementsByTagName("name")[0].childNodes[0].nodeValue);
      for (let j = 0; j < grandparents.length; j++) {
        //console.log("GP:" + grandparents[i]);
        //console.log("P1: " + animals[i].getElementsByTagName("parent1")[0].childNodes[0].nodeValue);
        //console.log("P2: " + animals[i].getElementsByTagName("parent2")[0].childNodes[0].nodeValue);
        if((grandparents[j] == animals[i].getElementsByTagName("parent1")[0].childNodes[0].nodeValue) || (grandparents[j] == animals[i].getElementsByTagName("parent2")[0].childNodes[0].nodeValue)){
          return searchedAnimal + " ist ein/e Onkel/Tante von " + testedAnimal;
        }
      }
    }
  }
  return;
}