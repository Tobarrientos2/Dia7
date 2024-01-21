<script lang="ts">
    import { goto } from "$app/navigation";
    import { onMount } from "svelte";
    import { getService } from "../stores/scStore";
    import DropDown from "./DropDown.svelte";
    import Logo from "./Logo.svelte";

    let pABTitle = getService().pABTitle;
    let pABExtenseDescription = getService().pABExtenseDescription;

    
 
  </script>
<div
data-animation="default"
data-collapse="medium"
data-duration="600"
data-easing="ease"
data-easing2="ease-in"
role="banner"
class="nav-bar w-nav"
>

<div class="nav-and-footer-wrapper">
    <div class="nav-container">

      
        <nav
            role="navigation"
            class="nav-menu new-nav-menu w-nav-menu"
        >
            <div
                class="menu-links"
                data-intellimize-exp-417211278="true"
            >
            <!-- Here goes a dropdown -->
        <Logo></Logo>  
        <DropDown></DropDown>
                <a
                    href="/demo"
                    class="underline-text-link white nav-bar book-demo-hidden-desktop new-mobile-button"
                    >Book a Demo</a
                >
            </div>

           
        </nav>
        <div
            class="menu-button w-nav-button"
            style="-webkit-user-select: text;"
            aria-label="menu"
            role="button"
            tabindex="0"
            aria-controls="w-nav-overlay-0"
            aria-haspopup="menu"
            aria-expanded="false"
        >
            <div class="nav-lines nav-line-top"></div>
            <div class="nav-lines nav-line-mid"></div>
            <div class="nav-lines nav-line-bot"></div>
        </div>
    </div>
    <div class="hide w-embed">
        <style>
            @media only screen and (max-width: 1100px) and (min-width: 991px) {
                .nav-and-footer-wrapper {
                    padding: 0px 32px 0px 32px;
                }
                .nav-logo {
                    margin-right: 32px;
                }
            }
        </style>
    </div>
</div>

<div
    class="w-nav-overlay"
    data-wf-ignore=""
    id="w-nav-overlay-0"
></div>
</div>