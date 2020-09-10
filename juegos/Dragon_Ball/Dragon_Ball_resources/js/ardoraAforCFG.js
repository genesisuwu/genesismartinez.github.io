//Creado con Ardora - www.webardora.net
//bajo licencia Attribution-NonCommercial-NoDerivatives 4.0 International (CC BY-NC-ND 4.0)
//para otros usos contacte con el autor
var timeAct=360; timeIni=360; timeBon=0;
var successes=0; successesMax=10; attempts=0; attemptsMax=4;
var score=0; scoreMax=20; scoreInc=2; scoreDec=0
var typeGame=0;
var tiTime=true;
var tiTimeType=1;
var tiButtonTime=true;
var textButtonTime="Comenzar";
var tiSuccesses=true;
var tiAttempts=true;
var tiScore=true;
var startTime;
var colorBack="#FFFFFF"; colorButton="#000000"; colorText="#000000"; colorSele="#FF0000";
var goURLNext=false; goURLRepeat=false;tiAval=false;
var scoOk=0; scoWrong=0; scoOkDo=0; scoWrongDo=0; scoMessage=""; scoPtos=10;
var fMenssage="Verdana, Geneva, sans-serif";
var fActi="Verdana, Geneva, sans-serif";
var fEnun="Verdana, Geneva, sans-serif";
var timeOnMessage=5; messageOk="FELICIDADES, HAS ACERTADO!"; messageTime="SE HA AGOTADO EL TIEMPO, INTENTALO DE NUEVO"; messageError=""; messageErrorG=""; messageAttempts="SE HAN ACABADO LOS INTENTOS"; isShowMessage=false;
var urlOk=""; urlTime=""; urlError=""; urlAttempts="";
var goURLOk="_blank"; goURLTime="_blank"; goURLAttempts="_blank"; goURLError="_blank"; 
borderOk="#FFFFFF"; borderTime="#FFFFFF";borderError="#FFFFFF"; borderAttempts="#FFFFFF";
var wordsGame="RHJhZ29uX0JhbGw"; wordsStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
function giveZindex(typeElement){var valueZindex=0; capas=document.getElementsByTagName(typeElement);
for (i=0;i<capas.length;i++){if (parseInt($(capas[i]).css("z-index"),10)>valueZindex){valueZindex=parseInt($(capas[i]).css("z-index"),10);}}return valueZindex;}
var words=["R09LVQ","R09IQU4","REVOREU","S1JJTElO","VklERUw","TVIgU0FUQU4","R09URU4","TUFKSU5CVVU","VkVHRVRB","VFJVTktT"];imaW=["0_Goku.png","0_Gohan.jpg","0_Dende.jpg","0_Krilin.jpg","0_Videl.png","0_Mr_Satan.jpg","0_Goten.jpg","0_Majin_Buu.jpg","0_Vegeta.jpg","0_Trunks.jpg"];queW=["G","G","D","K","V","M","G","M","V","T"];
var auW=["","","","","","","","","",""];
var fillLetter="ABCDEFGHIJKLMNÑOPQRSTUVWXYZÁÉÍÓÚÜ "; wordsG=[]; indexG=0; actMaxWidth=530; indexWord=0; totalWord=0;
var imageW=[];questionW=[];audioW=[];profG=0; dirMedia="Dragon_Ball_resources/media/"; textBNext="Siguiente";
