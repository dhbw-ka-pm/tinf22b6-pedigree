<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<xsl:variable name="parent11" select="animals/animal[name=$searchstring]/parent1"/>
<xsl:variable name="parent12" select="animals/animal[name=$searchstring]/parent2"/>
<xsl:variable name="parent21" select="animals/animal[name=$parent11]/parent1"/>
<xsl:variable name="parent22" select="animals/animal[name=$parent11]/parent2"/>
<xsl:variable name="parent23" select="animals/animal[name=$parent12]/parent1"/>
<xsl:variable name="parent24" select="animals/animal[name=$parent12]/parent2"/>
<html> 
<body>
    
    <div class="pet-outer-box" id="left-pet-outer-box">
                <div class="pet-box" id="pet-box1"> 
                    <button class="buttonInfo" onclick = "popup(this)">
                        <xsl:for-each select="animals/animal">
                            <xsl:if test="name = $searchstring">
                                <xsl:value-of select="name"></xsl:value-of>
                            </xsl:if>
                        </xsl:for-each>
                    </button>
                </div>
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
                <div class="pet-box" id="pet-box2-1">
                    <button class="buttonInfo" onclick = "popup(this)">
                        <xsl:value-of select="animals/animal[name = $parent11]/name"/>
                    </button>
                </div>
                <div class="pet-box" id="pet-box2-2"> 
                    <button class="buttonInfo" onclick = "popup(this)">
                        <xsl:value-of select="animals/animal[name = $parent12]/name"/>
                    </button>
                </div>
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
                <div class="pet-box" id="pet-box3-1">
                    <button class="buttonInfo" onclick = "popup(this)">
                        <xsl:value-of select="animals/animal[name = $parent21]/name"/>
                    </button>
                </div>
                <div class="pet-box" id="pet-box3-2">
                    <button class="buttonInfo" onclick = "popup(this)">
                        <xsl:value-of select="animals/animal[name = $parent22]/name"/>
                    </button>
                </div>
                <div class="pet-box" id="pet-box3-3">
                    <button class="buttonInfo" onclick = "popup(this)">
                        <xsl:value-of select="animals/animal[name = $parent23]/name"/>
                    </button>
                </div>
                <div class="pet-box" id="pet-box3-4">
                    <button class="buttonInfo" onclick = "popup(this)">
                        <xsl:value-of select="animals/animal[name = $parent24]/name"/>
                    </button>
                </div>
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
                <div class="pet-box" id="pet-box4-1">
                    <button class="buttonInfo" onclick = "popup(this)">
                        <xsl:variable name="parent31" select="animals/animal[name=$parent21]/parent1"/>  
                        <xsl:value-of select="animals/animal[name = $parent31]/name"/>
                    </button>
                </div>
                <div class="pet-box" id="pet-box4-2">
                    <button class="buttonInfo" onclick = "popup(this)">
                        <xsl:variable name="parent32" select="animals/animal[name=$parent21]/parent2"/>  
                        <xsl:value-of select="animals/animal[name = $parent32]/name"/>
                    </button>
                </div>
                <div class="pet-box" id="pet-box4-3">
                    <button class="buttonInfo" onclick = "popup(this)">
                        <xsl:variable name="parent33" select="animals/animal[name=$parent22]/parent1"/>  
                        <xsl:value-of select="animals/animal[name = $parent33]/name"/>
                    </button>
                </div>
                <div class="pet-box" id="pet-box4-4">
                    <button class="buttonInfo" onclick = "popup(this)">
                        <xsl:variable name="parent34" select="animals/animal[name=$parent22]/parent2"/>  
                        <xsl:value-of select="animals/animal[name = $parent34]/name"/>
                    </button>
                </div>
                <div class="pet-box" id="pet-box4-5">
                    <button class="buttonInfo" onclick = "popup(this)">
                        <xsl:variable name="parent35" select="animals/animal[name=$parent23]/parent1"/>  
                        <xsl:value-of select="animals/animal[name = $parent35]/name"/>
                    </button>
                </div>
                <div class="pet-box" id="pet-box4-6">
                    <button class="buttonInfo" onclick = "popup(this)">
                        <xsl:variable name="parent36" select="animals/animal[name=$parent23]/parent2"/>  
                        <xsl:value-of select="animals/animal[name = $parent36]/name"/>
                    </button>
                </div>
                <div class="pet-box" id="pet-box4-7">
                    <button class="buttonInfo" onclick = "popup(this)">
                        <xsl:variable name="parent37" select="animals/animal[name=$parent24]/parent1"/>  
                        <xsl:value-of select="animals/animal[name = $parent37]/name"/>
                    </button>
                </div>
                <div class="pet-box" id="pet-box4-8">
                    <button class="buttonInfo" onclick = "popup(this)">
                        <xsl:variable name="parent38" select="animals/animal[name=$parent24]/parent2"/>  
                        <xsl:value-of select="animals/animal[name = $parent38]/name"/>
                    </button>
                </div>
            </div>
    
</body>
</html>
</xsl:template>
</xsl:stylesheet>