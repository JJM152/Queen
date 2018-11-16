/**
 * This class manages the "job" system. Basically short term repeatable quests.
 * They are not tracked by the journal and focus mostly on earning cheap rewards and flavor text.
 */
App.JobEngine = class {
    constructor() {
        /** @type {Array.<App.Job>}
         * @private */
        this._Jobs = [];
        // Hack for dancing jobs.
        this._DanceInfo = {
            DANCE: "Sexy Dancer",
            DAY: 1,
            PHASE: 0
        };
    }

    /**
     * Hack for reporting the current 'desired dance' for dancehalls.
     * @returns {string}
     */
    GetDance() {
        if (this._DanceInfo["DAY"] < setup.player.Day || this._DanceInfo["PHASE"] < setup.player.Phase ) {
            this._DanceInfo["DANCE"] = App.PR.GetRandomListItem(App.Data.Fashion["STYLES"]);
            this._DanceInfo["DAY"] = setup.player.Day;
            this._DanceInfo["PHASE"] = setup.player.Phase;
        }
        return this._DanceInfo["DANCE"];
    }

    /**
     * Loads the job data into an array of Job objects. Can be called again if necessary.
     */
    LoadJobs() {
        if (this._Jobs.length < 1) {
        var oKeys = Object.keys(App.Data.JobData);
        for (var i = 0; i < oKeys.length; i++) this._Jobs.push( new App.Job( App.Data.JobData[oKeys[i]]) );
        }
    }

    /**
     * Lists all jobs at person/location
     * @param {App.Entity.Player} Player
     * @param {string} Giver
     * @returns {Array.<App.Job>}
     */
    GetJobs(Player, Giver) {
        this.LoadJobs();
        return $.grep(this._Jobs, function(j) { return j.Giver() == Giver; }).sort();
    }

    /**
     * Return a Job by it's id property.
     * @param JobID
     * @returns {App.Job}
     */
    GetJob(JobID) {
        this.LoadJobs();
        return $.grep(this._Jobs, function(j) { return j.ID() == JobID; })[0];
    }

    JobAvailable(Player, NPC, JobID) {
        this.LoadJobs();
        return $.grep(this._Jobs, function(j) { return j.ID() == JobID && j.Available(Player, NPC) ; })[0];
    }
    /**
     * Lists all AVAILABLE jobs at a person
     * @param {App.Entity.Player} Player
     * @param {string} Giver
     * @returns {Array.<App.Job>}
     */
    GetAvailableJobs(Player, Giver) {
        return $.grep(this.GetJobs(Player, Giver), function(j) { return j.Available(Player, Player.GetNPC(Giver)) == true; });
    }

    /**
     * Lists available jobs at a location
     * @param {App.Entity.Player} Player
     * @param {string} Giver
     * @returns {*}
     */
    GetAvailableLocationJobs(Player, Giver) {
        return $.grep(this.GetJobs(Player, Giver), function(j) { return j.Requirements(Player, Giver) == true; });
    }

    /**
     * Lists all UNAVAILABLE jobs on person
     * @param {App.Entity.Player} Player
     * @param {string} Giver
     * @returns {Array.<App.Job>}
     */
    GetUnavailableJobs(Player, Giver) {
        return $.grep(this.GetJobs(Player, Giver), function(j) {
            return j.Available(Player, Player.GetNPC(Giver)) == false && j.Hidden() != true;
        }).sort();
    }

    /**
     * Lists unavailable jobs at a location
     * @param {App.Entity.Player} Player
     * @param {string} Giver
     * @returns {*}
     */
    GetUnavailableLocationJobs(Player, Giver)
    {
        return $.grep(this.GetJobs(Player, Giver), function(j) { return j.Requirements(Player, Giver) == false; });
    }

    /**
     * True if there are AVAILABLE jobs at this person/location
     * @param {App.Entity.Player} Player
     * @param {string} Giver
     * @returns {boolean}
     */
    JobsAvailable(Player, Giver) {
        return this.GetAvailableJobs(Player, Giver).length != 0;
    }

    /**
     * True if there are ANY jobs at this person/location
     * @param {App.Entity.Player} Player
     * @param {string} Giver
     * @returns {boolean}
     */
    HasJobs(Player, Giver ) {
        return (this.GetAvailableJobs(Player, Giver).length != 0) || (this.GetUnavailableJobs(Player,Giver).length != 0);
    }

    /**
     * @param {App.Entity.Player} Player
     * @param {string} Flag
     * @returns {boolean}
     */

    HasJobFlag(Player, Flag) {
        return Player.JobFlags.hasOwnProperty(Flag) != false;
    }

    /**
     * @param {App.Entity.Player} Player
     * @param {string} Flag
     * @param {*} Value
     */
    SetJobFlag(Player, Flag, Value) {
      Player.JobFlags[Flag] = Value;
    }

    //this.Init(App.Data.JobData);
}

/**
 * Represents a job.
 */
