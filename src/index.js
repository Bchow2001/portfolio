import "./styles.css";

const header = document.querySelector(".main-title");
const headerOne = document.querySelector(".one");
const headerTwo = document.querySelector(".two");

const moving = () => {
	let { children } = header;
	children = [...children];
	children.forEach((item) => {
		if (item.tagName.toLowerCase() === "span") {
			item.classList.toggle("move");
		}
	});
	headerOne.classList.toggle("hidden");
	headerTwo.classList.toggle("hidden");
};

header.addEventListener("mouseover", moving);

header.addEventListener("mouseout", moving);
