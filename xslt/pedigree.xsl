<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<xsl:variable name="parent11" select="animals/animal[name=$searchstring]/parent1"/>
<xsl:variable name="parent12" select="animals/animal[name=$searchstring]/parent2"/>
<xsl:variable name="parent21" select="animals/animal[id=$parent11]/parent1"/>
<xsl:variable name="parent22" select="animals/animal[id=$parent11]/parent2"/>
<xsl:variable name="parent23" select="animals/animal[id=$parent12]/parent1"/>
<xsl:variable name="parent24" select="animals/animal[id=$parent12]/parent2"/>
<html> 
<body>
    
    <div class="pet-outer-box" id="left-pet-outer-box">
                <div class="pet-box" id="pet-box1"> 
                    <xsl:for-each select="animals/animal">
                        <xsl:if test="name = $searchstring">
                            <xsl:value-of select="name"></xsl:value-of>
                            <br/>
                            <xsl:value-of select="id"></xsl:value-of>
                        </xsl:if>
                    </xsl:for-each>
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
                    <xsl:value-of select="animals/animal[id = $parent11]/name"/>
                    <br/>
                    <xsl:value-of select="animals/animal[id = $parent11]/id"/>
                </div>
                <div class="pet-box" id="pet-box2-2">  
                    <xsl:value-of select="animals/animal[id = $parent12]/name"/>
                    <br/>
                    <xsl:value-of select="animals/animal[id = $parent12]/id"/>
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
                    <xsl:value-of select="animals/animal[id = $parent21]/name"/>
                        <br/>
                     <xsl:value-of select="animals/animal[id = $parent21]/id"/>
                </div>
                <div class="pet-box" id="pet-box3-2">
                    <xsl:value-of select="animals/animal[id = $parent22]/name"/>
                        <br/>
                    <xsl:value-of select="animals/animal[id = $parent22]/id"/>
                </div>
                <div class="pet-box" id="pet-box3-3">
                    <xsl:value-of select="animals/animal[id = $parent23]/name"/>
                        <br/>
                    <xsl:value-of select="animals/animal[id = $parent23]/id"/>
                </div>
                <div class="pet-box" id="pet-box3-4">
                    <xsl:value-of select="animals/animal[id = $parent24]/name"/>
                        <br/>
                    <xsl:value-of select="animals/animal[id = $parent24]/id"/>
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
                    <xsl:variable name="parent31" select="animals/animal[id=$parent21]/parent1"/>  
                    <xsl:value-of select="animals/animal[id = $parent31]/name"/>
                        <br/>
                    <xsl:value-of select="animals/animal[id = $parent31]/id"/>
                </div>
                <div class="pet-box" id="pet-box4-2">
                    <xsl:variable name="parent32" select="animals/animal[id=$parent21]/parent2"/>  
                    <xsl:value-of select="animals/animal[id = $parent32]/name"/>
                        <br/>
                    <xsl:value-of select="animals/animal[id = $parent32]/id"/></div>
                <div class="pet-box" id="pet-box4-3">
                    <xsl:variable name="parent33" select="animals/animal[id=$parent22]/parent1"/>  
                    <xsl:value-of select="animals/animal[id = $parent33]/name"/>
                        <br/>
                    <xsl:value-of select="animals/animal[id = $parent33]/id"/></div>
                <div class="pet-box" id="pet-box4-4">
                    <xsl:variable name="parent34" select="animals/animal[id=$parent22]/parent2"/>  
                    <xsl:value-of select="animals/animal[id = $parent34]/name"/>
                        <br/>
                    <xsl:value-of select="animals/animal[id = $parent34]/id"/></div>
                <div class="pet-box" id="pet-box4-5">
                    <xsl:variable name="parent35" select="animals/animal[id=$parent23]/parent1"/>  
                    <xsl:value-of select="animals/animal[id = $parent35]/name"/>
                        <br/>
                    <xsl:value-of select="animals/animal[id = $parent35]/id"/></div>
                <div class="pet-box" id="pet-box4-6">
                    <xsl:variable name="parent36" select="animals/animal[id=$parent23]/parent2"/>  
                    <xsl:value-of select="animals/animal[id = $parent36]/name"/>
                        <br/>
                    <xsl:value-of select="animals/animal[id = $parent36]/id"/></div>
                <div class="pet-box" id="pet-box4-7">
                    <xsl:variable name="parent37" select="animals/animal[id=$parent24]/parent1"/>  
                    <xsl:value-of select="animals/animal[id = $parent37]/name"/>
                        <br/>
                    <xsl:value-of select="animals/animal[id = $parent37]/id"/></div>
                <div class="pet-box" id="pet-box4-8">
                    <xsl:variable name="parent38" select="animals/animal[id=$parent24]/parent2"/>  
                    <xsl:value-of select="animals/animal[id = $parent38]/name"/>
                        <br/>
                    <xsl:value-of select="animals/animal[id = $parent38]/id"/></div>
            </div>
    
</body>
</html>
</xsl:template>
</xsl:stylesheet>