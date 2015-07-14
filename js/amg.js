var name = null;
function facebookShare(url, title, descr, image) {
    var winTop = (screen.height / 2) - (500 / 2);
    var winLeft = (screen.width / 2) - (200 / 2);
    window.open('http://www.facebook.com/sharer.php?s=100&p[title]=' + title + '&p[summary]=' + descr + '&p[url]=' + url + '&p[images][0]=' + image, 'sharer', 'top=' + winTop + ',left=' + winLeft + ',toolbar=0,status=0,width=' + 500 + ',height=' + 200);
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


	var bigP = random(70,200);
	var smallP = random(1,20);
	var bigN = random(2000,999900);
	var smallN = random(1,20);
	var N = random(40,70);
	var P = random(30,60);
	var item = get(items);
	var greekfood = get(greekfoods);
	var nation = get(nations);

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
		return temp;
	}
	var loadingInterval = null;
	var MaxLoadingMessages = 5;
	var messageTimes = 0;
	var temp_loading_titles = [];
	var timeoutLoading = 1;


	var loading_titles = 
	[
		"taxing the poor",
		"making life easier for rich people",
		"controlling everything",
		"taxating everything",
		"playing with prime ministers",
		"chaning the world",
		"saying that everything is perfectly ok",
		"maximazing profit",
		"pretending to care",
		"caring for the good of Europe",
		"doing complicated financial stuff",
		"asking for more",
		"blackmailing people",
		"deciding for you",
		"closing banks",
		"the euro is collapsing",
		"a Eurogroup is ongoing",
		"while having talks in some parliament",
		"making some coups",
		"twitter explodes again",
		"bringing democracy",
		"lowering some pensions",
		"we seem serious and caring"
	]
	
	var type_1a = [
		"Greece",
		"Spain",
		"Italy",
		"Portugal" 
	]

	var type_1b = [
		"should",
		"needs to",
		"has to",
		"is obligated to"
	]

	var type_1c = [
		"pay additional [N] Euros for each new [ITEM] bought",
		"give every second child to Germany to become a worker",
		"has to give [SMALLN] of blood to the closest bank.",
		"have its people sing 'Germany is Awesome' by 6 oclock this afternoon",
		"pay [BIGN] Euros to Germany for no reason in two hours",
		"shut down and rename it self to 'Germany'",
		"refer to the constitution as 'crappy old book' from now on",
		"take away food from old people and give it to the rich",
		"forbit any type of food for poor and old people",
		"make things more difficult for people in some creative way",
		"make things easier for rich people in some creative way",
		"give all of it's facebook passwords to Germany",
		"say 'yes' to everything by 12 oclock",
		"pay [BIGN] euros for every new born kid",
		"kill all babies born today",
		"burn away food in front of poor people",
		"burn some national books or something",
		"stop all planes from landing",
		"give [BIGP] of it's land to Germany",
		"receive [BIGP] tons of garbage from Germany and recycle it",
		"sacrifice [SMALLN] old people from each city",
		"cut [BIGP] on pensions starting from now",
		"raise all taxes by [BIGP]",
		"close [BIGP] of it's roads",
		"close some hospitals. Let's say [BIGP] of them",
		"kill some random citizens",
		"have a picture of Merkel in every house",
		"make the life of old people more hard in some creative way",
		"lower the amount of food consumed nationally by [SMALLN] bites",
		"raise the money of rich people by [BIGP]",
		"have it's prime minister drink the blood of [N] virgins by 2 o'clock this night",
		"have it's prime minister to stand his on one foot for [N] hours",
		"have it's prime minister to do water fasting for [N] days",
		"have it's unemployment raised by at least [BIGP]"

	]

	var type_1Greece = [
		"order [SMALLN] random citizens to punch varoufakis",
		"throw some [GREEKFOOD] on Tsipras",
		"sell at least [SMALLN] old aunts from each family to Germany",
		"sell some Greek islands",
		"raise the tax on Greek islands to [BIGP]",
		"lower the amount of [GREEKFOOD] produced by [BIGP]",
		"stop making [GREEKFOOD] cheese",
		"give the Euro won in 2004, back to Europe or pay [BIGN] Euros",
		"put some random taxes to poor people",
		"stop taxating rich people",
		"lower the intensity of the Greek sun by [SMALLP]",
		"send one [GREEKFOOD] to each German house is [SMALLN] hours",
		"raise the amount of sex by [BIGP]",
		"raise the tax of condoms in Myconos by [BIGP]",
		"allow a maximum of [SMALLN] Dj's each year for mykonos",
		"give all of its [GREEKFOOD] to Germany",
		"make the Greek sea blue waters [BIGP] more murky",
		"make the Greek sun shine by [BIGP] less",
		"burn all Varoufakis books",
		"stop saying OPA OPA",
		"give the [SMALLP] of it's value to a private bank in Switcherland",
		"decrease the size of the citizen's penises by [SMALLP]",
		"prevent women from having orgasms"
	]

	var type_2a = [
		"Tsipras",
		"Varoufakis",
		"A random greek person"
	]

	var type_2b = [
		"should",
		"needs to",
		"has to",
		"is obligated to"
	]

	var type_2c = [
		"do a spaggato [N] times or until Merkel feels happy",
		"play Mortal Kombat with Merkel, and loose [N] times",
		"reach a score of [BIGN] in FlappyBird in [SMALLN] hours or else Greece will loose [BIGP] of it's value",
		"drink the blood of [N] virgins",
		"listen to Justin Bieber for [N] hours while on heavy drugs",
		"write 'I will stay in the EU' [BIGN] times",
		"never eat [GREEKFOOD] again",
		"gain [N] kilos in [SMALLN] days to make Merkel feel thinner",
		"make a referentum if Merkel is 'awesome' or 'simply amazing'"
	]
	 
	
	var type_3a  = [
		"All [NATION] people should be thinner by [BIGP] by the end of this month to prove that the measures of austerity have been taken.",
		"Water fasting for all [NATION]",
		"Less water, less food overall for [NATION]",
		"[NATION] people should stop using umbrellas",
		"More vacations for rich and awesome people",
		"Less toilet paper for every [NATION]",
		"All [NATION] supermarkets should be replaced by German ones",
		"Jazz music should be less complicated and more austerized",
		"Mothers should kiss their children by [BIGP] less to save time and saliva",
		"Fund the [NATION] banks by [SMALLP] while raising the tax on the [NATION] people by [BIGP]"
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
			$("#final_name").show("slow");
			$("#final_name").html(measure);
			return;
		} 
		//var randomMessage = randomFromArray(loading_titles);
		 
		$("#loading_title").html( "..." + get(loading_titles) );
		$("#progress_bar").css({ width: (  messageTimes   / MaxLoadingMessages) *100 + "%"});
		//temp_loading_titles.push ( loading_titles.splice(randomMessage,1) );
		messageTimes ++;
	}

	$.ajax({
	  url: "http://www.greek-cafeteria-name-generator.com/counter.php",
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


