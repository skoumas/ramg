<? 
	ini_set('display_errors', 1); 
	error_reporting(E_ALL);
	$mainTitle = "Random Austerity Meausure Generator";
	$measure = isset($_GET['measure']) ?  $_GET["measure"] : null;
	$title = ($measure==null) ?  $mainTitle :  "Your New Austerity Measure is '" . $measure . "'' " . $mainTitle;

	$file = 'counter.txt';
	$counter = file_get_contents($file);
?>
<html>
<head>
	<title> <?= $mainTitle ?> </title>
	<link rel="stylesheet" href="css/bootstrap.min.css">
	<link rel="stylesheet" href="css/bootstrap-theme.min.css">
	<link rel="stylesheet" href="css/cover.css">
	<link rel="stylesheet" href="css/font-awesome.min.css">

	<meta name="description" content="Create your own random austerity measures">
	<meta name="keywords" content="Greece, Greek, Hellas, Germany
	Europian, Union, Austerity, Measures, Grexit, Tsipras, Merkel, Soimple, Parliament
	ThisisaCoup, Coup, Finance, collapse, Poor, Rich, Music">

	<? if ($measure == null): ?>
		<meta property="og:title" content="<?=$mainTitle?>" />
		<meta property="og:description" content="The Random Austerity Measures Generator
		will generate a random Europian Union Austerity measure for you..." />
	<? else : ?>
		<meta property="og:title" content="Click here to see my Austerity Measure..." />
		<meta property="og:description" content="I created my own random austerity measure using <?= $mainTitle ?>. Click this link to see it..." />
	<? endif;?>
	<meta property="og:image" content="images/logo.png" />
	<link rel="icon" type="image/png" href="/images/favicon.png" />


</head>

<body>

	<div class="site-wrapper">
      <div class="site-wrapper-inner">
        <div class="cover-container">


         <!-- FIRST SCREEN -->
          <div id="first" class="inner cover" >
          	<a href="http://www.random-austerity-measure-generator.com"><img src="images/logo.png"  width="150"></a>
            <h1 class="cover-heading">Austerity Measures Generator</h1>
            <p class="lead">Want to apply an austerity measure and still not sure what?<bR>Here is your tool...</p>
            
            <p class="lead">
              <a href="#" id="button_generate" class="btn btn-lg btn-danger">Generate an Austerity Measure</a>
            </p>
            <p> <?=  $counter ?> austerity measures generated so far...</p>
          </div>

          <!-- LOADING SCREEN -->
          <div id="loading" class="inner cover" >
            <h1 class="cover-heading"><i class="fa fa-spin fa-spinner"></i> </h1>
            <p class="lead">Please wait while...</p>
            
            <div class="progress">	
					<div id="progress_bar" class="progress-bar progress-bar-lg" role="progressbar" aria-valuenow="70"
					aria-valuemin="0" aria-valuemax="100" style="width:0%">
					<span class="lead" id="loading_title"> </span>
				  </div>
			</div>
          </div>

          
          <!-- FINAL SCREEN -->
          <div id="final" class="inner cover" >
          	<a href="http://www.random-austerity-measure-generator.com"><img src="images/logo.png" width="150"></a>
			<p class="lead" id="loading_title">Your austerity measure is....</p>
			<h1 class="cover-heading" id="final_name"></h1><p class="lead">
             <p clas="lead">
    			<a href="#" id="button_twitter_share" class="btn btn-lg btn-info"><i class="fa fa-twitter"></i> Share</a>
              <a href="#" id="button_share" class="btn btn-lg btn-info"><i class="fa fa-facebook"></i> Share</a>
              <a href="#" id="button_reset" class="btn btn-lg btn-danger"><i class="fa fa-refresh"></i> Retry</a>
            </p>
          </div>


          <!-- CAME FROM LINKS -->
          <div id="link" class="inner cover" >
          	<a href="http://www.random-austerity-measure-generator.com"><img src="images/logo.png" width="150"></a>
			<p class="lead">My austerity measure is....</p>
			<h1 class="cover-heading" id="link_name">"<?= $measure ?>"</h1>
			<br><br>
			<h4>  Feeling like demanting some austerity measures? </h4>
			 
			<p class="lead">
              <a href="#" onClick="generateName()" class="btn btn-lg btn-danger">Generate Yours</a>
            </p>
          </div>
           


	      <div class="mastfoot">
	        <div class="inner">


		<script async src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
		<!-- RandomAusterity -->
		<ins class="adsbygoogle"
		     style="display:block"
		     data-ad-client="ca-pub-6890129091584038"
		     data-ad-slot="6999704747"
		     data-ad-format="auto"></ins>
		<script>
		(adsbygoogle = window.adsbygoogle || []).push({});
		</script>

		<div class="fb-page" style="display:none;height:50px!important"
		  data-href="https://www.facebook.com/randomausteritymeasuregenerator"
		  data-width="380" data-height="50" 
		  data-hide-cover="true" data-show-facepile="false" 
		  data-show-posts="false"></div>

		  <div class="fb-like" style="background-color:#fff;padding:10px; border-radius:5px;text-align:center" data-href="https://www.facebook.com/randomausteritymeasuregenerator" data-layout="standard" data-action="like" data-colorscheme="light" data-show-faces="true" data-share="true"></div>

		  <br><br>
	        <p>Website made for fun. <br>
	          	Help Greek people overcome crisis by enjoying a nice coffee at the Greek islands!</p>
	        </div>
	      </div>

        </div>

      </div> 

    </div>

	<!-- SCRIPTS -->
	<div id="fb-root"></div>
	<script>(function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0];
	  if (d.getElementById(id)) return;
	  js = d.createElement(s); js.id = id;
	  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.4&appId=133816256822971";
	  fjs.parentNode.insertBefore(js, fjs);
	}(document, 'script', 'facebook-jssdk'));
	</script>

	<script src="js/jquery-1.11.3.min.js"></script>
	<script src="js/bootstrap.js"></script>
	<script src="js/amg.js"></script>
	<script>
		$("#button_generate").click(function(){
			generateName();
		});
		$("#button_reset").click(function(){
			reset();
		});
		$("#button_share").click(function(){
			facebookShare("http://www.random-austerity-measure-generator.com/?measure=" + measure,
			 "Check my Austerity Measure and Generate Yours...",
			 "I created my own Austerity Measure using the Random Austerity Measure Generator.",
			 "http://www.random-austerity-measure-generator.com/images/facebook.jpg");	 
		});
		$("#button_twitter_share").click(function(){
			twitterShare(measure);
		});

		<? if ($measure != null) : ?>
			$("#link").css({"display":"block"});
			$("#first").css({"display":"none"});
			$("#link_name").slideDown();
		<? else : ?>
			$("#first").css({"display":"block"});
		<? endif; ?>

	</script>
	
	<script>
	  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

	  ga('create', 'UA-65029286-2', 'auto');
	  ga('send', 'pageview');

	</script>
 
</body>
</html>