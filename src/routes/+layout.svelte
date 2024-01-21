<script context="module" lang="ts">
	import Footer from "../components/Footer.svelte";
	import Header from "../components/Header.svelte";
	import "./styles.css";
	import { page } from "$app/stores";
	import { bfReadable } from "../stores/bfStore";
	import { sc_lc1_1Readable } from "../stores/scStore";
	import { exReadable } from "../stores/exStore";
	import { tmReadable } from "../stores/tmStore";

	let iAAMembers_obj;
	let pAAMembers_void = tmReadable.subscribe((data) => {
		iAAMembers_obj = data;
	});

	let pAATeamName_txt = iAAMembers_obj.tm1;
	let pAATeamLightDescription_txt = iAAMembers_obj.tm2;
	let pAATeamExtenseDescription_txt = iAAMembers_obj.tm3;

	let pAAMembersByOrder_arr = iAAMembers_obj.tm_mb;
	let pAAFirstMember = pAAMembersByOrder_arr[0];



</script>

<svelte:head>
	<title>{$page.data.page.path || "Inicio"} |</title>
	<meta content="width=device-width, initial-scale=1" name="viewport" />
	<style>
			.wf-force-outline-none[tabindex="-1"]:focus {
				outline: none;
			}
		</style><iframe
			hidden=""
			tabindex="-1"
			width="0"
			height="0"
			style="display:none"
			src="https://117123894.intellimizeio.com/storage.html"
			referrerpolicy="strict-origin-when-cross-origin"
		></iframe><meta charset="utf-8" /><title>1 unread message</title><meta
			content="Intellimize is an AI-driven website personalization and conversion rate optimization platform that enables marketers to convert more traffic."
			name="description"
		/><meta
			content="Website Personalization and Conversion Optimization Tool | Intellimize"
			property="og:title"
		/><meta
			content="Drive more conversions with our personalized marketing and website optimization platform that leverages machine learning for better and faster results. Book a Demo!"
			property="og:description"
		/><meta
			content="https://assets-global.website-files.com/62163f5cc8a142313ee5a151/6504a28b4d154316b37bf71d_homepage-graph_1200x628.png"
			property="og:image"
		/><meta
			content="Website Personalization and Conversion Optimization Tool | Intellimize"
			property="twitter:title"
		/><meta
			content="Drive more conversions with our personalized marketing and website optimization platform that leverages machine learning for better and faster results. Book a Demo!"
			property="twitter:description"
		/><meta
			content="https://assets-global.website-files.com/62163f5cc8a142313ee5a151/6504a28b4d154316b37bf71d_homepage-graph_1200x628.png"
			property="twitter:image"
		/><meta property="og:type" content="website" /><meta
			content="summary_large_image"
			name="twitter:card"
		/><meta
			content="width=device-width, initial-scale=1"
			name="viewport"
		/><link
			href="https://assets-global.website-files.com/62163f5cc8a142313ee5a151/css/intellimize.a6d413c09.min.css"
			rel="stylesheet"
			type="text/css"
		/><script
			async=""
			src="https://www.clarity.ms/s/0.7.20/clarity.js"
		></script><script
			async=""
			src="https://www.clarity.ms/tag/uet/97069924"
		></script><script
			type="text/javascript"
			async=""
			src="//munchkin.marketo.net/163/munchkin.js"
		></script><script
			src="https://connect.facebook.net/signals/config/1706707949811942?v=2.9.141&amp;r=stable&amp;domain=www.intellimize.com"
			async=""
		></script><script
			async=""
			src="https://connect.facebook.net/en_US/fbevents.js"
		></script><script
			async=""
			src="https://www.clarity.ms/tag/js2xul04wa?ref=gtm2"
		></script><script
			type="text/javascript"
			async=""
			src="//j.6sc.co/6si.min.js"
		></script><script
			async=""
			src="https://scout-cdn.salesloft.com/sl.js"
		></script><script
			type="text/javascript"
			async=""
			src="https://static.ads-twitter.com/uwt.js"
		></script><script
			type="text/javascript"
			async=""
			src="https://bat.bing.com/bat.js"
		></script><script
			type="text/javascript"
			async=""
			src="https://snap.licdn.com/li.lms-analytics/insight.min.js"
		></script><script
			type="text/javascript"
			async=""
			src="https://www.google-analytics.com/analytics.js"
		></script><script
			type="text/javascript"
			async=""
			src="https://j.6sc.co/6si.min.js"
		></script><script
			type="text/javascript"
			async=""
			src="https://www.googletagmanager.com/gtag/js?id=G-9WKXBWR0X1&amp;l=dataLayer&amp;cx=c"
		></script><script
			async=""
			src="https://www.googletagmanager.com/gtm.js?id=GTM-5PF5LZ6"
		></script><script
			async=""
			src="https://client.rum.us-east-1.amazonaws.com/1.0.2/cwr.js"
		></script><script type="text/javascript">
			!(function (o, c) {
				var n = c.documentElement,
					t = " w-mod-";
				(n.className += t + "js"),
					("ontouchstart" in o ||
						(o.DocumentTouch && c instanceof DocumentTouch)) &&
						(n.className += t + "touch");
			})(window, document);
		</script><link
			href="https://assets-global.website-files.com/62163f5cc8a142313ee5a151/62163f5cc8a1422e43e5a337_favicon.png"
			rel="shortcut icon"
			type="image/x-icon"
		/><link
			href="https://assets-global.website-files.com/62163f5cc8a142313ee5a151/62163f5cc8a1425c93e5a338_save%20icon.png"
			rel="apple-touch-icon"
		/><link href="https://www.intellimize.com/" rel="canonical" /><script>
			(function (n, i, v, r, s, c, x, z) {
				x = window.AwsRumClient = {
					q: [],
					n: n,
					i: i,
					v: v,
					r: r,
					c: c,
				};
				window[n] = function (c, p) {
					x.q.push({ c: c, p: p });
				};
				z = document.createElement("script");
				z.async = true;
				z.src = s;
				document.head.insertBefore(
					z,
					document.getElementsByTagName("script")[0],
				);
			})(
				"cwr",
				"d9a85029-4a67-4c03-97c3-63c5ba3d4262",
				"1.0.0",
				"us-west-2",
				"https://client.rum.us-east-1.amazonaws.com/1.0.2/cwr.js",
				{
					sessionSampleRate: 1,
					guestRoleArn:
						"arn:aws:iam::568976112162:role/RUM-Monitor-us-west-2-568976112162-2495594734461-Unauth",
					identityPoolId:
						"us-west-2:f1c62bfe-82c4-4129-b00d-5c268055d6f0",
					endpoint: "https://dataplane.rum.us-west-2.amazonaws.com",
					telemetries: ["performance", "errors", "http"],
					allowCookies: true,
					enableXRay: false,
				},
			);
		</script>
		<script>
			(function () {
				var p = new URLSearchParams(document.location.search);
				if (!p.has("iacct")) return;
				var iR = new XMLHttpRequest();
				iR.open(
					"GET",
					"https://se-services.intellimize.co/abm?id=" +
						p.get("iacct"),
					false,
				);
				iR.send(null);
				window.iabm =
					iR.status === 200 ? JSON.parse(iR.responseText) : {};
			})();
		</script>
		<!-- Intellimize start -->
		<!-- Intellimize start -->
		<style>
			.anti-flicker {
				visibility: hidden !important;
			}
		</style>
		<script>
			(function (maxTimeout) {
				document.documentElement.className += " anti-flicker";
				setTimeout(() => {
					document.documentElement.className =
						document.documentElement.className.replace(
							RegExp(" ?anti-flicker"),
							"",
						);
				}, maxTimeout);
			})(4000);
		</script>
		<link
			rel="preload"
			href="https://cdn.intellimize.co/snippet/117123894.js"
			as="script"
		/>
		<script
			src="https://cdn.intellimize.co/snippet/117123894.js"
			async=""
			onerror="document.documentElement.className = document.documentElement.className.replace(RegExp(' ?anti-flicker'), '');"
		></script>
		<link
			rel="preconnect"
			href="https://api.intellimize.co"
			crossorigin=""
		/>
		<link rel="preconnect" href="https://117123894.intellimizeio.com" />
		<link
			rel="preconnect"
			href="https://log.intellimize.co"
			crossorigin=""
		/>
		<!-- Intellimize end -->

		<!-- Google Tag Manager -->
		<!-- Google Tag Manager -->
		<script>
			(function (w, d, s, l, i) {
				w[l] = w[l] || [];
				w[l].push({
					"gtm.start": new Date().getTime(),
					event: "gtm.js",
				});
				var f = d.getElementsByTagName(s)[0],
					j = d.createElement(s),
					dl = l != "dataLayer" ? "&l=" + l : "";
				j.async = true;
				j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
				f.parentNode.insertBefore(j, f);
			})(window, document, "script", "dataLayer", "GTM-5PF5LZ6");
		</script>
		<!-- End Google Tag Manager -->

		<!-- End Google Tag Manager -->
		<script src="//go.intellimize.com/js/forms2/js/forms2.min.js"></script>

		<script
			type="text/javascript"
			async=""
			src="https://play.vidyard.com/embed/v4.js"
		></script>

		<!-- Marketo Munchin Code Start -->
		<!-- Marketo Munchin Code Start -->
		<script>
			MktoForms2.whenRendered(function (form) {
				var formEl = form.getFormElem()[0],
					rando = "_" + Math.random();

				[].slice
					.call(formEl.querySelectorAll("label[for]"))
					.forEach(function (labelEl) {
						var forEl = formEl.querySelector(
							'[id="' + labelEl.htmlFor + '"]',
						);

						labelEl.htmlFor = forEl.id = forEl.id + rando;
					});
			});
		</script>
		<!-- Marketo Munchin Code End -->

		<!-- Finsweet Cookie Consent -->
		<!-- Finsweet Cookie Consent -->
		<script
			async=""
			src="https://cdn.jsdelivr.net/npm/@finsweet/cookie-consent@1/fs-cc.js"
			fs-cc-mode="informational"
			fs-cc-source="/
