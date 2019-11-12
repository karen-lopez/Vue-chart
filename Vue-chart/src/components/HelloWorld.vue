<template>
  <div class="chart-wrapper">
    <chart :options="chartOptionsBar"></chart>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: () => ({
    chartOptionsBar: {
      xAxis: {
        data: ['Q1', 'Q2', 'Q3', 'Q4']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          type: 'bar',
          data: [63, 75, 24, 92]
        }
      ],
      title: {
        text: 'Paises que no exigen visa',
        x: 'center',
        textStyle: {
          fontSize: 24
        }
    },
    color: ['#127ac2', '#120000']
    }
  })
}
</script>


<style scoped>
.chart-wrapper {
  width: 100%;
  height: 700px;
}
.echarts {
  width: 100%;
  height: 100%;
}
</style>
