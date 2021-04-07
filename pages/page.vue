<template>
  <div>
    <nuxt-link to="/">Home page</nuxt-link>
    <h1>{{ title }}</h1>
    <nuxt-picture v-bind="image" />
  </div>
</template>

<script>
export default {
  asyncData({ store }) {
    const data = {
      title: 'Page title',
      image: {
        width: 500,
        height: 500,
        src: 'https://a.storyblok.com/f/39898/3310x2192/e4ec08624e/demo-image.jpeg'
      }
    }

    store.commit('pageData', data)

    return data
  }
}
</script>
