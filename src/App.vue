<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">著作</router-link>
    </div>
    <router-view />
  </div>
</template>

<style lang="scss">
// note that this isn't scoped
// meaning that these are global style...probably
// Import custom SASS variable overrides, or alternatively
// define your variable overrides here instead
@import 'assets/styles/custom-vars.scss';

// Import Bootstrap and BootstrapVue source SCSS files
@import '~bootstrap/scss/bootstrap.scss';
@import '~bootstrap-vue/src/index.scss';

// General style overrides and custom classes

.container img {
  max-height: 100%;
  max-width: 100%;
}

// icons

.icon-filled {
  fill: #454954;
}

.icon-active {
}
/*** transitions ***/

.fade-enter {
  opacity: 0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-leave-to {
  opacity: 0;
}
// slide-fade
.slide-fade-enter {
  opacity: 0;
  transform: translateX(10px);
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-10px);
}

// slide-up for group
.slide-fade-enter {
  opacity: 0;
  transform: translateY(40px);
}
.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-up-move {
  transition: transform 0.5s ease-out;
}
</style>
