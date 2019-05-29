<template>
    <a
        class="button-social"
        :class="['twitter__design__' + button_design]"
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
    name: 'TwitterButton',
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
            default: 'Twitter'
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
            const share_url = `https://twitter.com/share?url=${encodeURIComponent(
                this.$props.page_url
            )}&text=${encodeURIComponent(this.$props.page_title)}`;
            // onClick event
            clickEvent(this, "twitter");
            return openPopUpWindow(share_url, width, height);
        }
    }
}
</script>

<style scoped lang="scss">
// Colors
$twitter_main_color: rgb(29, 161, 242);
$gradient_color: rgb(49, 181, 255);
$background_white_color: rgb(254, 254, 254);
$text_white_color: rgb(254, 254, 254);
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
// Button Social round edges
.button-social__square_edges {
  border-radius: 0;
  -moz-border-radius: 0;
  -webkit-border-radius: 0;
}
// Button twitter style `flat`
.twitter__design__flat {
  background-color: $twitter_main_color;
  color: $text_white_color;
}
// Button twitter style `outline`
.twitter__design__outline {
  background-color: $background_white_color;
  border: 1px solid $twitter_main_color;
  color: $twitter_main_color;
}
</style>
