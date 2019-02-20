<template>
  <div class="main">
    <Form :name="'eCharts'"></Form>
    <EchartsTpl :name="'eCharts'"></EchartsTpl>
  </div>
</template>

<script>
import EchartsTpl from './Echarts'
import Form from './Form'

export default {
  methods: {},
  components: {
    EchartsTpl,
    Form
  }
}
</script>

<style scoped>
.main {
  position: relative;
  width: 900px;
  margin: 0 auto;
  border: 1px solid #ccc;
}
</style>
