// NOTES:
// This is the first hack at integrating the dynamic avatar engine with our little game.
// Pros: Was fast to do. Cons: Alot of customization ahead + lots of overhead now on adding clothing.
// TODO:
// - Cleanup code (ongoing)
// - Fork a proper branch of the source someplace for our custom parts.
// - Add some custom hair styles (looks painful).
// - Add clothing to the renderer.
// - Map all clothes to some models.
// - Make any parts that are missing.
App.Entity.AvatarEngine = class Avatar {

    constructor() {

        this._npcCache = { };

        this.SettingHandler = function() {
            var container = $('#avatarContainer');
            if( App.EventHandlers.HasPlayerState() == true && container && settings.displayAvatar == true) {
                container.css("display", "block");
                App.Avatar._DrawPortrait();
            } else if( App.EventHandlers.HasPlayerState() == true && container && settings.displayAvatar == false) {
                container.css("display", "none");
            }
            if ($('#mirrorContainer').length) {
                state.display(state.active.title, null, "back"); //Tell engine to reload current passage
            }
        };

        this.NPCSettingHandler = function() {
            // NO OP for now
        };

        this.Loaded = false;
        console.log("Loading DA system...");
        var t0 = performance.now();
        console.log("Creating patterns");
            
        //Loading patterns. Embedded patterns are in the story passage named the same as the
        //file name. Get the text attribute for the encoded string.
        da.addPattern("white hearts", Story.passages["txt_heart_1"].text);
        da.addPattern("pink checks", Story.passages["txt_pink_checks"].text);
        da.addPattern("pink tartan", Story.passages["txt_pink_tartan"].text)
        da.addPattern("pink gingham", Story.passages["txt_pink_gingham"].text);
        da.addPattern("red tartan", Story.passages["txt_red_tartan"].text);
        da.addPattern("black lace", Story.passages["txt_black_lace"].text);
        da.addPattern("black purple stripe", Story.passages["txt_black_purple_stripe"].text);
        da.addPattern("red plastic", Story.passages["txt_red_plastic"].text);
        da.addPattern("cow print", Story.passages["txt_cow_print"].text);
        da.addPattern("black fur", Story.passages["txt_black_fur"].text);
        da.addPattern("jolly roger big", Story.passages["txt_jolly_roger_big"].text);
        da.addPattern("black sequins", Story.passages["txt_black_sequin"].text);
        da.addPattern("horizontal pink stripe", Story.passages["txt_horizontal_pink_white_stripe"].text);
        da.addPattern("pink polka dot", Story.passages["txt_pink_polka_dot"].text);
        da.addPattern("vertical pink stripe", Story.passages["txt_vertical_pink_white_stripe"].text);
        da.addPattern("pink chevron", Story.passages["txt_pink_chevron"].text);
        da.addPattern("pink flowers", Story.passages["txt_pink_flowers"].text);
        da.addPattern("leather", Story.passages["txt_leather"].text);

        //Gradients loaded as textures.
        da.addPattern("pink athletic socks", this._pinkAthleticSocks);

        da.load().then(function() {
            // Functions needed here to overwrite some default behavior of
            // the DA library.
            da.extendDimensionCalc("human.penisSize", function (base) {
                return this.getDim('penisSize');
            });

            da.extendDimensionCalc("human.testicleSize", function (base) {
                return this.getDim('testicleSize');
            });

            da.extendDimensionCalc('human.waistWidth', function(base) {
                return this.getDim('waistWidth')
            });

            da.extendDimensionCalc('human.breastSize', function(base) {
                return this.getDim('breastSize')
            });

            var t2 = performance.now();
            console.log("Loaded DA in "+(t2-t0)+"ms.");
 
        });

 
        this._PCData = {
            // provide specific values here to override the default ones set
            age : 26,
            // base physical dimensions
            basedim        : {
                armThickness  : 58,
                armLength     : 45,
                handSize      : 120,
                legFullness   : 4,
                legLength     : 97,
                neckLength    : 80,
                neckWidth     :  35,
                skin          : 3,
            },
            Mods : {
                breastPerkiness: 4,

            },
            decorativeParts: [ ],
            // overriding clothing (default to simple red underwear)
            clothes: [ ],
        };

    }

    get DefaultData() { return this._PCData; }
    get NPCPortraits() { return this._npcCache; }

    // Bound event handlers and methods for drawing canvas and portraits

    /**
     * Draws a full body picture of the player character.
     * @param {string} element Where to attach the canvas
     * @param {number} height height of the canvas
     * @param {number} width width of the canvas
     */
    DrawCanvas(element, height, width) {
        this._height = height;
        this._width = width;
        this._element = element;
        $(document).one(":passageend", this._DrawCanvas.bind(this));
    }

    /**
     * Called on :passageend by DrawCanvas()
     */
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

        var PC = new da.Player( this.GetPCData() );
        PC = this._AttachParts(PC);
        da.draw(canvasGroup, PC, { 
                printHeight: false, 
                printAdditionalInfo: false, 
                renderShoeSideView: false,
                offsetX: 10,
                offsetY: 0
            });

    }

    /**
     * Draw a small portrait of the player character.
     */
    DrawPortrait()
    {
        if( settings.displayAvatar == true)
        $(document).one(":passageend", this._DrawPortrait.bind(this));
    }

    /**
     * Called on ":passageend" by DrawPortrait();
     * Requires a hidden canvas 'hiddenCanvas' for drawing a large picture of the player.
     * Draws specifically to an element with the id of 'avatarFace'. See main.twee for implementation.
     */
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

        da.draw(canvasGroup, PC, { 
            printHeight: false, printAdditionalInfo: false, renderShoeSideView: false
            }).then(function (exports) {
            // draw just the head in a separate canvas
            // first retrieve/create the canvas if it's the first time we're getting it
            var portraitCanvas = da.getCanvas("portrait",
                {

                    width : 180,
                    height: 240,
                    border: "solid 2px goldenrod",
                    position: "relative",
                    parent: document.getElementById("avatarFace"),
                });
        
            da.drawFocusedWindow(portraitCanvas,
                exports,
                {
                    center: exports[da.Part.RIGHT].neck.nape,
                    width: 55, // scaling on the point, smaller is closer, larger is zoomed out.
                    height: 70
                });
        });

    }

    /**
     * 
     * @param {string} NPC The ID of the NPC to render.
     * @param {*} element The element to attach the drawing to
     * @param {*} height height of the canvas / image created.
     * @param {*} width width of the canvas / image created.
     */
    DrawCanvasNPC(NPC, element, height, width) {
        $(document).one(":passageend", { n: NPC, e: element, h: height, w: width }, this._DrawCanvasNPC.bind(this));
    }

    DrawPortraitNPC(NPC, element, height, width) {
        $(document).one(":passageend", { n: NPC, e: element, h: height, w: width }, this._DrawPortraitNPC.bind(this));
    }
    /**
     * Called from DrawNPC() on :passageend
     * @param {object} e { n: npc id, e: html element, h: height, w: width }
     */
    _DrawCanvasNPC(e)
    {
        var data = e.data;

        //Supply default NPC.
        if (App.Data.DADNPC.hasOwnProperty(data.n) == false) {
            if (App.Data.NPCS.hasOwnProperty(data.n)) {
                data.n = App.Data.NPCS[data.n].Gender == 1 ? 'DefaultMale' : 'DefaultFemale';
            } else {
                data.n = 'DefaultMale';
            }
        }

        // NPC data is cached, so just write it out
        if (this.NPCPortraits.hasOwnProperty(data.n) && this.NPCPortraits[data.n].canvasData != null) {
            var cached = $("<img>").addClass('npcCanvas');
            cached.attr('id', 'npcCanvasImage');
            cached.attr('src', this.NPCPortraits[data.n].canvasData);
            $('#'+data.e).append(cached);
            return;
        } 

        var npcData = App.Data.DADNPC[data.n].DATA;
        var npcEquip = App.Data.DADNPC[data.n].EQUIP;

        var canvasGroup = da.getCanvasGroup(data.e, 
                {
                   border: "1px solid goldenrod",
                   width: data.w,
                   height: data.h
                });


        var PC = new da.Player( npcData );
        PC = this._AttachPartsNPC(PC, npcEquip);

        var that = this;

        da.draw(canvasGroup, PC, { 
                printHeight: false, 
                printAdditionalInfo: false, 
                renderShoeSideView: false,
                offsetX: 10,
                offsetY: 0
            }).then(function(exports) {
                var canvas = document.getElementById(data.e+"16"); // if the number of layers change, this needs to change too
                var canvasData = canvas.toDataURL();
                that._CacheNPCCanvas(data.n, canvasData);
            });

    }

    _DrawPortraitNPC(e)
    {
        var data = e.data;

        //Supply default NPC.
        if (App.Data.DADNPC.hasOwnProperty(data.n) == false) {
            if (App.Data.NPCS.hasOwnProperty(data.n)) {
                data.n = App.Data.NPCS[data.n].Gender == 1 ? 'DefaultMale' : 'DefaultFemale';
            } else {
                data.n = 'DefaultMale';
            }
        }

        // NPC data is cached, so just write it out
        if (this.NPCPortraits.hasOwnProperty(data.n) && this.NPCPortraits[data.n].portraitData != null) {
            var cached = $("<img>").addClass('npcPortrait');
            cached.attr('id', 'npcPortraitImage');
            cached.attr('src', this.NPCPortraits[data.n].portraitData);
            $('#'+data.e).append(cached);
            return;
        } 

        var npcData = App.Data.DADNPC[data.n].DATA;
        var npcEquip = App.Data.DADNPC[data.n].EQUIP;

        var canvasGroup = da.getCanvasGroup("hiddenNPCPortraitCanvas", {
            border: "none",
            width: 1400,
            height: 2400
         });

        var PC = new da.Player( npcData );
        PC = this._AttachPartsNPC(PC, npcEquip);
        var that = this;

        da.draw(canvasGroup, PC, { 
            printHeight: false, printAdditionalInfo: false, renderShoeSideView: false,
            }).then(function (exports) {
            var portraitCanvas = da.getCanvas("npcPortrait",
                {
                    width : data.w,
                    height: data.h,
                    border: "solid 1px goldenrod",
                    position: "relative",
                    parent: document.getElementById(data.e),
                });

            da.drawFocusedWindow(portraitCanvas,
                exports,
                {
                    center: exports[da.Part.RIGHT].neck.nape,
                    width: 75,
                    height: 75
                });

            var canvas = document.getElementById('npcPortrait');
            var portraitData = canvas.toDataURL();
            that._CacheNPCPortrait(data.n, portraitData);
        });

    }

    _CacheNPCCanvas(key, data)
    {
        if (this.NPCPortraits.hasOwnProperty(key)) {
            this.NPCPortraits.canvasData = data;
        } else {
            this.NPCPortraits[key] = { canvasData : data, portraitData: null };
        }
    }

    _CacheNPCPortrait(key, data)
    {
        if (this.NPCPortraits.hasOwnProperty(key)) {
            this.NPCPortraits.portraitData = data;
        } else {
            this.NPCPortraits[key] = { canvasData : null, portraitData: data };
        }
    }

    _AttachPartsNPC(PC, npcEquip)
    {
        if (PC.gender == 1 || PC.gender == 2) {
            var penis = da.Part.create(da.PenisHuman, { side: "right"});
            PC.attachPart(penis);
            var balls = da.Part.create(da.TesticlesHuman, { side: "right" });
            PC.attachPart(balls);
        }

        if (PC.gender == 1 && PC.gender != 2) {
            PC.removeSpecificPart(da.OversizedChest);
            PC.removeSpecificPart(da.ChestHuman);
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
        return this._ClothesHandlerNPC(PC, npcEquip); 
    }

    _ClothesHandlerNPC(PC, npcEquip)
    {
        for (var slot in npcEquip) {
            var id = npcEquip[slot];
            if (id == null) continue;
            if (App.Data.AvatarMaps.hasOwnProperty(id)) {
                var items = App.Data.AvatarMaps[id];
                for(var i = 0; i < items.length; i++) {
                    var str = "da.Clothes.create("+items[i].c+","+JSON.stringify(items[i].a)+")";
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
                console.log("Unable to map clothes to npc: "+id);
            }
        }

        return PC;
    }

    GetPCData() {
        var Data = this._PCData;
        Data = this._MapHeight(Data);
        Data = this._MapHormones(Data);
        Data = this._MapFace(Data);
        Data = this._MapHair(Data);
        Data = this._MapGenitals(Data);
        Data = this._MapUpperBody(Data);
        Data = this._MapLowerBody(Data);
        return Data;
    }

    _AttachParts(PC) {
        var penis = da.Part.create(da.PenisHuman, { side: null});
        PC.attachPart(penis);
        var balls = da.Part.create(da.TesticlesHuman, { side: null });
        PC.attachPart(balls);
        var bust = da.Part.create(da.OversizedChest, { side: null });
        PC.attachPart(bust);
        PC.removeSpecificPart(da.NipplesHuman);
        var nips = da.Part.create(da.OversizedChestNipples, { side: null});
        PC.attachPart(nips);

        return this._ClothesHandler(PC);
    }

    
    _MapFace(Data) {

        // Copy player face data into data.
        var Face = setup.player.FaceData;
        if (Face == null || Face === undefined) { // kludge just in case.
            setup.player._state.FaceData = $.extend(true, { }, App.Data.DAD.FacePresets['Default 1']);
            Face = setup.player.FaceData;
        }

        for(var p in Face.basedim) Data.basedim[p] = Face.basedim[p];
        for(var p in Face.Mods) Data.Mods[p] = Face.Mods[p];
        
        var hormoneMod = (this._c('Hormones')/200);
        var lipMod = (setup.player.GetStat('BODY', 'Lips')/100);
        
        // Set the face 'femininity'
        Data.basedim.faceFem = this._clamp(
            (20 * (setup.player.GetStat('BODY', 'Face')/100)) + (20 * hormoneMod),
            Face.basedim.faceFem, 40);

        //Lip Size
        Data.basedim.lipSize = this._clamp(
            (10 + (15 * lipMod)), Face.basedim.lipSize, 35);
        
        //Lip top
        Data.Mods.lipTopSize = this._clamp(( -20 + (55 * lipMod)), Face.Mods.lipTopSize, 35);

        //Lip bottom
        Data.Mods.lipBotSize = this._clamp( (-80+(120*lipMod)), Face.Mods.lipBotSize, 120);
        
        //Lip Part
        Data.Mods.lipParting = this._clamp(
            (36 * lipMod), Face.Mods.lipParting, 36);
        
        //Lip width
        Data.Mods.lipWidth = this._clamp(
            (-10 - (70* lipMod)), -80, Face.Mods.lipWidth);
        
        //Eyelashes
        Data.basedim.eyelashLength = this._clamp(
            (6 * hormoneMod), Face.basedim.eyelashLength, 6);

        return Data;
    }

    _MapUpperBody(Data) {
        var hormoneMod = (this._c('Hormones')/200);
        var breast = setup.player.GetStat('BODY', 'Bust') == 0 ? 0 : (setup.player.GetStat('BODY', 'Bust')/2);
        var areola = (50 * hormoneMod);
        var upperMuscle = (35 * (this._c('Fitness')/100));
        Data.basedim.breastSize = breast;
        Data.basedim.areolaSize = areola;
        Data.basedim.upperMuscle = upperMuscle;
        Data.basedim.shoulderWidth = 64;
        return Data;
    }

    _MapLowerBody(Data) {
        var femMod = (this._c('Femininity')/100);
        var lowerMuscle = (35 * (this._c('Fitness')/100));
        var ass = 5 + (35 * setup.player.GetStat('BODY', 'Ass') / 100);
        var hips = 100 + (75 * (setup.player.GetStat('BODY', 'Hips') / 100));
        var waist = 70 + (100 * (setup.player.GetStat('BODY', 'Waist')/100));
        Data.basedim.lowerMuscle = lowerMuscle;
        Data.basedim.buttFullness = ass;
        Data.basedim.hipWidth = hips;
        Data.basedim.waistWidth = waist;
        Data.basedim.legFem = (10 + (30 * femMod));
        return Data;
    }
    _MapHeight(Data) { 
        Data.basedim.height = this._b('Height');
        return Data;
    }

    //TODO: Make new penis body part as the existing one doesn't scale large enough for the game.
    _MapGenitals(Data) {
        var penis = 30 + ( 170 *  setup.player.GetStat('BODY', 'Penis') / 100);
        var balls = 25 + ( 75 * setup.player.GetStat('BODY', 'Balls') / 100);
        Data.basedim.penisSize = penis;
        Data.basedim.testicleSize = balls;
        return Data;
    }

    _MapHormones(Data) {
        var hormoneMod = (this._c('Hormones')/200);
        Data.fem = 11 * hormoneMod;

        return Data;
    }

    /**
     * Map the players hair attributes
     * @param {*} Data 
     * @returns {*} 
     */
    _MapHair(Data) {

        var wig = setup.player.GetEquipmentInSlot("Wig");
        var length =  wig != null ? wig.HairLength() : this._b('Hair');
        var color = wig != null ? App.Data.Lists.HairColors[wig.HairColor()] : App.Data.Lists.HairColors[setup.player.HairColor];
        var style = wig != null ? wig.HairStyle() : setup.player.HairStyle;

        //TODO: We are missing some hair styles, so either we create them later or get creative.

        switch(style) {
            case 'a spunky boy cut"':
                //avatar: (min 30, max 110) game: (max 10)
                length = Math.min(110, ((80 * (length/20)) + 30));
                style = 7;
                break;
            case 'a loose and flippy style':
                //avatar: (min 45, max 60), game: (max 20)
                length = Math.min(60, ((15 * (length/20)) + 30));
                style = 2;
                break;
            case 'a short bob style':
            case 'a short bob':
                //avatar: (min 35, max 50)  game (max 30)
                length = Math.min(50, ((15 * (length/30)) + 35));
                style = 3;
                break;
            case 'a breezy style':
                //avatar (min 60, max 110) game (max 50)
                length = Math.min(110, ((50 * (length/50)) +60));
                style = 6;
                break;
            case 'a loose cut with flowing curls':
                style = 4;
                break;
            case 'cute pig tails':
                //avatar (min 90, max 110) game (50)
                length = Math.min(110, ((20 * (length/50)) + 90));
                style = 5;
                break;
            case 'a long pony tail':
                //avatar (min 90, max 110) game (100)
                length = Math.min(110, ((20 * (length/100)) + 90));
                style = 5;
                break;
            case 'a slick up-do style':
                //avatar (min 50, max 110) game (20)
                length = Math.min(110, ((60 * (length/20)) + 50));
                style = 1;
                break;
            case 'extravagantly long braids':
                style = 4;
                break;
            case 'extremely long twin tails':
                //avatar (min 90, max 110) game (80)
                length = Math.min(110, ((20 * (length/80)) + 90));
                style = 5;
                break;
            default:
                style = 2;
        }

        Data.basedim.hairLength = length;
        Data.basedim.hairStyle = style;
        Data.basedim.hairHue = color.h;
        Data.basedim.hairSaturation = color.s;
        Data.basedim.hairLightness = color.l;
        Data.browFill = 'black';
        Data.eyelashFill = 'black'

        return Data;
    }

    _ClothesHandler(PC) {

        for (var slot in setup.player.Equipment) {
            var o = setup.player.Equipment[slot];
            if (typeof o === 'undefined' || o == null || o.Slot == 'Wig') continue; //no op
            var id = App.Data.AvatarMaps.hasOwnProperty(o.Tag) ? o.Tag : o.Slot;
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
                console.log("Unable to map clothes to avatar: "+o.Tag);
            }
        }

        return PC;
    }

    _b(s) { return App.PR.StatToCM(setup.player, s); }

    _c(s) { return setup.player.GetStat('STAT', s); }

    _clamp(v, min, max) {
        return Math.max(Math.min(v, max), min);
    }

    // Gradients
    // I want to be able to dynamically scale these, waiting on a response from the DA developer about this.

    _pinkAthleticSocks(ctx, ex)
    {
        var grd = ctx.createLinearGradient(150.000, 0.000, 150.000, 180.000);
      
        // Add colors
        grd.addColorStop(0.000, 'lightpink');
        grd.addColorStop(0.514, 'lightpink');
        grd.addColorStop(0.521, 'white');
        grd.addColorStop(0.536, 'white');
        grd.addColorStop(0.541, 'lightpink');
        grd.addColorStop(0.551, 'lightpink');
        grd.addColorStop(0.560, 'white');
        grd.addColorStop(0.571, 'white');
        grd.addColorStop(0.580, 'lightpink');
        grd.addColorStop(1.000, 'lightpink');

        return grd;
    }

}