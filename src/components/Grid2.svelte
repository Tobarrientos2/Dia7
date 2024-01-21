<script>
	import { getBenefits } from "../stores/bfStore";
	import { getExperiences } from "../stores/exStore";

	let pACFirstExperience_obj = getExperiences().pACFirstExperience_obj;
	let pACTitle_txt = pACFirstExperience_obj.ex_1;
	console.log(pACFirstExperience_obj);
	let pACExtenseDescription_txt = pACFirstExperience_obj.ex_3;
	let pACLightDescription_txt = pACFirstExperience_obj.ex_2;

	let pACCharasteristics_obj = pACFirstExperience_obj.ex_dt;
	let pACTitleOfCharasteristic = pACCharasteristics_obj.ex_dt1;
	console.log(pACTitleOfCharasteristic);
</script>

<div
				class="website-optimization-flexibility section-with-padding white-background"
			>
				<div class="mycontainer-1200">
					<div class="grid-image-left centered">
						<div
							id="w-node-_6e3e9618-cc18-5809-f31c-8b7b267cd393-de857123"
							class="left-grid"
						>
							<img
								class="select-your-testing-method-3 hover-shadow green-shadow"
								src="https://media.discordapp.net/attachments/1196897581981253786/1198497855724339281/dia7_prototipo2-removebg-preview.png?ex=65bf1f1b&is=65acaa1b&hm=7c796618a341898c95c3c12203e55a08e1a08ead3869419d1077636d1250acc5&=&format=webp&quality=lossless&width=888&height=1124"
								width="1146"
								height="798"
								alt="Website Personalization"
								sizes="(max-width: 479px) 99vw, (max-width: 767px) 41vw, (max-width: 991px) 42vw, 411.703125px"
								title="Website Personalization"
								loading="lazy"
								srcset="https://media.discordapp.net/attachments/1196897581981253786/1198497855724339281/dia7_prototipo2-removebg-preview.png?ex=65bf1f1b&is=65acaa1b&hm=7c796618a341898c95c3c12203e55a08e1a08ead3869419d1077636d1250acc5&=&format=webp&quality=lossless&width=888&height=1124"
								data-intellimize-exp-417214938="true"
							/>
						</div>
						<div
							id="w-node-_6e3e9618-cc18-5809-f31c-8b7b267cd395-de857123"
							class="right-grid-text centered"
						>
							<h3
								class="heading-3"
								data-intellimize-exp-417214938="true"
							>
								{pACTitleOfCharasteristic}
							</h3>
							<p
								class="p-lg font-manrope"
								data-intellimize-exp-417214938="true"
							>
								{pACExtenseDescription_txt}<br />
							</p>
							
						</div>
					</div>
				</div>
			</div>