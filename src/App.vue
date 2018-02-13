<template>
  <div id="app">
    <!-- jumbotron -->
    <div class="container-fluid Jumbotron-wrapper u-bg-navy">
      <div class="container Jumbotron">
        <div class="row">
          <div class="col">
            <h1 class="Title">Pomotroid</h1>
            <p class="Title-subtitle">A simple, customizable and visually pleasing Pomodoro timer.</p>
            <!-- button -->
            <div class="Button-wrapper mt-5">
              <a href="https://github.com/Splode/pomotroid/releases/download/v0.1.1/Pomotroid.Setup.0.1.1.exe" alt="Download for Windows">
                <div class="Button Button--filled Button--filled--blue">
                  <p class="Button-text">Download for Windows</p>
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
          <img :src="'./static/pomotroid-screens.png'" alt="Pomotroid screenshots">
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
            <div class="Button-wrapper mt-5">
              <a href="https://github.com/Splode/pomotroid/releases/download/v0.1.1/Pomotroid.Setup.0.1.1.exe" alt="Download for Windows">
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
            <div class="Button-wrapper mt-5">
              <a href="https://github.com/Splode/pomotroid/releases/download/v0.1.1/Pomotroid-0.1.1.dmg" alt="Download for Windows">
                <div class="Button Button--filled Button--filled--blue">
                  <p class="Button-text">Download for Mac OS</p>
                </div>
              </a>
            </div>
            <!-- end button -->
          </div>
          <div class="col-md-4 text-center">
            <h3>Linux</h3>
            <!-- button -->
            <div class="Button-wrapper mt-5">
              <div class="Button is-disabled Button--filled Button--filled--navy">
                <p class="Button-text">Coming Soon</p>
              </div>
            </div>
            <!-- end button -->
          </div>
        </div>
        <!-- end section downloads -->

        <div class="row mt-5 pt-5">
          <div class="col text-center">
            <h2 class="Section-title Section-title--borderGreen">Feedback</h2>
            <p>Found a bug or would like to suggest a new feature? <a href="https://github.com/Splode/pomotroid/issues" target="_blank">Open an issue</a>.</p>
            <p>Feel free to explore the source or contribute via the <a href="https://github.com/Splode/pomotroid" target="_blank">GitHub repo</a>.</p>
            <p>Enjoy using Pomotroid? Spread the word!</p>
            <!-- button -->
            <div class="Button-wrapper mt-5">
              <a href="" alt="Share Pomotroid on Twitter">
                <div class="Button Button--green">
                  <p class="Button-text">Share on Twitter</p>
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
          <div class="col text-center">
            <p>Pomotroid is free and open source software created and maintained by Christopher Murphy.</p>
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
  border-radius: 50px;
  cursor: pointer;
  font-size: 1.15rem;
  padding: .75em .5em;
  max-width: 300px;
  transition: $transitionSnappy;
  &.is-disabled {
    cursor: default;
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
}

.Button-text {
  letter-spacing: .02em;
  margin: 0 2em;
  padding: 0 0 .25em 0;
}

.Footer {
  color: $colorBlueGrey;
}

.Jumbotron {
  text-align: center;
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
