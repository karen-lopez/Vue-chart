<template>
  <div>
    <b-col sm="6" class="mx-auto">
      <b-form-select v-model="selected" :options="options"></b-form-select>
    </b-col>
    <br>
    <b-button  type="button" @click="start()">Mostrar</b-button>
    <br>
    <div class="chart-wrapper" v-if="datax.length > 2">
      <br>
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
    selected: null,
    options: [
     { value: null, text: 'Seleccione una opción' },
     { value: 'TECNOLOGICA', text: 'Matriculas Tecnologias' },
     { value: 'UNIVERSITARIA', text: 'Matriculas Universitarias' },
     { value: 'ESPECIALIZACION', text: 'Matriculas a Especializaciones' },
     { value: 'MAESTRIA', text: 'Matriculas de Maestria' },
     { value: 'DOCTORADO', text: 'Matriculas Doctorados' }
    ],
    datax : [],
    datay : [],
    chartOptionsBar: {}
  }),
  methods:{
    start(){
      var dataMap = new Map();
      var year = null;
      var option = null;
      var selected = this.selected;
      JSON.parse(this.dataEnrollments, function (k, v) {
        if(k == "year") year = v;
        if(k == selected) option = v;
        if(year != null && option != null){
          if(!dataMap.has(year)){
            dataMap.set(year, option);
          }
          else {
            let totalEnrolled = dataMap.get(year)+option;
            dataMap.set(year, totalEnrolled);
          }
          year = null;
          option = null;
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
          text: 'MATRICULAS' + " "+ selected,
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
