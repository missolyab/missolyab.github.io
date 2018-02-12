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
        averageWordLength: 3.3,
        palindromes: ["12321", "kayak", "mom"],
        longestWords: ["xxxxxxxxx", "123444444"],
        mostFrequentWords: ["hello(7)", "world(1)"]
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
	txt.replace(/\s/g, "");

	for (let i = 0; i < lines.length; i++) {
  		if (lines[i].length > 0) {
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
