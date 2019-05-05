// Class for handling player notifications. Currently only affects the overnight sleeping, but could naturally
// be extended to handle messages EOF messages of jobs (scenes)


App.Notifications.Engine = class NotificationEngine {
    constructor() {
        /**
         * @type {Array.<App.Notifications.Message>} Array of message objects.
         */
        this._Messages = [ ];
        
        // how the fuck do you jsdoc this?
        this._Messages.__proto__.getMessages = function(Category, Day) {
            return this.filter( o => o.Category == Category && o.Day == Day);
        };
        
        this._Messages.__proto__.addMessage = function(Category, Day, Message)
        {
            if (Category == 'STAT_CHANGE') {
                this.push( new App.Notifications.StatMessage(Category, Day, Message));
            } else {
                this.push( new App.Notifications.Message(Category, Day, Message));
            }

            return this;
        };

    }

    /**
     * @returns {Array.<App.Notifications.Message} Array of messages
     */
    get Messages() { 
        return this._Messages;
    }

    /**
     * 
     * @param {string} Category Type of message. DREAMS | STAT_CHANGE | STATUS_CHANGE | KNOWLEDGE 
     * @param {number} Day Typically you want the player.Day + 1 to display on the sleep screen.
     * @param {string} Message Message to display. Can have tokens added to it.
     */
    AddMessage(Category, Day, Message)
    {
        this.Messages.addMessage(Category, Day, Message);
    }
    /**
     * Print a plain string list of messages seperated by optional character.
     * @param {string} Category Print
     * @param {number} Day 
     */
    StrPrint(Category, Day, Header, Color, BgColor, Character='<br>')
    {
        if(setup.player.debugMode) console.log("Notification:StrPrint("+Category+","+Day+","+Character);
        var output =  this.Messages.getMessages(Category, Day).map(o => o.Print).join(Character);
        if (output != "") {
            output = this.Header(Header, Color, BgColor) + output;
        }

        return output;
    }

    /**
     * Format a header for a message group
     * @param {string} Header Text to display
     * @param {string} Color Text color
     * @param {string} BgColor Background color
     */
    Header(Header, Color, BgColor)
    {
        var str = "<div style='width:100%;margin-bottom:10px;padding-left:20px;font-weight:bold;color:"+Color+";background-color:"+BgColor+"'>"+Header+"</div>";

        return str;
    }
}


App.Notifications.Message = class NotificationMessage {
    /**
     * 
     * @param {string} Category Category or Section head of message. 
     * @param {number} Day Day message shall render on.
     * @param {string} Message The text of the message.
     */
    constructor(Category, Day, Message)
    {
        this._Category = Category;
        this._Day = Day;
        this._Message = Message;
    };

    get Category() { return this._Category; }
    get Day() { return this._Day; }
    get Message() { return this._Message; }

    get Print() {
        return App.PR.TokenizeString(setup.player, undefined, this._Message);
    }

};

/**
 * Reserved for future use.
 */
App.Notifications.StatMessage = class StatMessage extends App.Notifications.Message {
    constructor(...args){
        super(...args);
    }

    get Print()
    {
        return super.Print;
    }

}