<script lang="ts">
    import { goto } from "$app/navigation";
    import { onMount, onDestroy } from "svelte";
    import { sc_lc1_1Readable, sc_lc2_1Readable  } from "../stores/scStore";
    import { sc_lc1_1Unsubscribe, sc_lc2_1Unsubscribe } from "../stores/scStore";
    onDestroy(() => {
        sc_lc1_1Unsubscribe();
        sc_lc2_1Unsubscribe();
    });
   
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
        <a
            href="/"
            aria-current="page"
            class="nav-logo w-nav-brand w--current"
            aria-label="home"
            ><img
                src="https://assets-global.website-files.com/62163f5cc8a142313ee5a151/62163f5cc8a142d918e5a188_Group%20151.svg"
                loading="eager"
                width="114"
                height="25"
                alt=""
                class="contain-image"
            /></a
        >
        <nav
            role="navigation"
            class="nav-menu new-nav-menu w-nav-menu"
        >
            <div
                class="menu-links"
                data-intellimize-exp-417211278="true"
            >
            <!-- Here goes a dropdown -->

                <div class="i-pricing-navlink">
                    <a href="https://www.intellimize.com/pricing"
                        >Pricing</a
                    >
                </div>
                <a
                    href="/demo"
                    class="underline-text-link white nav-bar book-demo-hidden-desktop new-mobile-button"
                    >Book a Demo</a
                >
            </div>
            
            <div class="nav-bar-cta-div hidden">
                <a
                    href="/demo"
                    class="cta-button outline-button-primary-new margin-right-15"
                    >Book Demo</a
                ><a
                    href="https://app.intellimize.com/"
                    target="_blank"
                    class="cta-button button-secondary-new nav-login-button"
                    >Login</a
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