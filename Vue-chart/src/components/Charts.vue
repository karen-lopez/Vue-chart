<template>
  <div>
    <b-button  type="button" @click="start()">click me!</b-button>
    <div class="chart-wrapper" v-if="datax.length > 2">
      <chart :options="chartOptionsBar"></chart>
    </div>
  </div>
</template>

<script>
import dataEnrollment from '../../public/data.json'
export default {
  name: 'Charts',
  data: () => ({
    dataEnrollments : JSON.stringify(dataEnrollment),
    datax : ["q1", "q2"],
    datay : [23, 29],
    chartOptionsBar: {}
  }),
  methods:{
    start(){
      var dataMap = new Map();
      var year = null;
      var universitaria = null;
      JSON.parse(this.dataEnrollments, function (k, v) {
        if(k == "year") year = v;
        if(k == "UNIVERSITARIA") universitaria = v;
        if(year != null && universitaria != null){
          if(!dataMap.has(year)){
            dataMap.set(year, universitaria);
          }
          else {
            let totalEnrolled = dataMap.get(year)+universitaria;
            dataMap.set(year, totalEnrolled);
          }
          year = null;
          universitaria = null;
        }
      });
      let arrayKeys = new Array();
      for (let key of dataMap.keys()) {arrayKeys.push(key)}
      this.datax = arrayKeys;
      let arrayValue = new Array();
      for (let Value of dataMap.values()) {arrayValue.push(Value)}
      this.datay = arrayValue;
      this.chartOptionsBar = {
        xAxis: {
          data: this.datax
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            type: 'bar',
            data: this.datay
          }
        ],
        title: {
          text: 'Matriculas Universitarias',
          x: 'center',
          textStyle: {
            fontSize: 24
          }
      },
      color: ['#127ac2']
    };
    //alert(this.datax)
    }
  }
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
