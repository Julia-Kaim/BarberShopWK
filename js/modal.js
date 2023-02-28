const button = document.querySelector("#modal");

console.log(button);

const onClick = (e) => {
	e.preventDefault();

	const instance = basicLightbox.create(`<div class="modal"><span class="modal__title">Zapisz się tutaj</span>
	</div>`);

	instance.show();

	button.addEventListener("keydown", (e) => {
		if (e.key === "Escape") {
			instance.close();
		}
	});
};

button.addEventListener("click", onClick);

// const qs = (selector) => document.querySelector(selector);
// const modal = qs(".modal");

// const creatingModal = (modal) => {
// 	return `<div class="modal"></div>`;
// };
// console.log(modal);

// const modalMarkup = creatingModal(galleryItems);
// modalMarkup.insertAdjacentHTML("beforeend", creatingModal);

// const onClick = (event) => {
// 	event.preventDefault();

// 	if (event.target.classList.contains("nav__button")) return;

// 	const instance = basicLightbox.create(`<div class="modal"></div>`);

// 	instance.show();

// 	modal.addEventListener("keydown", (event) => {
// 		if (event.key === "Escape") {
// 			instance.close();
// 		}
// 	});
// };

// modal.addEventListener("click", onClick);

// const creatingItems = (item) => {
// 	return galleryItems
// 		.map(({ preview, original, description }) => {
// 			return `<div class="gallery__item">
//       <a class="gallery__link" href="${original.value}">
//         <img
//           class="gallery__image"
//           src="${preview}"
//           data-photo="${original}"
//           alt="${description}"
//         />
//       </a>
//     </div>`;
// 		})
// 		.join("");
// };
// console.log(galleryItems);
// const imagesMarkup = creatingItems(galleryItems);
// galleryElements.insertAdjacentHTML("beforeend", imagesMarkup);

// const onClick = (event) => {
// 	event.preventDefault();

// 	if (event.target.classList.contains("gallery")) return;
// 	const source = event.target.dataset.photo;
// 	const instance = basicLightbox.create(
// 		`<img src="${source}" width="900" height="500">`,
// 	);

// 	instance.show();

// 	galleryElements.addEventListener("keydown", (event) => {
// 		if (event.key === "Escape") {
// 			instance.close();
// 		}
// 	});
// };

// galleryElements.addEventListener("click", onClick);
