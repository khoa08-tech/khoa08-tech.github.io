/* Bilingual (VI/EN) in-place toggle. Vietnamese is the in-HTML default;
   English strings live in the EN dictionary below. No dependencies. */
(function () {
	"use strict";
	var EN = {
 "prod.maysaytangsoi": "Fluid Bed Dryer",
 "prod.maysaytangsoitaohat": "Fluid Bed Granulator Dryer",
 "prod.maytronsieutoc": "High-Speed Mixer",
 "prod.maybaophim": "Film Coating Machine",
 "prod.maytroncube1goi": "Cube Mixer (1 Trunnion)",
 "prod.maytroncube2goi": "Cube Mixer (2 Trunnions)",
 "prod.tusaytinhdoiluutuanhoan": "Static Drying Oven (Recirculating Convection)",
 "prod.tusaytinhkhongtuanhoan": "Static Drying Oven (Non-Recirculating)",
 "prod.tusaychankhong": "Vacuum Drying Oven",
 "prod.mayxathatcaotoc": "Cone Mill Granulator",
 "prod.maynghien-xaybua": "Hammer Mill",
 "prod.maylauviennang": "Capsule Polishing Machine",
 "prod.mayhutbuicongnghiep": "Industrial Vacuum Cleaner",
 "prod.noinau-khuay": "Cooking & Mixing Tank",
 "prod.noinau-khuaytu": "Cooking & Magnetic Stirring Tank",
 "prod.noidonghoa": "Homogenizing Tank",
 "prod.mayruachai": "Bottle Washing Machine",
 "prod.maylocdungdich": "Solution Filter",
 "prod.tusaychai": "Bottle Drying Cabinet",
 "prod.maychietchaibomnhudong4voi": "4-Nozzle Peristaltic Bottle Filler",
 "prod.noinaukdhck": "Vacuum Homogenous Mixer",
 "prod.maychietkem2voi": "2-Nozzle Cream Filler",
 "grp.cube": "Cube Mixer",
 "grp.oven": "Static Drying Oven",
 "grp.liquid": "Liquid Medicine Machinery",
 "nav.home": "HOME",
 "nav.about": "ABOUT",
 "nav.products": "PRODUCTS",
 "nav.contact": "CONTACT",
 "brand.name": "THIEN AN MACHINERY",
 "brand.addr1": "<span class=\"pin\">📍</span> 188 Cho Lon Street, Binh Phu Ward, HCMC.",
 "brand.addr2": "Factory: 299 T12 Street, Binh Chanh Commune, HCMC.",
 "brand.contact": "Tel: 028.2253.2876<span class=\"sep\">•</span>Fax: 028.2253.2872<span class=\"sep\">•</span>Tax ID: 0314258183",
 "footer.contact_h": "CONTACT",
 "footer.company": " THIEN AN MACHINERY MANUFACTURING JOINT STOCK COMPANY ",
 "footer.addr": " Address: 188 Cho Lon Street, Binh Phu Ward, Ho Chi Minh City.",
 "footer.factory": " Factory: 299 T12 Street, Binh Chanh Commune, HCMC. ",
 "footer.taxid": " Tax code: 0314258183",
 "footer.hotline": " Hotline: <a href=\"tel:+84983361206\">0983 361 206</a> or <a href=\"tel:+842822532876\">028 2253 2876</a> (Mr. Hai) ",
 "footer.fax": " Fax: 028 2253 2872 ",
 "footer.email": " Email: <a href=\"mailto:chetaomaythienan@gmail.com\">chetaomaythienan@gmail.com</a>",
 "footer.website": " Website: www.chetaomaythienan.com",
 "footer.viewmap": " View map <a href=\"https://goo.gl/maps/dnVV5cBHUxiJSwGn6\">here</a>",
 "footer.cta": "Send Request / Quote",
 "footer.thanks": "Sincerely thank our valued customers for trusting our products.",
 "map.office": "Office: 188 Cho Lon Street, Binh Phu Ward, HCMC.",
 "map.factory": "Factory: 299 T12 Street, Binh Chanh Commune, HCMC.",
 "form.legend": "Send Request / Quote",
 "form.name": "Full name",
 "form.phone": "Phone number",
 "form.email": "Email",
 "form.message": "Your request",
 "form.submit": "Send Request",
 "home.h1": "GMP-Standard Machinery for Pharmaceuticals, Food &amp; Cosmetics",
 "home.about_h": " ABOUT US ",
 "home.p1": " THIEN AN MACHINERY MANUFACTURING JOINT STOCK COMPANY specializes in designing and manufacturing machinery and equipment for the following industries: ",
 "home.p2": "- Manufacturing machinery for pharmaceuticals, food, dietary supplements, veterinary medicine and cosmetics… compliant with GMP standards, made of 304 or 316 stainless steel; with capacities from 3 kg/batch for R&amp;D laboratories up to 600 kg/batch, including the following main product lines: ",
 "home.li1": "Hammer mill.",
 "home.li2": "Mixers of all types: wet mixers, dry mixers, high-speed mixers, cube mixers, S-type mixers, ribbon mixers, Z-type mixers, etc.",
 "home.li3": "Fluid bed dryers, fluid bed granulator dryers, static drying ovens, vacuum drying ovens, etc.",
 "home.li4": "Wet granulators, dry granule sizing machines.",
 "home.li5": "Film coating machines.",
 "home.li6": "Storage tanks, mixing tanks, homogenizing tanks, and heating tanks (electric or steam).",
 "home.li7": "Solution filtration.",
 "home.li8": "Automatic or semi-automatic liquid filling machines, piston-type or peristaltic-pump filling.",
 "home.svc1": "- Repair and maintenance services for machinery and equipment. ",
 "home.svc2": "- Design and installation of electrical and automation systems: SCADA, PLC, HMI, etc. ",
 "home.svc3": "- Experimental scientific and technical research and development. ",
 "home.closing": "Wishing to build long-term partnerships with our customers, we continually strive to develop our capabilities to deliver high-quality products, attentive service, and competitive prices.",
 "home.products_h": " FEATURED PRODUCTS ",
 "cap01": "Capacity: 5kg",
 "cap02": "Capacity: 20kg",
 "cap03": "Capacity: 300kg",
 "cap04": "Capacity: 500kg",
 "cap05": "Air Handling Unit for 500kg Film Coating Machine",
 "cap06": "Capacity: 40–60 bottles/min",
 "cap07": "Capacity: 10g–50g",
 "cap08": "Capacity: 2.33 Hp",
 "cap09": "Capacity: 200,000–300,000 capsules/hour",
 "cap10": "Capacity: 2 Hp",
 "cap11": "Capacity: 100–300 kg/hour",
 "cap12": "Capacity: 266 bottles",
 "cap13": "Capacity: 250kg",
 "cap14": "Capacity: 10kg",
 "cap15": "Capacity: 50kg",
 "cap16": "Capacity: 100kg",
 "cap17": "Capacity: 150kg",
 "cap18": "Capacity: 100–500 kg/hour",
 "cap19": "Capacity: 200 liters",
 "cap20": "Capacity: 150 liters",
 "cap21": "Capacity: 1200 liters",
 "cap22": "Capacity: 500 liters",
 "cap23": "Capacity: 2 m³",
 "cap24": "Capacity: 5 m³",
 "cap25": "Capacity: 2.3 m³"
};
	var nodes = [];

	function collect() {
		document.querySelectorAll("[data-i18n],[data-i18n-html]").forEach(function (el) {
			var html = el.hasAttribute("data-i18n-html");
			nodes.push({
				el: el,
				key: el.getAttribute(html ? "data-i18n-html" : "data-i18n"),
				vi: el.innerHTML
			});
		});
	}

	function apply(lang) {
		nodes.forEach(function (n) {
			if (lang === "en" && EN[n.key] != null) n.el.innerHTML = EN[n.key];
			else n.el.innerHTML = n.vi;
		});
		document.documentElement.lang = lang;
		var b = document.body;
		var viT = b.getAttribute("data-title-vi"), enT = b.getAttribute("data-title-en");
		if (lang === "en" && enT) document.title = enT;
		else if (viT) document.title = viT;
		document.querySelectorAll(".lang-btn").forEach(function (btn) {
			btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
		});
		try { localStorage.setItem("lang", lang); } catch (e) {}
	}

	function init() {
		collect();
		document.body.setAttribute("data-title-vi", document.title);
		document.querySelectorAll(".lang-btn").forEach(function (btn) {
			btn.addEventListener("click", function () { apply(btn.getAttribute("data-lang")); });
		});
		var saved = "vi";
		try { saved = localStorage.getItem("lang") || "vi"; } catch (e) {}
		apply(saved);
	}

	if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
	else init();
})();
