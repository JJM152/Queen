App.UnitSystems = {};

App.UnitSystems.Facet = class {
	/**
	 *
	 * @param {number} baseFactor Conversion from CGS
	 * @param {number[]} scaleFactors
	 * @param {string[]} symbols
	 * @param {string[]} units
	 * @param {string[]} unitsPlural
	 * @param {string} delim
	 */
	constructor(baseFactor, scaleFactors, symbols, units, unitsPlural, delim) {
		this.baseFactor = baseFactor;
		this.scaleFactors = scaleFactors;
		this.symbols = symbols;
		this.units = units;
		this.unitsPlural = unitsPlural;
		this.delim = delim;
	}
};

App.UnitSystems.AbstractUnitSystem = class {

	/**
	 *
	 * @param {string} facet
	 * @param {number} x
	 * @returns {number}
	 */
	_biggestUnit(facet, x) {
		var v = this.value(facet, x);
		var scaleFactors = this[facet].scaleFactors;
		var i = 0;
		for (i = 1; i < scaleFactors.length; ++i) {
			var nextFactor = scaleFactors[i-1];
			if (v < nextFactor) {
				break;
			}
			var realUnits = v/nextFactor;
			var roundedCount = Math.floor(realUnits);
			v -= roundedCount * nextFactor;
		}
		return i - 1;
	}
	/**
	 *
	 * @param {string} facet
	 * @param {number} x
	 */
	value(facet, x) {
		return Math.round(this[facet].baseFactor * x);
	}

	/**
	 *
	 * @param {string} facet
	 * @param {number} x
	 * @param {boolean} [compact]
	 * @param {number} [sample]
	 */
	valueString(facet, x, compact, sample) {
		var v = this.value(facet, x);
		var cmpts = [v];
		/** @type {string[]} */
		var units = this[facet].units;
		/** @type {number[]} */
		var scaleFactors = this[facet].scaleFactors;
		var maxUnitIndex = 0;
		if (compact === true) {
			if (sample !== undefined) {
				maxUnitIndex = this._biggestUnit(facet, sample);
			} else {
				maxUnitIndex =  units.length - 1;
			}
		}
		for (var i = 1; i <= maxUnitIndex; ++i) {
			var nextFactor = scaleFactors[i-1];
			if (cmpts[i-1] < nextFactor) {
				break;
			}
			var realUnits = cmpts[i-1]/nextFactor;
			var roundedCount = Math.floor(realUnits);
			cmpts[i-1] = cmpts[i-1] - roundedCount * nextFactor;
			cmpts.push(roundedCount);
		}
		var res = "";
		var symbols = this[facet].symbols;

		for (var j = cmpts.length - 1; j >= 0; --j) {
			if (cmpts[j] !== 0) {
				if (res.length > 0) res += this[facet].delim;
				res += cmpts[j] + this[facet].delim + symbols[j];
			}
		}
		return res;
	}

	lengthValue(x) {
		return this.value("length", x);
	}

	lengthString(x, compact, sample) {
		return this.valueString("length", x, compact, sample);
	}

	massValue(x) {
		return this.value("mass", x);
	}

	massString(x, compact, sample) {
		return this.valueString("mass", x, compact, sample);
	}

	cupString(bustCM, underbustCM) {
		var diff = this.lengthValue(bustCM - underbustCM);
		/** @type Object.<number, string> */
		var cups = this.braCups;
		for (var cup in cups) {
			if (!cups.hasOwnProperty(cup)) continue;

			if (diff <= cup) return cups[cup];
		}
		return "OutOfRangeCup: " + diff;
	}
};

App.UnitSystems.Metric = class extends App.UnitSystems.AbstractUnitSystem {
	constructor() {
		super();
		this.length = new App.UnitSystems.Facet(
			1.0, [100, 1000],
			["cm", "m", "km"],
			["centimeter", "meter", "kilometer"], ["centimetres", "meters", "kilometers"],
			"&thinsp;");
		this.mass = new App.UnitSystems.Facet(
			1.0, [1000, 1000],
			["g", "kg", "t"],
			["gramm", "kilogramm", "tonne"], ["gramms", "kilogramms", "tonnes"],
			"&thinsp;");

		this.braCups = { // difference in cm, taken from http://brasizecalculator.eu/ for underbust of  80 cm
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
		};
	}
};

App.UnitSystems.Imperial = class extends App.UnitSystems.AbstractUnitSystem {
	constructor() {
		super();
		this.length = new App.UnitSystems.Facet(
			1.0/2.54, [12, 5280],
			["&prime;", "&Prime;", "m"],
			["inch", "foot", "mile"], ["inches", "feet", "miles"],
			"");
		this.mass = new App.UnitSystems.Facet(
			1./28.349, [16, 14, 160],
			["oz", "lb", "st", "t"],
			["ounce", "pound", "stone", "ton"], ["ounces", "pounds", "stones", "tons"],
			"&thinsp;");

		this.braCups = { // difference in inches, taken from http://brasizecalculator.eu/
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
		};
	}
};

/**
* Unit system class
*/
App.UnitSystem = class UnitSystem {
	constructor() {
		this.system = new App.UnitSystems.Imperial();
	}

	lengthValue(x) {
		return this.system.lengthValue(x);
	}

	lengthString(x, compact, sample) {
		return this.system.lengthString(x, compact, sample);
	}

	massValue(x) {
		return this.system.massValue(x);
	}

	massString(x, compact, sample) {
		return this.system.massString(x, compact, sample);
	}

	cupString(bustCM, underbustCM) {
		return this.system.cupString(bustCM, underbustCM);
	}

	static unitSettingChangedHandler() {
		switch (SugarCube.settings.units) {
		case "Imperial":
			App.unitSystem.system = new App.UnitSystems.Imperial();
			break;
		case "Metric":
			App.unitSystem.system = new App.UnitSystems.Metric();
			break;
		}
	}
};
