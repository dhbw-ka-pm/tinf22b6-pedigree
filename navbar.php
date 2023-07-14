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
                <img class="logo"; src="Pedigree_Logo.png">
                <ul>
                    <li><a href="#new-animal-popup" target="_top">Tier hinzufügen</a></li>
                    <li><a href="index.html" target="_top">Home</a></li>
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
                            <input placeholder="Name des Vaters" type="text" name="vatertier">
                            <label>Muttertier</label>
                            <input placeholder="Name der Mutter" type="text" name="muttertier">
                            <label>Kurzbeschreibung</label>
                            <input placeholder="Beschreibung" type="text" name="kurzbeschreibung">
                            <input type="submit" value="Absenden">
                        </form>
                    </div>
                </div>
            </div>
        </div> 
        <?php
        if ($_SERVER["REQUEST_METHOD"] === "POST") {
            $name = $_POST["name"];
            $rasse = $_POST["rasse"];
            $farbe = $_POST["farbe"];
            $quelle_zucht = $_POST["quelle_zucht"];
            $vatertier = $_POST["vatertier"];
            $muttertier = $_POST["muttertier"];
            $kurzbeschreibung = $_POST["kurzbeschreibung"];
n
            $filename = 'data.xml';

            function addanimal($name, $rasse, $farbe, $quelle_zucht, $vatertier, $muttertier, $kurzbeschreibung, $xmlData, $filename, $addStylesheet = false) {
                $newAnimal = $xmlData->addChild('animal');
                $newAnimal->addChild('name', $name);
                $newAnimal->addChild('rasse', $rasse);
                $newAnimal->addChild('farbe', $farbe);
                $newAnimal->addChild('quelle_zucht', $quelle_zucht);
                $newAnimal->addChild('vatertier', $vatertier);
                $newAnimal->addChild('muttertier', $muttertier);
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
            

            if (!file_exists($filename)) {
                $xmlData = new SimpleXMLElement('<animals></animals>');
                addanimal($name, $rasse, $farbe, $quelle_zucht, $vatertier, $muttertier, $kurzbeschreibung, $xmlData, $filename, true);
            } else {
                $xmlData = simplexml_load_file($filename);
                addanimal($name, $rasse, $farbe, $quelle_zucht, $vatertier, $muttertier, $kurzbeschreibung, $xmlData, $filename, false);
            }
            
            }

        
        ?>
    </body>
</html>