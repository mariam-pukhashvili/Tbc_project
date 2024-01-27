const questions = document.querySelectorAll(".question");

questions.forEach((element) => {
	element.addEventListener("click", function (event) {
		let answer = this.nextElementSibling;
		if (answer.style.display === "block") {
			answer.style.display = "none";
			this.querySelector(".img img").style.transform = "rotate(0deg)";
		} else {
			answer.style.display = "block";
			this.querySelector(".img img").style.transform = "rotate(180deg)";
		}
	});
});
