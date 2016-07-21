javascript: 

/*
*
* Script by gusg21. Copy and paste ALL contents of this file into a bookmark, and run while on BrowserQuest
*
*/

var L='http://browserquest.mozilla.org/'; //If we aren't at the page
if(location!=L) {
        location=L; // Take us there
}
else //Otherwise
{

var playername, weapontype, armortype; //Run Phantom
        playername = prompt("Enter a name for your player.","Phantom");
        weapontype = prompt("Enter a weapon id.","boss");
        armortype = prompt("Enter a armor id.","boss");

localStorage.data =
'
{"hasAlreadyPlayed":true,
"player":{"name":"' + playername + '","weapon":"' + weapontype + '","armor":"' + armortype + '"},
"achievements":{"unlocked":[]}}';
location.reload();
 }
