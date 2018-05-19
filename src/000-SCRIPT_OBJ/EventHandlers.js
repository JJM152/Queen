/**
 * Load some simple event handlers.
 * @type {{Init: App.EventHandlers.Init}}
 * */
App.EventHandlers = {
  Init: function() {
      console.log("Initializing Event Handlers...");
      // Add a hyperlink to run back to your Cabin when it's very, very late.
      $(document).on(':passagerender', function (ev) {
          if (typeof SugarCube.State !== 'undefined') {
              if (SugarCube.State.variables.Player.Phase >= 4) {
                  $(ev.content).wiki("<<lateNightTeleport>>");
              }
          }
      });
  }
};