App.Job = class Job {
    /**
     *
     * @param {Object} Data
     */
    constructor(Data) {
        /** @type {object}
         *  @private */
        this._JobData   = Data;
        /** @type {Array.<App.Scene>}
         *  @private */
        this._SceneBuffer = [ ];
        /** @type {Array.<string>}
         * @private */
        this._MissingRequirements = [ ];
        /** @private
         *  @returns {Array.<object>} */
        this._Cost      = function() { return this._JobData["COST"]; };
        /** @private
         *  @returns {Array.<object>} */
        this._Req       = function() { return this._JobData["REQUIREMENTS"]; };
    }
    /** @private
     *  @param {number} X
     *  @param {number} Y
     *  @returns {boolean} */
    static _gte(X, Y) { return (X >= Y); }
    /** @private
     *  @param {number} X
     *  @param {number} Y
     *  @returns {boolean} */
    static _lte(X, Y) { return (X <= Y); }
    /** @private
     *  @param {number} X
     *  @param {number} Y
     *  @returns {boolean} */
    static _gt(X, Y) { return (X > Y);  }
    /** @private
     *  @param {number} X
     *  @param {number} Y
     *  @returns {boolean} */
    static _lt(X, Y) { return (X < Y);  }
    /** @private
     *  @param {number} X
     *  @param {number} Y
     *  @returns {boolean} */
    static _eq(X, Y) { return (X == Y); }
    /** @private
     *  @param {number} X
     *  @param {number} Y
     *  @returns {boolean} */
    static _ne(X, Y) { return (X != Y); }

    /** @returns {string} */
    ID() { return this._JobData["ID"]; }
    /** @returns {string} */
    Giver() { return this._JobData["GIVER"]; }
    /** @returns {number} */
    Pay() { return this._JobData["PAY"]; }
    /** @returns {Array.<number>} */
    Phases() { return this._JobData["PHASES"]; }
    /** @returns {boolean} */
    Hidden() { return this._JobData["HIDDEN"]; }
    /**
     * Print the intro to a job.
     * @param {App.Entity.Player}Player
     * @param {App.Entity.NPC} Npc
     * @returns {string}
     */
    Intro(Player, Npc) {
        if (this.Requirements(Player, Npc) == false)
            return App.PR.TokenizeString(Player, Npc, this._JobData["INTRO"]) + "@@color:red;(Requirements not met)@@";
        return  App.PR.TokenizeString(Player, Npc, this._JobData["INTRO"]);
    }

    /**
     * Calculate cost of a job
     * @param {string} Type
     * @param {string} [Name]
     * @returns {number}
     * @private
     */
    _GetCost(Type, Name) {
        var Check = [];
        if (typeof Name !== 'undefined') {
            Check = $.grep(this._Cost(), function (c) {
                return c["TYPE"] == Type && c["NAME"] == Name;
            });
        } else {
            Check = $.grep(this._Cost(), function (c) {
                return c["TYPE"] == Type;
            });
        }
        if (typeof Check !== 'undefined' && Check.length > 0) return Check[0]["VALUE"];
        return 0;
    }

    /**
     * @returns {number}
     */
    GetEnergyCost() {
        return this._GetCost("STAT", "Energy");
    }

    /**
     * @returns {number}
     */
    GetTimeCost() {
        return this._GetCost("TIME");
    }

    /**
     * Print the title of a job.
     * @param {boolean} [Opt]
     * @returns {string}
     */
    Title(Opt) {
        var Output = this._JobData["TITLE"];
        if (Opt) return Output;

        for (var i = 0; i < this._JobData["RATING"];i++) Output += " &#9733;";
        Output = App.PR.ColorizeString(this._JobData["RATING"], Output, 5);

        var Time    = this._GetCost("TIME");
        var Energy  = this._GetCost("STAT", "Energy");
        var Money   = this._GetCost("MONEY");
        var Strings = [];

        if (Time != 0) Strings.push("@@color:lime;Time " + Time + "@@");
        if (Energy != 0) Strings.push("@@color:yellow;Energy " + Energy + "@@");
        if (Money != 0) Strings.push("@@color:orange;Money " + Money + "@@");

        if (Strings.length != 0) Output = Output + " [" + Strings.join("&nbsp;") + "]";
        return Output;
    }

    /**
     * Check to see if the player meets the "Cost" requirement for a job. Usually energy as this
     * is subtracted from their status upon taking the job.
     * @param {App.Entity.Player} Player
     * @returns {boolean}
     */
    Cost(Player) {
        if (typeof this._Cost() === 'undefined') return true;

        for(var i = 0; i < this._Cost().length; i++) {
            switch(this._Cost()[i]["TYPE"]) {
                case "STAT" :
                case "SKILL" :
                case "BODY" :
                    if (Player.GetStat(this._Cost()[i]["TYPE"], this._Cost()[i]["NAME"]) < this._Cost()[i]["VALUE"]) return false;
                    break;
                case "MONEY":
                    if (Player.Money < this._Cost()[i]["VALUE"]) return false;
                    break;
            }
        }
        return true;
    }

    /**
     * Deduct the costs of the Job from the player (usually energy, but could be other stats)
     * @param {App.Entity.Player} Player
     * @private
     */
    _DeductCosts(Player) {
        if (typeof this._Cost() === 'undefined') return;
        var Type, Name, Value;

        for(var i = 0; i < this._Cost().length; i++) {
            Type = this._Cost()[i]["TYPE"];
            Name = this._Cost()[i]["NAME"];
            Value = this._Cost()[i]["VALUE"];

            Job.Debug("_DeductCosts","Type="+ Type + ",Name="+Name+",VALUE="+Value);
            switch(Type) {
                case "STAT" :
                    Player.AdjustStat(Name, Math.floor(Value * -1.0));
                    break;
                case "SKILL" :
                    Player.AdjustSkill(Name, Math.floor(Value * -1.0));
                    break;
                case "BODY" :
                    Player.AdjustBody(Name, Math.floor(Value * -1.0));
                    break;
                case "MONEY":
                    Player.AdjustMoney(Math.floor(Value * -1.0));
                    break;
                case "ITEM":
                    var o = Player.GetItemByName(Name);
                    o.RemoveCharges(Value);
                    break;
                case "TIME":
                    Player.NextPhase(Value);
                    break;
            }
        }
    }

    /**
     * Check to see if the player meets the other requirements to take the job. Usually skill, stat, body related or quest flags.
     * @param {App.Entity.Player} Player
     * @param NPC|String} NPC
     * @returns {boolean}
     */
    Requirements(Player, NPC) {
        var Type, Name, Value, Condition, Option;
        var StatusFlag              = true;
        var ReqString               = "";
        this._MissingRequirements   = [ ];

        for(var i = 0; i < this._Req().length; i++) {
            Type        = this._Req()[i]["TYPE"];
            Name        = this._Req()[i]["NAME"];
            Value       = this._Req()[i]["VALUE"];
            Condition   = this._Req()[i]["CONDITION"];
            Option      = this._Req()[i]["OPT"];
            ReqString   = "";

            switch(Type) {
                case "STAT" :
                    if (Job._Cmp( Player.GetStat(Type, Name), Value, Condition) == false) {
                        StatusFlag = false;
                        if (Condition == "lt" || Condition == "lte" ) {
                            ReqString = App.PR.ColorizeString(Value, Name + " stat is too high");
                        } else {
                            ReqString = App.PR.ColorizeString(Value, Name + " stat is too low");
                        }
                    }
                    break;
                case "SKILL" :
                    if (Job._Cmp( Player.GetStat(Type, Name), Value, Condition) == false) {
                        StatusFlag = false;
                        if (Condition == "lt" || Condition == "lte" ) {
                            ReqString = App.PR.ColorizeString(Value, Name  + " skill is too high");
                        } else {
                            ReqString = App.PR.ColorizeString(Value, Name + " skill is too low");
                        }
                    }
                    break;
                case "BODY" :
                    if (Job._Cmp( Player.GetStat(Type, Name), Value, Condition) == false) {
                        StatusFlag = false;
                        if (Condition == "lt" || Condition == "lte" ) {
                            ReqString = App.PR.ColorizeString(Value, "Too much "+ Name);
                        } else {
                            ReqString = App.PR.ColorizeString(Value, "Not enough " + Name);
                        }
                    }
                    break;
                case "META" :
                    var pStat = 0;
                    if (Name == 'BEAUTY') pStat = Player.Beauty();

                    if (this._Cmp( pStat, Value, Condition) == false) {
                        StatusFlag = false;
                        if (Condition == "lt" || Condition == "lte" ) {
                            ReqString = App.PR.ColorizeString(Value, "Too much "+ Name.toLowerCase());
                        } else {
                            ReqString = App.PR.ColorizeString(Value, "Not enough " + Name.toLowerCase());
                        }
                    }
                    break;
                case "MONEY":
                    if (Job._Cmp( Player.Money, Value, Condition) == false) {
                        StatusFlag = false;
                        ReqString = "@@color:orange;Need Money ("+(Value - Player.Money) + ")";
                    }
                    break;
                case "NPC_STAT":
                    if (typeof NPC === 'undefined' && typeof Option !== 'undefined') NPC = Player.GetNPC(Option);
                    if (typeof NPC !== 'undefined') {
                        if (Job._Cmp( NPC.GetStat(Name), Value, Condition ) == false) {
                            StatusFlag = false;
                            if (Condition == "lt" || Condition == "lte" ) {
                                ReqString = App.PR.ColorizeString(Value, NPC.Name() +"'s " + Name  + " is too high");
                            } else {
                                ReqString = App.PR.ColorizeString(Value, NPC.Name() + "'s " + Name + " is too low");
                            }
                        }
                    }
                    break;
                case "QUEST":
                    if (Job._Cmp( Player.QuestFlags[Name], Value, Condition) == false) {

                        ReqString = "@@color:gold;Quest '"+ App.Data.Quests[Name]["Title"]+"' not complete@@";
                        StatusFlag = false;
                    }
                    break;
                case "FLAG":
                    if (Job._Cmp( Player.JobFlags[Name], Value, Condition) == false ) {
                        StatusFlag = false;
                    }
                    break;
                case "ITEM":
                    if (Player.GetItemByName(Name) === undefined) {
                        StatusFlag = false;
                        ReqString = "@@color:red;Missing item '" + Name + "' x" + Value + "@@";
                    } else if ( Job._Cmp( Player.GetItemByName(Name).Charges(), Value, Condition) == false) {
                        StatusFlag = false;
                        ReqString = "@@color:red;Missing item '" + Name + "' x" + Value + "@@";
                    }
                    break;
                case "EQUIPPED":
                    if (!Player.IsEquipped(Name)) {
                        StatusFlag = false;
                        ReqString = "@@color:red;Must have '" + Name + "' equipped.@@";
                    }
                    break;
                case "STYLE_CATEGORY":
                    if (Job._Cmp( Player.GetStyleSpecRating(Name), Value, Condition) == false ){
                        StatusFlag = false;
                        if (Condition == "lt" || Condition == "lte" ) {
                            ReqString = App.PR.ColorizeString(Value, "Too much style '"+Name+"'");
                        } else {
                            ReqString = App.PR.ColorizeString(Value, "Not enough style '"+Name+"'");
                        }
                    }
                    break;
                case "STYLE":
                    if (Job._Cmp( Player.Style(), Value, Condition) == false) {
                        StatusFlag = false;
                        if (Condition == "lt" || Condition == "lte" ) {
                            ReqString = App.PR.ColorizeString(Value, "Style and Grooming too high");
                        } else {
                            ReqString = App.PR.ColorizeString(Value, "Style and Grooming too low");
                        }
                    }
                    break;
                case "HAIR_STYLE":
                    if ( (Player.GetHairStyle() == Name ) != Value ) {
                        StatusFlag = false;
                        ReqString = "@@color:red;Need '"+Name+"' hair style@@";
                    }
                    break;
                case "HAIR_COLOR":
                    if ( (Player.GetHairColor() == Name ) != Value ) {
                        StatusFlag = false;
                        ReqString = "@@color:red;Need '"+Name+"' hair color@@";
                    }
                    break;
                case "PORT_NAME":
                    if ( (Player.GetShipLocation() == Name) != Value) {
                        StatusFlag = false;
                        ReqString = "@@color:red; Need Port'"+Name+"'@@";
                    }
                    break;
                case "IN_PORT":
                    if ( Player.IsInPort(Value) != Condition) {
                        StatusFlag = false;
                    }
                    break;

            }

            if (ReqString != "") this._MissingRequirements.push(ReqString);
        }

        return StatusFlag;
    }

    /**
     * Helper function - runs comparisons.
     * @param {number|string} A
     * @param {number|string} B
     * @param {string} C
     * @returns {boolean}
     * @private
     */
    static _Cmp(A, B, C) {
        switch(C) {
            case "gte":
                return Job._gte(A, B);
            case "lte":
                return Job._lte(A, B);
            case "gt" :
                return Job._gt(A, B);
            case "lt" :
                return Job._lt(A, B);
            case "eq" :
                return Job._eq(A, B);
            case "ne" :
                return Job._ne(A, B);
            default:
                return Job._lt(A, B);
        }
    }

    /**
     * Check to see if the time cost falls within the open/allowed phases of the activity and that there
     * is enough time in the day to complete it.
     * @param {App.Entity.Player} Player
     * @returns {boolean}
     * @private
     */
    _CheckTime(Player) {
        return (($.inArray(Player.Phase, this.Phases()) != -1) && (this._GetCost("TIME") + Player.Phase <= 4));
    }

    /**
     * Check to see if the time cost falls within the open/allowed phases of the activity
     * @param {App.Entity.Player} Player
     * @param {boolean} [Opt]
     * @returns {boolean|number}
     * @private
     */
    _CheckReady(Player, Opt) {
            Opt         = Opt || false;
        var Key         = this.ID()+"_LastCompleted";
        var FlagValue   = Player.JobFlags[Key] ? Player.JobFlags[Key] : 0;
        if (Opt) return (FlagValue + this._JobData["DAYS"] - Player.Day);
        return ((FlagValue == 0) || (FlagValue + this._JobData["DAYS"] <= Player.Day));
    }

    /**
     * Set's the last completed flag for the quest.
     * @param {App.Entity.Player} Player
     * @private
     */
    _SetLastCompleted(Player) {
        var Key = this.ID()+"_LastCompleted";
        Player.JobFlags[Key] = Player.Day;
    }

    /**
     * Check to see if this job is available to be used.
     * @param {App.Entity.Player} Player
     * @param {App.Entity.NPC} NPC
     * @returns {boolean}
     */
    Available(Player, NPC) {
        Job.Debug("Job.Available:", this.ID());
        Job.Debug("Cost:", ""+this.Cost(Player));
        Job.Debug("Requirements:", ""+this.Requirements(Player, NPC));
        Job.Debug("_CheckTime:", ""+this._CheckTime(Player));
        Job.Debug("_CheckReady:", ""+this._CheckReady(Player));

        return ((this.Cost(Player) == true) && (this.Requirements(Player, NPC) == true) && (this._CheckTime(Player) == true) && (this._CheckReady(Player) == true));
    }

    /**
     * Check to see if a job is ready (if it's known about).
     * @param {App.Entity.Player} Player
     * @returns {boolean}
     */
    Ready(Player) {
      return ((this.Cost(Player) == true)  && (this._CheckTime(Player) == true) && (this._CheckReady(Player) == true));
    }

    /**
     * Return if the job is on cool down.
     * @param {App.Entity.Player} Player
     * @returns {boolean}
     */
    OnCoolDown(Player) {
        Job.Debug("OnCoolDown", JSON.stringify(Player.JobFlags));
        return (this._CheckReady(Player) != true);
    }

    /**
     * Print out the requirements (missing) string for a job.
     * @param {App.Entity.Player} Player
     * @param {App.Entity.NPC} NPC
     * @returns {string}
     */
    ReqString(Player, NPC) {
        var Output  = "";

        var CoolDown = this._CheckReady(Player, true);
        if (this.OnCoolDown(Player))
            Output = "@@color:yellow;Available in " + CoolDown + " day" + (CoolDown > 1 ? "s@@" :"@@");

        if (this.OnCoolDown(Player) == false && this._CheckTime(Player) == false) {
          Output = "@@color:yellow;Only Available@@ ";
            for (var i = 0; i < this.Phases().length; i++)
                Output += App.Entity.Player.GetPhaseIcon(this.Phases()[i]) + " ";
        }

        if (this._MissingRequirements.length > 0)
            Output += "\n" + this._MissingRequirements.join(", ");

        return Output;
    }

    /**
     * Play the selected job scenes.
     * @param {App.Entity.Player} Player
     * @param {App.Entity.NPC} NPC
     * @returns {Array.<App.Scene>}
     */
    PlayScenes(Player, NPC) {
        var Results = { };

        Job.Debug("PlayScenes", "Started");
        this._SceneBuffer = [ ];
        this._SetLastCompleted(Player);

        Player.AdjustMoney(Math.floor(this._JobData["PAY"]));
        this._DeductCosts(Player);

        for (var i = 0; i < this._JobData["SCENES"].length; i++) {
            /** @type {App.Scene} Scene */
            var Scene = new App.Scene(Player, NPC, this._JobData["SCENES"][i], Results);
            Results = Scene.Results(); //Pass along results from previous scenes to future scenes.
            this._SceneBuffer.push(Scene);
        }

        Job.Debug("PlayScenes", "Ended");
        return $.grep(this._SceneBuffer, function(s) { return s.Triggered() == true; });
    }

    /**
     * Match a result to a string and return the colorized version.
     * @param {string} Tag
     * @param {number} Result
     * @param {number} Value
     * @returns {string}
     * @private
     */
    _MatchResult(Tag, Result, Value) {
        var Output = "";
        var Percent = Math.floor( ((Result / Value) * 100)/2);

        /**
         * @param {string} a
         * @returns {string}
         */
        var Colorize = function(a) { return  (typeof a !== 'undefined') ? App.PR.ColorizeString(Percent, a.slice(2,-2), 100) : ""; };

        for ( var i = 0; i < this._JobData["JOB_RESULTS"].length; i++)
            if (Percent <= this._JobData["JOB_RESULTS"][i][Tag])
                return this._JobData["JOB_RESULTS"][i]["TEXT"].replace(/(@@.*@@)/g, Colorize );

        return Output;
    }

    /**
     * Print the "job results" at the end of a job.
     * @returns {string}
     * @private
     */
    _PrintJobResults() {
        var Checks = this._SceneBuffer[this._SceneBuffer.length-1].Results();
        var cKeys = Object.keys(Checks);
        var Results = [ ];

        for ( var i = 0; i < cKeys.length; i++)
            Results.push(this._MatchResult(cKeys[i], Checks[cKeys[i]]["RESULT"], Checks[cKeys[i]]["VALUE"]));
        Results = Results.filter( function(r) { return r != ""; });
        return Results.length > 0 ? " " + Results.join(" ") : Results.join("");
    }

    /**
     * Calculate the total pay from all scenes for the job.
     * @returns {string}
     * @private
     */
    _PrintPay() {
        var Pay = this._JobData["PAY"];
        for (var i = 0; i < this._SceneBuffer.length; i++) Pay += this._SceneBuffer[i].Pay();
        return (Pay > 0) ? "@@color:yellow;"+Pay+"@@" : "";
    }

    /**
     * Print all of the items earned in this job
     * @returns {string}
     * @private
     */
    _SummarizeJob() {
        var items = [ ];
        var i;
        var Pay = this._JobData["PAY"];

        // Check for coins;
        for (i = 0; i < this._SceneBuffer.length; i++) Pay += this._SceneBuffer[i].Pay();

        if (Pay > 0) {
            items.push("\n@@color:cyan;Your receive some items:@@");
            items.push("@@color:yellow;"+Pay+" coins@@");
        }

        for ( i = 0; i < this._SceneBuffer.length; i++)
        {
            if (this._SceneBuffer[i].RewardItems().length > 0) {
                if (items.length == 0) items.push("\n@@color:cyan;Your receive some items:@@");
                items.push.apply(items, this._SceneBuffer[i].RewardItems());
            }
        }
        if (items.length > 0 ) return items.join("\n") + "\n";
        return "";
    }

    /**
     * Tokenize a string and return result.
     * @param {App.Entity.Player} Player
     * @param {App.Entity.NPC} NPC
     * @param {string} String
     * @returns {*}
     * @private
     */
    _Tokenize(Player, NPC, String) {
        if (typeof String == 'undefined') return "";
        String = String.replace(/JOB_PAY/g, this._PrintPay());

        if (String.indexOf("JOB_RESULTS") != -1) { // Kludge because replace evaluates function even if no pattern match. Dumb.
            String = String.replace(/JOB_RESULTS/g, this._PrintJobResults());
        }
        String = App.PR.TokenizeString(Player, NPC, String);
        return String;
    }

    /**
     * Print the "start" scene of a job.
     * @param {App.Entity.Player} Player
     * @param {App.Entity.NPC} NPC
     * @returns {string}
     */
    PrintStart(Player, NPC) {
        return this._JobData["START"] == "" ? "" : this._Tokenize(Player, NPC, this._JobData["START"]) + "\n";
    }

    /**
     * Print the "end" scene of a job.
     * @param {App.Entity.Player} Player
     * @param {App.Entity.NPC} NPC
     * @returns {string}
     */
    PrintEnd(Player, NPC) {
        var JobEnd = this._JobData["END"] == "" ? "" :  this._Tokenize(Player, NPC, this._JobData["END"])+ "\n";
        if (this._SummarizeJob() != "") JobEnd += this._SummarizeJob();
        return JobEnd;
    }

    static get _Debug() {
        return Job._debug;
    }

    /**
     * @param {boolean} v
     */
    static set _Debug(v) {
        Job._debug = v;
    }

    /**
     *
     * @param {string} Fun
     * @param {string} String
     */
    static Debug(Fun, String) {
        if (Job._Debug == true)
        console.log(Fun+":"+String+"\n");
    }
};

