

var bio = {
	"name" 			: "Peter T. DeCarolis",
	"role" 			: "Front End Web Developer",
	"contacts" 		: {
		mobile   : "(207)491-2905",
		email    : "peterd413@yahoo.com",
		github   : "peterd413",
		location : "Farmington, ME"
	},
	"pictureURL" 	: "images/me.jpg",
	"welcomemsg"	: "WelcomeMsg Placeholder",
	"skills" 		: ["System Verilog ", "Synplify_Pro ", "HTML/CSS", "JavaScript", "Source Control (CVS, SVN, GIT/GitHub)"]
};


//dot notation
var workExperience = {
	"jobs": [
		{
			position    : "Senior Hardware Engineer",
			employer    : "Extreme Networks (formerly Enterasys Networks)",
			dates       : "June 1996 - May 2015",
			location    : "Salem, NH (Primarily Telecommute)",
			description : "Responsible for complete design cycle of very large FPGAs and ASICs in the networking area including architecting, documenting, coding, synthesizing and timing and testing. The first 9 years, I worked on site. The last 9 years I have worked full time from my home office telecommuting."
		},
		{
			position    : "Soccer Coach",
			employer    : "Mount Blue Middle School",
			dates       : "August 2015 - Present",
			location    : "Farmington, ME",
			description : "Responsible for the 7th grade team of 18 players for the 2015 season."
		}
	]

};

//bracket notation
var education = {
	"schools" : [ {
			"name"          : "Rochester Institute of Technology",
			"location"      : "Rochester, NY",
			"major"         : "Electrical Engineering",
			"degree"        : "BS",
			"dates" 		: "1991-1996"
		},
		{
			"name"          : "Udacity",
			"location"      : " ",
			"major"         : "Front End Web Development",
			"degree"        : "Online Nanodegree",
			"dates" 		: "2015-Present"
		}
	]
}

var projects = {
	"project" : [ {
		"title" 		: "Portfolio",
		"dates" 		: "September 2015",
		"description"	: "This was my first basic project to get a feel for HTML and CSS. It used a bunch of basic concepts as well as responsive image techniques, responsive web design techniques and the bootstrap framework.",
		"image" 		: ""
		},
		{
		"title" 		: "WMU",
		"dates" 		: "October 2015",
		"description"	: "This project was a stand-alone project for the local soccer club.",
		"image" 		: ""
		}
	]
};


var formattedName   = HTMLheaderName.replace("%data%",bio.name);
var formattedRole   = HTMLheaderRole.replace("%data%",bio.role);
var formattedbioPic = HTMLbioPic.replace("%data%",bio.pictureURL);

//Contact Info
var formattedMobile = HTMLmobile.replace("%data%",bio.contacts.mobile);
var formattedEmail =  HTMLemail.replace("%data%",bio.contacts.email);
//var HTMLtwitter;
var formatedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
//var HTMLblog;
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
var contactArray = formattedMobile + formattedEmail + formatedGithub + formattedLocation;
//var temp = HTMLcontactGeneric.replace("%contact%", "Contact Information");
var formattedContactInfo = HTMLcontactGeneric.replace("%data%", contactArray);



$("#header").prepend(formattedbioPic);
$("#header").prepend(contactArray);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);




if (bio.length!==0) {
	$("#header").append(HTMLskillsStart);
	for (skills_index in bio.skills) {
		var formattedSkills = HTMLskills.replace("%data%", bio.skills[skills_index]);
		$("#header").append(formattedSkills);
	}
}

function displayWork () {
	for (job_index in workExperience.jobs) {
		$("#workExperience").append(HTMLworkStart);

		var formattedJobEmployer = HTMLworkEmployer.replace("%data%",workExperience.jobs[job_index].employer);
		var formattedJobTitle    = HTMLworkTitle.replace("%data%",workExperience.jobs[job_index].position);
		var formattedJobDates    = HTMLworkDates.replace("%data%",workExperience.jobs[job_index].dates);
		var formattedJobDescription = HTMLworkDescription.replace("%data%",workExperience.jobs[job_index].description);
		var WorkExperienceString = formattedJobEmployer + formattedJobTitle;

		$(".work-entry:last").append(WorkExperienceString);
		$(".work-entry:last").append(formattedJobDates);
		$(".work-entry:last").append(formattedJobDescription);
	}
}

