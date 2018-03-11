var data= {
		PersonalInfo: 
			{
		        Firstname: 'Krunal',
		        Lastname: 'Patel',
		        Icon: 'assets/logoKP1.png'
	       	},
	    Header:
	    	{
	    		Headshot: 'assets/image01.png'
	    	},
		Projects:
			[
				{ 	
					Title: "Android StopWatch App",
					Description: "Cool Stopwatch app that I built to learn android and because I didnt like the default stopwatch on Android. Key feature contains display of lap time on top left.",
					Link: "https://github.com/KrunalPatel27/AndroidStopwatch-Timer",
					Image: "img/bg-showcase-4.jpg"
				},
				{ 	
					Title: "Random Program Generator",
					Description: "A Java Program that follows all rules of context free grammer to create Object Oriented Programs. This was final term project for OOP class.",
					Link: "https://github.com/KrunalPatel27/RandomProgramGenerator",
					Image: "img/random.jpg"
				},
				{ 	
					Title: "HadoopMapReduce",
					Description: "School project that gave me an intro to Map-Reduce. Here distributed computing jobs were ran on AWS cluster to get the code coverage report. Check out the repo for youtube demo.",
					Link: "https://github.com/KrunalPatel27/MapReduce",
					Image: "img/amazon.jpg"
				},
				{ 	
					Title: "My Own Website",
					Description: "Started this webpage with basic HTML and CSS, as I learned more about Web tools I added more features with JQuery, Bootstrap, Materials.io. Also this webpage is data driven.",
					Link: "https://github.com/KrunalPatel27/it202spr2018",
					Image: "img/my-website.jpg"
				}
			],
		Quotes:
			[
				{
					Quote: "If you are not 100% in the game and at your best and still play, its cheating.",
					Author: "MS Dhoni"
				},
				{
					Quote: "Hard work beats Talent when Talent doesnt work hard.",
					Author: "Tim Notke"
				},
				{
					Quote: "When I lost all of my excuses I found my results.",
					Author: "Anonymous"
				},
				{
					Quote: "Do not judge me by my successes, judge me by how many times I fell down and got back up again.",
					Author: "Nelson Mandela"
				}
			]
	};

function loadInfo() {
    return data;    
}