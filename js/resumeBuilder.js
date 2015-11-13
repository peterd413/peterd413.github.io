var bio = {
    "name": "Peter T. DeCarolis",
    "role": "Front End Web Developer",
    "contacts": {
        mobile: "(207)491-2905",
        email: "peterd413@yahoo.com",
        github: "peterd413",
        location: "Farmington, ME",
        facebook: "www.facebook.com/peter.decarolis",
        linkedin: "www.linkedin.com/pub/peter-decarolis/0/a81/2b4"
    },
    "pictureURL": "images/me.jpg",
    "welcomemsg": "WelcomeMsg Placeholder",
    "skills": ["Languages (System Verilog, Perl, Python, tcl, XML)",
        "Tools(Synplify_Pro, DC, TimingAnalyzer, Linting, CDC)",
        "Microsoft(Word, Excel, Visio, PowerPoint)",
        "Web Skills(HTML/CSS JavaScript Grunt Bootstrap)",
        "Source Control (CVS, SVN, GIT/GitHub)",
        "Lab tools(Logic Analyzers, Packet Sniffers)"
    ],
    "display": function () {
        var formattedName = HTMLheaderName.replace("%data%", bio.name);
        var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
        var formattedbioPic = HTMLbioPic.replace("%data%", bio.pictureURL);

        //Contact Info
        var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
        var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
        //var HTMLtwitter;
        var formatedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
        //var HTMLblog;
        var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
        var contactArray = HTMLcontactStart + formattedMobile + formattedEmail + formatedGithub + formattedLocation + HTMLcontactEnd;
        //var temp = HTMLcontactGeneric.replace("%contact%", "Contact Information");
        var formattedContactInfo = HTMLcontactGeneric.replace("%data%", contactArray);

        var formattedFacebook = HTMLfacebook.replace("%data%", bio.contacts.facebook);
        var formattedLinkedIN = HTMLlinkedIN.replace("%data%", bio.contacts.linkedin);
        var socialMediaArray = formattedFacebook + formattedLinkedIN;

        $("#header").prepend(formattedbioPic);
        $("#header").prepend(socialMediaArray);
        $("#header").prepend(contactArray);
        $("#header").prepend(formattedRole);
        $("#header").prepend(HTMLresponsiveBr);
        $("#header").prepend(formattedName);

        if (bio.length !== 0) {
            $("#header").append(HTMLskillsStart);
            for (skills_index in bio.skills) {
                var formattedSkills = HTMLskills.replace("%data%", bio.skills[skills_index]);
                $("#header").append(formattedSkills);
            }
        }

    }
};


//dot notation
var workExperience = {
    "jobs": [{
        position: "Senior Hardware Engineer",
        employer: "Extreme Networks (formerly Enterasys Networks)",
        website: "www.extremenetworks.com",
        dates: "June 1996 - May 2015",
        location: "Salem, NH",
        description: "Responsible for complete design cycle of large FPGAs and ASICs in the networking area including architecting, documenting, coding, synthesizing, timing and testing. The last 9 years I telecommuted full time from my home office."
    }, {
        position: "Soccer Coach",
        employer: "Mount Blue Middle School",
        website: "www.mtbluersd.org",
        dates: "August 2015 - Present",
        location: "Farmington, ME",
        description: "Responsible for the 7th grade team of 18 players for the 2015 season."
    }],
    "display": function () {
        for (job_index in workExperience.jobs) {
            $("#workExperience").append(HTMLworkStart);

            var formattedJobLink = HTMLworkLink.replace("%data%", workExperience.jobs[job_index].website);
            var formattedJobEmployer = HTMLworkEmployer.replace("%data%", workExperience.jobs[job_index].employer);
            var formattedJobTitle = HTMLworkTitle.replace("%data%", workExperience.jobs[job_index].position);
            var formattedJobDates = HTMLworkDates.replace("%data%", workExperience.jobs[job_index].dates);
            var formattedJobDescription = HTMLworkDescription.replace("%data%", workExperience.jobs[job_index].description);
            var WorkExperienceString = formattedJobLink + formattedJobEmployer + formattedJobTitle;

            $(".work-entry:last").append(WorkExperienceString);
            $(".work-entry:last").append(formattedJobDates);
            $(".work-entry:last").append(formattedJobDescription);
        }
    }

};

//bracket notation
var education = {
    "schools": [{
        "name": "Rochester Institute of Technology",
        "location": "Rochester, NY",
        "major": "Electrical Engineering",
        "degree": "Bachelor of Science",
        "dates": "1991-1996",
        "website": "www.rit.edu"
    }, {
        "name": "Udacity",
        "location": " ",
        "major": "Front End Web Development",
        "degree": "Online Nanodegree",
        "dates": "2015-Present",
        "website": "www.udacity.com"
    }],
    "display": function () {
        for (school_index in education.schools) {
            $("#education").append(HTMLschoolStart);

            var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[school_index].name);
            var formattedSchoolLink = HTMLschoolLink.replace("%data%", education.schools[school_index].website);
            var formattedSchoolDates = HTMLschoolDates.replace("%data%", education.schools[school_index].dates);
            var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[school_index].degree);
            var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[school_index].location);
            var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[school_index].major);

            var formattedSchool = formattedSchoolLink + formattedSchoolName + formattedSchoolDegree;

            $(".education-entry:last").append(formattedSchool);
            /*		$(".education-entry:last").append(formattedSchoolName);
            		$(".education-entry:last").append(formattedSchoolDegree); */
            $(".education-entry:last").append(formattedSchoolDates);
            $(".education-entry:last").append(formattedSchoolLocation);
            $(".education-entry:last").append(formattedSchoolMajor);


        }
    }
}

var projects = {
    "project": [{
        "title": "Portfolio",
        "website": "#",
        "dates": "September 2015",
        "description": "This was my first basic project to get a feel for HTML and CSS. It used a bunch of basic concepts as well as responsive image techniques, responsive web design techniques and the bootstrap framework.",
        "image": ""
    }, {
        "title": "WMU",
        "website": "#",
        /*http://peterd413.github.io/WMU/wmumain.html",*/
        "dates": "October 2015",
        "description": "This project was a stand-alone project for the local soccer club. It is a work in progress not yet ready to go live.",
        "image": ""
    }],
    "display": function () {
        for (project_index in projects.project) {
            $("#projects").append(HTMLprojectStart);

            var formattedProjectTitle = HTMLprojectTitle.replace("%data%", projects.project[project_index].title);
            var formattedProjectLink = HTMLprojectLink.replace("%link%", projects.project[project_index].website);

            var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.project[project_index].dates);
            var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.project[project_index].description);
            var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.project[project_index].image);

            var formattedProject = formattedProjectLink + formattedProjectTitle;

            $(".project-entry:last").append(formattedProject);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);
            if (projects.project[project_index].image.length > 0) {
                $(".project-entry:last").append(formattedProjectImage);
            }

        }
    }
};

bio.display();

workExperience.display();

education.display();

projects.display();

$("#mapDiv").append(googleMap);

