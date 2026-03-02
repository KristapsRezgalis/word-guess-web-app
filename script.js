"use strict";

/* program procedures:
	-> new guessing word is randomly selected
	-> enter letters by pressing keyboard keys - a function to enter a letter
	-> a variable counts number of DIV rows (DIV id names should be called accordingly  1-1; 1-2... 2-1, 2-2 etc.)
	-> each letter is displayed in html in it's own DIV (total 5 letters) - variable counts each letter increase
	-> when 5 letters are entered, they are copied to first (top) row of DIVs
	-> after they are put in those DIVs, each letter is checked with the guessed word
	-> if letter place matches, DIV becomes Green - if it's in other place in the guessed word, DIV becomes Yellow - if's none, DIV becomes red
	-> if guessed word hasn't been guessed, a new row of DIV letters can be entered using the same function -> same procedures repeat
	-> if guessing word has been guessed and all letters match the following happens:
		-> score has been added
		-> a new guessing word is selected
		-> active row number variable is set back to 0
		-> if the previous word was guessed with first try (while active row is 0), another Heart is added to top row DIV (max 5 hearts)
	-> if player doesn't guess until active row number is 4 (or 5 - needs to be decided)
		-> players loosed 1 heart -> one DIV with heart is taken off from the top DIV row
		-> a new guessing word is selected
		-> active row number variable is set back to 0
	-> if there are no hearts left, game ends and the final score can be saved in highscores
		-> a module appears with a field where a name can me entered
		-> name is added in highscore table (probably all scores with names are stored in one array variable which is sorted each time)
		
*/

