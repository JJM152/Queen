App.Entity.NPCAvatar = class NPCAvatar {
    constructor() {
        this._height = 800;
        this._width = 360;
        this._element = "npcRender";

        this._DefaultData = {
            name: "Default",
            fem : 11,
            sub : 2,
            hairFill  : "indianred",
            hairStroke: "black",
            gender: 0, // 0 female, 1 male, 2 trans
            basedim        : {
                areolaSize    : 14.923766816143496,
                armThickness  : 58.468958260259555,
                armLength     : 45,
                breastSize    : 9.974887892376682,
                buttFullness  : 13.019992984917572,
                chinWidth     : 63.335671694142405,
                eyelashLength : 4,
                eyeSize       : 13.019992984917572,
                faceFem       : 40,
                faceLength    : 212.32549982462294,
                faceWidth     : 82.74465099964925,
                hairLength    : 37.03963521571379,
                hairStyle     : 4,
                hairHue       : 0,
                hairSaturation: 19.081024202034374,
                hairLightness : 11.224131883549632,
                handSize      : 118.9757979656261,
                height        : 163.65022421524662,
                hipWidth      : 110.85584005612066,
                legFem        : 39.95790950543669,
                legFullness   : 4.489652753419852,
                legLength     : 98.79340582251841,
                lipSize       : 18.85654156436338,
                lowerMuscle   : 22.448263767099263,
                neckLength    : 72.73237460540162,
                neckWidth     : 39.489652753419854,
                penisSize     : 50,
                shoulderWidth : 64.28699551569507,
                skin          : 0,
                testicleSize  : 60,
                upperMuscle   : 0,
                vaginaSize    : 40,
                waistWidth    : 102.32549982462294,
            },
            Mods: {
                armRotation            : 0.4089686098654681,
                arousal                : 0,
                breastPerkiness        : 3.805682216766048,
                browBotCurl            : -1.6771300448430502,
                browTopCurl            : 6.358744394618835,
                browCloseness          : 0.7910313901345294,
                browHeight             : 1.2502242152466359,
                browLength             : -5.408071748878924,
                browSharpness          : -1.0457399103139018,
                browThickness          : -1.9641255605381165,
                browOutBias            : 0.5614349775784753,
                browTilt               : 2.041255605381167,
                cheekFullness          : 0.20343739038933606,
                chinLength             : -3,
                earlobeLength          : -0.45106980007015096,
                eyeBias                : 2.6,
                eyeCloseness           : 28.573991031390136,
                eyeBotBias             : -3.3417040358744394,
                eyeBotSize             : 13.980269058295967,
                eyeHeight              : -6.9641255605381165,
                eyeTilt                : 6.977578475336323,
                eyeTopSize             : -1.3212556053811646,
                eyeWidth               : -0.8161434977578477,
                eyelashBias            : 5.826025955804981,
                eyelashAngle           : 0.42,
                eyelidBias             : -0.7962118554893021,
                eyelidHeight           : -1.555243774114346,
                hairAccessoryHue       : 202.03437390389334,
                hairAccessorySaturation: 59,
                hairAccessoryLightness : 43,
                irisHeight             : -1.275336322869956,
                irisHue                : 70.25650224215246,
                irisSaturation         : 27.55156950672646,
                irisLightness          : 67.73094170403587,
                irisSize               : 15.497757847533633,
                jawJut                 : -0.1227639424763236,
                limbalRingSize         : 25.255605381165918,
                lipBias                : 28.062780269058294,
                lipCupidsBow           : -7.47264573991032,
                lipCurl                : -4.387443946188341,
                lipHeight              : 0.3318385650224229,
                lipTopCurve            : -17.856502242152466,
                lipTopSize             : -8.060986547085204,
                lipBotSize             : 25.38475336322871,
                lipWidth               : -153.5695067264574,
                neckCurve              : -6.531041739740441,
                noseHeight             : -4.030493273542602,
                noseLength             : 41.78654708520179,
                noseRidgeHeight        : 0.3318385650224229,
                noseRoundness          : 4.83695067264574,
                noseWidth              : 18.724663677130046,
                nostrilSize            : 10.165919282511211,
                pupilSize              : 13.468958260259559,
                shoeHeight             : 3,
                skinHue                : -0.2547085201793706,
                skinSaturation         : -4.846636771300448,
                skinLightness          : 4.337219730941705,
                age                    : -0.02511210762331828,
            },
            clothes : [ 
            ],
            decorativeParts : [ ]
        };

        this._equip = {           
            "Wig":              null,
            "Hat":              null,
            "Neck":             null,
            "Nipples":          null,
            "Bra":              "gothic black bra",
            "Corset":           null,
            "Panty":            null,
            "Stockings":        null,
            "Shirt":            null,
            "Pants":            null,
            "Dress":            null,
            "Costume":          null,
            "Shoes":            null,
            "Butt":             null,
            "Penis":            null,
            "Weapon":           null
        };

        this._NPCDATA = null;;

        this._sliders = { };

        this._PC = null;
    }

    get NPC() { return this._NPCDATA; }
    get PC() { return this._PC; }
    get Sliders() { return this._sliders; }
    get EQUIP() { return this._equip; }

    Init()
    {
     this._NPCDATA = $.extend(true, {}, this._DefaultData);   
    }

    AddSlider(ID, name, min, max, step)
    {
        var parts = ID.split("_");
        
        this._sliders[ID] = { 
            TYPE : parts[0],
            ATTRIB : parts[1],
            LABEL: name,
            MIN: min,
            MAX: max,
            STEP: step
        }

        return ID;
    }

    DrawUI(RootID)
    {
        this._root = $("#"+RootID);
        $(document).one(":passageend", this._DrawUI.bind(this));
    }

    _DrawUI()
    {
        for (var sliderId in this.Sliders) {
            this._DrawLabel(sliderId);
            this._DrawSlider(sliderId);
            this._DrawValue(sliderId);
        }
    }

    DrawCanvas(element, height, width) {
        this._height = height;
        this._width = width;
        this._element = element;
        $(document).one(":passageend", this._DrawCanvas.bind(this));
    }

    _DrawCanvas() {
        var canvasGroup;
        if (typeof canvasGroup === 'undefined' || canvasGroup == null) {
            canvasGroup = da.getCanvasGroup(this._element, 
                {
                   border: "1px solid black",
                   width: this._width !== 'undefined' ? this._width : 360,
                   height: this._height !== 'undefined' ? this._height : 800,
                });
        } 

        var PC = new da.Player( this.NPC );
        PC = this._AttachParts(PC);
        da.draw(canvasGroup, PC, { 
                printHeight: false, 
                printAdditionalInfo: false, 
                renderShoeSideView: false,
                offsetX: 10,
                offsetY: 0
            });
        this._PC = PC;

    }

    DrawPortrait()
    {
        if( settings.displayAvatar == true)
        $(document).one(":passageend", this._DrawPortrait.bind(this));
    }

    _DrawPortrait()
    {
        if( settings.displayAvatar == false) return;

        var canvasGroup = da.getCanvasGroup("hiddenCanvas", {
               border: "none",
               width: 1000,
               height: 3000
            });

        var PC = new da.Player( this.GetPCData() );
        PC = this._AttachParts(PC);
        PC = this._ClothesHandler(PC);

        da.draw(canvasGroup, PC, { 
            printHeight: false, printAdditionalInfo: false, renderShoeSideView: false
            }).then(function (exports) {
            // draw just the head in a separate canvas
            // first retrieve/create the canvas if it's the first time we're getting it
            var portraitCanvas = da.getCanvas("portrait",
                {

                    width : 180,
                    height: 240,
                    // can add any CSS style here like border
                    border: "solid 2px goldenrod",
                    // you can also position it absolutely
                    // position: "absolute",
                    // top     : "10px",
                    // left    : "10px",
                    // or relative to a parent
                    position: "relative",
                    parent: document.getElementById("avatarFace"),
                });
        
            // you can call this multiple times to draw different parts (with different canvases)
            da.drawFocusedWindow(portraitCanvas,
                exports,
                {
                    center: exports[da.Part.RIGHT].neck.nape,
                    width: 55,
                    height: 70
                });
        });

        //da.hideCanvasGroup("hiddenCanvas");
    }

    _DrawLabel(ID)
    {
        $(this._GetAttrib(ID)).append(
            $("<div>").addClass("npcWorkshopLabel").text(this._GetObj(ID).LABEL));
    }

    _DrawSlider(ID)
    {
        var root = $(this._GetAttrib(ID));
        var element = $("<div>").addClass("npcSliderClass").attr("id", ID +"_Slider");
        root.append(element);
            var slider = noUiSlider.create(element.get(0), {
            start: this._GetStat(ID),
            step: this._GetStep(ID),
                range: {
                    'min': [ this._GetMin(ID)],
                    'max': [ this._GetMax(ID)]
                }
            });
            var that = this;
            var type = this.Sliders[ID].TYPE;
            var attr = this.Sliders[ID].ATTRIB;
            slider.on("change."+ID, function(v) { that.DoSliderUpdate(type, attr, v, ID); });
            slider.on("update."+ID, function(v) { that.DoSliderValUpdate(v, ID); });
    }

    _DrawValue(ID)
    {
        $(this._GetAttrib(ID)).append(
            $("<div>").addClass("npcWorkshopValue").attr("id", ID+"_Value").html( this.DoSliderValUpdate(this._GetStat(ID), ID)));
    }

    _GetAttrib(ID)
    {
        return "#"+ID;
    }

    _GetObj(ID)
    {
        return this.Sliders[ID];

    }

    _GetStep(ID)
    {
        return this._GetObj(ID).STEP;
    }

    _GetMin(ID)
    {
        return this._GetObj(ID).MIN;
    }

    _GetMax(ID)
    {
        return this._GetObj(ID).MAX;
    }

    /**
     * 
     * @param {string} ID base_prop | basedim_prop | Mods_prop
     */
    _GetStat(ID)
    {
        var parts = ID.split("_");
        var val =  parts[0] == 'base' ? this.NPC[parts[1]] : this.NPC[parts[0]][parts[1]];
        console.log("GetStat="+val);
        return val;
    }

    _AttachParts(PC) {
        if (PC.gender == 1 || PC.gender == 2) {
            var penis = da.Part.create(da.PenisHuman, { side: "right"});
            PC.attachPart(penis);
            var balls = da.Part.create(da.TesticlesHuman, { side: "right" });
            PC.attachPart(balls);
        }

        if (PC.gender == 1 && PC.gender != 2) {
            console.log("Male, no trans");
            PC.removeSpecificPart(da.OversizedChest);
            PC.removeSpecificPart(da.ChestHuman);
           // var chest = da.Part.create(da.ChestHuman, { side: null });
            //PC.attachPart(chest);
        }

        if (PC.gender == 0 || PC.gender == 2) {
            var bust = da.Part.create(da.OversizedChest, { side: null });
            PC.attachPart(bust);
            PC.removeSpecificPart(da.NipplesHuman);
            var nips = da.Part.create(da.OversizedChestNipples, { side: null});
            PC.attachPart(nips);
        }

        if (PC.gender == 0 && PC.gender != 2) {
            PC.removeSpecificPart(da.PenisHuman);
            PC.removeSpecificPart(da.TesticlesHuman);
        }
        return this._ClothesHandler(PC);
    }

    _ClothesHandler(PC) {

        for (var slot in this.EQUIP) {
            console.log("rendering slot: "+slot+"=>"+this.EQUIP[slot]);
            var id = this.EQUIP[slot];
            if (App.Data.AvatarMaps.hasOwnProperty(id)) {
                var items = App.Data.AvatarMaps[id];
                for(var i = 0; i < items.length; i++) {
                    var str = "da.Clothes.create("+items[i].c+","+JSON.stringify(items[i].a)+")";
                    // This nonsense here is just to be safe due to script 'compiling' order of Tweego.
                    if(items[i].a != null && items[i].a.hasOwnProperty('pattern') && typeof items[i].a.pattern === 'string') {
                        var patternOb = null;
                        try {
                            patternOb = eval(items[i].a.pattern);
                        } catch(err) {
                            console.log(err);
                        }
                        if (patternOb != null) items[i].a.fill = patternOb;
                    } 
                    var part = items[i].a == null ? da.Clothes.create(eval(items[i].c)) : da.Clothes.create(eval(items[i].c), items[i].a);
                    PC.wearClothing(part);
                }
            } else {
                console.log("Unable to map clothes to avatar: "+id);
            }
        }

        return PC;
    }

    DoSliderUpdate(type, attr, val)
    {
        val = parseFloat(val[0]);

        switch(attr) {
            case "fem":
                this.NPC["basedim"].legFem = ( 50 * (val/11));
                break;
            case "upperMuscle":
                this.NPC["basedim"].lowerMuscle = val;
                break;
            }

        if (type == 'base') {
            this.NPC[attr] = val;
        } else {
            this.NPC[type][attr] = val;
        }

        this._DrawCanvas();
        this.DoSliderValUpdate(val, type+"_"+attr);
    }

    DoSliderValUpdate(val, ID)
    {
        $("#"+ID+"_Value").html(val); 
        return val;
    }
}