/** @type {boolean}
 *  @private */
App.Job._debug = false;

/**
 * Stores and plays a "scene" from a job.
*/
App.Scene = class Scene {
    /**
     * @param {App.Entity.Player} Player
     * @param {App.Entity.NPC} NPC
     * @param {object} SceneData
     * @param {object} Checks
     * @constructor
     */
    constructor(Player, NPC, SceneData, Checks) {
        /** @type {boolean}
         *  @private */
        this._Debug     = true;
        /** @type {App.Entity.Player}
         *  @private */
        this._Player    = Player;
        /** @type {App.Entity.NPC}
         *  @private */
        this._NPC       = NPC;
        /** @type {object}
         *  @private */
        this._SceneData = SceneData;
        /** @type {object}
         *  @private */
        this._Flags     = Player.JobFlags;
        /** @type {number}
         *  @private */
        this._Pay       = 0;
        /** @type {boolean}
         *  @private */
        this._Triggered = false;
        /** @type {string}
         *  @private */
        this._StrBuffer = "";
        /** @type {object}
         *  @private */
        this._Checks    = Checks || { };

        /** @type {Array.<string>}
         *  @private */
        this._RewardItems = [ ];

        this._CalculateScene();
    }

    /** @returns {string} */
    Id() { return this._SceneData["ID"]; }
    /** @returns {boolean} */
    Triggered() { return (this._Triggered != false && this._StrBuffer != ""); }
    /** @returns {string} */
    Print() { return (this._StrBuffer != "") ? this._StrBuffer + "\n" : ""; }
    /** @returns {number} */
    Pay() { return Math.floor(this._Pay); }
    /** @returns {object} */
    Results() { return this._Checks; }
    /** @returns {Array.<string>} */
    RewardItems() { return this._RewardItems; }

    /** @private
     *  @param {number} X
     *  @param {number} Y
     *  @returns {boolean} */
    static _gte(X, Y) { return (X >= Y); }
    /** @private
     *  @param {number} X
     *  @param {number} Y
     *  @returns {boolean} */
    static _lte(X, Y) { return (X <= Y); }
    /** @private
     *  @param {number} X
     *  @param {number} Y
     *  @returns {boolean} */
    static _gt(X, Y) { return (X > Y); }
    /** @private
     *  @param {number} X
     *  @param {number} Y
     *  @returns {boolean} */
    static _lt(X, Y) { return (X < Y); }
    /** @private
     *  @param {number} X
     *  @param {number} Y
     *  @returns {boolean} */
    static _eq(X, Y) { return (X == Y); }
    /** @private
     *  @param {number} X
     *  @param {number} Y
     *  @returns {boolean} */
    static _ne(X, Y) { return (X != Y); }
    /** @private
     *  @param {number} A
     *  @param {number} B
     *  @param {string} C
     *  @returns {boolean} */
    static _Cmp(A, B, C) {
        Scene.Debug("_Cmp", "A="+A+",B="+B+",C="+C);

        switch(C) {
            case "gte":
                return Scene._gte(A, B);
            case "lte":
                return Scene._lte(A, B);
            case "gt" :
                return Scene._gt(A, B);
            case "lt" :
                return Scene._lt(A, B);
            case "ne" :
                return Scene._ne(A, B);
            case "eq" :
                return Scene._eq(A, B);
            default:
                return Scene._lt(A, B);
        }
    }

    /**
     * Process a Trigger rule and return true/false state on if it fires.
     * @param {string} Type
     * @param {string} Name
     * @param {number} Value
     * @param {string} Condition
     * @param {string} Opt
     * @returns {boolean}
     * @private
     */
    _ProcessTrigger(Type, Name, Value, Condition, Opt) {
        Scene.Debug("_ProcessTrigger", "Type="+Type+",Name="+Name+",Value="+Value+",Condition="+Condition+",Opt="+Opt);

        switch(Type)
        {
            case "NPC_STAT":
                return Scene._Cmp(this._NPC.GetStat(Name), Value, Condition);
            case "RANDOM-100":
                return Scene._Cmp(Math.ceil((100 * Math.random()) + 1), Value, Condition);
            case "COUNTER":
                if ( this._Player.JobFlags.hasOwnProperty(Name) == false ) this._Player.JobFlags[Name] = 0;
                if ( (typeof Opt !== 'undefined') && (Opt == "RANDOM"))
                    return Scene._Cmp(this._Player.JobFlags[Name], Math.ceil(Value * Math.random()), Condition);
                return Scene._Cmp(this._Player.JobFlags[Name], Value, Condition);
            case "STAT_CORE":
                if ((typeof Opt !== 'undefined') && (Opt == "RANDOM"))
                    return Scene._Cmp(this._Player.GetStatPercent("STAT", Name), Math.ceil((100 * Math.random()) + 1), Condition);
                return Scene._Cmp(this._Player.GetStatPercent("STAT", Name), Value, Condition);
            case "STAT_BODY":
                if ((typeof Opt !== 'undefined') && (Opt == "RANDOM"))
                    return Scene._Cmp(this._Player.GetStatPercent("BODY", Name), Math.ceil((100 * Math.random()) + 1), Condition);
                    return Scene._Cmp(this._Player.GetStatPercent("BODY", Name), Value, Condition);
            case "STAT_SKILL":
                if ((typeof Opt !== 'undefined') && (Opt == "RANDOM"))
                    return Scene._Cmp(this._Player.GetStatPercent("SKILL", Name), Math.ceil((100 * Math.random()) + 1), Condition);
                return Scene._Cmp(this._Player.GetStatPercent("SKILL", Name), Value, Condition);
            case "FLAG":
                if ( (typeof Opt !== 'undefined') && (Opt == "NOT_SET")) {
                    return (this._Player.JobFlags.hasOwnProperty(Name) == false);
                }

                if ( (typeof Opt !== 'undefined') && (Opt == "SET"))
                    return (this._Player.JobFlags.hasOwnProperty(Name) == true);

                return Scene._Cmp(this._Player.JobFlags[Name], Value, Condition);
            case "TAG":
                if (this._Checks.hasOwnProperty(Name) == false) return true;
                var Percent = Math.ceil( (this._Checks[Name]["RESULT"] / this._Checks[Name]["VALUE"]) * 100);
                return Scene._Cmp(Percent, Value, Condition);
            case 'HAS_ITEM':
                // Format like CATEGORY/NAME
                return (typeof this._Player.GetItemById(Name) !== 'undefined');
        }

        return true;
    }

    /**
     * Check the status of each trigger in a group and return true/false on if the scene fires
     * @param {Array.<object>} Triggers
     * @returns {boolean}
     * @private
     */
    _ProcessTriggers(Triggers) {
        for (var i = 0; i < Triggers.length; i++)
            if (this._ProcessTrigger(Triggers[i]["TYPE"], Triggers[i]["NAME"], Triggers[i]["VALUE"], Triggers[i]["CONDITION"], Triggers[i]["OPT"]) == false) return false;

        return true;
    }

    /**
     * Check the status of each trigger in a group and return true/false on if the scene fires
     * @param {Array.<object>} Triggers
     * @returns {boolean}
     * @private
     */
    _ProcessTriggersAny(Triggers) {
        for (var i = 0; i < Triggers.length; i++)
            if (this._ProcessTrigger(Triggers[i]["TYPE"], Triggers[i]["NAME"], Triggers[i]["VALUE"], Triggers[i]["CONDITION"], Triggers[i]["OPT"]) == true) return true;

        return false;
    }

    /**
     * Process a reward rule from a scene.
     * @param {string} Type
     * @param {string} Name
     * @param {number|string} Value
     * @param {string} Opt
     * @private
     */
    _ProcessReward(Type, Name, Value, Opt) {
        if (Opt == 'RANDOM' ) Value = Math.floor((Value * Math.random())+1);

        // Retrieve the result of another check and modify the value of this reward by that scaling percentage.
        if ((typeof Opt === 'string') && (Opt.indexOf( "TAG_" ) > -1) ) {
            Value = Math.ceil( Value * (this._Checks[Opt.slice(Opt.indexOf("_")+1)]["MOD"]));
        }

        Scene.Debug("_ProcessReward", "Type="+Type+",Name="+Name+",Value="+Value+",Opt="+Opt);

        switch(Type)
        {
            case "MONEY":

                this._Pay += Math.floor(Value);
                Scene.Debug("this._Pay=",this._Pay.toString());
                this._Player.AdjustMoney(Math.floor(Value));
                break;
            case "FOOD":
            case "DRUGS":
            case "COSMETICS":
            case "LOOT_BOX":
                this._RewardItems.push( App.PR.pItemDesc(Type, Name, Value, true));
                this._Player.AddItem(Type, Name, Value, Opt);
                break;
            case "QUEST_ITEM":
                this._RewardItems.push( App.PR.pItemDesc("QUEST", Name, Value, true));
                this._Player.AddItem("QUEST", Name, Value, Opt);
                break;
            case "CLOTHES":
                var data = App.Data.Clothes[Name];
                if (this._Player.OwnsWardrobeItem(data) ) {
                    this._Pay += Math.floor( App.Item.CalculateBasePrice("CLOTHES", Name) * 0.3);
                    break;
                } else {
                    this._RewardItems.push( App.PR.pItemDesc(Type, Name, Value, true));
                    this._Player.AddItem(Type, Name, Value, Opt);
                }
                break;
            case "PICK_ITEM":
                var item = App.Item.PickItem( Name, Value);
                if (item != null) {
                    if (item.cat == 'CLOTHES' && this._Player.OwnsWardrobeItem(item.cat, item.tag)) {
                        this._Pay += Math.floor( App.Item.CalculateBasePrice("CLOTHES", item.tag) * 0.3);
                    } else {
                    this._RewardItems.push( App.PR.pItemDesc( item.cat, item.tag, 0, true));
                    this._Player.AddItem(item.cat, item.tag, 0);
                    }
                }
                break;
            case "STAT_XP":
            case "BODY_XP":
            case "SKILL_XP":
                this._Player.AdjustXP(Type.slice(0,-3), Name, Value);
                break;
            case "STAT":
                this._Player.AdjustStat(Name, Value);
                break;
            case "BODY":
                this._Player.AdjustBody(Name, Value);
                break;
            case "SKILL":
                this._Player.AdjustSkill(Name, Value);
                break;
            case "FLAG":
                if (Opt == "DELETE")    delete this._Player.JobFlags[Name];
                if (Opt == "SET" )      this._Player.JobFlags[Name] = Value;
                if (Opt == "ADD" )      this._Player.JobFlags[Name] += Value;
                break;
            case "QUEST_FLAG":
                if (Opt == "DELETE")    delete this._Player.QuestFlags[Name];
                if (Opt == "SET" )      this._Player.QuestFlags[Name] = Value;
                if (Opt == "ADD" )      this._Player.QuestFlags[Name] += Value;
                break;
            case "COUNTER":
                if (typeof this._Player.JobFlags[Name] === 'undefined') this._Player.JobFlags[Name] = 0;
                this._Player.JobFlags[Name] += 1;
                break;
            case "STORE":
                if (this._Player.StoreInventory[Name]["INVENTORY"].length < 1) {
                    App.StoreEngine.OpenStore(this._Player, this._NPC);
                }

                if (Opt == "LOCK") App.StoreEngine.ToggleStoreItem(this._Player, Name, Value, 1);
                if (Opt == "UNLOCK") App.StoreEngine.ToggleStoreItem(this._Player, Name, Value, 0);
                break;
            case "NPC_STAT":
                this._NPC.AdjustStat(Name, Value);
                break;
            case "PIRATE_STATS":
                this._Player.GetNPC("Crew").AdjustStat(Name, Value);
                this._Player.GetNPC("Cook").AdjustStat(Name, Value);
                this._Player.GetNPC("Quartermaster").AdjustStat(Name, Value);
                this._Player.GetNPC("FirstMate").AdjustStat(Name, Value);
                this._Player.GetNPC("Captain").AdjustStat(Name, Value);
                break;
            case "SAIL_DAYS":
                this._Player.AdvanceSailDays(Value);
                break;
        }
    }

    /**
     * Process a check rule on a a scene, store results in this._Checks[Tag]
     * @param {object} Check
     * @private
     */
    _ProcessCheck(Check)
    {
        var Scaling     = (Check.OPT != "NO_SCALING");
        var Value       = Check.VALUE || 100;
        var Result      = 0;

        switch(Check.TYPE)
        {
            case "STAT":
            case "BODY":
                Result = this._Player.StatRoll(Check.TYPE, Check.NAME, Check.DIFFICULTY, Value, Scaling);
                break;
            case "SKILL":
                Result = this._Player.SkillRoll(Check.NAME, Check.DIFFICULTY, Value, Scaling);
                break;
            case "META":
                switch(Check.NAME) {
                    case "BEAUTY":
                        Result = this._Player.GenericRoll( this._Player.Beauty(), Check.DIFFICULTY, Value, Scaling);
                        break;
                    case "DANCE_STYLE":
                        var defaultStyleResult = this._Player.GenericRoll(
                            this._Player.GetStyleSpecRating("Sexy Dancer"), Check.DIFFICULTY, Value, Scaling);
                        var specStyleResult = this._Player.GenericRoll(
                            this._Player.GetStyleSpecRating(App.JobEngine.GetDance()), Check.DIFFICULTY, Value, Scaling);
                        Result = (defaultStyleResult + specStyleResult) / 2;
                        break;
                }
                break;
            case "FUNC":
                Result = Check.NAME(this._Player, this);
                break;
        }

        this._Checks[Check.TAG] = {
            "RESULT" : Result,
            "VALUE" : Value,
            "MOD" : Result / Value
        };
        console.log(this._Checks);
        this._ProcessReward(Check.REWARD, Check.R_NAME, Result, Check.OPT);
    }

    /**
     * Process all the checks in a scene.
     * @param {Array.<object>} Checks
     * @private
     */
    _ProcessChecks(Checks) {
        for (var i = 0; i < Checks.length; i++)
            this._ProcessCheck( Checks[i] );
    };

    /**
     * Process all the "POST" flags in a scene. Generally they give rewards/set status flags.
     * @param Posts
     * @private
     */
    _ProcessPost(Posts) {
        Scene.Debug("_ProcessPost", JSON.stringify(this._Checks));

        for (var i = 0; i < Posts.length; i++)
            this._ProcessReward(Posts[i]["TYPE"], Posts[i]["NAME"], Posts[i]["VALUE"], Posts[i]["OPT"]);
    }

    /**
     * Pass a result value from a Check and find the appropriate flavor text and colorize it.
     * @param {string} Tag
     * @param {number} Result
     * @param {string} Value
     * @returns {string}
     * @private
     */
    _MatchResult(Tag, Result, Value) {
        var Output = "";
        var Percent = Math.floor(((Result / Value) * 100));
        /**
         * @param {string} a
         * @returns {string}
         */
        var Colorize = function(a) { return  (typeof a !== 'undefined') ? App.PR.ColorizeString(Percent, a.slice(2,-2), 100) : ""; };

        for ( var i = 0; i < this._SceneData["RESULTS"].length; i++)
            if ( Percent <= this._SceneData["RESULTS"][i][Tag] ) {
                console.log("Percent "+Percent+ "<="+ this._SceneData["RESULTS"][i][Tag] );
                return this._SceneData["RESULTS"][i]["TEXT"].replace(/(@@.*@@)/g, Colorize );
            }

        return Output;
    }

    /**
     * Iterate through all of the Check results for a scene and then find their appropriate flavor text.
     * @returns {string}
     * @private
     */
    _SceneResults() {
        var cKeys = Object.keys(this._Checks);
        var Results = [ ];

        for ( var i = 0; i < cKeys.length; i++)
            Results.push( this._Tokenize(this._MatchResult(cKeys[i], this._Checks[cKeys[i]]["RESULT"], this._Checks[cKeys[i]]["VALUE"])));

        Results = Results.filter( function(r) { return r != ""; });
        return Results.length > 0 ? " " + Results.join(" ") : "";
    }

    /**
     * Tokenize a string
     * @param String
     * @returns {string}
     * @private
     */
    _Tokenize(String) {
        String = String.replace(/JOB_PAY/g, this.Pay());
        String = App.PR.TokenizeString(this._Player, this._NPC, String);
        return String;
    }

    /**
     * Process all the rules in a scene and store the results in the object.
     * @private
     */
    _CalculateScene() {
        Scene.Debug(this.Id() + ":_CalculateScene", "Started");

        if ((this._SceneData["TRIGGERS"].length > 0) && (this._ProcessTriggers(this._SceneData["TRIGGERS"]) == false)) return;
        if ((this._SceneData["TRIGGERS_ANY"].length > 0) && (this._ProcessTriggersAny(this._SceneData["TRIGGERS_ANY"]) == false)) return;

        this._Triggered = true;

        if (this._SceneData["CHECKS"].length > 0) this._ProcessChecks(this._SceneData["CHECKS"]);

        if (this._SceneData["POST"].length > 0) this._ProcessPost(this._SceneData["POST"]);

        this._StrBuffer =   this._SceneData["START"] != "" ? this._Tokenize(this._SceneData["START"]) : "";
        this._StrBuffer +=  this._SceneResults();
        this._StrBuffer +=  this._SceneData["END"] != "" ? " " + this._Tokenize(this._SceneData["END"]) : "";

        Scene.Debug(this.Id() + ":_CalculateScene", "Ended");
    }

    static get _Debug() {
        return Scene._debug;
    }

    /**
     * @param {boolean} v
     */
    static set _Debug(v) {
        Scene._debug = v;
    }

    /**
     * @param {string} Fun
     * @param {string} String
     */
    static Debug(Fun,String) {
        if (Scene._Debug == true)
            console.log(Fun +":"+String+"\n");
    }
}

/** @type {boolean}
 *  @private */
App.Scene._debug = false;
