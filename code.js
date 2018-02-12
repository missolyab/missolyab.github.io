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

	words.sort(function(a, b) {
  			return a.length - b.length || [a,b].sort()[0]===b;
			});
	words.reverse();
	let list = Array.from(new Set(words));

	for (let i = 0; i < list.length; i++) {
		list[i] = list[i].toLowerCase();
	}
	while (list.length > 10) {
		list.pop();
	}
	return list;
}


