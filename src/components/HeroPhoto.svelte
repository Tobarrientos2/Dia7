<script>
    import { getFirstMember } from "../stores/tmStore";
    import { getExperiences } from "../stores/exStore";

    let pAAFirstMember_obj = getFirstMember().pAAFirstMember;
    let pAANameOfMember = pAAFirstMember_obj.tm_mb1;

    let pACFirstExperience = getExperiences().pACFirstExperience_obj;
    let pACTitleOfExperience = pACFirstExperience.ex_1;
    let pACDescriptionLight = pACFirstExperience.ex_2;

</script>

<div class="section-with-padding relative">
    <div
        class="shopza green-border shopza-test"
        data-intellimize-exp-417214938="true"
    >
        <div
            class="homepage-video w-embed"
            data-intellimize-exp-417214938="true"
        >
           <img src="https://media.discordapp.net/attachments/1196897581981253786/1198467362026963035/dia7hdy.png?ex=65bf02b5&is=65ac8db5&hm=7eed0b827e22d0747c4c9437c01b33dafb9976b6770f580cd34de33f360e07a0&=&format=webp&quality=lossless&width=1714&height=1138" alt="">
        </div>
    </div>
    <div
        class="container-1200 grid-2 reverse-tablet homepage-fix"
    >
        <div
            id="w-node-_6e3e9618-cc18-5809-f31c-8b7b267cd371-de857123"
            class="left-grid-content center tablet-width-100"
        >
            <h2
                class="heading-3 padding-right-50p"
                data-intellimize-exp-417214938="true"
            >
                {pACTitleOfExperience}
            </h2>
            <p
                class="p-lg font-manrope"
                data-intellimize-exp-417214938="true"
            >
                {pACDescriptionLight}
            </p>
           
        </div>
    </div>
</div>