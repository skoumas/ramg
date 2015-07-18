var name = null;
function facebookShare(url, title, descr, image) {
    var winTop = (screen.height / 2) - (500 / 2);
    var winLeft = (screen.width / 2) - (200 / 2);
    window.open('http://www.facebook.com/sharer.php?s=1100&p[title]=' + title + '&p[summary]=' + descr + '&p[url]=' + url + '&p[images][0]=' + image, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + 500 + ',height=' + 200);
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
		"portugese"
	]
	var countries = [
		"Greece",
		"Spain",
		"Italy",
		"France",
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
	 


	var bigP = random(70,200);
	var smallP = random(1,20);
	var bigN = random(2000,999900);
	var smallN = random(1,20);
	var N = random(40,70);
	var P = random(30,60);
	var item = get(items);
	var greekfood = get(greekfoods);
	var nation = get(nations);
	var country = get(countries);
	var greekdrink = get(greekdrinks);
	var note = get(notes);

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
		"has to give [SMALLN] of blood to the closest bank.",
		"have its people sing 'Germany is Awesome' by 6 oclock this afternoon",
		"pay [BIGN] Euros to Germany for no reason in two hours",
		"shut down and rename it self to 'Germany'",
		"put at least a [SMALLP] tax on body gases",
		"have it's prime minister sing a zulu type of songs and dance around fire naked",
		"refer to the constitution as 'crappy old book' from now on",
		"take away food from old people and give it to the rich",
		"forbit any type of food for poor and old people",
		"make things more difficult for people in some creative way",
		"make things easier for rich people in some creative way",
		"give all of it's facebook passwords to Germany",
		"say 'yes' to everything by 12 oclock",
		"pay [BIGN] euros for every new born kid",
		"have all planes run with one of their engine or with [SMALLP] less power if single engined",
		"restrict all food in flights",
		"kill all babies born today",
		"close [N] random shops",
		"celebrate the new year by using [SMALLP] less fireworks",
		"taxate Santa Claus gifts",
		"throw [N] rocks from a plane to it's capital. Where the rocks land onto a shop, that shop should close",
		"hire [N] untalented and lazy people to work in the goverment",
		"have Olympic Games in [N] months and cannot avoid it",
		"burn away food in front of poor people",
		"burn some national books or something",
		"have all athletes competing to pay tax according to their record",
		"stop all planes from landing",
		"give [BIGP] of it's land to Germany",
		"receive [BIGP] tons of garbage from Germany and recycle it",
		"sacrifice [SMALLN] old people from each city",
		"cut [BIGP] on pensions starting from now",
		"raise all taxes by [BIGP]",
		"close [BIGP] of it's roads",
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
		"have Carmagedon races going on in every city",
		"donate some money to Germany",
		"donate at least [BIGN] Euros to Germany",
		"not allow Santa Claus this year",
		"keep [SMALLP] of it's kittens hungry",
		"put [SMALLP] less food to all dogs",
		"tranfer [P] of it's beaches to Germany",
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
		"stop any kind of birthday gifts and hand over the money saved to Germnay",
		"have [BIGP] less coke in each can",
		"buy [BIGN] Audis in the next [SMALLN] days",
		"drink [BIGN] litres of German beer in the next [SMALLN] hours",
		"accept [SMALLN] goals from Germany or Netherlands in the next football match",
		"have less rain in it's territory",
		"have its population replace food with coffee in order to eat less and work more",
		"use one egg less for each pie",
		"broadcast all the Game of Thrones spoilers by Television, Internet and Radio 24/7 for [SMALLN] months",
		"use less complicated passwords for all websites",
		"close [BIGP] of it's farms and raise the import of fruit goods by [BIGN]",
		"have all of it's population stand still for [SMALLN] hours",
		"replace beds with an array of rocks",
		"unsink Titanic",
		"divide by zero",
		"divide only by zero from now on",
		"win Tsak Noris in something",
		"replace all fridges with an array of ice cubes",
		"stop using capital letters in any type of written form"

	]

	var type_1Greece = [
		"order [SMALLN] random citizens to punch varoufakis",
		"throw some [GREEKFOOD] on Tsipras",
		"sell at least [SMALLN] old aunts from each family to Germany",
		"sell some Greek islands",
		"prepare [BIGN] [GREEKFOOD] for the upcoming Oktoberfest",
		"have sakis rouvas sing 'tha sou ftiakso makaronia me kima' to Merkel",
		"charge for philotimo starting from [BIGN]",
		"raise the tax on Greek islands to [BIGP]",
		"lower the amount of [GREEKFOOD] produced by [BIGP]",
		"stop making [GREEKFOOD]",
		"sodimize virgin olive oil",
		"replace Xoriatiko Loukaniko with Wurst",
		"replace [GREEKDRINK] with German beer",
		"drink [SMALLP] less [GREEKDRINK]",
		"give the Euro won in 2004, back to Europe or pay [BIGN] Euros",
		"put some random taxes to poor people",
		"stop taxating rich people",
		"minimize the amount of klarinogramprous to [SMALLP]",
		"taxate Greek hospitallity",
		"raise unemployment by [SMALLP] the next year",
		"give 1 Euro to Germany everytime a wave from the Greek sea hits the land",
		"close hospitals -as they are too expensive- and hire kompogianitides -which are cheaper",
		"give [BIGP] vacations discount for German people visiting",
		"lower the intensity of the Greek sun by [SMALLP]",
		"send one [GREEKFOOD] to each German house is [SMALLN] hours",
		"raise the amount of sex by [BIGP]",
		"make Ouzo transparent",
		"switch from Freddo to Frappe only, forever",
		"raise the tax of condoms in Myconos by [BIGP]",
		"allow a maximum of [SMALLN] Dj's each year for mykonos",
		"give all of its [GREEKFOOD] to Germany",
		"make the Greek sea blue waters by [BIGP] murkier",
		"broadcast all the Game of Thrones spoilers by Television, Internet and Radio 24/7 for [SMALLN] months",
		"make the Greek sun shine by [BIGP] less",
		"burn all Varoufakis books",
		"have one less ice cube for each Freddo",
		"remove one string from buzuki",
		"remove garlic from tsatziki",
		"throw away one kariatida",
		"remove [SMALLN] from all android and iphones",
		"make the Parthenon a German pub",
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
		"play Mortal Kombat with Merkel, and loose [N] times",
		"dance and sing 'My Anaconda' [SMALLN] times in front of Merkel",
		"reach a score of [BIGN] in FlappyBird in [SMALLN] hours or else Greece will loose [BIGP] of it's value",
		"drink the blood of [N] virgins",
		"solve a rubics cube in [SMALLN] seconds",
		"go to Berlin from Athens and back by walking and Greece will have it's banks open for another day",
		"stay standed up for [N] hours for no reason and Greece will have pensions for this month",
		"listen to Justin Bieber for [N] hours while on heavy drugs",
		"write 'I will stay in the EU' [BIGN] times",
		"never eat [GREEKFOOD] again",
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
		"Less water, less food overall for [NATION]",
		"[NATION] people should stop using umbrellas",
		"More vacations for rich and awesome people",
		"Greek seas needs to be [SMALLP] less blue",
		"[P] less crust for Italian pizza",
		"All [NATION] computer icons in Man and Windows should be Black and White only",
		"No more HD or 4K movies for [COUNTRY]",
		"4K movies in [COUNTRY] are chargable and double taxated by pixel. Per second",
		"The fight on who pays the bill in a [NATION] restaurant is restricted. No one should be able to pay the bill",
		"Italy should have [SMALLP] less mozarella in all new margarita pizzas",
		"Italy is obligated to taxate Super Mario for each coin collected",
		"Greek philotimo is now taxated",
		"[NATION] cows need to be [SMALLP] less fat",
		"All Italian tortellini should be emptied",
		"Ferrari should start generating a cheap and affordable model that looks awful and cheap",
		"All Greek people should wear sandals with socks and consider it to be cool",
		"Less toilet paper for every [NATION]",
		"Any type of [NATION] cheese pie should not contain Cheese",
		"The music note C note is now off the pentagram for [COUNTRY]",
		"All [NATION] supermarkets should be replaced by German ones",
		"Jazz music should be less complicated and more austerized",
		"Mothers should kiss their children by [BIGP] less to save time and saliva",
		"Fund the [NATION] banks by [SMALLP] while raising the tax for poor people by [BIGP]",
		"Something bad needs to happen in [COUNTRY] in the next 2 hours",
		"All music songs should use 1 chord less",
		"One less egg for all Spanish omelettes",
		"If a [NATION] person have some money then should give that money to Germany",
		"[N] less gigabytes for [NATION] hard disks",
		"If a rich [NATION] has two cars, should give one car to Germany and one car to a poor [NATION]. Then the poor person should give the car to Germany",
		"Breastfeeding in [COUNTRY] is chargable by [SMALLN] Euros per litre",
		"Greeks are allowed to make a number of [P] max selfies at the Greek islands",
		"If a [NATION] person has two coats, should give both to Germany",
		"Greece is not allowed to have more than [SMALLN] tourists each time at each Greek island",
		"Varoufakis needs to wear a shirt and costume",
		"Varoufakis should close the Valve",
		"The parachute provided for every skydiving [NATION] might be or not be functional",
		"If a [NATION] person has two houses should have no houses",
		"Italians should minimize their hands gestures while talking by [SMALLP]",
		"[NATION] ghosts should be [SMALLP] less scary",
		"Eating with an empty stomach is now restricted in [COUNTRY]",
		"Santa Claus should give old and rusty toys to [NATION] kids this year",
		"[P] less gifts from Santa Claus to [COUNTRY]",
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
			$("#loading").hide();
			$("#final").show();
			$("#final_name").slideDown("slow");
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


