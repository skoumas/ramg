var name = null;
function facebookShare(url, title, descr, image) {
    var winTop = (screen.height / 2) - (500 / 2);
    var winLeft = (screen.width / 2) - (200 / 2);
    window.open('http://www.facebook.com/sharer.php?s=1100&p[title]=' + title + '&p[summary]=' + descr + '&p[url]=' + url + '&p[images][0]=' + image, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + 500 + ',height=' + 200);
}
function twitterShare(measure)
{
	var winTop = (screen.height / 2) - (500 / 2);
    var winLeft = (screen.width / 2) - (300 / 2);
    window.open('https://twitter.com/intent/tweet?text=' + encodeURIComponent(measure) + '&hashtags=ramg,random,austerity&url=http://www.random-austerity-measure-generator.com'  , 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + 500 + ',height=' + 300);

}



function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function generateName()
{
	$("#link").slideUp();
	var items = [
		"TV",
		"car",
		"playstation",
		"pack of cigarretes",
		"fridge",
		"computer",
		"mousepad",
		"bed",
		"chair",
		"wig",
		"shirt"
	]
	var greekfoods = [
		"spanakopita",
		"mousaka",
		"pita giro",
		"patsitsio",
		"tiropita",
		"saganaki",
		"karidopita",
		"Feta cheese",
		"tiropsomo"
	]
	var nations = [
		"greek",
		"italian",
		"spanish",
		"irish",
		"portugese"
	]
	var countries = [
		"Greece",
		"Spain",
		"Italy",
		"Ireland",
		"France",
		"Bulgaria",
		"Hungary",
		"Portugal",
		"Portugal"
	]
	var greekdrinks = [
		"ouzo",
		"tsipouro",
		"rakomelo",
		"metaxa"
	]

	var notes = [
		"C", "D", "E", "F", "G", "A", "B"
	]
	var germans = [
		"Merkel",
		"Schauble"
	]
	 


	var bigP = random(70,200);
	var smallP = random(2,20);
	var bigN = random(2000,999900);
	var smallN = random(2,20);
	var tinyN = random(2,10);
	var N = random(40,70);
	var P = random(30,60);
	var item = get(items);
	var greekfood = get(greekfoods);
	var nation = get(nations);
	var country = get(countries);
	var greekdrink = get(greekdrinks);
	var note = get(notes);
	var german = get(germans);

	function get(array) {
		temp =  array [ Math.floor (( Math.random() * array.length) ) ] ;
		temp = temp.replace("[BIGP]", bigP + "%");
		temp = temp.replace("[SMALLP]", smallP + "%");
		temp = temp.replace("[BIGN]", bigN);
		temp = temp.replace("[SMALLN]", smallN);
		temp = temp.replace("[N]", N);
		temp = temp.replace("[P]", P + "%");
		temp = temp.replace("[ITEM]", item);
		temp = temp.replace("[GREEKFOOD]", greekfood);
		temp = temp.replace("[NATION]", nation);
		temp = temp.replace("[GREEKDRINK]", greekdrink);
		temp = temp.replace("[COUNTRY]", country);
		temp = temp.replace("[NOTE]", note);
		temp = temp.replace("[GERMAN]", german);
		temp = temp.replace("[TINYN]", tinyN);
		return temp;
	}
	var loadingInterval = null;
	var MaxLoadingMessages = 5;
	var messageTimes = 0;
	var temp_loading_titles = [];
	var timeoutLoading = 1000;


	var loading_titles = 
	[
		"taxing the poor",
		"making life a bit easier for rich people",
		"controlling some things",
		"drinking some beer",
		"playing poker with prime ministers",
		"going for a walk at luxemberg",
		"voting stuff",
		"drinking ouzo with Tsipras",
		"caring for the good of Europe",
		"doing complicated financial stuff",
		"asking for more",
		"making decisions",
		"deciding for you",
		"closing some banks",
		"printing some cash",
		"the euro is collapsing",
		"attending a Eurogroup",
		"having talks in some parliament",
		"making some coups",
		"discussing stuff",
		"giving TV interviews",
		"twitter explodes again",
		"bringing democracy",
		"lowering some pensions",
		"we seem serious and caring",
		"we calculate austerities and stuff",
		"lower stuff and numbers"
	]
	
	var type_1a = countries;

	var type_1b = [
		"should",
		"needs to",
		"has to",
		"is obligated to"
	]

	var type_1c = [
		"pay additional [BIGN] Euros for each new [ITEM] bought",
		"give every second child to Germany to become a worker",
		"has to give [SMALLN] of blood to the closest bank",
		"allow Photoshop run only in grayscale mode",
		"have its people sing 'Germany is Awesome' by 6 o'clock this afternoon",
		"pay [BIGN] Euros to Germany for no reason in two hours",
		"shut down and rename it self to 'Germany'",
		"put at least a [SMALLP] tax on body gases",
		"have it's prime minister sing a zulu type of songs and dance around fire naked",
		"refer to the constitution as 'crappy old book' from now on",
		"take away food from old people and give it to the rich",
		"forbit any type of food for poor and old people",
		"remove all taxes from rich people's pools and raise the tax for water by [P]",
		"charge [N] Euros for each Facebook post",
		"make the scrolling speed in all computers [P] slower",
		"charge [N] Euros for each Twitter post",
		"raise the tax for every Paypal transaction to [BIGP]",
		"make things more difficult for people in some creative way",
		"make things easier for rich people in some creative way",
		"give all of it's facebook passwords to Germany",
		"say 'yes' to everything by 12 oclock",
		"pay [BIGN] euros for every new born kid",
		"have all planes run with one of their engines or with [SMALLP] less power if single engined",
		"restrict all food in flights",
		"kill all babies born today",
		"close [N] schools",
		"close [N] random shops",
		"burn [N] Euros in front a very poor person",
		"send [N] women to Germany for mating",
		"celebrate the new year by using [BIGP] less fireworks",
		"taxate Santa Claus gifts",
		"set a maximum for all google searches to [N] per day",
		"throw [N] rocks from a plane to it's capital. Where the rocks land onto a shop, that shop should close",
		"hire [N] untalented and lazy people to work for the goverment",
		"have Olympic Games in [N] months and cannot avoid it",
		"burn away food in front of poor people",
		"burn some national books or something",
		"allow Photoshop run only in Grayscale mode",
		"have all athletes competing to pay tax according to their record",
		"stop all planes from landing",
		"give [BIGP] of its land to Germany",
		"receive [BIGP] tons of garbage from Germany and recycle it",
		"sacrifice [SMALLN] old people from each city",
		"cut [BIGP] on pensions starting from now",
		"raise all taxes by [BIGP]",
		"have infinite recursive taxes in [N] days",
		"close [BIGP] of its roads",
		"tranform all income into taxes",
		"have it's citizens complain by [SMALLP] more about everything",
		"have taxes within taxes within taxes and call it taxeption",
		"have infinite recursive taxes",
		"remove [BIGN] views from all Youtubers",
		"should rewrite all songs removing the musical note [NOTE]",
		"send a random amount of money between the amounts of [SMALLN] and [BIGN], withing [SMALLN] days to Germany",
		"have one child in a family of more than two kids treated will less care than the others",
		"take away [SMALLP] of the drugs of old people and give it back only if they pay [BIGP] of the value",
		"replace all plants by cactuses to save water",
		"close some hospitals. Let's say [BIGP] of them",
		"kill some random citizens",
		"charge at least [N] Euros for each taxi ride",
		"raise by [P] all uber transactions",
		"have Carmagedon races going on in every city and kill at least [N] citizens",
		"donate some money to Germany",
		"lose in the next Eurovision",
		"remove [N] people from their houses",
		"close [N] random villages",
		"donate at least [BIGN] Euros to Germany",
		"not allow Santa Claus this year",
		"keep [SMALLP] of it's kittens hungry",
		"put [SMALLP] less food to all dogs",
		"tranfer [P] of its beaches to Germany",
		"lose in the next Eurovision by at least [SMALLN] points",
		"give [SMALLN] iPhones to [SMALLP] of it's kids while leave the others with old mobiles to create jealousy and envy",
		"have a picture of Merkel in every house",
		"make the life of old people harder in some creative way",
		"lower the amount of food consumed nationally by [SMALLN] bites",
		"raise the money of rich people by [BIGP]",
		"have it's prime minister drink the blood of [N] virgins by 2 o'clock this night",
		"have it's prime minister to stand on his one foot for [N] hours",
		"have it's prime minister to do water fasting for [N] days",
		"have it's unemployment raised by at least [BIGP]",
		"have 10 home less people from every city watch 10 Germans eat a super luxurius dinner in front of them",
		"have every poor person give one euro to a rich person",
		"to find a cure for cancer silently and hang it over Germany in [SMALLN] days",
		"stop any kind of birthday gifts and hand over the money saved to Germany",
		"have [BIGP] less coke in each can",
		"set the gap between all trains and the platform to [SMALLN] meters",
		"disable the touch screen of all iPhones",
		"inform all of it's population for all the Game of Thrones spoilers",
		"buy [BIGN] Audis in the next [SMALLN] days",
		"burn [SMALLP] of the books in the libraries",
		"make all skype calls more buggy by [P]",
		"have [P] slower internet",
		"disable all elevators",
		"allow a maximum of [SMALLN] tabs for all browsers",
		"charge for every email send by [N] Euros",
		"remove [N] seats from all busses",
		"prevent all elevators go beyond 3rd floor",
		"drink [BIGN] litres of German beer in the next [SMALLN] hours",
		"accept [SMALLN] goals from Germany or Netherlands in the next football match",
		"have less rain in it's territory",
		"set a minimum waiting time to all public services to at least [N] minutes",
		"only rich people win the loterry",
		"have its population replace food with coffee in order to eat less and work more",
		"use one egg less for each pie",
		"keep broadcasting all the Game of Thrones spoilers by Television, Internet and Radio 24/7 for [SMALLN] months",
		"use less complicated passwords for all websites",
		"close [BIGP] of its farms and raise the import of fruit goods by [BIGP]",
		"have all of it's population stand still for [SMALLN] hours",
		"replace beds with an array of rocks",
		"unsink Titanic",
		"make all mail services [P] slower",
		"allow [N] clicks per day in all computers for each citizen",
		"increase the waiting time in all hospitals by [N] minutes",
		"be overally more miserable by [P]",
		"have [P] less subtitles to all movies",
		"divide by zero",
		"prevent bands from playing their number one hit in all concerts inside the country",
		"divide only by zero from now on",
		"win Tsak Noris in something in order to have pensions this month",
		"replace all fridges with an array of ice cubes",
		"stop using capital letters in any type of written form"

	]

	var type_1Greece = [
		"order [SMALLN] random citizens to punch varoufakis",
		"throw some [GREEKFOOD] on Tsipras",
		"sell at least [SMALLN] old aunts from each family to Germany",
		"sell some Greek islands",
		"prepare [BIGN] [GREEKFOOD] for the upcoming Oktoberfest",
		"send [BIGN] Euros to Sakis in order to support him",
		"charge for philotimo starting from [BIGN]",
		"raise the tax on Greek islands to [BIGP]",
		"lower the amount of [GREEKFOOD] produced by [BIGP]",
		"stop making [GREEKFOOD]",
		"increase the waiting time in all hospitals by [N] minutes",
		"shorten all Freddo straws by [SMALLP]",
		"replace [GREEKFOOD] with German boiled potatoes",
		"sodimize virgin olive oil",
		"remove [SMALLN] Metro stations",
		"remove [BIGP] of the tomatoes in all Greek salads",
		"sodomize [P] of the virgin olive oil available",
		"darken all Santorinis white houses by [P]",
		"replace Xoriatiko Loukaniko with Wurst",
		"open [N] Lidl supermarkets in [N] days",
		"replace [GREEKDRINK] with German beer",
		"drink [SMALLP] less [GREEKDRINK]",
		"make all Metro cars [P] smaller",
		"set the gap between the train and the platform to [SMALLN] meters",
		"give the Euro won in 2004, back to Europe or pay [BIGN] Euros",
		"put some random taxes to poor people",
		"stop taxating rich people",
		"sodomize [N] littres of extra virgin oil",
		"minimize the amount of klarinogramprous to [SMALLP]",
		"taxate Greek hospitallity",
		"raise unemployment by [SMALLP] the next year",
		"give 1 Euro to Germany everytime a wave from the Greek sea hits the land",
		"close hospitals -as they are too expensive- and hire kompogianitides -which are cheaper",
		"give [BIGP] vacations discount for German people visiting",
		"lower the intensity of the Greek sun by [SMALLP]",
		"send one [GREEKFOOD] to each German house is [SMALLN] hours",
		"raise the amount of sex by [BIGP]",
		"increase the gap between the train and the platform by [P]",
		"make Ouzo transparent",
		"make Freddo coffee [SMALLP] less cold",
		"switch from Freddo to Frappe, forever",
		"raise the tax of condoms in Myconos by [BIGP]",
		"allow a maximum of [SMALLN] Dj's each year for mykonos",
		"give all of its [GREEKFOOD] to Germany",
		"make the Greek sea blue waters by [BIGP] murkier",
		"broadcast all the Game of Thrones spoilers by Television, Internet and Radio 24/7 for [SMALLN] months",
		"make the Greek sun shine by [BIGP] less",
		"burn all Varoufakis books",
		"burn [N] books from Varoufakis",
		"have one less ice cube for each Freddo",
		"remove one string from buzuki",
		"remove garlic from tsatziki",
		"throw away one kariatida",
		"remove [SMALLN] from all android and iphones",
		"make the Parthenon a German pub",
		"set the ticket price to visit the Parthenon to [BIGN] Euros",
		"replace ZEUS with MERKEL",
		"stop saying OPA OPA",
		"buy [BIGN] Mercentes in [SMALLN] hours",
		"open [BIGN] German pubs by the next [BIGN] weeks",
		"make all transation using only 20 cents coins",
		"set the maximum allowed withdrawal amount per from ATMs to [SMALLN] cents",
		"give the [SMALLP] of it's value to a private bank in Switcherland",
		"decrease the size of the citizen's penises by [SMALLP]",
		"prevent women from having orgasms"
	]

	var type_2a = [
		"Tsipras",
		"Varoufakis",
		"Chaikalis",
		"Tsakalotos",
		"Stathakis",
		"Konstantopoulou"
	]

	var type_2b = [
		"should",
		"needs to",
		"has to",
		"is obligated to"
	]

	var type_2c = [
		"do a spaggato [N] times or until Merkel feels happy",
		"do a running race with Soimple and lose [N] times",
		"speak only in German from now on",
		"beat Geometry Dash in [SMALLN] hours",
		"beat Geometry Dash in a almost broken phone in [SMALLN] hours",
		"play Mortal Kombat with Merkel, and lose [N] times",
		"dance and sing 'My Anaconda' [SMALLN] times in front of Merkel",
		"reach a score of [BIGN] in FlappyBird in [SMALLN] hours or else Greece will lose [BIGP] of it's value",
		"drink the blood of [N] virgins",
		"entertain [GERMAN] as a clown for [N] minutes",
		"solve a rubics cube in [SMALLN] seconds",
		"go to Berlin from Athens and back by walking and Greece will have it's banks open for another day",
		"stay standed up for [N] hours for no reason and Greece will have pensions for this month",
		"listen to Justin Bieber for [N] hours while on heavy drugs",
		"write 'I will stay in the EU' [BIGN] times",
		"never eat [GREEKFOOD] again",
		"play chess with Soimple and lose [N] times",
		"beatbox [N] Skrillex songs with a [P] accuracy",
		"win Tsak Noris in something",
		"go for a dinner with Merkel, pay for the dinner and allow Merkel to eat from both dishes",
		"gain [N] kilos in [SMALLN] days to make Merkel feel thinner",
		"make a referentum if Merkel is 'awesome' or 'simply amazing'",
		"wear a German flag and go to Syntagma square",
		"run [N] times around Berlin naked or wearing some funny clothes",
	]
	 
	
	var type_3a  = [
		"All [NATION] people should be thinner by [BIGP], by the end of this month to prove that the measures of austerity have been taken.",
		"Water fasting for all [NATION]",
		"Less [P] something nice for [COUNTRY]",
		"Less water, less food overall for [NATION]",
		"[NATION] people should stop using umbrellas",
		"More vacations for rich and awesome people",
		"Greek seas needs to be [SMALLP] less blue",
		"[P] less crust for Italian pizza",
		"[P] smaller breasts for all [NATION] women",
		"[SMALLN] google searches per day for [COUNTRY]",
		"[SMALLP] World of Warcraft server should allow a maximum level to [SMALLN]",
		"[P] of [NATION] skype calls should be [SMALLP] slower",
		"[SMALLP] less boiling time for all [NATION] eggs",
		"[BIGN] less hair for all [NATION] people",
		"All [NATION] rpg games cannot have a level beyond [SMALLN]",
		"Greece should remove [N] columns from Parthenon",
		"A rich [NATION] person should give [SMALLN] Euros to a poor person and that poor person should give the rich person [BIGN] Euros back in return",
		"All taxes in [NATION] are now between [SMALLP] and [P] and the amount depends uppon the mood of the tax collector",
		"[SMALLN] eggs less for every Spanish omelette",
		"All Italian pasta should be boiled [SMALLN] seconds less",
		"All [NATION] computer icons in Mac and Windows should be black and white only",
		"No more HD or 4K movies for [COUNTRY]",
		"[TINYN] bad things should happen to [N] [NATION] people in [SMALLN]",
		"4K movies in [COUNTRY] are chargable and double taxed by pixel. Per second",
		"The fight on who pays the bill in a [NATION] restaurant is restricted. No one should be able to pay the bill",
		"Italy should have [SMALLP] less mozarella in all new margarita pizzas",
		"Italy is obligated to taxate Super Mario for each coin collected",
		"Greek philotimo is now taxated",
		"[P] less snow for Finland",
		"[P] less muscle for every [NATION] bodybuilder",
		"All [NATION] sexual intercourses should last [SMALLN] minutes maximum",
		"[P] less concentration for each [NATION] students",
		"All [NATION] phones are allowed to have a maximum of [SMALLN] contacts saved in memory",
		"A [NATION] computer is not allowed to have more than [N] windows open at the same time",
		"[SMALLP] tax for each coin Sumer Mario collects",
		"Each rich [NATION] person is obligated to show off [P] more in to generate [P] more envy amongst the population",
		"[P] colder saunas for Finland",
		"[NATION] cows need to be [SMALLP] less fat",
		"All Italian tortellini should be emptied",
		"[SMALLP] less horse power for all Ferrari models",
		"Ferrari should start generating a cheap and affordable model that looks awful and cheap",
		"All Greek people should wear sandals with socks and consider it to be cool",
		"Less toilet paper for every [NATION]",
		"[P] less hair for all [NATION]",
		"Armani shirts should have [SMALLP] less fabric",
		"[SMALLN] less buttons for each Armani shirt",
		"Having fun should be reduces by [P] for [COUNTRY]",
		"[BIGP] less Greek hospitallity for Greece",
		"[SMALLP] less facial expressions for all [NATION]",
		"[P] less breastfeeding for [COUNTRY]",
		"French cuisine needs to be less tasty by [SMALLP] this year",
		"Any type of [NATION] cheese pie should not contain cheese",
		"The music note C note is now off the pentagram for [COUNTRY]",
		"All [NATION] supermarkets should be replaced by German ones",
		"[NATION] Jazz music should be less complicated and more austerized",
		"Mothers should kiss their children by [BIGP] less to save time and saliva",
		"Fund the [NATION] banks by [SMALLP] while raising the tax for poor people by [BIGP]",
		"Something bad needs to happen in [COUNTRY] in the next [N] hours",
		"All [NATION] music songs should use one chord less",
		"No more motorcycle rides for Varoufakis",
		"[SMALLN] bad things should happen to [N] random [NATION] in [TINYN] days",
		"[BIGP] of [NATION] cooling fans should spin [P] slower",
		"[NATION] people are now allowed to switch side while sleeping a maximum [SMALLN] times", 
		"Varoufakis needs to replace his motorcycle with an Audi within the next [N] days",
		"One less egg for all Spanish omelettes",
		"An Irish pint of beer is now [SMALLN] mL",
		"[P] less taste receptors for each [NATION] tongue",
		"The Magic wand tool is now disabled for [NATION] photoshop",
		"If a [NATION] person have some money then should give that money to Germany",
		"[N] less gigabytes for [NATION] hard disks",
		"Irish Traditional Folk music should be [P] less traditional",
		"If a rich [NATION] has two cars, should give one car to Germany and one car to a poor [NATION]. Then the poor person should give the car to Germany",
		"Breastfeeding in [COUNTRY] is chargable by [SMALLN] Euros per litre",
		"Greeks are allowed to make a number of [P] max selfies at the Greek islands",
		"If a [NATION] person has two coats, should give both to Germany",
		"Greece is not allowed to have more than [SMALLN] tourists each time at each Greek island",
		"Varoufakis is obligated to wear a costume [BIGN] times",
		"Varoufakis should close Valve",
		"Guinness beer should have a lighter color by [P] in [N] days",
		"[NATION] beer should have [SMALLP] less foam",
		"[P] less drinking for Saint Patricks day for Ireland",
		"[TINYN] max alchohol beverages on Saint Patrick's day for Ireland",
		"Chaikalis should play in [N] movies in [SMALLN] days",
		"[BIGP] less of something good and [BIGP] for something bad for [COUNTRY]",
		"[NATION] people are obligated to put [SMALLN] grams of dirt on their clothes to present the picture that they are heavy workers",
		"[COUNTRY] should raise the percentage of a failing skydiving parachute to [SMALLP]",
		"If a [NATION] person has two houses should have no houses",
		"Italians should minimize their hands gestures while talking by [SMALLP]",
		"[NATION] ghosts should be [SMALLP] less scary",
		"Eating with an empty stomach is now restricted in [COUNTRY]",
		"Santa Claus should give old and rusty toys to [NATION] kids this year",
		"[P] less gifts from Santa Claus to [COUNTRY]",
		"Eiffel tower should be shorter by [SMALLP] in [N] days",
		"France is obligated to have it's French accent by [SMALLP] tougher, sounding more like German in [N] days",
		"Italy should austerize some of it's landmarks and rename the 'Coloseum' to 'Normaloseum'"
	]
	 
 	
	var type =random(1,3);
 

	if (type == 1)
	{ 
		t1 = get(type_1a);
		if (t1 == "Greece")
			t3 = get(type_1Greece);
		else
			t3 = get(type_1c);

		measure = t1 + " " + get(type_1b) + " " + t3 + ".";
	}
	else if (type==2)
	{
		measure = get(type_2a) + " " + get(type_2b) + " " + get(type_2c) + ".";
	}
	else if (type==3)
	{
		measure = get(type_3a) + ".";
	}

 
	$("#first").slideUp("slow");
	$("#loading").slideDown("slow");

	loadLoading();
	 
	loadingInterval =  setInterval(loadLoading,timeoutLoading);


	function loadLoading() {

		if (messageTimes > MaxLoadingMessages) {
			clearInterval(loadingInterval);
			console.log(loadingInterval);
			$("#loading").slideUp();
			$("#final").slideDown();
			$("#final_name").slideDown();
			$("#final_name").html(measure );
			return;
		} 
		//var randomMessage = randomFromArray(loading_titles);
		 
		$("#loading_title").html( "..." + get(loading_titles) + ".");
		$("#progress_bar").css({ width: (  messageTimes   / MaxLoadingMessages) *100 + "%"});
		//temp_loading_titles.push ( loading_titles.splice(randomMessage,1) );
		messageTimes ++;
	}

	$.ajax({
	  url: "http://www.random-austerity-measure-generator.com/counter.php",
	  data:{ok:1},
	  type:"POST"
	})
	.done(function() {
	 
	});

	

	
}

function reset() {

	$("#progress_bar").css({width:"0px"});
	$("#final_name").html("");
	$("#final").hide();
	$("#loading").hide();
	$("#first").hide();
	generateName();
}


