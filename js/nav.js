let navbtn = document.getElementById("navbtn");

navbtn.addEventListener(
	"click",
	function () {
		let navlink = document.querySelector(".nav-links");

		if (navlink.style.display == "") {
			navlink.style.display = "none";
		}
		if (navlink.style.display == "none") {
			navlink.style.display = "block";
		} else navlink.style.display = "none";
	},
	false
);
