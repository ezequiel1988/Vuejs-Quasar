<template>
<div>    
  <homeScreen/>
  <patagoniaInputs/>

  </div>
</template>

<style>

</style>

<script>
import homeScreen from '../components/primeraSeccion/homeScreen'
import patagoniaInputs from '../components/segundaSeccion/patagoniaInputs'
export default {
  components: {
    homeScreen, patagoniaInputs
  },
  name: "PageHome"
};
</script>
