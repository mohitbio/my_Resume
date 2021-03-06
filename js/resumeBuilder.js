var bio = {
	"name": "Mohit Sharma",
	"role": "UI Developer",
	"contacts": {
		"email": "mohitsharma0915@gmail.com",
		"github": "mohitbio",
		"twitter": "@mohitbio",
		"location": "Bronx, NY, USA"
	},
	"biopic": "images/mypic.jpg",
	"welcomeMessage": "I'm currently working as a Sr. UI Developer in American Express, NYC.",
	"skills": ["HTML5", "CSS", "JavaScript", "ReactJS", "AngularJS", "Test Driven Development"]
};

var work = {
	"jobs": [
		{
			"employer": "American Express",
			"title": "Senior UI Developer",
			"location": "Amex Tower NYC, US",
			"dates": "April 2016 - Present",
			"description": "Curently working on A/B Testing on americanexpress.com across all markets."+
			"We build different UI variants to test with different sets of users to bring best User Experience."
		},
		{
			"employer": "Barclays",
			"title": "Senior UI Developer",
			"location": "Whippany, NJ, US",
			"dates": "Oct 2015 - April 2016",
			"description": "Worked here on the Compliance Application called The Central Compliance Banker (cBanker)"+
			" which enables Barclays to meet regulatory and compliance requirements. Identified as a requirement during"+
			" the Central Compliance Strategic Review (CCSR) in 2015, the system improves agility, reduces manual processes,"+
			" reduces policy breaches, improves management information and reporting, and reduces risk."
		},
		{
			"employer": "Independence Blue Cross",
			"title": "UI Developer",
			"location": "Philadelphia, PA, US",
			"dates": "Jan 2014 – Sep 2015",
			"description": " Work here on the application (ibx.com) which allows the policy holder to see the details about the plan"+
			" they are enrolled to, what all claims have been made by the applicant and status of the claims. The policy holder can see"+
			" admiration kit which allows them to make changes to their current policy, know more about healthcare reform, pharmacy services etc."
		},
		{
			"employer": "Plymouth Rock Assurance Corporation",
			"title": "UI Developer",
			"location": "Red Bank, NJ, US",
			"dates": "Sep 2012 – Oct 2013",
			"description": "Plymouth Rock Assurance is one of the largest insurance groups in New Jersey. The system offers different kind of insurance"+
			" such as Auto insurance, home insurance, Motorcycle insurance and provides customers with free insurance quotes. Each customer can get their"+
			" insurance quotes from the application and create an online account to manage their insurance, such as paying bills, make claims, and contacting"+
			" customer service."
		}
	]
};

var education = {
	"schools": [
		{
		    "name": "New Jersey Institute Of Technology",
			"dates": "2010-2011",
			"location": "Newark, NJ, US",
			"degree": "MS",
			"majors": ["Bioinformatics"],
			"url": "https://www.njit.edu/"
		},
		{
		    "name": "Stratford University",
			"dates": "2011-2012",
			"location": "Falls Church, VA, US",
			"degree": "MS",
			"majors": ["Computer Science"],
			"url": "https://www.stratford.edu"
		},
		{
		    "name": "Dr DY Patil University",
            "dates": "2004-2008",
            "location": "Pune, MH, India",
            "degree": "B.Tech",
            "majors": ["Bioinformatics"],
            "url": "http://www.biotech.dpu.edu.in/"
        }
	],
	"onlineCourses": [
		{
		    "school": "Udacity",
			"title": "Object-Oriented Javascript",
			"dates": "2014",
			"url": "https://www.udacity.com/course/ud015"
		},
		{
		    "school": "Udacity",
			"title": "HTML5 Canvas",
			"dates": "2014",
			"url": "https://www.udacity.com/course/ud292"
		},
		{   "school": "Udacity",
            "title": "Web Development",
			"dates": "2014",
			"url": "https://www.udacity.com/course/cs253"
		}
	]
};

var projects = {
	"projects": [
		{
			"title": "Online Portfolio",
			"dates": "October 2015",
			"description": "Created an online portfolio of work as part of Udacity's Front-End Web Developer " +
			"Nanodegree.",
			"images": ["images/portfolio.png"],
			"url": ""
		}
	]
};


