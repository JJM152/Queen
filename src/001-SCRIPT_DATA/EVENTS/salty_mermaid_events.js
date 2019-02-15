App = App || { Data: { }, Entity: { } };
App.Data.Events = App.Data.Events || { };

//Template for making events - the key is the destination passage you are traveling to.
App.Data.Events["Cabin"] = [
    { 
        ID: 'CrewRape', // A unique ID for the event.
        FROM: 'Sleep', // The passage you are traversing from
        MAX_REPEAT: 0, // Number of times the event can repeat, 0 means forever.
        MIN_DAY: 1, // Minimum day the event shows up on
        MAX_DAY: 0, // Maximum day the event shows up on, 0 means forever
        COOL: 3, // Interval between repeats on this event.
        PHASE: [ 0 ], // Time phases the event is valid for
        PASSAGE: 'CrewRapeEvent', // Override passage that the player is routed to. 
        CHECK: function(p) { // Condition function that is called to check if the event fires.
            return ((p.GetNPC("Crew").Mood() < 40) && (Math.floor(Math.random() * 4) == 0));
        }
    }
];
