const timerContainer = document.querySelector(".timer-container");
const items = document.querySelectorAll(".timer-format h2");
let tempDate = new Date();
let tempYear = tempDate.getFullYear();
let tempMonth = tempDate.getMonth();
let tempDay = tempDate.getHours();

const futureDate = new Date(2029,9,26,0,0,0);

const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();
const day = futureDate.getDate();
const futureTime = futureDate.getTime();

function getRemainingTime() {
	const today = new Date().getTime();
	const t = futureTime - today;

	const oneDay = 24 * 60 * 60 * 1000;
	const oneHour = 60 * 60 * 1000;
	const oneMinute = 60 * 1000;

	let days = Math.floor(t/oneDay);


	let hours = Math.floor((t % oneDay) / oneHour);

	let minutes = Math.floor((t % oneHour) / oneMinute);

	let seconds = Math.floor((t % oneMinute) / 1000);

	const values = [days, hours, minutes, seconds];

	function format(item) {
		if(item < 10) {
			return item = `0${item}`;
		}
		else {
			return item;
		}
	}

	items.forEach(function(item, index){
		item.innerHTML = format(values[index]);
	});
};

let countdown = setInterval(getRemainingTime, 1000);

getRemainingTime();