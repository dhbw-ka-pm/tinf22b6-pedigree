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
  if(button.childNodes[0] != undefined){
    let animalOfField = button.childNodes[0].nodeValue;
    document.getElementById("pop-up-title").innerHTML = animalOfField;
    loadAnimalValues(animalOfField);
  }
}

function loadAnimalValues(animal){
  xml = loadXMLDoc("data.xml");
  let animals = xml.getElementsByTagName("animal");
  let table = document.createElement("table");
  let tbody = document.createElement("tbody");
  for (let i = 0; i < animals.length; i++) {
    if(animals[i].getElementsByTagName("name")[0].childNodes[0].nodeValue == animal){
      if(animals[i].getElementsByTagName("rasse")[0].childNodes[0] != undefined){
        let value = animals[i].getElementsByTagName("rasse")[0].childNodes[0].nodeValue;
        let tr = document.createElement("tr");
        let tdB = document.createElement("td");
        let tdW = document.createElement("td");
        tdB.textContent = "Rasse:";
        tdW.textContent = value;
        tr.appendChild(tdB);
        tr.appendChild(tdW);
        tbody.appendChild(tr);
      }
      if(animals[i].getElementsByTagName("farbe")[0].childNodes[0] != undefined){
        let value = animals[i].getElementsByTagName("farbe")[0].childNodes[0].nodeValue;
        let tr = document.createElement("tr");
        let tdB = document.createElement("td");
        let tdW = document.createElement("td");
        tdB.textContent = "Farbe:";
        tdW.textContent = value;
        tr.appendChild(tdB);
        tr.appendChild(tdW);
        tbody.appendChild(tr);
      }
      if(animals[i].getElementsByTagName("quelle_zucht")[0].childNodes[0] != undefined){
        let value = animals[i].getElementsByTagName("quelle_zucht")[0].childNodes[0].nodeValue;
        let tr = document.createElement("tr");
        let tdB = document.createElement("td");
        let tdW = document.createElement("td");
        tdB.textContent = "Quelle Zucht:";
        tdW.textContent = value;
        tr.appendChild(tdB);
        tr.appendChild(tdW);
        tbody.appendChild(tr);
      }
      if(animals[i].getElementsByTagName("parent1")[0].childNodes[0] != undefined){
        let value = animals[i].getElementsByTagName("parent1")[0].childNodes[0].nodeValue;
        let tr = document.createElement("tr");
        let tdB = document.createElement("td");
        let tdW = document.createElement("td");
        tdB.textContent = "Elternteil 1:";
        tdW.textContent = value;
        tr.appendChild(tdB);
        tr.appendChild(tdW);
        tbody.appendChild(tr);
      }
      if(animals[i].getElementsByTagName("parent2")[0].childNodes[0] != undefined){
        let value = animals[i].getElementsByTagName("parent2")[0].childNodes[0].nodeValue;
        let tr = document.createElement("tr");
        let tdB = document.createElement("td");
        let tdW = document.createElement("td");
        tdB.textContent = "Elternteil 2:";
        tdW.textContent = value;
        tr.appendChild(tdB);
        tr.appendChild(tdW);
        tbody.appendChild(tr);
      }
      if(animals[i].getElementsByTagName("jungtiere")[0].childNodes[0] != undefined){
        let value = animals[i].getElementsByTagName("jungtiere")[0].childNodes[0].nodeValue;
        let tr = document.createElement("tr");
        let tdB = document.createElement("td");
        let tdW = document.createElement("td");
        tdB.textContent = "Jungtiere:";
        tdW.textContent = value;
        tr.appendChild(tdB);
        tr.appendChild(tdW);
        tbody.appendChild(tr);
      }

      table.appendChild(tbody);
      let div = document.getElementById("container");
      div.innerHTML = "";
      div.appendChild(table);

      if(animals[i].getElementsByTagName("kurzbeschreibung")[0].childNodes[0] != undefined){
        let value = animals[i].getElementsByTagName("kurzbeschreibung")[0].childNodes[0].nodeValue;
        let p = document.createElement("p");
        p.textContent = "Kurzbeschreibung: " + value;
        div.appendChild(p);
      }
      return;
    }
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
try {xhttp.responseType = "msxml-document"} catch(err) {}
xhttp.send("");
return xhttp.responseXML;
}

function closePopUp(){
  document.getElementById("overlay").classList.remove("active");
}
