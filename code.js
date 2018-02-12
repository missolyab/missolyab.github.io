//
// this is just a stub for a function you need to implement
//
function getStats(txt) {
    let display = {
        nChars: numChars(txt),
        nWords: numWords(txt),
        nLines: numLines(txt),
        nNonEmptyLines: numNonEmptyLines(txt),
	maxLineLength: longestLine(txt),
        averageWordLength: avgWordLength(txt),
        palindromes: listPalindromes(txt),
        longestWords: tenLongestWords(txt),
        mostFrequentWords: tenMostFrequesnt(txt)
    };
	return display;
}

/* Total number of characters */

function numChars(txt) {
	return txt.length;
}


/* Total number of words */

function numWords(txt) {
	let words = txt.match(/\b(\w+)\b/g);
	return words.length;
}


/* Number of lines */

function numLines(txt) {
	let lines = 1;
	
	for (let m = 0, n = txt.length; m < n; ++m) {
		if (txt[m] === '\n') {
			++lines;
		}
	}
	return lines;
}

/* Number of nonempty lines */

function numNonEmptyLines(txt) {
	let numLines = 0;
	let lines = txt.split("\n");

	for (let i = 0; i < lines.length; i++) {
		let line = lines[i].replace(/\s/g, "");
		
  		if (line.length > 0) {
			numLines++;
		}
	}
	return numLines;
}


/* Length of the longest line */

function longestLine(txt) {
	let longestLine = 0;
	let lines = txt.split("\n");

	for (let n = 0; n < lines.length; n++) {
		if (lines[n].length > longestLine) {
			longestLine = lines[n].length;
		}
	}
	return longestLine;
}

/* Average word length */

function avgWordLength(txt) {
	let charSum = 0;
	let words = txt.match(/\b(\w+)\b/g);
	let numWords = words.length;

	for (let n = 0; n < words.length; n++) {
		charSum = charSum + words[n].length;
	}
	let avgLength = charSum/numWords;
	return avgLength;
}


/* List of palindromes */

function listPalindromes(txt) {
	let list = [];
	let words = txt.match(/\b(\w+)\b/g);

	for (let n = 0; n < words.length; n++) {
		if (words[n].length > 2) {
			if (words[n].toLowerCase() === words[n].toLowerCase().split('').reverse().join('')) {
				let palindrome = words[n].toLowerCase();
				list.push(palindrome);
			}
		}
	}
	return list;
}


/* 10 longest words */

function tenLongestWords(txt) {
	let list = [];
	let words = txt.match(/\b(\w+)\b/g);

	for(let i = 0; i < words.length; i++){
		if(list.indexOf(words[i]) == -1){
			list.push(words[i]);
		}
	}
	
	for (let i = 0; i < list.length; i++) {
		list[i] = list[i].toLowerCase();
	}
	
	list.sort();
  	list.sort(function(a,b) {
  		return b.length - a.length;
 		 });

	//list.reverse();
	
	while (list.length > 10) {
		list.pop();
	}

	return list;
}

/* 10 most frequent words */

function tenMostFrequesnt(txt) {
	
	let count = 0;
	let order = [];
	let list = [];
	let output = [];
	let result = {};
	let words = txt.match(/\b(\w+)\b/g);

	for (let i = 0; i < words.length; i++) {
		words[i] = words[i].toLowerCase();
	}

	words.sort();

	// Object with each word and its count
	
	for (let k = 0, l = words.length; k < l; k++) {
   		result[words[k]] = (result[words[k]] || 0) + 1;
	}


	// Count the number of times each element of the non-doubles array occurs in a doubles array and push it into a new array

	
	// Get rid of doubles for array 1
	
	for(let i = 0; i < words.length; i++){
		if(list.indexOf(words[i]) == -1){
			list.push(words[i]);
		}
	}

	
	// Count how many times a word appears

    	for (let n = 0; n < list.length; n++) { // itirating through sorted LIST non-doubles array
		for (let m = 0; m < words.length; m++) { // itirating through sorted WORDS doubles array
			if (words[m] === list[n]) {
            		count++;
			}
        	}
		order.push(count);
		count = 0;
	}

	// Array of sorted numbers in descending order
	order.sort(function(a, b){return b-a});

	// Only 10 highhest counts left
	while (order.length > 10) {
		order.pop();
	}

	// Match the numbers to the numbers in the object and push it into an array
	
	for (let j = 0; j < order.length; j++) {
		for (let c = 0; c < result.length; c++) {
			if (result[words[k]] === order[j]) {
				output.push(words[k] + "(" + order[j] + ")");
			}
		}
	}

	return output;
}



