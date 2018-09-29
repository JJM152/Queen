
App.EventHandlers = new function() {

    this.Init = function() {

      console.log("Initializing Event Handlers...");

      // Add a hyperlink to run back to your Cabin when it's very, very late.
          $(document).on(':passagerender', function (ev) {
              if (App.EventHandlers.HasPlayerState() == true) {
                  if (SugarCube.setup.player.Phase >= 4) {
                      $(ev.content).wiki("<<lateNightTeleport>>");
                  }
              }
          });

      // Do something on passage start
      //      $(document).on(':passagestart', function (ev) {
      //          if (ev.passage['tags'].includes("event")) {
      //              console.log("event tag detected");
      //          }
      //
      //      });
    };

    /**
     * Do we have a player state and a player object?
     * @returns {boolean}
     */
    this.HasPlayerState = function() {
        return (this.exists("Sugarcube.setup.player") == true && this.exists("Sugarcube.State.variables.PlayerState") == true);
    };

    this.exists = function(namespace)
    {
        var tokens = namespace.split('.');
        return tokens.reduce(function(prev, curr) {
            return (typeof prev == "undefined") ? prev : prev[curr];
        }, window);
    };
};
