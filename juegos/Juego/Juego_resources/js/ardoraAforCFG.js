//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=150; timeIni=150; timeBon=3;
var successes=0; successesMax=10; attempts=0; attemptsMax=5;
var score=0; scoreMax=10; scoreInc=1; scoreDec=0
var typeGame=0;
var tiTime=true;
var tiTimeType=2;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#000000"; colorButton="#C60000"; colorText="#FFFFFF"; colorSele="#FF8000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=1; scoOkDo=1; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="FELICIDADES, HAS ACERTADO!"; messageTime="EL TIEMPO SE HA ACABADO, INTENTALO DE NUEVO:)"; messageError=""; messageErrorG=""; messageAttempts="HAS ALCANZADO EL NÚMERO DE INTENTOS :("; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#008000"; borderTime="#FF0000";borderError="#FF0000"; borderAttempts="#FF0000";
var wordsGame="SnVlZ28"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["U0FTVUtF","SElOQVRB","S0FLQVNISQ","T0JJVE8","U0FLVVJB","R0FBUkE","SkFSQUlZQQ","SVRBQ0hJ","TkFSVVRP","Uk9DS0xFRQ"];imaW=["0_Sasuke.jpg","0_Hinata.jpg","0_Kakashi.jpg","0_Obito.jpg","0_Sakura.jpg","0_Gaara.jpg","0_Jiraiya.jpg","0_Itachi.jpg","0_Naruto.jpg","0_Rock_Lee.jpg"];queW=["S","H","K","O","S","G","J","I","N","R"];
var auW=["","","","","","","","","",""];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ "; wordsG=[]; indexG=0; actMaxWidth=540; indexWord=0; totalWord=0;
var imageW=[];questionW=[];audioW=[];profG=0; dirMedia="Juego_resources/media/"; textBNext="Siguiente";
