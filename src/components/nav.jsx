import React, { useEffect } from "react";
import $ from "jquery";
import gsap from "gsap";

export default function Nav() {
	useEffect(() => {
		//Gooey does not work in Safari ...
		const tabbar = document.querySelector("#tabbar");
		const button = tabbar.querySelector("li.add button");
		const background = tabbar.querySelector(".background path");

		button.addEventListener("pointerdown", (e) => {
			gsap.to(background, {
				duration: 0.2,
			});
			gsap.to(tabbar, {
				duration: 0.2,
				"--menu-icon-add-opacity": 1,
				"--menu-icon-move": 8,
			});
		});

		button.addEventListener("pointerup", (e) => {
			button.classList.toggle("open");
			let open = button.classList.contains("open");
			gsap.to(background, {
				keyframes: [
					{
						duration: 0.1,
					},
					{
						duration: 0.7,
						delay: 0.05,
						ease: "elastic.out(1, .5)",
					},
				],
			});
			gsap.to(tabbar, {
				duration: 0.3,
				"--menu-icon-add-opacity": 0,
				"--menu-icon-rotate": open ? 45 : 90,
				onComplete() {
					if (!open) {
						gsap.set(tabbar, {
							"--menu-icon-rotate": 0,
						});
					}
				},
			});
			gsap.to(tabbar, {
				duration: 0.8,
				ease: "elastic.out(1, .5)",
				"--menu-icon-move": 0,
			});
			gsap.to(tabbar, {
				duration: open ? 0.6 : 0.3,
				ease: open ? "elastic.out(1, .75)" : "power1.out",
				"--options-y": open ? -112 : 16,
			});
			gsap.to(tabbar, {
				duration: open ? 0.6 : 0.3,
				delay: 0.05,
				ease: open ? "elastic.out(1, .75)" : "power1.out",
				"--options-middle-y": open ? -112 : 16,
			});
			gsap.to(tabbar, {
				"--options-opacity": open ? 1 : 0,
				duration: open ? 0.5 : 0.25,
			});
		});
	}, []);

	return (
		<>
			<div id="tabbar">
				<ul className="options">
					<li>
						<button>
							<svg viewBox="0 0 16 16">
								<path d="M2,1.25 C1.46957,1.25 0.96086,1.45318464 0.58579,1.81486893 C0.21071,2.17654357 0,2.66708536 0,3.17857143 L0,12.8214286 C0,13.3328857 0.21071,13.8234179 0.58579,14.1851214 C0.96086,14.546825 1.46957,14.75 2,14.75 L14,14.75 C14.5304,14.75 15.0391,14.546825 15.4142,14.1851214 C15.7893,13.8234179 16,13.3328857 16,12.8214286 L16,3.17857143 C16,2.66708536 15.7893,2.17654357 15.4142,1.81486893 C15.0391,1.45318464 14.5304,1.25 14,1.25 L2,1.25 Z M14,12.8214286 L2,12.8214286 L6,5.10714286 L9,10.8928571 L11,7.03571429 L14,12.8214286 Z" />
							</svg>
						</button>
					</li>
					<li>
						<button>
							<svg viewBox="0 0 16 16" fillRule="evenodd">
								<path d="M2,3 C1.46957002,3 0.960860014,3.21071003 0.585790009,3.58579004 C0.210710003,3.96086004 0,4.46957005 0,5 L0,13 C0,13.5304002 0.210710003,14.0391002 0.585790009,14.4142002 C0.960860014,14.7893002 1.46957002,15 2,15 L14,15 C14.5304002,15 15.0391002,14.7893002 15.4142002,14.4142002 C15.7893002,14.0391002 16,13.5304002 16,13 L16,5 C16,4.46957005 15.7893002,3.96086004 15.4142002,3.58579004 C15.0391002,3.21071003 14.5304002,3 14,3 L12.4140002,3 C12.1488002,2.99994003 11.8945002,2.89455003 11.7070002,2.70700003 L10.5860002,1.58600001 C10.2110002,1.2109 9.70240014,1 9.17200014,1 L6.8280001,1 C6.29761009,1 5.78899009,1.2109 5.41400008,1.58600001 L4.29300006,2.70700003 C4.10551006,2.89455003 3.85119006,2.99994003 3.58600005,3 L2,3 Z M8.00000007,12.0000001 C8.39400013,12.0000001 8.78410013,11.9224002 9.14810014,11.7716002 C9.51200014,11.6209002 9.84270015,11.3999002 10.1213002,11.1213002 C10.3999002,10.8427001 10.6209002,10.5120001 10.7716002,10.1481001 C10.9224002,9.78410013 11.0000001,9.39400013 11.0000001,9.00000007 C11.0000001,8.60600011 10.9224002,8.21590011 10.7716002,7.8519501 C10.6209002,7.4879701 10.3999002,7.15726009 10.1213002,6.87868009 C9.84270015,6.60010008 9.51200014,6.37913008 9.14810014,6.22836008 C8.78410013,6.07760008 8.39400013,6.00000007 8.00000007,6.00000007 C7.20435011,6.00000007 6.4412901,6.31607008 5.87868009,6.87868009 C5.31607008,7.4412901 5.00000007,8.20440011 5.00000007,9.00000007 C5.00000007,9.79560013 5.31607008,10.5587001 5.87868009,11.1213002 C6.4412901,11.6839002 7.20435011,12.0000001 8.00000007,12.0000001 Z" />
							</svg>
						</button>
					</li>
					<li>
						<button>
							<svg viewBox="0 0 16 16">
								<path d="M0,3.66666667 C0,3.09203417 0.21071,2.54093167 0.58579,2.13460583 C0.96086,1.72826917 1.46957,1.5 2,1.5 L7,1.5 L9,3.66666667 L14,3.66666667 C14.5304,3.66666667 15.0391,3.89493583 15.4142,4.3012725 C15.7893,4.70759833 16,5.25870083 16,5.83333333 L16,12.3333333 C16,12.9079333 15.7893,13.459025 15.4142,13.8653833 C15.0391,14.2717417 14.5304,14.5 14,14.5 L2,14.5 C1.46957,14.5 0.96086,14.2717417 0.58579,13.8653833 C0.21071,13.459025 0,12.9079333 0,12.3333333 L0,3.66666667 Z" />
							</svg>
						</button>
					</li>
				</ul>
				<ul className="menu">
					<li>
						<button>
							<svg viewBox="0 0 16 16">
								<path d="M8.70806672,0.774494228 C8.52027842,0.598738796 8.26558741,0.5 7.99997964,0.5 C7.73442195,0.5 7.47972093,0.598738796 7.29190258,0.774494228 L0.281139469,7.33708036 C0.0986993821,7.51389518 -0.00224559136,7.75071079 1.02463177e-13,7.99652652 C0.00231140466,8.24234224 0.107643113,8.47747033 0.293338197,8.65128511 C0.479033281,8.82509989 0.730228923,8.92372619 0.992832079,8.92588246 C1.25543523,8.92803874 1.50842363,8.8335375 1.69731362,8.66272276 L1.99076413,8.38803166 L1.99076413,14.5624877 C1.99076413,14.811116 2.09628613,15.0496191 2.28410447,15.2254026 C2.47193283,15.4011862 2.72667392,15.5 2.99230172,15.5 L4.99537689,15.5 C5.26100469,15.5 5.51574578,15.4011862 5.70357414,15.2254026 C5.89139248,15.0496191 5.99691448,14.811116 5.99691448,14.5624877 L5.99691448,12.6874631 C5.99691448,12.4388348 6.10243648,12.2003317 6.29025483,12.0245481 C6.47808318,11.8487646 6.73282427,11.7499508 6.99845207,11.7499508 L9.00151723,11.7499508 C9.267125,11.7499508 9.52191616,11.8487646 9.70970446,12.0245481 C9.89759291,12.2003317 10.0030548,12.4388348 10.0030548,12.6874631 L10.0030548,14.5624877 C10.0030548,14.811116 10.1086169,15.0496191 10.2964052,15.2254026 C10.4841935,15.4011862 10.7389846,15.5 11.0045924,15.5 L13.0076676,15.5 C13.2732753,15.5 13.5280665,15.4011862 13.7158548,15.2254026 C13.9037433,15.0496191 14.0092052,14.811116 14.0092052,14.5624877 L14.0092052,8.38803166 L14.3026557,8.66272276 C14.4915457,8.8335375 14.7445341,8.92803874 15.0071372,8.92588246 C15.2697404,8.92372619 15.520926,8.82509989 15.7066111,8.65128511 C15.8922961,8.47747033 15.9976579,8.24234224 16,7.99652652 C16.002265,7.75071079 15.90131,7.51389518 15.7188298,7.33708036 L8.70806672,0.774494228 Z" />
							</svg>
						</button>
					</li>
					<li className="add">
						<button>
							<svg viewBox="0 0 24 24">
								<line x1="12" y1="3" x2="12" y2="21" />
								<line x1="21" y1="12" x2="3" y2="12" />
							</svg>
						</button>
					</li>
					<li>
						<button>
							<svg viewBox="0 0 16 16" fillRule="evenodd">
								<path d="M9.39692247,1.59689214 C9.04066156,0.134369287 6.95933844,0.134369287 6.60307753,1.59689214 C6.54989153,1.81666432 6.44556333,2.02077064 6.29859633,2.19259832 C6.15161996,2.36443538 5.96615803,2.49913749 5.757286,2.58575446 C5.54841398,2.67237144 5.32204768,2.70844701 5.09660015,2.69105611 C4.87115262,2.67366521 4.65299906,2.60328599 4.4598869,2.48565603 C3.1735975,1.70189378 1.70167743,3.17379178 2.48545143,4.46006188 C2.99171693,5.29069985 2.54264068,6.37446679 1.59761174,6.60415788 C0.13412942,6.95947593 0.13412942,9.04169596 1.59761174,9.3960765 C1.81744347,9.44932733 2.02159035,9.55376647 2.19342999,9.70086251 C2.36526025,9.84795856 2.49992687,10.0334927 2.58646077,10.2424647 C2.67299467,10.4514367 2.70895827,10.6779403 2.69139836,10.9034126 C2.67384782,11.1288848 2.60328004,11.3471382 2.48545143,11.5401725 C1.70167743,12.8264426 3.1735975,14.2983406 4.4598869,13.5145784 C4.65296156,13.3967328 4.87114324,13.3262317 5.09664702,13.3086064 C5.3221508,13.2910749 5.54862024,13.3270754 5.75759539,13.413608 C5.96657991,13.5001406 6.1521731,13.6347677 6.2992526,13.8066142 C6.44634148,13.9784606 6.55076343,14.1825575 6.60401506,14.4024047 C6.95933844,15.8658651 9.04159909,15.8658651 9.39598494,14.4024047 C9.44942408,14.1826513 9.55395853,13.9786481 9.70105678,13.8069892 C9.84815504,13.6352365 10.033692,13.5007031 10.2426671,13.4141705 C10.4515485,13.3276379 10.6779617,13.2916374 10.9034374,13.3090751 C11.1288193,13.3266067 11.3469822,13.3969203 11.5401131,13.5145784 C12.8264025,14.2983406 14.2983226,12.8264426 13.5145486,11.5401725 C13.3968887,11.3470445 13.3265741,11.1288848 13.3090423,10.9035063 C13.2916042,10.678034 13.3276053,10.4516242 13.4141392,10.242746 C13.5006731,10.033774 13.6352085,9.84823982 13.8069638,9.70114377 C13.9786253,9.55404772 14.1826315,9.44951484 14.4023883,9.3960765 C15.8658706,9.04075845 15.8658706,6.95853841 14.4023883,6.60415788 C14.1825378,6.55089767 13.9784378,6.44647729 13.8065888,6.29939999 C13.6347398,6.15231332 13.5001106,5.96673229 13.4135767,5.7577509 C13.3270428,5.54876951 13.2910417,5.32231285 13.3085735,5.09680308 C13.3261053,4.87130268 13.3967012,4.65313364 13.5145486,4.46006188 C14.2983226,3.17379178 12.8264025,1.70189378 11.5401131,2.48565603 C11.3470759,2.60348287 11.1288193,2.67404959 10.9033436,2.69159987 C10.6778679,2.70915014 10.451361,2.67319646 10.2423859,2.58666385 C10.0334107,2.50013125 9.84787378,2.36546665 9.70077552,2.19362959 C9.55367727,2.0218019 9.44923657,1.81765809 9.39598494,1.59782965 L9.39692247,1.59689214 Z M7.99999531,10.8126611 C8.74590253,10.8126611 9.46133069,10.5163128 9.98878434,9.98886701 C10.516238,9.46142127 10.8125908,8.74600384 10.8125908,8.00011719 C10.8125908,7.25418366 10.516238,6.53880373 9.98878434,6.01134861 C9.46133069,5.4838935 8.74590253,5.18757324 7.99999531,5.18757324 C7.25405059,5.18757324 6.53865993,5.4838935 6.01119691,6.01134861 C5.48373388,6.53880373 5.18740918,7.25418366 5.18740918,8.00011719 C5.18740918,8.74600384 5.48373388,9.46142127 6.01119691,9.98886701 C6.53865993,10.5163128 7.25405059,10.8126611 7.99999531,10.8126611 Z" />
							</svg>
						</button>
					</li>
				</ul>
			</div>
		</>
	);
}