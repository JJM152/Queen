(function() {
	if (App == null) {
		alert("App == null!");
		return;
	}
	if (App.Data == null) {
		alert("App.Data == null!");
		return;
	}
	if (App.Data.Clothes == null) {
		alert("App.Data.Clothes == null!");
		return;
	}

	for (var prop in App.Data.Clothes) {
		if (App.Data.Clothes.hasOwnProperty(prop)) {
			var clothingItem = App.Data.Clothes[prop];
			if (clothingItem == null) {
				alert("Clothing item \"" + prop + "\" is null!");
			}
			if (clothingItem.Name !== prop) {
				alert("Clothing item \"" + prop + "\" has a different name: \"" + clothingItem.Name + "\"!");
			}
		}
	}
})();
