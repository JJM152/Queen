# Queen
Queen of the Seas Game

IGDB Entry: https://tfgames.site/index.php?module=viewgame&id=1680

Discussion Forum: https://tfgames.site/phpbb3/viewtopic.php?f=6&t=11112

This game uses the Twine engine with the Sugarcube 2.x format. 

HOW TO BUILD THE GAME:

1 - Download latest release from the release page.

2 - Download and install Tweego and the associated story formats from https://www.motoslave.net/tweego/

3 - Set your TWEEGO_PATH to include the directory where you installed your story formats. 

4 - Run the build.bat or build.sh file from your downloaded copy of the repository. (Make sure tweego executable is in your path)

HOW TO MODIFY THE GAME

Even if you are not a javascript programmer, so long as you can understand the JSON data format and open a text editor you should be able to modify this game. All data related files are stored in the '001-SCRIPT_DATA' directory.

https://github.com/JJM152/Queen/tree/master/src/001-SCRIPT_DATA

Adding rooms and such follows the normal twine paradigm. There are a few useful widgets that I have created in the https://github.com/JJM152/Queen/tree/master/src/200-WIDGETS directory that will help.

ADDING NPCS AND STORES

This is slightly more tricky. Once you have edited the data files to add an NPC and store there are a couple of things you need to do.

1 - Go to the room you want the npc to appear in and use the widget <<NPC "SomeNpcName">> replacing the "SomeNpcName" part with the name you assigned your NPC in the data file as their key.

2 - Edit player.js and add the NPC to the NPC structure (look for this.NPCS). There are plenty of examples there on how to do it.

3 - Adding a store: You simplyl need to add another line to the this.StoreInventory data structure. Also this is fairly self explanatory if you look at it.

Edit these files, build the game and then launch it in your browser. 

Happy Pillaging!
