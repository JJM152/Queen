/**
 * Simple class for managing the playing of music files and other sound effects in the game.
 * @class AudioEngine
 */
App.Audio = class AudioEngine {
    constructor()
    {
        this._lastPlayed = null;
        this._bgmTrackIds = null;
        this._bgmTracks = null;
        this._init = false;
        this._bgmPlaying = false;
    }

    Init() {
        if (this._init == true) return;

        try {
            for (var p in this.BGMTracks) {
                console.log("AudioEngine: setting callback on "+p);
                this.BGMTracks[p].audio.onended = this._TrackEnded.bind(this);
                this._init = true;
            }
        } catch(ex) {
            console.log("AudioEngine: Not ready yet.");
            setTimeout(this.Init.bind(this), 50);
        }

        if (this._init == true) {
           // $(document).one(":passageend", this.StartBGM.bind(this));
        }

    }

    get LastPlayed() { 
        if (this._lastPlayed == null) this._lastPlayed = 0; // start from the first track
        return this._lastPlayed;
    }

    get NextToPlay() {
        var i = this.LastPlayed + 1 >= this.BGMTrackIds.length ? 0 : this.LastPlayed + 1;
        return i;
    }

    get BGMTrackIds() { 
        if (this._bgmTrackIds == null) {
            this._bgmTrackIds = this.GetTrackIds(":bgm");
        } 
        return this._bgmTrackIds; 
    }

    get BGMTracks() {
        if (this._bgmTracks == null || this._bgmTrackIds == null || this._bgmTrackIds.length < 0) {
            this._bgmTracks = { };
            for(var i = 0; i < this.BGMTrackIds.length; i++) {
                console.log("AudioEngine: Caching track id "+ this.BGMTrackIds[i]);
                this._bgmTracks[this.BGMTrackIds[i]] = SimpleAudio.tracks.get(this.BGMTrackIds[i]);
            }
        }
        return this._bgmTracks;
    }

    get BGMOn() { return this._bgmPlaying; }
    get BGMOff() { return this._bgmPlaying != true; }

    /**
     * Get an array of all of the track ids in the target audiogroup
     * @param {string} Group audio group from widget 
     */
    GetTrackIds(Group)
    {
        var ids = [ ]
        SimpleAudio.select(Group).trackIds.forEach(o => {
            if (o !== 'undefined') ids.push(o);
        });
        return ids;
    }

    PlayNextBGMTrack()
    {
            this._StopAllBGM();
            var key = this.BGMTrackIds[this.NextToPlay];
            console.log("AudioEngine: playing next track "+key);
            this.BGMTracks[key].play();
            this._lastPlayed = this.NextToPlay;
    }

    PlayCurrentTrack() {
            if (this.isPlaying() != true) {
                var key = this.BGMTrackIds[this.LastPlayed];
                console.log("AudioEngine: resuming track " + key);
                this.BGMTracks[key].play();
            }
    }

    /**
     * Stop or pause the current playing bgm (also any other ones)
     * @param {boolean} pauseBGM 
     */
    _StopAllBGM(pauseBGM)
    {
        for (var p in this.BGMTracks) {
            if (this.BGMTracks[p].isPlaying()) {
                if (pauseBGM) {
                    console.log("AudioEngine: pausing track " + p);
                    this.BGMTracks[p].pause();
                } else {
                    console.log("AudioEngine: stopping track " + p);
                    this.BGMTracks[p].stop();
                }
            }
        }
    }

    isPlaying()
    {
        for (var p in this.BGMTracks){
            if (this.BGMTracks[p].isPlaying()) return true;
        }

        return false;
    }

    /**
     * Turn the BGM system on.
     * @param {boolean} resumeBGM
     */
    StartBGM(resumeBGM)
    {

        if (this.isPlaying() == false && this._init == true) {
            console.log("AudioEngine: BGM turned on.");
            this._bgmPlaying = true;
            if (resumeBGM) {
                    this.PlayCurrentTrack();
            } else {
                    this.PlayNextBGMTrack();
            }
        }
    }

    /**
     * Turn the BGM system off.
     * @param {boolean} pauseBGM
     */
    StopBGM(pauseBGM)
    {
        console.log("AudioEnigne: BGM turned off.");
        this._bgmPlaying = false;
        this._StopAllBGM(pauseBGM);

    }

    /**
     * Called from Settings when game loads.
     */
    VolumeInit()
    {
        try {
            this.VolumeAdjust();

        } catch(ex) {
            console.log("Waiting for audio system to be initialized...");
            setTimeout(this.VolumeInit.bind(this), 1000);
        }
    }

    /**
     * Called from Settings when the user changes the volume slider
     */
    VolumeAdjust()
    {
        var vol = settings.bgmVolume / 10; // turn into range between 0 and 1
        if (vol == 0 && this.BGMOn) {
            this.StopBGM(true);
        } else if (vol != 0 && this.BGMOff) {
            this.StartBGM(true);
        }

        SimpleAudio.select(":bgm").volume(vol);
    }

    Transition(Passage)
    {
        if( settings.bgmVolume/10 != 0 && this.BGMOff) {
            this.StartBGM(true); // resume playing any bgm files on transition.
        }
    }

    /**
     * Called from the BGM track's audio.onended event.
     * @param {object} e event object
     */
    _TrackEnded(e)
    {
        if (this.BGMOn) this.PlayNextBGMTrack();
    }
}