let wordsLV = [['amats','alnis','arods','avots','ambra','banka','bante','bedre','bumba','biete','birka','burts','cauna','celis','ciems','cilpa','cilts','cimds','cirta','daina','darbs','darva','delna','diena','dogma','druva','drons','dzeja','etaps','ezers','fonds','forma','filma','ferma','gaiss','galds','galva','griba','gaita','grupa','himna','jumts','kaija','kaite','kaste','kakls','kakts','kalns','kauls','kauns','klase','kokle','konts','krava','laiks','laime','laipa','laiva','lampa','lapsa','lauks','lazda','liepa','lieta','likme','maize','meita','miers','miets','miegs','miesa','migla','maksa','masts','manta','milti','naids','nakts','niere','nauda','norma','pasts','ozols','piens','pirts','plecs','prese','puika','purns','putns','purvs','posms','rudzi','saime','sakne','sarma','saule','siena','siers','sirds','skola','solis','svece','sieva','summa','takts','tauta','telpa','tiesa','tilts','trase','truba','tumsa','uguns','varde','vilks','vista','vaina','vaigs','vieta','viela','zelts','ziema','zirgs','zvans','zieds'],
['world','house','place','group','party','money','point','state','night','water','thing','order','power','court','level','child','south','staff','woman','north','sense','death','range','table','trade','study','other','price','union','value','paper','right','voice','stage','light','march','board','month','music','field','award','issue','basis','front','heart','force','model','space','peter','hotel','floor','style','press','doubt','blood','sound','title','glass','earth','river','whole','piece','mouth','peace','start','share','truth','smith','stone','queen','stock','horse','plant','visit','scale','trust','chair','cause','speed','crime','pound','henry','match','scene','stuff','japan','claim','video','trial','phone','train','sight','grant','shape','offer','smile','track','route','china','touch','youth','waste','crown','birth','faith','entry','total','major','owner','lunch','cross','judge','guide','cover','jones','green','brain','phase','coast','drink','drive','metal','index','adult','sport','noise','agent','simon','motor','sheet','brown','crowd','shock','fruit','steel','plate','grass','dress','theme','error','lewis','white','chief','sleep','beach','sugar','panel','dream','bread','chain','chest','frank','block','store','drama','skill','round','rugby','scope','plane','uncle','abuse','limit','taste','fault','tower','input','enemy','anger','cycle','pilot','novel','reply','prize','nurse','cream','depth','sheep','dance','spite','coach','ratio','fight','unity','steam','clock','pride','buyer','smoke','score','watch','apple','trend','proof','pitch','shirt','knife','draft','shift','terry','squad','laura','colin','curve','wheel','topic','guard','angle','smell','grace','flesh','mummy','pupil','guest','delay','mayor','logic','album','habit','billy','audit','baker','paint','great','storm','worth','black','daddy','canal','robin','kelly','leave','lease','young','louis','print','fleet','crash','count','asset','cloud','villa','actor','ocean','brand','craft','alarm','bench','diary','abbey','grade','bible','jimmy','shell','cloth','piano','clerk','stake','barry','stand','mouse','cable','manor','local','penny','shame','check','forum','brick','fraud','stick','grain','movie','cheek','reign','label','theft','lover','shore','guilt','devil','fence','glory','panic','juice','debut','laugh','chaos','bruce','strip','derby','jenny','chart','widow','essay','fibre','patch','fluid','virus','pause','angel','cliff','brass','magic','honey','rover','bacon','sally','trick','bonus','straw','shelf','sauce','grief','verse','shade','heath','sword','waist','slope','betty','organ','skirt','ghost','serum','lorry','brush','spell','lodge','devon','ozone','nerve','craig','rally','eagle','bowel','suite','ridge','reach','human','gould','breed','bloke','photo','lemon','charm','elite','basin','venue','flood','swing','punch','grave','saint','intel','corps','bunch','usage','trail','carol','tommy','width','ferry','array','crack','clash','alpha','truck','trace','salad','medal','cabin','plain','bride','stamp','tutor','mount','bobby','thumb','mercy','fever','laser','realm','blade','boost','flour','arrow','pulse','elbow','clive','graph','flame','ellen','skull','sweat','texas','arena','marsh','maker','ulcer','folly','wrist','frost','donna','choir','rider','wheat','rival','exile','flora','spine','holly','lobby','irony','ankle','giant','mason','dairy','merit','chase','ideal','agony','gloom','toast','linen','probe','scent','canon','slide','metre','beard','chalk','blast','tiger','vicar','ruler','motif','paddy','beast','worry','ivory','split','slave','hedge','lotus','shaft','cargo','prose','altar','small','flash','piper','quest','quota','torch','slice','feast','siege','queue','blame','bitch','towel','rebel','decay','stool','telly','hurry','onset','libel','belly','grasp','twist','basil','maxim','urine','trunk','mould','baron','fairy','batch','colon','spray','madam','wendy','guild','coral','thigh','valve','disco','drift','hazel','teddy','molly','greek','drill','thief','tweed','snake','derry','tribe','trout','morse','kylie','spoon','stall','daily','surge','grove','benny','treat','knock','gooch','pearl','nylon','purse','depot','delta','gauge','rifle','onion','odour','salon','radar','chill','hardy','globe','crust','guess','wigan','cloak','orbit','oscar','blaze','midst','haven','tooth','climb','flock','malta','brook','wrong','daisy','chess','burst','mandy','nanny','dolly','donor','cohen','slate','amino','booth','duchy','hobby','alley','idiot','verge','leigh','drain','crane','scrap','wagon','stoke','abbot','genre','costa','chile','stack','mungo','lever','dwarf','witch','whale','crest','chord','nancy','larry','perry','tract','molla','badge','pasta','joint','slump','ditch','locke','jerry','irene','minus','venus','troop','curry','blend','sweep','porch','penis','lager','flint','scarf','tonic','cough','litre','fiver','attic','creed','cocoa','weber','goose','jelly','greed','carer','pizza','brake','meter','assay','boxer','puppy','berry','guido','couch','mound','brief','glare','inset','steak','moran','hatch','cider','apron','bloom','newco','sting','token','quote','niece','query','robot','rotor','thorn','patio','gedge','cigar','shout','sperm','ethos','ryder','frown','satin','bream','truce','spark','niche','aisle','locus','grill','forth','beech','screw','paste','brink','metro','gypsy','wight','burke','tummy','friar','swift','bunny','oxide','vowel','sharp','co-op','hurst','razor','fancy','groom','satan','haste','cache','guise','strap','canoe','build','peach','vogue','tenor','birch','gamma','bliss','stare','curse','flute','parry','mafia','viola','dread','crook','stain','glove','remit','genus','honda','rouge','candy','flank','wreck','vault','pinch','foyer','camel','modem','miner','flair','stern','fauna','wedge','clown','ghana','ledge','gloss','tramp','shine','brent','jewel','ethel','firth','bodie','proxy','roach','maple','gorge','crewe','decor','stair','wrath','bingo','groin','scalp','belle','tempo','savoy','loser','aroma','ascot','motto','basic','havoc','aggie','willy','blind','batty','monte','yeast','comic','scrum','wharf','lynch','ounce','broom','click','snack','crypt','spate','beryl','pouch','maize','liner','tonne','vinyl','flush','dough','envoy','smart','shark','farce','arson','payne','drake','turbo','platt','minor','boyle','broad','munro','horne','deity','synod','alien','stein','vodka','resin','alloy','shrug','trait','grand','spade','sweet','sauna','voter','scout','gemma','chuck','franc','snail','scorn','pedal','shake','chant','spear','demon','clone','swell','heron','noble','gleam','booze','brett','kitty','peril','chunk','grape','finch','madge','spike','stead','senna','patsy','rogue','barge','laird','suede','topaz','plank','rhyme','shire','relay','chick','scare','brute','hitch','idiom','flask','gully','blitz','fella','indie','tyler','creek','buddy','tunic','gravy','olive','laity','comet','forte','crisp','duvet','rhine','gland','filth','steen','aunty','ethic','tally','blanc','shrub','atlas','lance','croft','cheer','mince','dogma','poppy','lough','hound','sigma','venom','adobe','caste','combo','prior','siren','whore','chang','dummy','scrub','shoot','bosom','forge','smash','acorn','xerox','logan','lapse','denim','smyth','piety','rhino','syrup','matey','flake','amber','brace','flare','smear','stump','hi-fi','para.','burgh','avail','bluff','foley','groan','mucus','psalm','crate','stile','zebra','diver','bully','reeve','cobra','shawl','spire','torso','blank','think','brunt','roche','pixel','facet','jetty','gable','toxin','leone','crush','optic','harem','knack','moray','strat','opium','poker','vigil','bowie','swamp','sheen','berth','debit','sonny','sewer','fritz','taboo','norma','woody','stint','baton','mixer','clint','slang','ariel','wally','shoal','bulge','clump','flick','slick','helix','stunt','timer','comma','cadet','melon','hinge','barth','smack','hogan','champ','comer','digit','stout','glint','relic']
];
let activeDivRow = 1; // counts how many words have been already entered / how many DIV rows are filled with words
let inputLetterCount = 1; // counts how many letter user has eneterd in the bottom row DIV
let activeLanguage = 0; // 0 - latvian; 1 - english
let randNum = Math.floor(Math.random() * wordsLV[activeLanguage].length);
let guessingWord = wordsLV[activeLanguage][randNum].toUpperCase();
let enteredWord = '';
let score = 0;
let gameActive = true;
let endOneGuess = false;
let numOfHearts = 3;
let LVgameRecords = [];
/*
LVgameRecords.push(['Kristaps 1',2]);
LVgameRecords.push(['Kristaps 2',10]);
LVgameRecords.push(['Kristaps 3',4]);
LVgameRecords.push(['Kristaps 4',0]);
LVgameRecords.push(['Kristaps 5',12]);
*/
let ENGgameRecords = [];
let LVgamesPlayed = 0;
let playerName;
document.getElementById(`letter-1-1`).textContent = guessingWord[0];
console.log(guessingWord + " - "+ randNum);


