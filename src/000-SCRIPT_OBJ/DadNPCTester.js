App.Entity.NPCAvatar = class NPCAvatar {
    constructor() {

        this._canvasHeight = 800;
        this._canvasWidth = 360;
        this._canvasElement = "npcRender";
        this._portraitHeight = 240;
        this._portraitWidth = 180;
        this._portraitElement = "npcRenderPortrait";

        this._equip = { };

        this._NPCDATA = null;;

        this._sliders = { };

        this._Lists = { };
        this._PC = null;
        this._LoadID = null;
        this._init = false;

    }

    get NPC() { return this._NPCDATA; }
    get PC() { return this._PC; }
    get Sliders() { return this._sliders; }
    get Lists() { return this._Lists; }
    get EQUIP() { return this._equip; }
    get LoadID() { return this._LoadID; }

    Init(ID)
    {
        if (this._init == true) return;
        this._LoadID = ID;
        this._NPCDATA = $.extend(true, {}, App.Data.DADNPC[ID].DATA);
        this._equip = $.extend(true, {}, App.Data.DADNPC[ID].EQUIP);
        this._init = true;
    }

    ReLoad(ID)
    {
        this._LoadID = ID;
        this._NPCDATA = $.extend(true, {}, App.Data.DADNPC[ID].DATA);
        this._equip = $.extend(true, {}, App.Data.DADNPC[ID].EQUIP);
        SugarCube.State.display("NPCTester");
    }

    AddList(Type, Attrib, Label)
    {
        var ID = Type + "_" + Attrib;
        if (this._Lists.hasOwnProperty(ID) == false) {

            this._Lists[ID] = { 
                TYPE : Type,
                ATTRIB : Attrib,
            };

            this._Lists[ID].LABEL = typeof Label === 'undefined' ? Attrib : Label;
            this._Lists[ID].ITEMS = this._GetItems(Type, Attrib);

        } 

        return ID;
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

        for (var listId in this.Lists) {
            this._DrawLabel(listId);
            this._DrawDropDown(listId);
        }

    }

    DrawCanvas(element, height, width) {
        this._canvasHeight = height;
        this._canvasWidth = width;
        this._canvasElement = element;
        $(document).one(":passageend", this._DrawCanvas.bind(this));
    }

    _DrawCanvas() {
        var canvasGroup;
        if (typeof canvasGroup === 'undefined' || canvasGroup == null) {
            canvasGroup = da.getCanvasGroup(this._canvasElement, 
                {
                   border: "1px solid goldenrod",
                   width: this._canvasWidth,
                   height: this._canvasHeight
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

    DrawPortrait(element, height, width)
    {
        this._portraitElement = element;
        this._portraitHeight = height;
        this._portraitWidth = width;

        $(document).one(":passageend", this._DrawPortrait.bind(this));
    }

    _DrawPortrait()
    {

        var canvasGroup = da.getCanvasGroup("hiddenPortraitCanvas", {
               border: "none",
               width: 2100,
               height: 3600
            });

        var PC = new da.Player( this.NPC );
        PC = this._AttachParts(PC);

        var that = this;
        da.draw(canvasGroup, PC, { 
            printHeight: false, printAdditionalInfo: false, renderShoeSideView: false,
            }).then(function (exports) {
            // draw just the head in a separate canvas
            // first retrieve/create the canvas if it's the first time we're getting it
            var portraitCanvas = da.getCanvas("portrait",
                {

                    width : that._portraitWidth,
                    height: that._portraitHeight,
                    // can add any CSS style here like border
                    border: "solid 1px goldenrod",
                    // you can also position it absolutely
                    // position: "absolute",
                    // top     : "10px",
                    // left    : "10px",
                    // or relative to a parent
                    position: "relative",
                    parent: document.getElementById(that._portraitElement),
                });
        
            var eyeCanvas = da.getCanvas("portraitEye",
            {
                width : that._portraitWidth,
                height: that._portraitHeight,
                border: "solid 1px goldenrod",
                position: "relative",
                parent: document.getElementById(that._portraitElement+"Eye"), 
            });

            // you can call this multiple times to draw different parts (with different canvases)
            da.drawFocusedWindow(portraitCanvas,
                exports,
                {
                    center: exports[da.Part.RIGHT].neck.nape,
                    width: 50,
                    height: 50
                });

            da.drawFocusedWindow(eyeCanvas,
                exports,
                {
                    center: exports[da.Part.RIGHT].eyes.center,
                    width: 15,
                    height: 15
                });
 
        });

        //da.hideCanvasGroup("hiddenCanvas");
    }

    _DrawLabel(ID)
    {
        $(this._GetAttrib(ID)).append(
            $("<div>").addClass("npcWorkshopLabel").text(this._GetObj(ID).LABEL));
    }

    _DrawDropDown(ID)
    {

        var root = $("<select>").attr("id", ID+"_DropDown").addClass("NPCDropDown");
        $(this._GetAttrib(ID)).append(root);

        var items = this._GetObj(ID).ITEMS;
        var selected = this._GetSelectedItem(ID);
        for (var i = 0; i < items.length; i++) {
            var opt = $('<option>').attr('value', items[i].v).text(items[i].t);
            if (items[i].v == selected) opt.attr('selected', 'selected');
            root.append(opt);
        }

        root.on("change", { "ID" : ID }, this._DropDownChanged.bind(this));
    }

    _DrawSlider(ID)
    {
        var root = $(this._GetAttrib(ID));
        var element = $("<div>").addClass("npcSliderClass").attr("id", ID +"_Slider");
        root.append(element);
        console.log("DrawingSlider:"+ID);
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
        var parts = ID.split("_");
        var type = parts[0];
        if (type == 'OBJ' || type == 'ARR' || type == 'CLOTHES' || type == 'WEAPON')
        { 
            return this.Lists[ID];
        } else {
            return this.Sliders[ID];
        }

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
        try { 
        var parts = ID.split("_");
        var val =  parts[0] == 'base' ? this.NPC[parts[1]] : this.NPC[parts[0]][parts[1]];
        return val;
        } catch(ex) {
            console.log("Error:_GetStat("+ID+")="+ex);
        }
        return 0;
    }

    _AttachParts(PC) {
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
        return this._ClothesHandler(PC);
    }

    _ClothesHandler(PC) {

        for (var slot in this.EQUIP) {
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

    _GetItems(Type, Attrib)
    {
        var items;

        if (Type == 'OBJ') {
            if (Attrib == "NPCLIST") {
                items = Object.entries(App.Data.DADNPC).map( (v, i, a) =>
                new Object( { t: v[1].DATA.name, v: v[0]}) );
            } else {
                items = Object.keys(App.Data.Lists[Attrib]);
            } 
        } else if (Type == 'ARR')
        {
            items = App.Data.Lists[Attrib];
            if (items.length > 0 && typeof items[0] === 'object') {
                switch(Attrib)
                {
                    case 'HairStyles':
                    case 'MakeupStyles':
                        items = items.map(o => o.SHORT);
                        break;
                    default:
                        items = items.map(o => o.NAME);
                }
            } 
        } else if (Type == 'WEAPON' || Type == 'CLOTHES')
        {
            items = [ { t: "nothing", v: "nothing" } ];
            Array.prototype.push.apply(items, Object.entries(App.Data.Clothes).filter( o => 
                o[1].Slot == Attrib).map( (v, i, a) => 
                new Object({ t: v[0], v: v[0]})));
        }
        return items;
    }

    _GetSelectedItem(ID)
    {
        var o = this._GetObj(ID);

        switch(o.TYPE) {
            case 'CLOTHES':
            case 'WEAPON':
                var e = this.EQUIP[o.LABEL];
                if (e != null) return e;
                break;
        }

        switch(o.ATTRIB)
        {
            case 'NPCLIST':
                return this.LoadID;
            case 'HairStyles':
                var key = this.NPC;
                var o = App.Data.Lists[o.ATTRIB].filter(o => o.SHORT == key);
                if (o.length > 0) return o[0].SHORT;
            case 'HairColors':
                return this.NPC.hairFill;
            case 'MakeupStyles':
                return setup.player.MakeupStyle;
        }

        return undefined;
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
        this._DrawPortrait();
        this.DoSliderValUpdate(val, type+"_"+attr);
        this.ExportData();
    }

    DoSliderValUpdate(val, ID)
    {
        $("#"+ID+"_Value").html(val); 
        return val;
    }

    _DropDownChanged(e){
        var o = this._GetObj(e.data.ID);
        var list = $("#"+e.data.ID + "_DropDown");
        var val = list.val();

        switch(o.TYPE)
        {
            case 'CLOTHES':
            case 'WEAPON':
                if (val == 'nothing') {
                    this.EQUIP[o.LABEL] = null;
                } else {
                   this.EQUIP[o.LABEL] = val;
                }
               this._DrawCanvas();
               this._DrawPortrait(); 
                break;
        }

        switch(o.ATTRIB)
        {
            case 'NPCLIST':
                this.ReLoad(val);
                break;
            case 'HairStyles':
                //setup.player.HairStyle = val;
                this._DrawCanvas();
                //App.Avatar._DrawPortrait();
                break;
            case 'HairColors':
                //setup.player.HairColor = val;
                this._DrawCanvas();
                //App.Avatar._DrawPortrait();
                break;
        }

        this.ExportData();
    }

    ExportData()
    {
        var txt = $('#dataOutput');
        var data = {
            DATA : this.NPC,
            EQUIP: this.EQUIP
        };
        var str = JSON.stringify(data);
        txt.val(str);
    }
}