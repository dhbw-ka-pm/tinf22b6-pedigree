<!DOCTYPE html>
<html lang="de">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="navbar.css">
        <link rel="stylesheet" type="text/css" href="animalPopup.css">
        <script type="text/javascript" src="searchanimals.js"></script>
    </head>
    <body onload="loadList()">
<!-- header ------------------------------------->
        <header>
            <nav>
                <img class="logo"; src="Pedigree_Logo.png">
                <ul>
                    <li><a href="#new-animal-popup" target="_top">Tier hinzufügen</a></li>
                    <li><a href="index.html" target="_top">Home</a></li>
                    <li><a href="pedigree.php" target="_top">Stammbaum</a></li>
                    <li><a href="impressum.html" target="_top">Impressum</a></li>
                </ul>
            </nav>
        </header>
        <!-- animal Popup -------------------------------->
        <div class="overlay" id="new-animal-popup">
            <div class="wrapper">
                <h2>Bitte Formular ausfüllen</h2><a class="close" href="pedigree.php">&times;</a> 
                <div class="content">
                    <div class="container">
                        <form method="POST">
                            <label>Name</label>
                            <input placeholder="Name" type="text" name="name">
                            <label>Rasse</label>
                            <input placeholder="Rasse" type="text" name="rasse">
                            <label>Farbe</label> 
                            <input placeholder="Farbe" type="text" name="farbe">
                            <label>Quellenzucht</label> 
                            <input placeholder="Quellenzucht" type="text" name="quelle_zucht">
                            <label>Vatertier</label>
                            <input placeholder="Tier auswählen (bei Bedarf leer lassen)" type="text" name="vatertier" list="animals-list" id="animalsearchinput1">
                            <datalist id="animals-list">
                                <option value="keine Einträge">
                            </datalist>
                            <label>Muttertier</label>
                            <input placeholder="Tier auswählen (bei Bedarf leer lassen)" type="text" name="muttertier" list="animals-list" id="animalsearchinput1">
                            <datalist id="animals-list">
                                <option value="keine Einträge">
                            </datalist>
                            <label>Jungtiere</label>
                            <input placeholder="Jungtiere" type="text" name="jungtiere">
                            <label>Kurzbeschreibung</label>
                            <input placeholder="Beschreibung" type="text" name="kurzbeschreibung">
                            <input type="submit" value="Absenden">
                            <?php 
                            if ($_SERVER["REQUEST_METHOD"] === "POST") {
                                $name = $_POST["name"];
                                $rasse = $_POST["rasse"];
                                $farbe = $_POST["farbe"];
                                $quelle_zucht = $_POST["quelle_zucht"];
                                $vatertier = $_POST["vatertier"];
                                $muttertier = $_POST["muttertier"];
                                $jungtiere = $_POST["jungtiere"];
                                $kurzbeschreibung = $_POST["kurzbeschreibung"];
                            
                                $filename = 'data.xml';
                            
                                $xmlData = simplexml_load_file($filename);
                            
                                $eintragVorhanden = false;
                                foreach ($xmlData->animal as $animal) {
                                    if ((string) $animal->name === $name) {
                                        $eintragVorhanden = true;
                                        break;
                                    }
                                }
                            
                                if ($eintragVorhanden) {
                                    echo "Der Name $name ist bereits vorhanden. Wählen sie bitte einen anderen Namen.";
                                } else {
                                    addanimal($name, $rasse, $farbe, $quelle_zucht, $vatertier, $muttertier, $jungtiere, $kurzbeschreibung, $xmlData, $filename, false);
                                    echo "Der Eintrag wurde erfolgreich hinzugefügt.";
                                }
                            }
                            
                            function addanimal($name, $rasse, $farbe, $quelle_zucht, $vatertier, $muttertier, $jungtiere, $kurzbeschreibung, $xmlData, $filename, $addStylesheet = false) {
                                $newAnimal = $xmlData->addChild('animal');
                                $newAnimal->addChild('name', $name);
                                $newAnimal->addChild('rasse', $rasse);
                                $newAnimal->addChild('farbe', $farbe);
                                $newAnimal->addChild('quelle_zucht', $quelle_zucht);
                                $newAnimal->addChild('parent1', $vatertier);
                                $newAnimal->addChild('parent2', $muttertier);
                                $newAnimal->addChild('jungtiere', $jungtiere);
                                $newAnimal->addChild('kurzbeschreibung', $kurzbeschreibung);
                            
                                $dom = new DOMDocument();
                                $dom->preserveWhiteSpace = false;
                                $dom->formatOutput = true;
                                $dom->loadXML($xmlData->asXML());
                            
                                if ($addStylesheet) {
                                    $stylesheet = $dom->createProcessingInstruction('xml-stylesheet', 'type="text/xsl" href="transform.xslt"');
                                    $dom->insertBefore($stylesheet, $dom->documentElement);
                                }
                                $dom->save($filename);
                            }
                            ?>
                        </form>
                    </div>
                </div>
            </div>
        </div> 
    </body>
</html>