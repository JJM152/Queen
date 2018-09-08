// App = App || { Data: { }, Entity: { } };

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
		lengthSymbolDelim : '&thinsp;'
	};

	this.imperialSystemDefinition = {
		baseLengthFactor  : 1.0/2.54, // conversion from CGS
		lengthSymbols     : ['&prime;', "&Prime;", "m"],
		lengthUnits       : ["inch", "foot", "mile"],
		lengthUnitsPlural : ["inches", "feet", "miles"],
		lengthScaleFactors: [12, 5280],
		lengthSymbolDelim : ''
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

		var cmpts = [l]
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
};

var unitSettingChangedHandler = function() {
	switch (SugarCube.settings.units) {
	case "Imperial":
		window.App.unitSystem.system = window.App.unitSystem.imperialSystemDefinition;
		break;
	case "Metric":
		window.App.unitSystem.system = window.App.unitSystem.metricSystemDefinition;
		break;
	}
};
