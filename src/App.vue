<template>
  <div id="app">
    <!-- jumbotron -->
    <div class="container-fluid pb-5 Jumbotron-wrapper u-bg-navy">
      <div class="container Jumbotron">
        <div class="row py-5">
          <div class="col">
            <img :src="'./static/pomotroid-timer.png'" alt="Pomotroid timer">
          </div>
        </div>
        <div class="row">
          <div class="col">
            <h1 class="Title">Pomotroid</h1>
            <p class="Title-subtitle">A simple, configurable and visually pleasing Pomodoro timer.</p>
            <!-- button -->
            <div class="Button-wrapper mt-5">
              <a :href="platformInfo.link">
                <div class="Button Button--filled Button--filled--blue">
                  <p class="Button-text">Download for {{ platformInfo.platform }}</p>
                </div>
              </a>
            </div>
            <!-- end button -->
          </div>
        </div>
      </div>
    </div>
    <!-- end jumbotron -->
    <app-rounder :color="'navy'" :direction="'down'"/>

    <!-- features -->
    <div class="container Section Section--light my-5 py-5">
      <div class="row">
        <div class="col-sm-8 col-md-6 col-lg-4 mx-sm-auto text-center text-lg-left">
          <h2 class="Section-title Section-title--borderRed">Features</h2>
          <ul class="TextList">
            <li class="TextList-item">
              <h3>Custom Times &amp; Rounds</h3>
              <p>Customize work, short break, long break, and rounds to fit your workflow.</p>
            </li>
            <li class="TextList-item">
              <h3>Charming Sound Notifications</h3>
              <p>Pleasing chimes let you know when it’s time to take a break or get back to work.</p>
            </li>
            <li class="TextList-item">
              <h3>Simple &amp; Easy to Use</h3>
              <p>Pomotroid is simple and straightforward, making it incredibly easy to use.</p>
            </li>
          </ul>
        </div>
        <div class="col-lg-8">
          <img :src="'./static/pomotroid-screens.jpg'" alt="Pomotroid screenshots">
        </div>
      </div>
    </div>
    <!-- end features -->

    <app-rounder/>
    <!-- section lower -->
    <div class="container-fluid u-bg-lightNavy">
      <div class="container">

        <!-- section downloads -->
        <div class="row mb-3">
          <div class="col text-center">
            <h2 class="Section-title Section-title--borderBlue">Download</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 text-center">
            <h3>Windows</h3>
            <!-- button -->
            <div class="Button-wrapper mt-3">
              <a :href="downloadLinks.windows">
                <div class="Button Button--filled Button--filled--blue">
                  <p class="Button-text">Download for Windows</p>
                </div>
              </a>
            </div>
            <!-- end button -->
          </div>
          <div class="col-md-4 text-center">
            <h3>Mac OS</h3>
            <!-- button -->
            <div class="Button-wrapper mt-3">
              <a :href="downloadLinks.mac">
                <div class="Button Button--filled Button--filled--blue">
                  <p class="Button-text">Download for Mac</p>
                </div>
              </a>
            </div>
            <!-- end button -->
          </div>
          <div class="col-md-4 text-center">
            <h3>Debian/Ubuntu Linux</h3>
            <!-- button -->
            <div class="Button-wrapper mt-3">
              <a :href="downloadLinks.linux">
                <div class="Button Button--filled Button--filled--blue">
                  <p class="Button-text">Download for Linux</p>
                </div>
              </a>
            </div>
            <!-- end button -->
          </div>
        </div>
        <!-- end section downloads -->

        <div class="row mt-5 py-5 Section">
          <div class="col text-center">
            <h2 class="Section-title Section-title--borderGreen">Feedback</h2>
            <p>Found a bug or would like to suggest a new feature? <a href="https://github.com/Splode/pomotroid/issues" class="LinkInline LinkInline--green" target="_blank">Open an issue</a>.</p>
            <p>Feel free to explore the source or contribute via the <a href="https://github.com/Splode/pomotroid" class="LinkInline LinkInline--green" target="_blank">GitHub repo</a>.</p>
            <p>Enjoy using Pomotroid? Spread the word!</p>
            <!-- button -->
            <div class="Button-wrapper my-5">
              <a href="https://twitter.com/intent/tweet?text=Pomotroid%20-%20a%20simple%2C%20visually-pleasing%2C%20and%20open%20source%20Pomodoro%20timer&url=https%3A%2F%2Fsplode.github.io%2Fpomotroid%2F&hashtags=pomodoro,productivity,opensource&via=splode" target="_blank">
                <div class="Button Button--green">
                  <p class="Button-text mr-3">Share on Twitter</p>
                  <svg class="Icon--sm Icon--white" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"/>
                  </svg>
                </div>
              </a>
            </div>
            <!-- end button -->
          </div>
        </div>

      </div>
    </div>
    <!-- end section lower -->

    <!-- footer -->
    <div class="container-fluid u-bg-navy">
      <div class="container py-5 Footer">
        <div class="row">
          <div class="col-12 text-center">
            <p>Pomotroid is free and open source software created and maintained by Christopher Murphy.</p>
          </div>
          <div class="col-12 text-center">
            <a href="https://github.com/Splode" target="_blank">
              <svg class="Icon--button Icon--md Icon--blueGrey mr-3" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
            </a>
            <a href="https://twitter.com/splode" target="_blank">
              <svg class="Icon--button Icon--md Icon--blueGrey" version="1.2" baseProfile="tiny" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px" y="0px" viewBox="-454 256.3 49.7 49.7" xml:space="preserve">
                <path d="M-429.2,256.3c-13.7,0-24.8,11.1-24.8,24.8c0,13.7,11.1,24.8,24.8,24.8c13.7,0,24.8-11.1,24.8-24.8
                C-404.3,267.5-415.5,256.3-429.2,256.3z M-418.1,275.5c0,0.2,0,0.5,0,0.7c0,7.6-5.7,16.3-16.3,16.3c-3.2,0-6.2-0.9-8.8-2.6
                c0.4,0.1,0.9,0.1,1.4,0.1c2.7,0,5.1-0.9,7.1-2.4c-2.5,0-4.6-1.7-5.3-4c0.3,0.1,0.7,0.1,1.1,0.1c0.5,0,1-0.1,1.5-0.2
                c-2.6-0.5-4.6-2.8-4.6-5.6c0,0,0,0,0-0.1c0.8,0.4,1.7,0.7,2.6,0.7c-1.5-1-2.5-2.8-2.5-4.8c0-1,0.3-2,0.8-2.9c2.8,3.5,7,5.7,11.8,6
                c-0.1-0.4-0.1-0.9-0.1-1.3c0-3.2,2.6-5.7,5.7-5.7c1.6,0,3.1,0.7,4.2,1.8c1.3-0.3,2.5-0.7,3.6-1.4c-0.4,1.3-1.3,2.5-2.5,3.2
                c1.2-0.1,2.3-0.4,3.3-0.9C-416,273.7-417,274.7-418.1,275.5z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import appRounder from './components/Rounder'

