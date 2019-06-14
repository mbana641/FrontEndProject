function isValid() {
	var x = document.forms["searchForm"]["query"].value;
	var y = document.forms["searchForm"]["count"].value;
	if (x == "" || y == "") {
		alert("All fields must have a value");
		return false;
  }
}