window.addEventListener("keydown", function (event) {
	let eventKeycode = event.keyCode;
	console.log(`event.key - ${event.key}`)
	
	if (gameActive === false) { // if game is not active and a playes has lost - his name+record is saved and added to the highscores
		if (event.key == "Enter") {
			let playerName = document.getElementById('playerName').value;
			console.log(`playerName === ${playerName}`);
			(activeLanguage == 0) ? LVgameRecords.push([playerName,score]) : ENGgameRecords.push([playerName,score]);
			console.log(`LVgameRecords - ${LVgameRecords}`);
			document.getElementById('endgame-modal').style.display = "none";
			LVgamesPlayed++;
			resetGeme();
			document.getElementById('playerName').value = '';
			playerName = '';
		}
	} else if (endOneGuess === true && gameActive === true) {
		endOneGuess = false
		startNewWord(); 
	} else {
		//  if a new letter is pressed it is added in the bottom DIV row
		if (inputLetterCount <= 5  && eventKeycode >= 65 && eventKeycode <= 90){
			document.getElementById(`inputLetter-${inputLetterCount}`).textContent = event.key.toUpperCase();
			enteredWord += event.key.toUpperCase();
			console.log(enteredWord);
			
			inputLetterCount++;
		} 
		// if Backspace is pressed - last letter is deleted from the bottom DIV row
		if (event.key == "Backspace" && inputLetterCount > 1) {
			document.getElementById(`inputLetter-${inputLetterCount-1}`).textContent = '';
			enteredWord = removeLastCharacter(enteredWord); // calls function that removes last letter from enterWord variable
			inputLetterCount--;
		}
		// if all 5 letters are added and Enter is pressed, the word is checked and written in upper active DIV row
		if (inputLetterCount == 6 && event.key == "Enter") {
			for (let i = 1; i <= 5; i++) {
				document.getElementById(`letter-${activeDivRow}-${i}`).textContent = document.getElementById(`inputLetter-${i}`).textContent;
			}
			for (let i = 1; i <= 5; i++) {
				document.getElementById(`inputLetter-${i}`).textContent = '';
			}
			checkLetters(guessingWord, enteredWord); 
			
			// actions if word is guessed - game adds score, sets starting values and clears game field
			if (guessingWord == enteredWord) {
				checkLetters(guessingWord, enteredWord); 

				score += 12 - (activeDivRow * 2);
				document.getElementById('score-content').textContent = score;
				endOneGuess = true;
				
				if (activeDivRow == 1 && numOfHearts < 5) {
					addHeart();
					
					numOfHearts++;
				}
			} else if (numOfHearts == 1 && guessingWord !== enteredWord && activeDivRow == 5) { // id all hearts are lost - game ends
				// removes 1 heart
				removeHeart();
				
				for (let i = 1; i <= 5; i++) {
					document.getElementById(`inputLetter-${i}`).textContent = guessingWord[i-1];
					document.getElementById(`inputLetter-field-5-${i}`).style.backgroundColor = 'LightGreen';
				}
				
				openEndgameModal();
				
				gameActive = false;	
			} else if (guessingWord !== enteredWord && activeDivRow == 5) { // if all guesses are incorrect - game shows the correct word and player loses 1 heart 
				for (let i = 1; i <= 5; i++) {
					document.getElementById(`inputLetter-${i}`).textContent = guessingWord[i-1];
					document.getElementById(`inputLetter-field-5-${i}`).style.backgroundColor = 'LightGreen';
				}
				
				// removes 1 heart
				removeHeart();
				
				endOneGuess = true;
			} else { // if not guessed, next DIV row is activated and user can enter next word
				activeDivRow++;
				inputLetterCount = 1;
				console.log(`activeDivRow = ${activeDivRow}`);
				console.log(`activeDivRow = ${activeDivRow}`);
				enteredWord = '';
				console.log(`enteredWord = ${enteredWord}`);
			}
			
		}
	}
});

