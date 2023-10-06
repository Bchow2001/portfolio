import "./styles.css";

const header = document.querySelector(".title");

header.addEventListener("mouseover", () => {
	let { children } = header;
	children = [...children];
	children.forEach((item) => {
		if (item.tagName.toLowerCase() === "span") {
			item.classList.toggle("move");
		}
	});
});
