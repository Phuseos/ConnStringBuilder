//$DoFunction -> Create string and output it in text / copy to clipboard for immediate usage
function createString() {
var OutputString = document.getElementById("txtString");

var Server = document.getElementById("txtServer").value;
var Database = document.getElementById("txtDatabase").value;
var UID = document.getElementById("txtUID").value;
var Password = document.getElementById("txtPwd").value;

var StringType = document.getElementById("cboType");
var StringChosen = StringType.options[StringType.selectedIndex].value;  //Returns chosen item text as string

var SSLType = document.getElementById("cboSSL");
var SSLChosen = SSLType.options[SSLType.selectedIndex].value;

//Add diffrent items based on if they're filled or not
myText = 'server=' + Server+';';

//Needs a better check
if (!Server) { alert('Please enter at least a server adress'); return; }

if (Database) { myText = myText + 'database=' +  Database + ';'; }
if (UID) { myText = myText + 'userid=' + UID + ';'; }
if (Password) { myText = myText + 'password=' + Password + ';'; }

//if (SSLChosen = 'Required') { alert(SSLChosen); }

if (StringChosen = "MySQL (web.config)") { 
myText = 'connectionString="' + myText + '" providerName="MySql.Data.MySqlClient"'; }

OutputString.value = myText;
}