// function to check each entered letter - to see if it matches or is anywhere in the guessing word
let checkLetters = function (xWord, enteredWord) {
	for (let i = 0; i < 5; i++) {
		let letterInWord = false;
		if (enteredWord[i] == xWord[i]) {
			console.log(`letter-${activeDivRow-1}-${i+1}`);
			document.getElementById(`field-${activeDivRow}-${i+1}`).style.backgroundColor = 'LightGreen';
		} else {
			for (let j = 0; j < 5; j++) {
				if (enteredWord[i] == xWord[j]) {
					letterInWord = true;
					document.getElementById(`field-${activeDivRow}-${i+1}`).style.backgroundColor = 'Yellow';
				}
			}
			if (letterInWord == false) {
				document.getElementById(`field-${activeDivRow}-${i+1}`).style.backgroundColor = 'Red';
			}
		}
	}
	
}

// function to remove last letter from a word
let removeLastCharacter = function (str) {
    let n = str.length;
    let newString = "";
    for (let i = 0; i < n - 1; i++) {
        newString += str[i];
    }
    return newString;
}

let removeHeart = function () {
	// removes 1 heart
	const elementToRemove = document.getElementById("heart-3");
	elementToRemove.remove();
	
	numOfHearts--;
}

// function to set default values to everything and generate a new guessing word
let startNewWord = function () {
	activeDivRow = 1;
	inputLetterCount = 1;
	enteredWord = '';
	guessingWord = wordsLV[activeLanguage][  Math.floor(Math.random() * wordsLV[activeLanguage].length)  ].toUpperCase(); // generates new guessing word
	console.log(`guessingWord - ${guessingWord}`);
	
	for (let i = 1; i <= 5; i++) {
		for (let j = 1; j <= 5; j++) {
			document.getElementById(`letter-${i}-${j}`).textContent = '';
			document.getElementById(`field-${i}-${j}`).style.backgroundColor = '';
			document.getElementById(`inputLetter-${i}`).textContent = '';
			document.getElementById(`inputLetter-field-5-${i}`).style.backgroundColor = '';
		}
	}
	document.getElementById(`letter-1-1`).textContent = guessingWord[0];
}

