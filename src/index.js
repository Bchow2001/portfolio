import "./styles.css";

const header = document.querySelector(".title");

const moving = () => {
	let { children } = header;
	children = [...children];
	children.forEach((item) => {
		if (item.tagName.toLowerCase() === "span") {
			item.classList.toggle("move");
		}
	});
};

header.addEventListener("mouseover", moving);

header.addEventListener("mouseout", moving);