displayWork();


function displayEducation () {
	for (school_index in education.schools) {
		$("#education").append(HTMLschoolStart);

		var formattedSchoolName    		= HTMLschoolName.replace("%data%",education.schools[school_index].name);
		var formattedSchoolDates    	= HTMLschoolDates.replace("%data%",education.schools[school_index].dates);
		var formattedSchoolDegree	 	= HTMLschoolDegree.replace("%data%",education.schools[school_index].degree);
		var formattedSchoolLocation		= HTMLschoolLocation.replace("%data%",education.schools[school_index].location);
		var formattedSchoolMajor 		= HTMLschoolMajor.replace("%data%",education.schools[school_index].major);


		$(".education-entry:last").append(formattedSchoolName);
		$(".education-entry:last").append(formattedSchoolDates);
		$(".education-entry:last").append(formattedSchoolDegree);
		$(".education-entry:last").append(formattedSchoolLocation);
		$(".education-entry:last").append(formattedSchoolMajor);


	}
}

displayEducation();



function displayProjects () {
	for (project_index in projects.project) {
		$("#projects").append(HTMLprojectStart);

		var formattedProjectTitle    	= HTMLprojectTitle.replace("%data%",projects.project[project_index].title);
		var formattedProjectDates    	= HTMLprojectDates.replace("%data%",projects.project[project_index].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%",projects.project[project_index].description);
		var formattedProjectImage 		= HTMLprojectImage.replace("%data%",projects.project[project_index].image);

		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDescription);
		if(projects.project[project_index].image.length > 0) {
			$(".project-entry:last").append(formattedProjectImage);
		}

	}
}

displayProjects();


/* $("#main").append(internationalizeButton); */


$("#mapDiv").append(googleMap);






/*
var formattedName = HTMLheaderName.replace("%data%","Peter T. DeCarolis");
var role = "Web Developer";
var formattedRole = HTMLheaderRole.replace("%data%",role);
var skills = ["System Verilog ", "Synplify_Pro ", "HTML/CSS", "JavaScript", "Source Control (CVS, SVN, GIT/GitHub)"];


var formattedMobile = HTMLmobile.replace("%data%","207-491-2905");
var formattedEmail =  HTMLemail.replace("%data%","peterd413@yahoo.com");
//var HTMLtwitter;
var formatedGithub = HTMLgithub.replace("%data%","https://github.com/peterd413");
//var HTMLblog;
var formattedLocation = HTMLlocation.replace("%data%","Farmington, ME");
var contact = [formattedMobile, formattedEmail, formatedGithub, formattedLocation];
var temp = HTMLcontactGeneric.replace("%contact%", "Contact Information");
var formattedContactInfo = temp.replace("%data%", contact);


var formattedbioPic = HTMLbioPic.replace("%data%","images/me.jpg");
	//"https://www.facebook.com/photo.php?fbid=1156740984341430&set=a.247576545257883.87448.100000166185919&type=3"

var formattedWelcome = HTMLwelcomeMsg.replace("%data%","Hello World welcome Placeholer");

//var HTMLskillsStart = '<h3 id="skills-h3">Skills at a Glance:</h3><ul id="skills" class="flex-box"></ul>';
var formattedSkills = HTMLskills.replace("%data%", skills);


var bio = {
	"name" 			: formattedName,
	"role" 			: formattedRole,
	"contact" 		: formattedContactInfo,
	"pictureURL" 	: formattedbioPic,
	"welcomemsg"	: formattedWelcome,
	"skills" 		: ["System Verilog ", "Synplify_Pro ", "HTML/CSS", "JavaScript", "Source Control (CVS, SVN, GIT/GitHub)"]
};

$("#header").prepend(bio.skills);
$("#header").prepend(bio.welcomemsg);
$("#header").prepend(bio.pictureURL);
$("#header").prepend(bio.contact);
$("#header").prepend(bio.role);
$("#header").prepend(bio.name);

//dot notation
var workHistory = {};
workHistory.position    = "Hardware Engineer";
workHistory.employer    = "Extreme Networks (formerly Enterasys Networks)";
workHistory.yearsworked = "18";
workHistory.workcity    = "Salem, NH (Primarily Telecommute)";


$("#header").append(workHistory["position"]);
$("#header").append(education.school.name);


*/