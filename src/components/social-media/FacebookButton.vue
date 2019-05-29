<template>
    <a
        class="button-social"
        :class="['facebook__design__' + button_design]"
        :page-url="page_url"
        :page-title="page_title"
        :button-design="button_design"
        :title-social="title_social"
        @click.prevent="showShareWindow"
    >
        <span class="title-social" v-if="this.$props.title_social">
            {{ title_social }}
        </span>
    </a>
</template>

<script>
import { clickEvent } from "./helpers/events"
import { openPopUpWindow } from "./helpers/popup_window"

export default {
    name: 'FacebookButton',
    props: {
        page_url: {
            type: String,
            required: true
        },
        page_title: {
            type: String,
            required: true
        },
        button_design: {
            type: String,
            default: () => 'flat'
        },
        title_social: {
            type: String,
            default: 'Facebook'
        }
    },
    methods: {
        /**
         * Show share window.
         *
         * @return {object} a pop-up window
         */
        showShareWindow: function() {
            // Variables
            const width = 640;
            const height = 480;
            const share_url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
                this.$props.page_url
            )}`;
            // onClick event
            clickEvent(this, "facebook");
            return openPopUpWindow(share_url, width, height);
        }
    }
}
</script>

<style scoped lang="scss">
// Colors
$facebook_main_color: rgb(59, 89, 152);
$facebook_main_color_opacity: rgba(59, 89, 152, 0.5);
$gradient_color: rgb(89, 119, 182);
$background_white_color: rgb(254, 254, 254);
$text_white_color: rgb(254, 254, 254);
$text_white_color_opacity: rgba(254, 254, 254, 0.5);
// Reset
.button-social * {
  box-sizing: border-box;
}
// Button Social link style
.button-social {
  display: inline-flex;
  cursor: pointer;
  padding: 7px 10px;
  margin: 3px 1.5px;
  border-radius: 3px;
  -moz-border-radius: 3px;
  -webkit-border-radius: 3px;
}
// Button Social link style on hover
.button-social:hover {
  opacity: 0.9;
}
// Button facebook style `flat`
.facebook__design__flat {
  background-color: $facebook_main_color;
  color: $text_white_color;
}
// Button facebook style `outline`
.facebook__design__outline {
  background-color: $background_white_color;
  border: 1px solid $facebook_main_color;
  color: $facebook_main_color;
}
</style>
