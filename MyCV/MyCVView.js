var contactDetails = "Name : Suyash Gupta \n, Phone:8290828725, Mail Id: suguptayash@gmail.com";
var copyContactDetails = "left click to copy contact details";

var firstDivWithHeading = {"Profile Summary:": "Software development professional with key projects and exposure to good number of ProgrammingLanguages-Java, Shell Scripting , JavaScript, PHP, Python, C, MySQL , API withh proficiency inn Java and C.",
"boldSection": "( 3 year off Professional Experience withh Wipro, working since January 2016 )"};

var secondDivWithHeading = {"Objective:" : "To work consistently in a challenging environment using latest technologies and optimized approach to deliver the best"};

var thirdDivWithHeading = {"Projects": "key projects worked in"};


var firstTableData = {
"Project - NHM Developer Ericsson (Duration-1 year)": "", 
"Team Size":1,
"Project Description -": "Network Health Monitor Developer- Triggering Events forr breached nodes inr backend to display Alarms(Fault Management Alarm) inr GUI",
"Responsibilities and Contribution ": `1) Full stack Development including UI and backend
2) Rest Interface-RestEasy - Java 7, Java Enterprise Beans.`+'\n'+` 
3) Objectt Mapper forr converting POJO to JSON object. \n
4) Esper Event System \n
5) UI Java Script \n
6) Data Base-postgresssql \n
7) Building Tool Maven \n
8) Design Analysis and Estimations.`,
};

var thirdTableData = {
    "Project- NHA Developer Ericsson (Duration- 8 months) ":"",
    "Role ":"Software Engineer",
    "Team Size ":"2",
    "Project Description - ": "Network Health Analysis Developer-Dynamically Populating Alarms Data via WebSocket on the Front End.",
    "Responsibilities and Contribution ":`1) Auto subscribing Events via  JMS for reduced databse query  2) Customized WebPush API’s 3) Rest Interface-RestEasy 4)     Esper Event System 5) Java Enterprise Beans, Remote Injection. 6) UI Java Script 7) Data Base-postgresssql 8) Building Tool Maven 9) Design Analysis and Estimations`
};

var secondTableData = {
    "Project- NHA Developer Ericsson (Duration- 8 months) ":"",
    "Role ":"Software Engineer",
    "Team Size ":"2",
    "Project Description - ": "Network Health Analysis Developer-Dynamically Populating Alarms Data via WebSocket on the Front End.",
    "Responsibilities and Contribution ":`- Auto subscribing Events via  JMS for reduced databse query  - Customized WebPush API’s - Rest Interface-RestEasy - ssEsper      Event System - Java Enterprise Beans, Remote Injection. - UI Java Script - Data Base-postgresssql - Building Tool Maven - Design Analysis and Estimations`
};

var firstTableData = { 
    "Project-NHM Real time kpi Developer(Duration 8 months at onsite location) ": "",
    "Team-Size":2,
    "Project-Description": "Introducing Real Time Key Performance Indicator Calculation should happen from Real Node data with in one minute.",
    "Responsibilities and Contribution-":`1)  Two New Infinispan replicated Cache was introduced 2) User Cache will create subscription id for user and maintain 13     independent user for one hour session. 3) KPI cache to store KPI and avoid DBS query. 4) Introducing New JMS Queue to send data to next service i.e. mediation     layer where single instance of counter is maintained 5) Timer Service to query data every minute to MOCI via camel flow. 6)Auto subscribing Events via  JMS for reduced databse 7)Creating Genric KPI Calculation Handler 8) Dynamically Populating Alarms Data via WebSocket on the Front End.`,
};

var fourthTableData = {
     "Personal Details":"",
     "Name":"Suyash Gupta",
     "Email":"suguptayash@gmail.com",
      "phone":"8290828725",
    "Location": "Wipro Bangalore, (client-Ericsson)",
    "Role": "Software Engineer"
};



var firstBulletSection = {"Other projects and work Experience": ["4 Months of Network administrator (Routing ) Experience at E&Y Financials, Gurugram.",
" month experience in Java and Linux at Alchemy Solutions, Bangalore for Dell incorporation.",
"month freelancing projects and Hobby project on java,html,linux and wordpress in my college days, build automated Student Exam", "result and Notifications Email WorkFlow using Google Script API"]};

var secondBulletSection = {"Technical Exposure": ["Programming Languages: Java,Java Script,C,DSA,Python,SQL,HTML,CSS.","Operating System: Linux(Ubuntu and Debian Flavors)", "Successfully completed Training on Routing,Switching,Android, Android Studio with API of Parse.com",
"JavaScript Training and Project on Google Apps Scripts"]};


var thirdBulletSection = {"Self Disciplined Online Trainings":["Intro to computer science course (python) from udacity.com website and learned basic search engine coding.", "Completed Linux Foundation course from edx.org website (Scored 100%)", "Completed Android development on teamtreehouse.com .(Scored 2340 points)", "Completed WordPress theme development on teamtreehouse.com(Scored 1128 points )"]};

var fourthBulletSection = {"Educational Background":["B.Tech in Electronics and Communication from RTU in 2015", "Completed senior secondary from CBSE in PCM."]};


var fifthBulletSection = {"Strengths & Activities":["Like research work and reading technologies, runs own youtube channel and facebook page for teaching.", "Good command over Mathematics, Physics and debugging skills.","Play cricket, chess and do Meditation."]};


var elmt = buildElement("div", "topImage");
addClassToElement(elmt, "topImageClass");
attachElement(elmt, "mainBody");
buildImage("myDP","myImageClass", "./Suyash2.jpg", "topImage");
buildImage("copyTag","copyTagClass", "./CopyButton.jpg", "topImage");

 

