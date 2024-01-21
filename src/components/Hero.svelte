<script>
    import { getStores } from "$app/stores";
    import { getExperiences } from "../stores/exStore";
    import { getService } from "../stores/scStore";

    let pACFirstExperience_obj = getExperiences().pACFirstExperience_obj;
    let pACTitleOfExperience_txt = pACFirstExperience_obj.ex_1;

    let pABTitle = getService().pABTitle;
    let pABLightDescription = getService().pABLightDescription;
    let pABExtenseDescription = getService().pABExtenseDescription;

</script>
<div class="section hero-section-2023 rebrand-homepage">
    <div class="container-1200 top-bottom-padding flex-left">
        <div
            id="w-node-ccc71d19-eafc-c5a8-8a93-4ffaa914463e-de857123"
            class="fn-column max-width-700"
            data-intellimize-exp-417214938="true"
        >
            <h1
                class="heading white"
                data-intellimize-exp-417214938="true"
            >
                {pABTitle}
            </h1>
            <p
                class="p-lg white p-hero font-manrope"
                data-intellimize-exp-417214938="true"
            >
                {pABLightDescription}
            </p>
          
        </div>
    </div>
</div>