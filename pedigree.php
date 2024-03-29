<?php
header("Content-Type: text/html; charset=utf-8");
header("Cache-Control: no-cache, no-store, must-revalidate");
header("Expires: 0");
?>
<!DOCTYPE html>
<html lang="de">
    <head>
        <meta charset="UTF-8">
        <title>Pedigree - Stammbaum</title>
        <link rel="stylesheet" type = "text/css" href="pedigree.css">
        <script type="text/javascript" src="loadsvgs.js"></script>
        <link rel="stylesheet" type="text/css" href="animalPopup.css">
    </head>
    <body>
<!-- header ------------------------------------->
        <iframe src="navbar.php" scrolling="no" frameborder="0" width="100%"></iframe>
        <iframe src="viewchanger.html" scrolling="no" frameborder="0" width="100%" id="viewchanger"></iframe>
        <hr>
<!-- body --------------------------------------->
        <div id="tree-box"> 
            <div class="pet-outer-box" id="left-pet-outer-box">
                <div class="pet-box" id="pet-box1" > <button class="buttonInfo" onclick = "popup(this)"></button> </div>
            </div> 
            <div class="svg-outer-box">  
                <svg class="svg1" onload="loadsvg()">
                    <line class="ll" x1="0" y1="0" x2="0" y2="0"></line>
                    <line class="vl" x1="0" y1="0" x2="0" y2="0"></line>
                    <line class="rl1" x1="0" y1="0" x2="0" y2="0"></line>
                    <line class="rl2" x1="0" y1="0" x2="0" y2="0"></line>
                </svg>
            </div>
            <div class="pet-outer-box">
                <div class="pet-box" id="pet-box2-1" ><button class="buttonInfo" onclick = "popup(this)"></button></div>
                <div class="pet-box" id="pet-box2-2"><button class="buttonInfo" onclick = "popup(this)"></button></div>
            </div>
            <div class="svg-outer-box">
                <svg class="svg2" onresize="loadsvg()">
                    <line class="ll" x1="0" y1="0" x2="0" y2="0"></line>
                    <line class="vl" x1="0" y1="0" x2="0" y2="0"></line>
                    <line class="rl1" x1="0" y1="0" x2="0" y2="0"></line>
                    <line class="rl2" x1="0" y1="0" x2="0" y2="0"></line>
                </svg>
                <svg class="svg2">
                    <line class="ll" x1="0" y1="0" x2="0" y2="0"></line>
                    <line class="vl" x1="0" y1="0" x2="0" y2="0"></line>
                    <line class="rl1" x1="0" y1="0" x2="0" y2="0"></line>
                    <line class="rl2" x1="0" y1="0" x2="0" y2="0"></line>
                </svg>
            </div>
            <div class="pet-outer-box">
                <div class="pet-box" id="pet-box3-1"><button class="buttonInfo" onclick = "popup(this)"></button></div>
                <div class="pet-box" id="pet-box3-2"><button class="buttonInfo" onclick = "popup(this)"></button></div>
                <div class="pet-box" id="pet-box3-3"><button class="buttonInfo" onclick = "popup(this)"></button></div>
                <div class="pet-box" id="pet-box3-4"><button class="buttonInfo" onclick = "popup(this)"></button></div>
            </div>
            <div class="svg-outer-box">
                <svg class="svg3">
                    <line class="ll" x1="0" y1="0" x2="0" y2="0"></line>
                    <line class="vl" x1="0" y1="0" x2="0" y2="0"></line>
                    <line class="rl1" x1="0" y1="0" x2="0" y2="0"></line>
                    <line class="rl2" x1="0" y1="0" x2="0" y2="0"></line>
                </svg>
                <svg class="svg3">
                    <line class="ll" x1="0" y1="0" x2="0" y2="0"></line>
                    <line class="vl" x1="0" y1="0" x2="0" y2="0"></line>
                    <line class="rl1" x1="0" y1="0" x2="0" y2="0"></line>
                    <line class="rl2" x1="0" y1="0" x2="0" y2="0"></line>
                </svg>
                <svg class="svg3">
                    <line class="ll" x1="0" y1="0" x2="0" y2="0"></line>
                    <line class="vl" x1="0" y1="0" x2="0" y2="0"></line>
                    <line class="rl1" x1="0" y1="0" x2="0" y2="0"></line>
                    <line class="rl2" x1="0" y1="0" x2="0" y2="0"></line>
                </svg>
                <svg class="svg3">
                    <line class="ll" x1="0" y1="0" x2="0" y2="0"></line>
                    <line class="vl" x1="0" y1="0" x2="0" y2="0"></line>
                    <line class="rl1" x1="0" y1="0" x2="0" y2="0"></line>
                    <line class="rl2" x1="0" y1="0" x2="0" y2="0"></line>
                </svg>
            </div>
            <div class="pet-outer-box" id="right-pet-outer-box">
                <div class="pet-box" id="pet-box4-1"><button class="buttonInfo" onclick = "popup(this)"></button></div>
                <div class="pet-box" id="pet-box4-2"><button class="buttonInfo" onclick = "popup(this)"></button></div>
                <div class="pet-box" id="pet-box4-3"><button class="buttonInfo" onclick = "popup(this)"></button></div>
                <div class="pet-box" id="pet-box4-4"><button class="buttonInfo" onclick = "popup(this)"></button></div>
                <div class="pet-box" id="pet-box4-5"><button class="buttonInfo" onclick = "popup(this)"></button></div>
                <div class="pet-box" id="pet-box4-6"><button class="buttonInfo" onclick = "popup(this)"></button></div>
                <div class="pet-box" id="pet-box4-7"><button class="buttonInfo" onclick = "popup(this)"></button></div>
                <div class="pet-box" id="pet-box4-8"><button class="buttonInfo" onclick = "popup(this)"></button></div>
            </div>
        </div>
        
        <div class="overlay" id="overlay">
            <div class="wrapper">
                <h2 id="pop-up-title">&Uumlbersicht</h2><button class="close" onclick="closePopUp()">&times;</button> 
                <div class="content">
                    <div id="container">
                       
                    </div>
                </div>
            </div>
        </div>
    </body>
</html>