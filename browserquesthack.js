javascript: 

var playername, weapontype, armortype;
        playername = prompt("Enter a name for your player.","Phantom");
        weapontype = prompt("Enter a weapon id.","boss");
        armortype = prompt("Enter a armor id.","boss");

localStorage.data =
'
{"hasAlreadyPlayed":true,
"player":{"name":"' + playername + '","weapon":"' + weapontype + '","armor":"' + armortype + '"},
"achievements":{"unlocked":[]}}';
location.reload();