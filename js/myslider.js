const sliderData = [
	{
		img0: "./images/partners/img1.png",
		img1: "./images/partners/img2.png",
		img2: "./images/partners/img3.png",
	},
	{
		img0: "./images/partners/img4.png",
		img1: "./images/partners/img5.png",
		img2: "./images/partners/img6.png",
	},
	{
		img0: "./images/partners/img7.png",
	},
];

for (let i = 0; i < sliderData.length; i++) {
	const slider = document.querySelector(".slider");
	const { img0, img1, img2 } = sliderData[i];

	const slideData = `
    <div class="slide ${i == 0 ? "visible" : ""}"  data-slide="slide-${i}">
      <div class="slide-image container" style=" ${
				Object.keys(sliderData[i]).length == 3
					? "justify-content: space-between"
					: "justify-content: center"
			}" >
      <div >${img0 ? "<img src=" + img0 + " />" : ""}"</div>
      <div >${img1 ? "<img src=" + img1 + " />" : ""}"</div>
      <div >${img2 ? "<img src=" + img2 + " />" : ""}"</div>
      </div>
      
    </div>
  `;
	slider.innerHTML += slideData;
}

function self(i = "", direction = "") {
	const slides = document.querySelectorAll(".slide");
	let currentSlide = 0;

	const slideInterval = setInterval(() => {
		slides[currentSlide].classList.remove("visible");
		currentSlide = (currentSlide + 1) % slides.length;
		slides[currentSlide].classList.add("visible");
	}, 5000);

	//console.log(typeof i);
	if (typeof i === "number") {
		console.log(i);
		clearInterval(slideInterval);
		slides[i].classList.remove("visible");
		if (direction == "next") {
			currentSlide = i == 2 ? 0 : i + 1;
		} else {
			currentSlide = i == 0 ? 2 : i - 1;
		}

		slides[currentSlide].classList.add("visible");
	}
}

function selfparameters(i) {
	const slides = document.querySelectorAll(".slide");
	let currentSlide = 0;
	//const slideInterval = setInterval(() => {
	slides[i].classList.remove("visible");

	currentSlide = i == 2 ? 0 : i + 1;

	slides[currentSlide].classList.add("visible");
	//}, 500);
}

self();

let sliderprev = document.getElementById("prev");
let slidernext = document.getElementById("next");

sliderprev.addEventListener(
	"click",
	function () {
		changeslide("prev");
	},
	false
);

slidernext.addEventListener(
	"click",
	function () {
		changeslide("next");
	},
	false
);

function changeslide(direction) {
	var attribute = document.getElementsByClassName("slide visible");
	const activeslides = document.querySelectorAll(".visible");
	var c = 0;
	for (var i in activeslides) {
		if (c == activeslides.length) break;
		c++;
		let activelide = activeslides[i].getAttribute("data-slide");
		let splitstr = activelide.split("-");
		//console.log(parseInt(splitstr[1]));
		self(parseInt(splitstr[1]), direction);
	}
}
