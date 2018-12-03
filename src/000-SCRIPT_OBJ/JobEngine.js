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
     * The Job engine singleton
     * @returns {App.JobEngine}
     */
    static get instance() {
        return setup.jobEngine;
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
};
