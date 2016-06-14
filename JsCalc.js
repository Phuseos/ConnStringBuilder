//$DoFunction -> Create string and output it in text / copy to clipboard for immediate usage
function createString() {
var OutputString = document.getElementById("txtString");

var Server = document.getElementById("txtServer").value;
var Database = document.getElementById("txtDatabase").value;
var UID = document.getElementById("txtUID").value;
var Password = document.getElementById("txtPwd").value;

//Add diffrent items based on if they're filled or not
myText = Server+';';

//Needs a better check
if (Database) { myText = Server+';'+Database+';'; }
if (UID) { myText = Server+';'+Database+';'+UID+';'; }
if (Password) { myText = Server+';'+Database+';'+UID+';'+Password+';'; }

//myText = Server+';'+Database+';';

OutputString.value = myText;
}

