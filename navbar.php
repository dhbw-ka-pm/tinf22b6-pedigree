<!DOCTYPE html>
<html lang="de">
    <head>
        <meta charset="UTF-8">
        <link rel="stylesheet" type="text/css" href="navbar.css">
        <link rel="stylesheet" type="text/css" href="animalPopup.css">
    </head>
    <body>
<!-- header ------------------------------------->
        <header>
            <nav>
                <ul>
                    <li><a href="#new-animal-popup" target="_top">Tier hinzufügen</a></li>
                    <li><a href="index.html" target="_top">home</a></li>
                    <li><a href="pedigree.html" target="_top">Stammbaum</a></li>
                    <li><a href="impressum.html" target="_top">Impressum</a></li>
                </ul>
            </nav>
        </header>
        <!-- animal Popup -------------------------------->
        <div class="overlay" id="new-animal-popup">
            <div class="wrapper">
                <h2>Bitte Formular ausfüllen</h2><a class="close" href="pedigree.html">&times;</a> 
                <div class="content">
                    <div class="container">
                        <form method="POST" action="<?php echo $_SERVER['PHP_SELF']; ?>">
                            <label>Rasse</label>
                            <input placeholder="Rasse" type="text" name="rasse">
                            <label>Farbe</label>
                            <input placeholder="Farbe" type="text" name="farbe">
                            <label>Quelle Zucht</label> 
                            <input placeholder="Quelle Zucht" type="text" name="quelle_zucht">
                            <label>Vatertier</label>
                            <input placeholder="Name" type="text" name="vatertier">
                            <label>Muttertier</label>
                            <input placeholder="Name" type="text" name="muttertier">
                            <label>Jungtiere</label>
                            <input placeholder="Name" type="text" name="jungtiere">
                            <label>Kurzbeschreibung</label>
                            <input placeholder="Beschreibung" type="text" name="kurzbeschreibung">
                            <input type="submit" value="Absenden">
                        </form>
                        <p id="test"></p>
                    </div>
                </div>
            </div>
        </div> 
        <?php
        // Überprüfe, ob das Formular abgesendet wurde
        if ($_SERVER["REQUEST_METHOD"] === "POST") {
            // Erfasse die Formulardaten
            $rasse = $_POST["rasse"];
            $farbe = $_POST["farbe"];
            $quelle_zucht = $_POST["quelle_zucht"];
            $vatertier = $_POST["vatertier"];
            $muttertier = $_POST["muttertier"];
            $jungtiere = $_POST["jungtiere"];
            $kurzbeschreibung = $_POST["kurzbeschreibung"];

            // Pfade und Dateinamen anpassen
            $filename = 'existing_data.xml';

            if (file_exists($filename)) {
                // Lade die vorhandene XML-Datei
                $existingData = simplexml_load_file($filename);

                // Füge ein neues <animal>-Element hinzu
                $newAnimal = $existingData->addChild('animal');
                $newAnimal->addChild('rasse', $rasse);
                $newAnimal->addChild('farbe', $farbe);
                $newAnimal->addChild('quelle_zucht', $quelle_zucht);
                $newAnimal->addChild('parent1', $vatertier);
                $newAnimal->addChild('parent2', $muttertier);
                $newAnimal->addChild('jungtiere', $jungtiere);
                $newAnimal->addChild('kurzbeschreibung', $kurzbeschreibung);
                
                // Formatierung des XML-Dokuments
                $dom = new DOMDocument();
                $dom->version = '1.0';
                $dom->encoding = 'UTF-8';
                $dom->preserveWhiteSpace = false;
                $dom->formatOutput = true;
                $dom->loadXML($existingData->asXML());
                
                // Speichere die aktualisierte XML-Datei
                $dom->save($filename);
            } else {
                // Erstelle eine neue XML-Datei mit den Daten
                $xmldata = new SimpleXMLElement('<animals></animals>');
                $animal = $xmldata->addChild('animal');
                $animal->addChild('rasse', $rasse);
                $animal->addChild('farbe', $farbe);
                $animal->addChild('quelle_zucht', $quelle_zucht);
                $animal->addChild('parent1', $vatertier);
                $animal->addChild('parent2', $muttertier);
                $animal->addChild('jungtiere', $jungtiere);
                $animal->addChild('kurzbeschreibung', $kurzbeschreibung);
                
                // Formatierung des XML-Dokuments
                $dom = new DOMDocument();
                $dom->version = '1.0';
                $dom->encoding = 'UTF-8';
                $dom->preserveWhiteSpace = false;
                $dom->formatOutput = true;
                $dom->loadXML($xmldata->asXML());
                
                // Füge Stylesheet-Attribut hinzu
                $stylesheet = $dom->createProcessingInstruction('xml-stylesheet', 'type="text/xsl" href="transform.xslt"');
                $dom->insertBefore($stylesheet, $dom->documentElement);
                
                // Speichere die neue XML-Datei
                $dom->save($filename);
            }

        }
        ?>
    </body>
</html>