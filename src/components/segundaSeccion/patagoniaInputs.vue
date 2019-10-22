<template>
    <div class="row">
        <div class="col-4">
                    <q-input  v-model="text" label="buscar" />
        </div>
        <div class="col-4">
            <q-btn outline rounded color="primary" label="buscar" />
        </div>
         <div class="col-4"></div>
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
    data () {
    return {
      text: ''
    }
  },
        mounted() {
            this.$store.dispatch("DataPhoto")
        },
        computed: {
            ...mapState([
                "pots"
            ])
        },
        methods: {
            ...mapMutations(["postPhoto"])
        },
    }

</script>