export default {
  name: 'App',

  components: {
    appRounder
  },

  data () {
    return {
      downloadLinks: {
        windows: 'https://github.com/Splode/pomotroid/releases/download/v0.4.1/pomotroid-setup-0.4.1-64-bit.exe',
        mac: 'https://github.com/Splode/pomotroid/releases/download/v0.4.1/pomotroid-setup-0.4.1.dmg',
        linux: 'https://github.com/Splode/pomotroid/releases/download/v0.4.1/pomotroid-0.4.1-x86_64.AppImage'
      },
      platforms: {
        windows: ['Windows', 'Win32', 'Win64'],
        mac: ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
        linux: ['Linux', 'Linux aarch64', 'Linux x86_64']
      }
    }
  },

  computed: {
    platformInfo () {
      if (this.platforms.windows.indexOf(this.platform) !== -1) {
        return { platform: 'Windows', link: this.downloadLinks.windows }
      } else if (this.platforms.mac.indexOf(this.platform) !== -1) {
        return { platform: 'Mac', link: this.downloadLinks.mac }
      } else if (this.platforms.linux.indexOf(this.platform) !== -1) {
        return { platform: 'Linux', link: this.downloadLinks.linux }
      } else {
        return { platform: 'Windows', link: this.downloadLinks.windows }
      }
    },

    platform () {
      return navigator.platform
    }
  }
}
</script>