buildSections("div", "hiddenContact", "mainBody", "hiddenClass",  contactDetails );
buildSections("div", "copyContact", "mainBody", "hiddenClass",  copyContactDetails );
breakLineDiv("firstBreak", "hr");


buildSectionWithHeading(firstDivWithHeading, "firstDiv", "mainBody", "divClass");
breakLineDiv("secondBreak","br");

buildSectionWithHeading(secondDivWithHeading, "secondDiv", "mainBody", "divClass");
breakLineDiv("thirdBreak","hr");

buildSectionWithHeading(thirdDivWithHeading, "thirdDiv", "mainBody", "divClass");

buildTable(firstTableData,  "firstTable");
breakLineDiv("fourthBreak","hr");
buildTable(secondTableData, "secondTable");
breakLineDiv("fifthhBreak","hr");

buildTable(thirdTableData, "thirdTable");
breakLineDiv("sixthBreak","hr");

buildBulletSection(fifthBulletSection,"firstBulletSection", "bulletSection", "mainBody");
buildBulletSection(fourthBulletSection,"secondBulletSection", "bulletSection", "mainBody");
buildBulletSection(thirdBulletSection,"thirdBulletSection", "bulletSection", "mainBody");
buildBulletSection(secondBulletSection,"fourthBulletSection", "bulletSection", "mainBody");
buildBulletSection(firstBulletSection,"fifthBulletSection", "bulletSection", "mainBody");

breakLineDiv("eightBreak","hr");
buildTable(fourthTableData, "fourthTable");

function buildImage(id,className, path, parentBody){
    var imageElemnt = buildElement('img', id);
	addClassToElement(imageElemnt, className);
    addImage(imageElemnt, path);
	attachElement(imageElemnt, parentBody);
}

function buildTable(tableData, id){
  var tableElement = buildElement("table",id);
  attachElement(tableElement, "mainBody");
  addClassToElement(tableElement, "myTable");
  buildTableData(tableData, id);
}


function buildBulletSection(bulletSection, id, className, parrentID){
    var elmt = buildElement('ul', id);
    addClassToElement(elmt, className);
    attachElement(elmt, parrentID);
    buildBullets(bulletSection, id, className);
}

function buildBullets(bulletSection, id, className){
    Object.keys(bulletSection).forEach(function(key) {
    addContentToElemnt(key, id);
     	 bulletSection[key].forEach(function(entry) {
		    var childId = "child" + id;
			  var childClassName = "child"+className;			
		    buildSections("li", childId, id, childClassName, entry);
        });
    });
}

function buildSections(type, idToBeCreated, parentElementId, className,  content){
    var elementBuilt = document.createElement(type);
	elementBuilt.classList.add(className);
    elementBuilt.id = idToBeCreated;
	if(content !== '' || content !== undefined){
		elementBuilt.innerHTML = content;
	}
    document.getElementById(parentElementId).appendChild(elementBuilt);
}




//addClassName("thirdBulletSection", "list-unstyled");
function addClassName(id, className){
	    document.getElementById(id).classList.add(className);
}

function addImage(element, imagePath){
	element.src= imagePath;
}

function breakLineDiv(id, type){
  
  var elmt = buildElement("div", id);
  addClassToElement(elmt, "breakDivsion");
  attachElement(elmt, "mainBody");
  
	var childId = "child"+id;
	
	var childElmt = buildElement(type, childId);
  addClassToElement(elmt, "newLine");
  attachElement(childElmt, "mainBody");
	
}

function buildSectionWithHeading(divSection, id, parrentID, className){
	Object.keys(divSection).forEach(function(key) {
		entry = divSection[key];
		var childId = "child" + id;
		if(key == "boldSection"){    
			var childClassName = "bold"+className;			
		    buildSections("div", childId, id, childClassName, entry);
        }else{
			buildSections("div", id, parrentID, className, key);
			var childClassName = "child"+className;
			buildSections("div", childId, id, childClassName, entry);
		}	
	});
}



function buildTableData(tableData, id){
	Object.keys(tableData).forEach(function(key) {
		ceateRowforTable(id, key, tableData[key])
	});
}

function ceateRowforTable(id,  cellOne, cellSecond){

	var table = document.getElementById(id);
	if(cellOne !== "" && cellSecond !== ""){
		var row = table.insertRow(-1);
		var firstCell = row.insertCell(0);
		var secondCell = row.insertCell(1);
		
		addClassToElement(row, "twoCellRow");
	  addClassToElement(firstCell,"tableCell");
	  addClassToElement(secondCell,"tableCell");
		
		firstCell.innerHTML = cellOne;
		secondCell.innerHTML = cellSecond;
	} else if(cellOne !== "" && cellSecond === ""){
		var row = table.insertRow(-1);
		var firstCell = row.insertCell(0);
		
		addClassToElement(row, "oneCellRow");
	  addClassToElement(firstCell,"singleCell");
		firstCell.innerHTML = cellOne;
		
	}
}

function buildElement(type, idToBeCreated){
    var elementBuilt = document.createElement(type);
	elementBuilt.id = idToBeCreated;
	return elementBuilt;
}

function attachElement(elementToBeAttached, parentElementId){
     document.getElementById(parentElementId).appendChild(elementToBeAttached);
}

function addContentToElemnt(content, elementId){
    if(content != '' || content != undefined){
		document.getElementById(elementId).innerHTML = content;
	} 
}

function addClass(elementId, className){
   document.getElementById(elementId).classList.add(className);
}

function addClassToElement(element, className){
   element.classList.add(className);
}

function makeElementInline(elementId){
    document.getElementById(elementId).style.display='inline';
}


