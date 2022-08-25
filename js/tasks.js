 
var darkThemeButton = document.createElement("button");
darkThemeButton.innerHTML = "Dark Theme";
darkThemeButton.className = "darkThemeButton";
darkThemeButton.onclick = function() {
    document.body.className = "darkTheme";
}
document.body.appendChild(darkThemeButton);

var lightThemeButton = document.createElement("button");
lightThemeButton.innerHTML = "Light Theme";
lightThemeButton.className = "lightThemeButton";
lightThemeButton.onclick = function() {
    document.body.className = "";
}
document.body.appendChild(lightThemeButton);

var toggleButton = document.createElement("button");
toggleButton.innerHTML = "Toggle Theme";
toggleButton.className = "toggleButton";
toggleButton.onclick = function() {
    if (document.body.className == "darkTheme") {
        document.body.className = "";
    } else {
        document.body.className = "darkTheme";
    }
}
document.body.appendChild(toggleButton);

// create a filter dropdown menu
var filterDropdown = document.createElement("select");
filterDropdown.className = "filterDropdown";
filterDropdown.onchange = function() {
    var selected = this.options[this.selectedIndex].value;
    if (selected == "all") {
        document.querySelectorAll(".hidden").forEach(function(element) {
            element.className = "";
        }
        );
    } else {
        document.querySelectorAll(".hidden").forEach(function(element) {
            if (element.className == selected) {
                element.className = "";
            } else {
                element.className = "hidden";
            }
        }
        );
    }
}
var allOption = document.createElement("option");
allOption.value = "all";
allOption.innerHTML = "All";
filterDropdown.appendChild(allOption);
var hiddenClasses = document.querySelectorAll(".hidden");
for (var i = 0; i < hiddenClasses.length; i++) {
    var option = document.createElement("option");
    option.value = hiddenClasses[i].className;
    option.innerHTML = hiddenClasses[i].className;
    filterDropdown.appendChild(option);
}
document.body.appendChild(filterDropdown);


// filter through form input and display only tasks that match the input
