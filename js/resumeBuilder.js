/*
This is empty on purpose! Your code to build the resume will go here.
 */
 
var bio = {
	"name" : "Dan Meng",
	"role" : "Software Developer",
	"contacts" : {
		"email" : "dmeng14@gmail.com",
		"linkedin" : "https://www.linkedin.com/pub/dan-meng/41/8aa/507" ,
		"github" : "dmeng14",
		"location" : "Greater New York Area"
	},
	"welcomeMessage" : "Welcome to my website!",
	"skills" : [
		"Programming", 
		"Python", 
		"Java", 
		"C", 
		"SQL"
	]
}

var education = {
    "schools": [
        {
            "name": "University of Science and Technology of China",
            "location": "Hefei, China",
            "degree": "BS",
            "majors": "Biological Science",
			"dates" : "2001 - 2005",
			"url" : "http://en.ustc.edu.cn/"
        },
        {
            "name": "Florida State University",
            "location": "Tallahassee, FL",
            "degree": "PhD",
            "majors": "Biochemistry",
			"dates" : "2008 - 2014",
			"url" : "https://www.fsu.edu/"
        },
        {
            "name": "City University of New York, City College",
            "location": "New York City, NY",
            "degree": "MS",
            "majors": "Computer Science",
			"dates" : "2015 - 2016",
			"url" : "https://www.ccny.cuny.edu/"
        }
    ]
}

var work = {
	"jobs" : [
		{
			"title" : "Internship",
			"employer" : "NovaBioAssays llC",
			"dates" : "Jun 2015 - Aug 2015",
			"location" : "Woburn, MA",
			"description" : "Implemented scheduling algorithm"
		},
		{
			"title" : "Graduate Research Assistant",
			"employer" : "Florida State University",
			"dates" : "Aug 2008 - Aug 2014",
			"location" : "Tallahassee, FL",
			"description" : "calculated protein orientation"
		}
	]
}

var project = {
	"projects" : [
		{
			"title" : "Database Project",
			"dates" : "Fall 2015",
			"description" : "modified data generator",
			"image" : ""
		},
		{
			"title" : "Programming Paradigm",
			"dates" : "Spring 2015",
			"description" : "lazy interpreter",
			"image" : ""
		},
		{
			"title" : "Machine Learning",
			"dates" : "Fall 2014",
			"description" : "predict annual income",
			"image" : ""
		}
	]
}

if (bio.skills.length > 0) {
	$("#header").append(HTMLskillsStart);
	var formattedskills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(formattedskills);
}

for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
}