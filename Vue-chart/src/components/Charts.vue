<template>
  <div>
    <h1>Graficas de Registro de matriculas Colombia</h1>
    <b-col sm="6" class="mx-auto">
      <b-form-select v-model="selected" :options="options"></b-form-select>
    </b-col>
    <br>
    <b-button variant="primary" type="button" @click="getData()" class="m-2">cargar datos</b-button>
    <b-button variant="primary" type="button" @click="start()">Mostrar</b-button>
    <br>
    <div class="chart-wrapper" v-if="datax.length > 1">
      <br>
      <chart :options="chartOptionsBar"></chart>
    </div>
  </div>
</template>

<script>
//import dataEnrollment from '../../public/data.json'
export default {
  name: 'Charts',
  data: () => ({
    dataEnrollments : [],
    selected: null,
    options: [
     { value: null, text: 'Seleccione una opción' },
     { value: 'tecnologica', text: 'Matriculas Tecnologias' },
     { value: 'universitaria', text: 'Matriculas Universitarias' },
     { value: 'especializacion', text: 'Matriculas a Especializaciones' },
     { value: 'maestria', text: 'Matriculas de Maestria' },
     { value: 'doctorado', text: 'Matriculas Doctorados' }
    ],
    datax : [],
    datay : [],
    chartOptionsBar: {}
  }),
  methods:{
    getData() {
      this.$axios.get("https://www.datos.gov.co/resource/y9ga-zwzy.json")
        .then(response => (this.dataEnrollments = JSON.stringify(response)));
        alert("Datos cargados");
    },
    start(){
      var dataMap = new Map();
      var year = null;
      var option = null;
      var selected = this.selected;
      JSON.parse(this.dataEnrollments, function (k, v) {
        if(k == "a_o") year = v;
        if(k == selected) option = parseInt(v);
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
          text: 'Matriculas' + " "+ selected,
          x: 'center',
          textStyle: {
            fontSize: 24
          }
      },
      color: ['#127ac2']
    };
    //alert(this.datax + " "+this.datay)
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
