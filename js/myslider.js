const sliderData = [
	{
		img1: "./images/partners/img1.png",
		img2: "./images/partners/img2.png",
		img3: "./images/partners/img3.png",
	},
	{
		img1: "./images/partners/img4.png",
		img2: "./images/partners/img5.png",
		img3: "./images/partners/img6.png",
	},
	{
		img1: "./images/partners/img7.png",
	},
	// {
	// 	img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTczNTI2ODUwOF5BMl5BanBnXkFtZTcwMTU0NTIzMw@@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
	// 	name: "Iron Man",
	// 	desc: "After being held captive in an Afghan cave, billionaire engineer Tony Stark creates a unique weaponized suit of armor to fight evil.",
	// },
	// {
	// 	img: "https://images-na.ssl-images-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
	// 	name: "Thor",
	// 	desc: "The powerful but arrogant god Thor is cast out of Asgard to live amongst humans in Midgard (Earth), where he soon becomes one of their finest defenders.",
	// },
	// {
	// 	img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTAwMjU5OTgxNjZeQTJeQWpwZ15BbWU4MDUxNDYxODEx._V1_SY1000_CR0,0,674,1000_AL_.jpg",
	// 	name: "Guardians of the Galaxy",
	// 	desc: "A group of intergalactic criminals are forced to work together to stop a fanatical warrior from taking control of the universe.",
	// },
	// {
	// 	img: "https://images-na.ssl-images-amazon.com/images/M/MV5BNjgwNzAzNjk1Nl5BMl5BanBnXkFtZTgwMzQ2NjI1OTE@._V1_SY1000_CR0,0,674,1000_AL_.jpg",
	// 	name: "Doctor Strange",
	// 	desc: "While on a journey of physical and spiritual healing, a brilliant neurosurgeon is drawn into the world of the mystic arts.",
	// },
	// {
	// 	img: "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzOTc2NzU3N15BMl5BanBnXkFtZTcwNjY3MDE3NQ@@._V1_SY1000_CR0,0,640,1000_AL_.jpg",
	// 	name: "Captain America",
	// 	desc: 'Steve Rogers, a rejected military soldier transforms into Captain America after taking a dose of a "Super-Soldier serum". But being Captain America comes at a price as he attempts to take down a war monger and a terrorist organization',
	// },
];

for (let i = 0; i < sliderData.length; i++) {
	const slider = document.querySelector(".slider");
	const { img1, img2, img3 } = sliderData[i];
	const slideData = `
    <div class="slide ${i == 0 ? "visible" : ""}"  data-slide="slide-${i}">
      <div class="slide-image container">
       <div style="flex-1"><img src="${img1}" /></div>
       <div style="flex-1"><img src="${img2}" /></div>
       <div style="flex-1"><img src="${img3}" /></div>
      </div>
      
    </div>
  `;
	slider.innerHTML += slideData;
}

function self() {
	const slides = document.querySelectorAll(".slide");
	let currentSlide = 0;
	const slideInterval = setInterval(() => {
		slides[currentSlide].classList.remove("visible");
		currentSlide = (currentSlide + 1) % slides.length;
		slides[currentSlide].classList.add("visible");
	}, 5000);
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
sliderprev.addEventListener(
	"click",
	function () {
		var attribute = document.getElementsByClassName("slide visible");

		const activeslides = document.querySelectorAll(".visible");
		var c = 0;
		for (var i in activeslides) {
			if (c == activeslides.length) break;
			c++;
			let activelide = activeslides[i].getAttribute("data-slide");

			let splitstr = activelide.split("-");
			selfparameters(parseInt(splitstr[1]));
			console.log(parseInt(splitstr[1]));
		}
	},
	false
);