let openEndgameModal = function () {
	document.getElementById('endgame-modal').style.display = "block";
	document.getElementById(`engame-score`).textContent = `Your score: ${score}`;
}

// function to add 1 heart
let addHeart = function () {
	const newDiv = document.createElement("div");
	newDiv.classList.add("first-row-content");
	newDiv.setAttribute("id", "heart-3");
	const newImg = document.createElement("img");
	newImg.classList.add("heart");
	newImg.setAttribute("src", "images/heart.png");
	
	newDiv.appendChild(newImg);
	document.getElementById("hearts-display").appendChild(newDiv);
}

// functiion to start a new game
let resetGeme = function () {
	activeDivRow = 1; // counts how many words have been already entered / how many DIV rows are filled with words
	inputLetterCount = 1; // counts how many letter user has eneterd in the bottom row DIV
	randNum = Math.floor(Math.random() * wordsLV[activeLanguage].length);
	guessingWord = wordsLV[activeLanguage][randNum].toUpperCase();
	enteredWord = '';
	score = 0;
	gameActive = true;
	endOneGuess = false;
	document.getElementById('score-content').textContent = 0;
	
	for (let i = 1; i <= 5; i++) {
		for (let j = 1; j <= 5; j++) {
			document.getElementById(`letter-${i}-${j}`).textContent = '';
			document.getElementById(`field-${i}-${j}`).style.backgroundColor = '';
			document.getElementById(`inputLetter-${i}`).textContent = '';
			document.getElementById(`inputLetter-field-5-${i}`).style.backgroundColor = '';
		}
	}
	document.getElementById(`letter-1-1`).textContent = guessingWord[0];
	console.log(guessingWord + " - "+ randNum);
	
	// resets heart images to 3 
	if (numOfHearts < 3) {
		for (let i = 0; i < 3-numOfHearts; i++)
		addHeart();
	}
	numOfHearts = 3;
}

let LVlang = document.getElementById('LVlang');
let ENGlang = document.getElementById('ENGlang');
let highscores = document.getElementById('highscores');

let selectLV = function () {
	activeLanguage = 0;
	console.log(`Active language - LV`);
	resetGeme();
	LVlang.classList.remove("menu-items");
	LVlang.classList.add("menu-items-active");
	ENGlang.classList.remove("menu-items-active");
	ENGlang.classList.add("menu-items");
	highscores.classList.remove("menu-items-active");
	highscores.classList.add("menu-items");
}

let selectENG = function () {
	activeLanguage = 1;
	console.log(`Active language - ENG`);
	resetGeme();
	ENGlang.classList.remove("menu-items");
	ENGlang.classList.add("menu-items-active");
	LVlang.classList.remove("menu-items-active");
	LVlang.classList.add("menu-items");
	highscores.classList.remove("menu-items-active");
	highscores.classList.add("menu-items");
}

let showHighscores = function () {
	highscores.classList.remove("menu-items");
	highscores.classList.add("menu-items-active");
	ENGlang.classList.remove("menu-items-active");
	ENGlang.classList.add("menu-items");
	LVlang.classList.remove("menu-items-active");
	LVlang.classList.add("menu-items");
	
	document.getElementById('highscores-modal').style.display = "block";
	
	showHighscoresLanguage(0);
	
}