bio.display = function() {
    var nameFormatted = HTMLheaderName.replace("%data%", bio.name);
    var roleFormatted = HTMLheaderRole.replace("%data%", bio.role);
    var bioPicFormatted = HTMLbioPic.replace("%data%", bio.biopic);
    var welcomeMsgFormatted = HTMLWelcomeMsg.replace("%data%", bio.welcomeMessage);

    $("#header").prepend(nameFormatted);
    $("#header").prepend(roleFormatted);
    $("#header").append(bioPicFormatted);
    $("#header").append(welcomeMsgFormatted);

    var contactInfoFormatted = [];
    contactInfoFormatted.push(HTMLemail.replace("%data%", bio.contacts.email));
    contactInfoFormatted.push(HTMLgithub.replace("%data%", bio.contacts.github));
    contactInfoFormatted.push(HTMLtwitter.replace("%data%", bio.contacts.twitter));
    contactInfoFormatted.push(HTMLlocation.replace("%data%", bio.contacts.location));

    for (var i = 0; i < contactInfoFormatted.length; i++) {
        $("#topContacts").append(contactInfoFormatted[i]);
        $("#footerContacts").append(contactInfoFormatted[i]);
    }

    if (bio.skills.length > 0) {
        $("#header").append(HTMLskillsStart);

        for (var j = 0; j < bio.skills.length; j++) {
            var formattedSkills = HTMLskills.replace("%data%", bio.skills[j]);
            $("#skills").append(formattedSkills);
        }
    }
};

bio.display();


work.display = function() {
	if(work.jobs.length > 0) {
		$("#workExperience").append(HTMLworkStart);
		for(var i = 0; i < work.jobs.length; i++) {
			var employerFormatted = HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
			var workTitleFormatted = HTMLworkTitle.replace("%data%", work.jobs[i].title);
			var workLocationFormatted = HTMLworkLocation.replace("%data%", work.jobs[i].location);
			var datesWorkedFormatted = HTMLworkDates.replace("%data%", work.jobs[i].dates);
			var workDescFormatted = HTMLworkDescription.replace("%data%", work.jobs[i].description);

			var employerworkTitleFormatted = employerFormatted + workTitleFormatted;

			$(".work-entry:last").append(employerworkTitleFormatted);
			$(".work-entry:last").append(workLocationFormatted);
			$(".work-entry:last").append(datesWorkedFormatted);
			$(".work-entry:last").append(workDescFormatted);
		}

	}
};

work.display();

projects.display = function() {
	if(projects.projects.length > 0) {
		for(var i = 0; i < projects.projects.length; i++) {
			$("#projects").append(HTMLprojectStart);

			var projectTitleFormatted = HTMLprojectTitle.replace("%data%", projects.projects[i].title).replace("#", projects.projects[i].url);
			var projectDatedFormatted = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
			var projectDescFormatted = HTMLprojectDescription.replace("%data%", projects.projects[i].description);

			$(".project-entry:last").append(projectTitleFormatted);
			$(".project-entry:last").append(projectDatedFormatted);
			$(".project-entry:last").append(projectDescFormatted);

			for(var j = 0; j < projects.projects[i].images.length; j++) {
				var projectImgFormatted = HTMLprojectImage.replace("%data%", projects.projects[i].images[j]);
				$(".project-entry:last").append(projectImgFormatted);
			}


		}
	}
};

projects.display();

education.display = function() {
	if(education.schools.length > 0 || education.onlineCourses.length > 0) {
		for(var i = 0; i < education.schools.length; i++) {
			var schoolNameFormatted = HTMLschoolName.replace("%data%", education.schools[i].name).replace("#", education.schools[i].url);
			var schoolDegFormatted = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
			var schoolDatesFormatted = HTMLschoolDates.replace("%data%", education.schools[i].dates);
			var schoolLocFormatted = HTMLschoolLocation.replace("%data%", education.schools[i].location);

			$("#education").append(HTMLschoolStart);
			$(".education-entry:last").append(schoolNameFormatted + schoolDegFormatted);
			$(".education-entry:last").append(schoolDatesFormatted);
			$(".education-entry:last").append(schoolLocFormatted);


            for (var k = 0; k < education.schools[i].majors.length; k++) {
                var schoolMajorFormatted = HTMLschoolMajor.replace("%data%", education.schools[i].majors[k]);

                $(".education-entry:last").append(schoolMajorFormatted);
            }
		}

		if(education.onlineCourses.length > 0) {
			$("#education").append(HTMLonlineClasses);
			for(var j = 0; j < education.onlineCourses.length; j++) {
				var onlineTitleFormatted = HTMLonlineTitle.replace("%data%", education.onlineCourses[j].title).replace("#", education.onlineCourses[j].url);
				var onlineSchoolFormatted = HTMLonlineSchool.replace("%data%", education.onlineCourses[j].school);
				var onlineDatesFormatted = HTMLonlineDates.replace("%data%", education.onlineCourses[j].dates);
				var onlineURLFormatted = HTMLonlineURL.replace("%data%", education.onlineCourses[j].url).replace("#", education.onlineCourses[j].url);

                $("#education").append(HTMLschoolStart);
				$(".education-entry:last").append(onlineTitleFormatted + onlineSchoolFormatted);
				$(".education-entry:last").append(onlineDatesFormatted);
				$(".education-entry:last").append(onlineURLFormatted);
			}
		}
	}
};

education.display();

$('#mapDiv').append(googleMap);