<style lang="scss" scoped>
@import './assets/styles/_variables.scss';

.Button-wrapper {
  display: flex;
  justify-content: center;
}

.Button {
  align-items: center;
  border-radius: 50px;
  cursor: pointer;
  display: flex;
  font-size: 1.15rem;
  padding: .75em 2em;
  max-width: 300px;
  z-index: 0;
  &.is-disabled {
    cursor: default;
  }
}

.Button--filled {
  position: relative;
  &::before {
    border-radius: 50px;
    content: '';
    opacity: .5;
    position: absolute;
    top: 0;
    left: 0;
    transition: $transitionSnappy;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  &:hover::before {
      filter: blur(10px);
    }
}

.Button--green {
  border: 2px solid $colorGreen;
}

.Button--filled--navy {
  background-color: $colorNavy;
  color: $colorBlueGrey;
}

.Button--filled--blue {
  background-color: $colorBlue;
  &::before {
    background-color: $colorBlue;
  }
}

.Button-text {
  letter-spacing: .02em;
  margin: 0;
  padding: 0 0 .25em 0;
}

.Footer {
  color: $colorBlueGrey;
}

.Jumbotron {
  padding-top: 2rem;
  text-align: center;
}

.Icon--button {
  cursor: pointer;
  & path {
    transition: $transitionDefault;
  }
}

.Icon--md {
  width: 30px;
  height: 30px;
}

.Icon--sm {
  width: 20px;
  height: 20px;
}

.Icon--blueGrey {
  & path {
    fill: $colorBlueGrey;
  }
  &:hover path {
    fill: $colorGreen;
  }
}

.Icon--white {
  & path {
    fill: $colorWhite;
  }
}

.LinkInline {
  cursor: pointer;
  position: relative;
  &::after {
    content: '';
    position: absolute;
    bottom: -4px;
    left: 0;
    transition: $transitionSnappy;
    width: 0;
    height: 4px;
  }
}

.LinkInline--green {
  color: $colorGreen;
  &:hover::after {
    background-color: $colorGreen;
    width: 100%;
  }
}

.Section {
  letter-spacing: .025em;
  line-height: 2em;
}

.Section--light {
  color: $colorNavy;
}

.Section-title {
  display: inline-block;
  font-size: 2.25rem;
  margin: 0 0 1em 0;
  padding: 0 0 1em 0;
  position: relative;
  &::after {
    border-radius: 5px;
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10px;
  }
}

.Section-title--borderBlue {
  &::after {
    background-color: $colorBlue;
  }
}

.Section-title--borderGreen {
  &::after {
    background-color: $colorGreen;
  }
}

.Section-title--borderRed {
  &::after {
    background-color: $colorRed;
  }
}

.TextList {
  list-style-type: none;
  padding: 0;
}

.TextList-item {
  margin: 0 0 2em 0;
}

.Title {
  color: $colorGreen;
  font-size: 3rem;
  font-weight: 400;
  letter-spacing: .02em;
  @media screen and (min-width: $grid-sm) {
    font-size: 4.5rem;
  }
  @media screen and (min-width: $grid-md) {
    font-size: 5.5rem;
  }
}

.Title-subtitle {
  font-size: 1.15rem;
  letter-spacing: .05em;
  line-height: 2em;
  @media screen and (min-width: $grid-sm) {
    font-size: 1.5rem;
    padding: 0 1em;
  }
  @media screen and (min-width: $grid-md) {
    padding: 0 3em;
  }
  @media screen and (min-width: $grid-lg) {
    padding: 0 6.5em;
  }
  @media screen and (min-width: $grid-xl) {
    padding: 0 13em;
  }
}
</style>
