<template>
  <div>
    <nuxt-link to="/page">Page link</nuxt-link>
    <div v-if="modalData" class="modal">
      <section>
        <button @click="onCloseClick">Close</button>
        <h1>{{ modalData.title }}</h1>
        <nuxt-picture v-bind="modalData.image" />
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      modalData: null
    }
  },
  created() {
    this.$router.beforeResolve((to, from, next) => {
      if (this.$store.state.pageData) {
        this.modalData = this.$store.state.pageData

        window.history.pushState({}, '', to.path)
      } else {
        next()
      }
    })
  },
  methods: {
    onCloseClick() {
      this.modalData = null

      window.history.pushState({}, '', this.$route.path)
    }
  }
}
</script>

<style>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
}

.modal section {
  padding: 40px;
  background-color: #fff;
}
</style>