why-intellimize"
		></script>

		<script
			src="https://assets.adoberesources.net/loader.js?orgId=6CD92110637BD1A00A495C41%40AdobeOrg&amp;instanceId=intellimize&amp;env=prod&amp;geo=va7"
		></script><script
			async=""
			src="https://assets.adoberesources.net/builds/0f32e65b8dc79d4e7e21994e77aaf18fe557756a/dist/core-ui/src/index.js"
		></script><script
			async=""
			src="https://assets.adoberesources.net/builds/0f32e65b8dc79d4e7e21994e77aaf18fe557756a/dist/core/src/index.js"
		></script><style></style><style
			id="intellimize-customer-117123894"
			class="iStyleBlock"
		>
			@keyframes i-slide-in--left {
				0% {
					transform: translate(-120%);
				}
				to {
					transform: translate(0);
				}
			}
			@keyframes i-slide-in--up {
				0% {
					transform: translateY(120%);
				}
				to {
					transform: translateY(0);
				}
			}
			.intellimize-popup {
				margin: auto;
				position: absolute;
				left: 50%;
				top: 50%;
				display: none;
				box-sizing: border-box;
				width: 300px;
				max-width: 100vw;
				height: auto;
				max-height: 100vh;
				background: #ffffff;
				overflow: visible;
				color: #000;
				font-size: 16px;
				text-align: center;
				transform: translate(-50%, -50%);
			}
			.intellimize-popup img.intellimize-popup--banner {
				margin: 0;
				display: block;
				width: 100%;
				max-width: 100% !important;
				height: auto;
			}
			.intellimize-popup--content {
				padding: 20px;
				overflow: auto;
			}
			.intellimize-popup h3 {
				margin-bottom: 10px;
				font-size: 2em;
			}
			.intellimize-popup p {
				margin-top: 10px;
				margin-bottom: 10px;
				font-size: 1em;
			}
			.intellimize-popup--cta {
				display: inline-block;
				padding: 5px 10px;
				background: #000000;
				color: #fff;
				text-decoration: none;
			}
			.intellimize-popup--cta:hover {
				opacity: 0.75;
			}
			.intellimize-popup--close {
				position: absolute;
				right: 10px;
				top: 10px;
				display: block;
				width: 0.5em;
				height: 0.5em;
				color: #000;
				font-size: 26px;
				line-height: 0.5;
				text-decoration: none;
			}
			.intellimize-popup--close:hover {
				color: #0074d9;
			}
			.intellimize-popup--backdrop {
				z-index: 2147483647;
				position: fixed;
				inset: 0;
				display: none;
				width: 100%;
				height: 100%;
				background: rgba(0, 0, 0, 0.6);
			}
			.intellimize-popup.intellimize-sidepop {
				z-index: 2147483647;
				position: fixed;
				left: 50px;
				top: unset;
				bottom: 50px;
				border-top: 6px solid #000000;
				box-shadow: #0000005c 4px 6px 10px 4px;
				transform: none;
				animation: i-slide-in--left 0.75s ease-in;
			}
			@media (max-width: 749px) {
				.intellimize-popup.intellimize-sidepop {
					left: 0;
					bottom: 0;
					width: 100%;
					box-shadow: none;
					animation: i-slide-in--up 0.75s ease-in;
				}
			}
			.intellimize-popup.intellimize-sidepop .intellimize-popup--close {
				right: 100%;
				top: unset;
				bottom: 0;
				width: 1em;
				height: 1em;
				background: #000000;
				color: #fff;
				line-height: 1;
			}
			@media (max-width: 749px) {
				.intellimize-popup.intellimize-sidepop
					.intellimize-popup--close {
					right: 0;
					top: 0;
				}
			}

			html.i-hide-page,
			html.i-hide-page *,
			html.i-hide-for-redirect,
			html.i-hide-for-redirect * {
				display: none !important;
				visibility: hidden !important;
			}
		</style><style
			id="intellimize-anti-flicker-regions"
			class="iStyleBlock"
		>
			html[data-intellimize-rendering]
				.menu-links:not([data-intellimize-exp-417211278]),
			html[data-intellimize-rendering]
				.menu-links:not([data-intellimize-exp-417211278])
				*,
			html[data-intellimize-rendering]
				.dropdown-company.w-dropdown:last-of-type:not(
					[data-intellimize-exp-417211278]
				),
			html[data-intellimize-rendering]
				.dropdown-company.w-dropdown:last-of-type:not(
					[data-intellimize-exp-417211278]
				)
				*,
			html[data-intellimize-rendering]
				#w-node-_3ebc0106-f6c3-4eb3-e82c-e887a3e442d4-a3e442d2
				> .contain-image:not([data-intellimize-exp-417214938]),
			html[data-intellimize-rendering]
				#w-node-_3ebc0106-f6c3-4eb3-e82c-e887a3e442d4-a3e442d2
				> .contain-image:not([data-intellimize-exp-417214938])
				*,
			html[data-intellimize-rendering]
				h1:not([data-intellimize-exp-417214938]),
			html[data-intellimize-rendering]
				h1:not([data-intellimize-exp-417214938])
				*,
			html[data-intellimize-rendering]
				.p-hero:not([data-intellimize-exp-417214938]),
			html[data-intellimize-rendering]
				.p-hero:not([data-intellimize-exp-417214938])
				*,
			html[data-intellimize-rendering]
				h2:not([data-intellimize-exp-417214938]),
			html[data-intellimize-rendering]
				h2:not([data-intellimize-exp-417214938])
				*,
			html[data-intellimize-rendering]
				#w-node-_6e3e9618-cc18-5809-f31c-8b7b267cd371-de857123
				> p.p-lg:not([data-intellimize-exp-417214938]),
			html[data-intellimize-rendering]
				#w-node-_6e3e9618-cc18-5809-f31c-8b7b267cd371-de857123
				> p.p-lg:not([data-intellimize-exp-417214938])
				*,
			html[data-intellimize-rendering]
				#w-node-_6e3e9618-cc18-5809-f31c-8b7b267cd395-de857123
				> h3.heading-3:not([data-intellimize-exp-417214938]),
			html[data-intellimize-rendering]
				#w-node-_6e3e9618-cc18-5809-f31c-8b7b267cd395-de857123
				> h3.heading-3:not([data-intellimize-exp-417214938])
				*,
			html[data-intellimize-rendering]
				#w-node-_6e3e9618-cc18-5809-f31c-8b7b267cd393-de857123
				> .hover-shadow:not([data-intellimize-exp-417214938]),
			html[data-intellimize-rendering]
				#w-node-_6e3e9618-cc18-5809-f31c-8b7b267cd393-de857123
				> .hover-shadow:not([data-intellimize-exp-417214938])
				*,
			html[data-intellimize-rendering]
				#w-node-_6e3e9618-cc18-5809-f31c-8b7b267cd395-de857123
				> p.p-lg:not([data-intellimize-exp-417214938]),
			html[data-intellimize-rendering]
				#w-node-_6e3e9618-cc18-5809-f31c-8b7b267cd395-de857123
				> p.p-lg:not([data-intellimize-exp-417214938])
				*,
			html[data-intellimize-rendering]
				#w-node-_6e3e9618-cc18-5809-f31c-8b7b267cd371-de857123
				> .button-secondary-new.w-button:not(
					[data-intellimize-exp-417214938]
				),
			html[data-intellimize-rendering]
				#w-node-_6e3e9618-cc18-5809-f31c-8b7b267cd371-de857123
				> .button-secondary-new.w-button:not(
					[data-intellimize-exp-417214938]
				)
				*,
			html[data-intellimize-rendering]
				#w-node-_6e3e9618-cc18-5809-f31c-8b7b267cd3a9-de857123
				> .hover-shadow:not([data-intellimize-exp-417214938]),
			html[data-intellimize-rendering]
				#w-node-_6e3e9618-cc18-5809-f31c-8b7b267cd3a9-de857123
				> .hover-shadow:not([data-intellimize-exp-417214938])
				*,
			html[data-intellimize-rendering]
				#w-node-_6e3e9618-cc18-5809-f31c-8b7b267cd3a1-de857123
				> h3.heading-3:not([data-intellimize-exp-417214938]),
			html[data-intellimize-rendering]
				#w-node-_6e3e9618-cc18-5809-f31c-8b7b267cd3a1-de857123
				> h3.heading-3:not([data-intellimize-exp-417214938])
				*,
			html[data-intellimize-rendering]
				#w-node-_6e3e9618-cc18-5809-f31c-8b7b267cd3a1-de857123
				> p.p-lg:not([data-intellimize-exp-417214938]),
			html[data-intellimize-rendering]
				#w-node-_6e3e9618-cc18-5809-f31c-8b7b267cd3a1-de857123
				> p.p-lg:not([data-intellimize-exp-417214938])
				*,
			html[data-intellimize-rendering]
				#w-node-_6e3e9618-cc18-5809-f31c-8b7b267cd3a1-de857123
				> .button-secondary-new.w-button:not(
					[data-intellimize-exp-417214938]
				),
			html[data-intellimize-rendering]
				#w-node-_6e3e9618-cc18-5809-f31c-8b7b267cd3a1-de857123
				> .button-secondary-new.w-button:not(
					[data-intellimize-exp-417214938]
				)
				*,
			html[data-intellimize-rendering]
				.w-col-7
				> .bottom-margin-50:not([data-intellimize-exp-417214938]),
			html[data-intellimize-rendering]
				.w-col-7
				> .bottom-margin-50:not([data-intellimize-exp-417214938])
				*,
			html[data-intellimize-rendering]
				.w-col-7
				> p.p-lg:not([data-intellimize-exp-417214938]),
			html[data-intellimize-rendering]
				.w-col-7
				> p.p-lg:not([data-intellimize-exp-417214938])
				*,
			html[data-intellimize-rendering]
				strong:not([data-intellimize-exp-417214938]),
			html[data-intellimize-rendering]
				strong:not([data-intellimize-exp-417214938])
				*,
			html[data-intellimize-rendering]
				.your-success-matters:not([data-intellimize-exp-417214938]),
			html[data-intellimize-rendering]
				.your-success-matters:not([data-intellimize-exp-417214938])
				*,
			html[data-intellimize-rendering]
				.testimonials-section:not([data-intellimize-exp-417214938]),
			html[data-intellimize-rendering]
				.testimonials-section:not([data-intellimize-exp-417214938])
				*,
			html[data-intellimize-rendering]
				.w-col-8
				> div:nth-of-type(1)
				> p:not([data-intellimize-exp-417214938]),
			html[data-intellimize-rendering]
				.w-col-8
				> div:nth-of-type(1)
				> p:not([data-intellimize-exp-417214938])
				*,
			html[data-intellimize-rendering]
				.font-manrope-700:not([data-intellimize-exp-417214938]),
			html[data-intellimize-rendering]
				.font-manrope-700:not([data-intellimize-exp-417214938])
				*,
			html[data-intellimize-rendering]
				.banner:not([data-intellimize-exp-417214938]),
			html[data-intellimize-rendering]
				.banner:not([data-intellimize-exp-417214938])
				*,
			html[data-intellimize-rendering]
				#w-node-_6e3e9618-cc18-5809-f31c-8b7b267cd3af-de857123
				> .hover-shadow:not([data-intellimize-exp-417214938]),
			html[data-intellimize-rendering]
				#w-node-_6e3e9618-cc18-5809-f31c-8b7b267cd3af-de857123
				> .hover-shadow:not([data-intellimize-exp-417214938])
				*,
			html[data-intellimize-rendering]
				#w-node-_6e3e9618-cc18-5809-f31c-8b7b267cd3b1-de857123
				> h3.heading-3:not([data-intellimize-exp-417214938]),
			html[data-intellimize-rendering]
				#w-node-_6e3e9618-cc18-5809-f31c-8b7b267cd3b1-de857123
				> h3.heading-3:not([data-intellimize-exp-417214938])
				*,
			html[data-intellimize-rendering]
				#w-node-_6e3e9618-cc18-5809-f31c-8b7b267cd3b1-de857123
				> p.p-lg:not([data-intellimize-exp-417214938]),
			html[data-intellimize-rendering]
				#w-node-_6e3e9618-cc18-5809-f31c-8b7b267cd3b1-de857123
				> p.p-lg:not([data-intellimize-exp-417214938])
				*,
			html[data-intellimize-rendering]
				#w-node-_6e3e9618-cc18-5809-f31c-8b7b267cd395-de857123
				> .button-secondary-new.w-button:not(
					[data-intellimize-exp-417214938]
				),
			html[data-intellimize-rendering]
				#w-node-_6e3e9618-cc18-5809-f31c-8b7b267cd395-de857123
				> .button-secondary-new.w-button:not(
					[data-intellimize-exp-417214938]
				)
				*,
			html[data-intellimize-rendering]
				.initials:not([data-intellimize-exp-417214938]),
			html[data-intellimize-rendering]
				.initials:not([data-intellimize-exp-417214938])
				*,
			html[data-intellimize-rendering]
				.track-horizontal
				> img:nth-of-type(2):not([data-intellimize-exp-417214938]),
			html[data-intellimize-rendering]
				.track-horizontal
				> img:nth-of-type(2):not([data-intellimize-exp-417214938])
				*,
			html[data-intellimize-rendering]
				.outline-button-primary-new.margin-top-l:not(
					[data-intellimize-exp-417214938]
				),
			html[data-intellimize-rendering]
				.outline-button-primary-new.margin-top-l:not(
					[data-intellimize-exp-417214938]
				)
				*,
			html[data-intellimize-rendering]
				#w-node-_6e3e9618-cc18-5809-f31c-8b7b267cd3b1-de857123
				> .button-secondary-new.w-button:not(
					[data-intellimize-exp-417214938]
				),
			html[data-intellimize-rendering]
				#w-node-_6e3e9618-cc18-5809-f31c-8b7b267cd3b1-de857123
				> .button-secondary-new.w-button:not(
					[data-intellimize-exp-417214938]
				)
				*,
			html[data-intellimize-rendering]
				.homepage-video:not([data-intellimize-exp-417214938]),
			html[data-intellimize-rendering]
				.homepage-video:not([data-intellimize-exp-417214938])
				*,
			html[data-intellimize-rendering]
				#insert-f81d3ae3-9838-4428-a3bf-610d843af8de:not(
					[data-intellimize-exp-417214938]
				),
			html[data-intellimize-rendering]
				#insert-f81d3ae3-9838-4428-a3bf-610d843af8de:not(
					[data-intellimize-exp-417214938]
				)
				*,
			html[data-intellimize-rendering]
				#insert-f81d3ae3-9838-4428-a3bf-610d843af8de
				.reverse-flex-mobile:not([data-intellimize-exp-417214938]),
			html[data-intellimize-rendering]
				#insert-f81d3ae3-9838-4428-a3bf-610d843af8de
				.reverse-flex-mobile:not([data-intellimize-exp-417214938])
				*,
			html[data-intellimize-rendering]
				#insert-f81d3ae3-9838-4428-a3bf-610d843af8de
				.button-secondary-new.w-button:not(
					[data-intellimize-exp-417214938]
				),
			html[data-intellimize-rendering]
				#insert-f81d3ae3-9838-4428-a3bf-610d843af8de
				.button-secondary-new.w-button:not(
					[data-intellimize-exp-417214938]
				)
				*,
			html[data-intellimize-rendering]
				.launch-new-ideas
				p.p-lg:not([data-intellimize-exp-417214938]),
			html[data-intellimize-rendering]
				.launch-new-ideas
				p.p-lg:not([data-intellimize-exp-417214938])
				*,
			html[data-intellimize-rendering]
				.isecondary-button:not([data-intellimize-exp-417214938]),
			html[data-intellimize-rendering]
				.isecondary-button:not([data-intellimize-exp-417214938])
				*,
			html[data-intellimize-rendering]
				.homepage-video
				> img:not([data-intellimize-exp-417214938]),
			html[data-intellimize-rendering]
				.homepage-video
				> img:not([data-intellimize-exp-417214938])
				*,
			html[data-intellimize-rendering]
				.shopza:not([data-intellimize-exp-417214938]),
			html[data-intellimize-rendering]
				.shopza:not([data-intellimize-exp-417214938])
				*,
			html[data-intellimize-rendering]
				#insert-f81d3ae3-9838-4428-a3bf-610d843af8de
				h3.heading-3:not([data-intellimize-exp-417214938]),
			html[data-intellimize-rendering]
				#insert-f81d3ae3-9838-4428-a3bf-610d843af8de
				h3.heading-3:not([data-intellimize-exp-417214938])
				*,
			html[data-intellimize-rendering]
				#w-node-ccc71d19-eafc-c5a8-8a93-4ffaa914463e-de857123:not(
					[data-intellimize-exp-417214938]
				),
			html[data-intellimize-rendering]
				#w-node-ccc71d19-eafc-c5a8-8a93-4ffaa914463e-de857123:not(
					[data-intellimize-exp-417214938]
				)
				*,
			html[data-intellimize-rendering]
				h1
				> span:not([data-intellimize-exp-417214938]),
			html[data-intellimize-rendering]
				h1
				> span:not([data-intellimize-exp-417214938])
				*,
			html[data-intellimize-rendering]
				#w-node-ccc71d19-eafc-c5a8-8a93-4ffaa914463e-de857123
				a:nth-of-type(1):not([data-intellimize-exp-417214938]),
			html[data-intellimize-rendering]
				#w-node-ccc71d19-eafc-c5a8-8a93-4ffaa914463e-de857123
				a:nth-of-type(1):not([data-intellimize-exp-417214938])
				*,
			html[data-intellimize-rendering]
				.i-secondary:not([data-intellimize-exp-417214938]),
			html[data-intellimize-rendering]
				.i-secondary:not([data-intellimize-exp-417214938])
				*,
			html[data-intellimize-rendering]
				img:nth-of-type(8):not([data-intellimize-exp-417214938]),
			html[data-intellimize-rendering]
				img:nth-of-type(8):not([data-intellimize-exp-417214938])
				*,
			html[data-intellimize-rendering]
				.banner:not([data-intellimize-exp-417215653]),
			html[data-intellimize-rendering]
				.banner:not([data-intellimize-exp-417215653])
				* {
				visibility: hidden !important;
			}
		</style><meta
			name="x-ce-data"
			ceid="nalkmonnmldhpfcpdlbdpljlaajlaphh"
			content="AMX3e4tZlmGkDm0s4V+IjKV/MJ/S8QHhnCJId51pV0IkQLDKLkxLXfhw+VjySRtS"
		/><style id="intellimize-variation-617066430" class="iStyleBlock">
			.i-pricing-navlink a {
				text-decoration: none;
				color: #fff;
				font-size: 1rem;
				line-height: 1.3;
				font-weight: 500;
				padding: 0 1.5rem;
			}
		</style><style type="text/css">
			.vidyard-player-container .play-button {
				position: absolute;
				width: 16%;
				height: auto;
				border-radius: 50%;
				border: none;
				cursor: pointer;
				opacity: 0.65;
				filter: alpha(opacity = 65);
				transition: opacity 0.2s linear;
				overflow: hidden;
				font-size: 0;
				padding: 0;
				min-width: 20px;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
				-webkit-appearance: initial !important;
				-moz-appearance: initial !important;
				appearance: initial !important;
			}
			.vidyard-player-container .play-button .play-button-size {
				padding-top: 100%;
				width: 100%;
			}
			.vidyard-player-container .play-button .arrow-size {
				position: absolute;
				top: 50%;
				left: 50%;
				width: 35%;
				height: auto;
				margin: -25% 0 0 -12%;
				overflow: hidden;
			}
			.vidyard-player-container .play-button .arrow-size-ratio {
				padding-top: 150%;
				width: 100%;
			}
			.vidyard-player-container .play-button .arrow {
				position: absolute;
				top: 50%;
				left: auto;
				right: 0;
				bottom: auto;
				width: 0;
				height: 0;
				margin: -200px 0 -200px -300px;
				border: 200px solid transparent;
				border-left: 300px solid #fff;
				border-right: none;
			}
			.vidyard-lightbox-thumbnail:hover .play-button {
				opacity: 1;
				filter: alpha(opacity = 100);
				zoom: 1;
			}
			.vidyard-player-container {
				position: relative;
				height: 100%;
				text-align: center;
			}
			.vidyard-player-container img {
				height: 100%;
			}
			.vidyard-player-container .play-button {
				display: none;
			}
			.vidyard-close-container {
				position: fixed;
				right: 20px;
				top: 20px;
				height: 34px;
				width: 34px;
				cursor: pointer;
				z-index: 1000;
			}
			.vidyard-close-container:focus {
				outline: 1px dotted grey;
			}
			.vidyard-close-x {
				position: absolute;
				height: 100%;
				width: 100%;
				color: #fff;
				font-size: 2em;
				text-align: center;
				line-height: 34px;
			}
			.vidyard-close-x:hover {
				color: #ddd;
			}
			.vidyard-close-x:hover:after,
			.vidyard-close-x:hover:before {
				background: #ddd;
			}
			.vidyard-close-x:after,
			.vidyard-close-x:before {
				content: "";
				position: absolute;
				background: #fff;
				display: block;
				left: 50%;
				top: 50%;
				height: 65%;
				width: 2px;
				transition: all 0.2s;
				-ms-high-contrast-adjust: none;
			}
			.vidyard-close-x:before {
				transform: translate(-50%, -50%) rotate(45deg);
				-ms-transform: translate(-50%, -50%) rotate(45deg);
			}
			.vidyard-close-x:after {
				transform: translate(-50%, -50%) rotate(-45deg);
				-ms-transform: translate(-50%, -50%) rotate(-45deg);
			}
			.vidyard-close-x.simple-close:after,
			.vidyard-close-x.simple-close:before {
				display: none;
			}
			.vidyard-lightbox-thumbnail {
				width: 100%;
				height: 100%;
				margin: auto;
			}
			.vidyard-lightbox-image {
				height: 100%;
				left: 0;
				position: absolute;
				top: 0;
				width: 100%;
			}
			.vidyard-lightbox-centering {
				cursor: pointer;
				height: 0;
				max-width: 100%;
				overflow: hidden;
				padding-bottom: 56.25%;
				position: relative;
			}
			.vidyard-lightbox-content-backer {
				-webkit-transform:
					opacity 1s,
					filter 1s;
				-ms-transform:
					opacity 1s,
					filter 1s;
				transition:
					opacity 1s,
					filter 1s;
				background-color: #000;
				height: 100%;
				width: 100%;
				position: absolute;
			}
			#vidyard-overlay-wrapper,
			.vidyard-lightbox-content-backer {
				filter: alpha(opacity = 0);
				opacity: 0;
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
			}
			#vidyard-overlay-wrapper {
				position: relative;
				box-sizing: border-box;
				display: none;
				transition:
					opacity 0.5s,
					filter 0.5s;
			}
			#vidyard-overlay {
				top: 0;
				right: 0;
				bottom: 0;
				left: 0;
				opacity: 0.9;
				filter: alpha(opacity = 90);
				width: 100%;
				height: 100%;
				background-color: #000;
				z-index: 800;
			}
			#vidyard-content-fixed,
			#vidyard-overlay {
				position: fixed;
				box-sizing: border-box;
				display: none;
			}
			#vidyard-content-fixed {
				opacity: 1;
				z-index: 900;
				text-align: center;
				top: 5%;
				right: 5%;
				bottom: 5%;
				left: 5%;
				width: 90%;
			}
			#vidyard-popbox {
				display: inline-block;
				position: absolute;
				left: 50%;
				top: 50%;
				-webit-transform: translate(-50%, -50%);
				-ms-transform: translate(-50%, -50%);
				transform: translate(-50%, -50%);
			}
			#vidyard-popbox-constraint {
				opacity: 0;
				filter: alpha(opacity = 0);
				display: block;
				visibility: hidden;
			}
			#vidyard-popbox-constraint.landscape {
				height: 90vh;
			}
			#vidyard-popbox-constraint.portrait {
				width: 90vw;
			}
			.vidyard-player-container div[class^="vidyard-iframe-"] {
				z-index: 1;
			}
			.vidyard-player-container div[class^="vidyard-div-"] {
				background-repeat: no-repeat;
				background-position: 0 50%;
				background-size: 100%;
			}
			img.vidyard-player-embed {
				width: 100%;
			}
			img.vidyard-player-embed.inserted {
				position: absolute;
				top: 0;
				left: 0;
				z-index: 0;
				max-width: 100% !important;
			}
			.vidyard-player-container.playlist-open {
				padding-right: 319px;
				width: auto !important;
			}
			.vidyard-player-container.playlist-open div[class^="vidyard-div-"] {
				width: calc(100% + 319px);
				max-width: calc(100% + 319px) !important;
				background-size: calc(100% - 319px);
				background-color: #f5f9ff;
			}
			.vidyard-player-container.playlist-open
				div[class^="vidyard-div-"]
				img.vidyard-player-embed {
				width: calc(100% - 319px) !important;
			}
			#backlink-icon {
				height: 15px;
				width: 15px;
				margin-right: 6px;
				transition: 0.3s;
			}
			#backlink {
				align-items: center;
				border-radius: 4px;
				border: 3px solid #ebeeff;
				display: inline-block;
				float: left;
				line-height: 18px;
				margin: 8px 0 0;
				outline: none;
				padding: 1px 8px 1px 5px;
				position: relative;
				*zoom: 1;
				font-family:
					Arial,
					Helvetica Neue,
					Helvetica,
					sans-serif;
				font-style: normal;
				font-weight: 400;
				font-size: 12px;
				text-decoration: none;
			}
			#backlink:after,
			#backlink:before {
				content: " ";
				display: table;
			}
			#backlink:after {
				clear: both;
			}
			#backlink:link,
			#backlink:visited {
				background: #ebeeff;
				border-color: #ebeeff;
				color: #414dd4;
			}
			#backlink:hover {
				background: #bfc2ff;
				color: #1b1a82;
				cursor: pointer;
			}
			#backlink:focus,
			#backlink:hover {
				border-color: #bfc2ff;
			}
			#backlink:active {
				background: #8f97ff;
				border-color: #8f97ff;
				color: #0c084d;
			}
			#backlink-icon {
				float: left;
				height: 18px;
				margin-right: 5px;
				position: relative;
				width: 18px;
			}
			#backlink-text {
				float: left;
			}
		</style><script
			type="text/javascript"
			async=""
			src="https://googleads.g.doubleclick.net/pagead/viewthroughconversion/593135807/?random=1705793089045&amp;cv=11&amp;fst=1705793089045&amp;bg=ffffff&amp;guid=ON&amp;async=1&amp;gtm=45He41h0v831137626&amp;gcd=11l1l1l1l1&amp;dma=0&amp;u_w=1440&amp;u_h=900&amp;url=https%3A%2F%2Fwww.intellimize.com%2F&amp;hn=www.googleadservices.com&amp;frm=0&amp;tiba=Intellimize%20%7C%20Website%20Optimization%20%26%20Personalization&amp;auid=771613319.1705793089&amp;fledge=1&amp;uaa=arm&amp;uab=64&amp;uafvl=Not_A%2520Brand%3B8.0.0.0%7CChromium%3B120.0.6099.199%7CGoogle%2520Chrome%3B120.0.6099.199&amp;uamb=0&amp;uap=macOS&amp;uapv=14.0.0&amp;uaw=0&amp;rfmt=3&amp;fmt=4"
		></script><script
			type="text/javascript"
			async=""
			src="//munchkin.marketo.net/munchkin.js"
		></script><script
			type="application/javascript"
			async=""
			src="https://tracking.g2crowd.com/attribution_tracking/conversions/2082.js?p=https://www.intellimize.com/&amp;e="
		></script><style>
			[fs-cc="banner"],
			[fs-cc="manager"],
			[fs-cc="preferences"],
			[fs-cc="interaction"] {
				display: none;
			}
		</style><style id="_6si-shortening">
			/* This stylesheet is created by 6sense */
			.mktoForm .mktoFormRow:has(._6si_sff_filled) {
				display: none;
			}
			.mktoForm .mktoFormRow ._6si_sff_filled {
				display: none;
			}
			.hs-form .hs-form-field:has(._6si_sff_filled) {
				display: none;
			}
			.hs-form .hs-form-field ._6si_sff_filled {
				display: none;
			}
			form.form .form-field:not(.error):has(._6si_sff_filled) {
				display: none;
			}
			form.form .form-field:not(.error) ._6si_sff_filled {
				display: none;
			}
			.elq-form .row:has(._6si_sff_filled) {
				display: none;
			}
			.elq-form .row ._6si_sff_filled {
				display: none;
			}
		</style><script
			src="https://bat.bing.com/p/action/97069924.js"
			type="text/javascript"
			async=""
			data-ueto="ueto_1be016fb56"
		></script>
</svelte:head>

<Header />

<slot />



		<div class="hide w-embed w-iframe">
			<!-- Google Tag Manager (noscript) -->
			<noscript
				><iframe
					src="https://www.googletagmanager.com/ns.html?id=GTM-5PF5LZ6"
					height="0"
					width="0"
					style="display:none;visibility:hidden"
				></iframe></noscript
			>
			<!-- End Google Tag Manager (noscript) -->

			<!-- End Google Tag Manager (noscript) -->
			<style>
				@media only screen and (min-width: 2440px) {
					.shopza-test {
						height: 858px !important;
						padding-top: 0% !important;
					}
				}
			</style>
		</div>

		

		<div class="main-wrapper">
			<div class="overflow-hidden">
				<!-- Comienzo de las secciones (componentes) -->
			</div>
			
			
		</div>



	

<Footer />
