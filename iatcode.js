define(['pipAPI', 'https://cdn.jsdelivr.net/gh/baranan/minno-tasks@0.*/amp/qualtrics/qamp.js'], function(APIConstructor, ampExtension){

	var API = new APIConstructor();
	
	return ampExtension({
		primeCats :  [
			{
				nameForFeedback : 'Black people',
				nameForLogging : 'Black people',
				mediaArray : [
				    {image : 'b01.jpg'}, 
					{image : 'b02.jpg'}, 
					{image : 'b03.jpg'}, 
					{image : 'b04.jpg'}, 
					{image : 'b05.jpg'}, 
					{image : 'b06.jpg'}, 
					{image : 'b07.jpg'}, 
					{image : 'b08.jpg'}, 
					{image : 'b09.jpg'}, 
					{image : 'b10.jpg'}, 
					{image : 'b11.jpg'}, 
					{image : 'b12.jpg'}]

			}, 
			{
				nameForFeedback : 'White people',
				nameForLogging : 'White people',
				mediaArray : [
				    {image : 'w01.jpg'}, 
					{image : 'w02.jpg'}, 
					{image : 'w03.jpg'}, 
					{image : 'w04.jpg'}, 
					{image : 'w05.jpg'}, 
					{image : 'w06.jpg'}, 
					{image : 'w07.jpg'}, 
					{image : 'w08.jpg'}, 
					{image : 'w09.jpg'}, 
					{image : 'w10.jpg'}, 
					{image : 'w11.jpg'}, 
					{image : 'w12.jpg'}]
			}
		],

		examplePrimeStimulus : 
		{
			nameForLogging : 'examplePrime',
			mediaArray : [{image : 'ampchair.jpg'}, {image : 'amplamp.jpg'}, {image : 'ampumbrella.jpg'}]
		},

		base_url : {
			image : 'https://baranan.github.io/minno-tasks/images/ampImages'
		},

		trialsInBlock : [40, 40, 40], //Number of trials in each block 
		trialsInExample : 3, //Change to 0 if you don't want an example block

		//Duration parameters.
		fixationDuration : -1, //It means that by default we do not use fixation.
		primeDuration : 75, 
		postPrimeDuration : 125, //Duration of blank screen between prime and target.
		targetDuration : 100, //Duration of target presentation.
		showRatingDuration : 300, //In the 7-responses option, for how long to show the selected rating.
		ITI : 250, //Duration between trials.

		responses : 2 //This parameter
	});
});
