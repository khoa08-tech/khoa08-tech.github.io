/* Lightweight image lightbox for product photos. No dependencies. */
(function () {
	"use strict";

	function buildLightbox() {
		var box = document.createElement("div");
		box.className = "lightbox";
		box.setAttribute("role", "dialog");
		box.setAttribute("aria-modal", "true");
		box.innerHTML =
			'<button class="lightbox-close" aria-label="Đóng">&times;</button>' +
			'<img alt="">';
		document.body.appendChild(box);
		return box;
	}

	document.addEventListener("DOMContentLoaded", function () {
		var thumbs = document.querySelectorAll(".machines_img");
		if (!thumbs.length) return;

		var box = buildLightbox();
		var full = box.querySelector("img");

		function open(src, alt) {
			full.src = src;
			full.alt = alt || "";
			box.classList.add("open");
			document.body.style.overflow = "hidden";
		}
		function close() {
			box.classList.remove("open");
			document.body.style.overflow = "";
		}

		thumbs.forEach(function (img) {
			img.addEventListener("click", function () {
				open(img.currentSrc || img.src, img.alt);
			});
		});

		box.addEventListener("click", function (e) {
			if (e.target === box || e.target.classList.contains("lightbox-close")) {
				close();
			}
		});
		document.addEventListener("keydown", function (e) {
			if (e.key === "Escape") close();
		});
	});
})();
