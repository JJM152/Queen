/**
* Unit system class
*/

App.UnitSystem = function () {
	this.metricSystemDefinition = {
		baseLengthFactor  : 1.0, // conversion from CGS
		lengthSymbols     : ["cm", "m", "km"],
		lengthUnits       : ["centimeter", "meter", "kilometer"],
		lengthUnitsPlural : ["centimetres", "meters", "kilometers"],
		lengthScaleFactors: [100, 1000],
		lengthSymbolDelim : '&thinsp;',
		braCups: { // difference in cm, taken from http://brasizecalculator.eu/ for underbust of  80 cm
			 0 : "AA",
			 5 : "AA",
			 7 : "A",
			 9 : "B",
			11 : "C",
			13 : "D",
			15 : "E",
			17 : "F",
			19 : "G",
			21 : "H",
			23 : "I",
			25 : "J",
			27 : "K",
			29 : "L",
			31 : "M",
			33 : "N",
			35 : "O",
			37 : "P",
			39 : "Q",
			41 : "R",
			43 : "S",
			45 : "T",
			47 : "U",
			49 : "V",
			51 : "W",
			53 : "X",
			55 : "Y",
			57 : "Z"
		}
	};

	this.imperialSystemDefinition = {
		baseLengthFactor  : 1.0/2.54, // conversion from CGS
		lengthSymbols     : ['&prime;', "&Prime;", "m"],
		lengthUnits       : ["inch", "foot", "mile"],
		lengthUnitsPlural : ["inches", "feet", "miles"],
		lengthScaleFactors: [12, 5280],
		lengthSymbolDelim : '',
		braCups: { // difference in inches, taken from http://brasizecalculator.eu/
			 0 : "AA",
			 1 : "AA",
			 2 : "A",
			 3 : "B",
			 4 : "C",
			 5 : "D",
			 6 : "DD",
			 7 : "E",
			 8 : "F",
			 9 : "FF",
			10 : "G",
			11 : "GG",
			12 : "H",
			13 : "HH",
			14 : "J",
			15 : "JJ",
			16 : "K",
			17 : "KK",
			18 : "L",
			19 : "LL",
			20 : "M",
			21 : "MM",
			22 : "N",
			23 : "NN",
			24 : "O",
			25 : "OO",
			26 : "P",
			27 : "PP",
			28 : "Q",
			29 : "QQ",
			30 : "R",
			31 : "RR",
			32 : "S",
			33 : "SS",
			34 : "T",
			35 : "TT",
			36 : "U",
			37 : "UU",
			38 : "V",
			39 : "VV",
			40 : "W",
			41 : "WW",
			42 : "X",
			43 : "XX",
			44 : "Y",
			45 : "YY",
			46 : "Z",
			47 : "ZZ"
		}
	};

// 	this.system = {};

	this.lengthValue = function(x) {
		return Math.round(this.system.baseLengthFactor * x);
	};

	this.lengthString = function (x, compact) {
		var l = this.lengthValue(x);
		if (typeof compact == 'undefined' || compact == false) {
			return l + this.system.lengthSymbolDelim + this.system.lengthSymbols[0];
		}

		var cmpts = [l];
		var unitsCount = this.system.lengthUnits.length;
		for (var i = 1; i < unitsCount; i++) {
			var nextFactor = this.system.lengthScaleFactors[i-1];
			if (cmpts[i-1] < nextFactor) {
				break;
			}
			var realUnits = cmpts[i-1]/nextFactor;
			var roundedCount = Math.floor(realUnits);
			cmpts[i-1] = cmpts[i-1] - roundedCount * nextFactor;
			cmpts.push(roundedCount);
		}
		var res = '';
		for (var i = cmpts.length - 1; i > 0; i--) {
			res += cmpts[i] + this.system.lengthSymbolDelim + this.system.lengthSymbols[i] + this.system.lengthSymbolDelim;
		}
		res += cmpts[0] + this.system.lengthSymbolDelim + this.system.lengthSymbols[0];
		return res;
	};


	this.cupString = function(bustCM, underbustCM) {
		var diff = this.lengthValue(bustCM - underbustCM);
		var cups = this.system.braCups;
		for (var cup in cups) {
			if (!cups.hasOwnProperty(cup)) continue;

			if (diff<= cup) return cups[cup];
		}
		return "OutOfRangeCup: " + diff;
	};
};

var unitSettingChangedHandler = function() {
	switch (SugarCube.settings.units) {
	case "Imperial":
		App.unitSystem.system = App.unitSystem.imperialSystemDefinition;
		break;
	case "Metric":
		App.unitSystem.system = App.unitSystem.metricSystemDefinition;
		break;
	}
};
