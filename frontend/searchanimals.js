function search(){
    let searchstring = document.getElementById("animalsearchinput").value;
    if (searchstring == "keine Einträge"){
        window.alert("Entschuldigung, aber aktuell sind keine Eiträge vorhanden.\nErstellen Sie Einträge in dem Sie auf (Button) klicken");
    }
    else if (searchstring == "") {
        alert("Bitte wählen Sie ein Eintrag aus der Liste aus");
    }
}