//
// this is just a stub for a function you need to implement
//
function getStats(txt) {
    let display = {
        nChars: numChars(txt),
        nWords: numWords(txt),
        nLines: numLines(txt),
        nNonEmptyLines: numNonEmptyLines(txt),
        averageWordLength: 3.3,
        maxLineLength: 33,
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
	txt = ["  a", "b", "", "c", "", "", "   d  "].join("\n");
	let count = (txt.match(/^\s*\S/gm) || "").length;
	return count;
}