let highscoresModal = document.getElementById('highscores-modal');

window.onclick = function(event) {
	if (event.target == highscoresModal) {
		document.getElementById('highscores-modal').style.display = "none";
		highscores.classList.remove("menu-items-active");
		highscores.classList.add("menu-items");
		
		(activeLanguage == 0) ? LVlang.classList.add("menu-items-active") : ENGlang.classList.add("menu-items-active");
	}
}

let closeHighscores = function () {
	document.getElementById('highscores-modal').style.display = "none";
	highscores.classList.remove("menu-items-active");
	highscores.classList.add("menu-items");
	
	(activeLanguage == 0) ? LVlang.classList.add("menu-items-active") : ENGlang.classList.add("menu-items-active");
}

let highscoresButtonLV = document.getElementById('highscoresButtonLV');
let highscoresButtonENG = document.getElementById('highscoresButtonENG');
let highscoresTable = document.getElementById('highscores-table');

let showHighscoresLanguage = function (language) {
	let numberOfScores = (language == 0) ? LVgameRecords.length : ENGgameRecords.length;
	console.log(`${((language == 0) ? 'Latvian' : 'English')} `);
	
	// If LV records are selected ->
	if (language == 0){
		console.log(`Selected language - Latvian`);
		highscoresButtonLV.classList.remove("highscores-languageSelect");
		highscoresButtonLV.classList.add("highscores-languageSelect-active");
		highscoresButtonENG.classList.remove("highscores-languageSelect-active");
		highscoresButtonENG.classList.add("highscores-languageSelect");
		
		let tableRowsToDelete = highscoresTable.rows.length;
			console.log(`tableRowsToDelete = ${tableRowsToDelete}`);
			
			// clears current leaderboard table
			while (tableRowsToDelete > 0){
				highscoresTable.deleteRow(0);
				tableRowsToDelete--;
			}
			
		// sorts LV record table
		LVgameRecords.sort(function (a, b) {
			console.log(`SORTING LV RECORDS`);
			return b[1] - a[1];
		});
		
		// puts in full list of leaders LV
		for (let i = 0; i < numberOfScores; i++) {
			
			let tableRows;
			for (let i = 0; i < LVgameRecords.length; i++) {
				tableRows = highscoresTable.insertRow();
				console.log(`tableRows = ${tableRows.length}`);
			}
			let recordName;
			let recordScore;
			recordName = tableRows.insertCell();
			recordScore = tableRows.insertCell();
			recordName.innerHTML = LVgameRecords[i][0];
			recordScore.innerHTML = LVgameRecords[i][1];
			recordName.classList.add("tableData");
			recordScore.classList.add("tableData");
		}
	// If ENG records are selected ->
	} else if (language == 1){
		console.log(`Selected language - English`);
		highscoresButtonENG.classList.remove("highscores-languageSelect");
		highscoresButtonENG.classList.add("highscores-languageSelect-active");
		highscoresButtonLV.classList.remove("highscores-languageSelect-active");
		highscoresButtonLV.classList.add("highscores-languageSelect");
		
		let tableRowsToDelete = highscoresTable.rows.length;
			console.log(`tableRowsToDelete = ${tableRowsToDelete}`);
			
			// clears current leaderboard table
			while (tableRowsToDelete > 0){
				highscoresTable.deleteRow(0);
				tableRowsToDelete--;
			}
			
		// sorts ENG record table
		ENGgameRecords.sort(function (a, b) {
			console.log(`SORTING LV RECORDS`);
			return b[1] - a[1];
		});
		
		// puts in full list of leaders LV
		for (let i = 0; i < numberOfScores; i++) {
			
			let tableRows;
			for (let i = 0; i < ENGgameRecords.length; i++) {
				tableRows = highscoresTable.insertRow();
				console.log(`tableRows = ${tableRows.length}`);
			}
			let recordName;
			let recordScore;
			recordName = tableRows.insertCell();
			recordScore = tableRows.insertCell();
			recordName.innerHTML = ENGgameRecords[i][0];
			recordScore.innerHTML = ENGgameRecords[i][1];
			recordName.classList.add("tableData");
			recordScore.classList.add("tableData");
		}
	}
}