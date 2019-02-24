App.Entity.AvatarEngine = class Avatar {

    constructor() {
        da.load().then(function() {
            // Genitals - need to avoid the fem attribute shrinking them.
            da.extendDimensionCalc("human.penisSize", function (base) {
                var penis = 80 * ( App.PR.StatToCM(setup.player, 'Penis') / 16);
                console.log("DA:Penis Set to:"+penis);
                return penis;
            });

            da.extendDimensionCalc("human.testicleSize", function (base) {
                var balls = App.PR.StatToCM(setup.player, 'Balls') * 10; // scale in mm
                console.log("DA:Balls Set to:"+balls);
                return balls;
            });

        });

        this._PCData = {
            name : "HAL 9000",
            occupation : "Pod Bay Opener",
            // provide specific values here to override the default ones set
            age : 26,
            fem : 11,
            sub : 2,
        
            // base physical dimensions
            basedim        : {
                areolaSize    : 14.923766816143496,
                armThickness  : 58.468958260259555,
                armLength     : 45,
                breastSize    : 9.974887892376682,
                buttFullness  : 13.019992984917572,
                chinWidth     : 63.335671694142405,
                eyelashLength : 3.0305156085584004,
                eyeSize       : 13.019992984917572,
                //faceFem       : 40,
                faceLength    : 215,
                faceWidth     : 75,
                //hairLength    : 37.03963521571379,
                //hairStyle     : 4,
                //hairHue       : 0,
                //hairSaturation: 19.081024202034374,
                //hairLightness : 11.224131883549632,
                handSize      : 118.9757979656261,
                //height        : 163.65022421524662,
                hipWidth      : 110.85584005612066,
                legFem        : 39.95790950543669,
                legFullness   : 4.489652753419852,
                legLength     : 98.79340582251841,
                lipSize       : 18.85654156436338,
                lowerMuscle   : 22.448263767099263,
                neckLength    : 72.73237460540162,
                neckWidth     : 39.489652753419854,
                //penisSize     : 50,
                shoulderWidth : 64.28699551569507,
                skin          : -1.9291476674850934,
                //testicleSize  : 60,
                upperMuscle   : 0,
               // vaginaSize    : 40,
                waistWidth    : 102.32549982462294,
            },
            decorativeParts: [
                //da.Part.create(da.BeautyMark, {side: null}),
            ],
            // overriding clothing (default to simple red underwear)
            clothes: [
                //da.Clothes.create(da.Bra, da.sheerFabric),
               // da.Clothes.create(da.Panties, da.sheerFabric)
            ],
        };

    }

    DrawCanvas(element, height, width) {
        this._element = element;
        $(document).one(":passageend", this._DrawCanvas.bind(this));
    }

    _DrawCanvas() {
        var canvasGroup;
        if (typeof canvasGroup === 'undefined' || canvasGroup == null) {
            canvasGroup = da.getCanvasGroup(this._element, 
                {
                    border: "1px solid black",
                    width: 400,
                    height: 600
                });
        } 

        var PC = new da.Player( this.GetPCData() );
        PC = this._AttachParts(PC);
        
        da.draw(canvasGroup, PC, { printHeight: false, printAdditionalInfo: false, printShoe: false});

        console.log(PC);
    }

    GetPCData() {
        var Data = this._PCData;
        Data = this._MapHeight(Data);
        Data = this._MapHormones(Data);
        Data = this._MapHair(Data);
        Data = this._MapGenitals(Data);

        return Data;
    }

    _AttachParts(PC) {
        var penis = da.Part.create(da.PenisHuman, { side: "right"});
        PC.attachPart(penis);
        var balls = da.Part.create(da.TesticlesHuman, { side: "right" });
        PC.attachPart(balls);
        return PC;
    }

    _MapHeight(Data) { 
        Data.basedim.height = this._b('Height');
        return Data;
    }

    //TODO: Make new penis body part as the existing one doesn't scale large enough for the game.
    _MapGenitals(Data) {
        var penis = 80 * ( this._b('Penis') / 16);
        Data.basedim.penisSize = penis;
        Data.basedim.testicleSize = this._b('Balls') * 2;
        return Data;
    }

    _MapHormones(Data) {

        var femMod = (this._c('Hormones')/200);
        var face = setup.player.GetStat('BODY', 'Face') / 100;
        Data.fem = 11 * femMod;
        Data.basedim.faceFem = (20 * face) + (20 * femMod);

        return Data;
    }

    /**
     * Map the players hair attributes
     * @param {*} Data 
     * @returns {*} 
     */
    _MapHair(Data) {

        var wig = setup.player.GetEquipmentInSlot("Wig");
        Data.basedim.hairLength =  wig != 0 ? wig.HairLength() : this._b('Hair');
        var color = wig != 0 ? App.Data.Lists.HairColors[wig.HairColor()] : App.Data.Lists.HairColors[setup.player.HairColor]
        Data.basedim.hairHue = color.h;
        Data.basedim.hairSaturation = color.s;
        Data.basedim.hairLightness = color.l;

        //TODO: Make new hair parts. Ensure that the scaling goes up to the maximum length allowed in the game (180cm)
        Data.basedim.hairStyle = 4;
        return Data;
    }

    _b(s) { return App.PR.StatToCM(setup.player, s); }

    _c(s) { return setup.player.GetStat('STAT', s); }
}