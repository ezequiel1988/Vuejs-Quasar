<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="transparent"
        :glossy="$q.theme === 'mat'"
        :inverted="$q.theme === 'ios'"
      >

        <div id="row-patagonia" class="row justify-end">
          <div class="col-10"></div>
          <div id="columna-patagonia" class="col-2">
             <q-toolbar-title>
          Patagonia Turismo
        </q-toolbar-title>
          </div>
       
        </div>
          
      </q-toolbar>
    </q-layout-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { openURL } from "quasar";

export default {
  name: "LayoutDefault",
  data() {
    return {
      leftDrawerOpen: this.$q.platform.is.desktop
    };
  },
  methods: {
    openURL
  }
};
</script>

<style scoped>
.relative-position {
    position: absolute;
}
#row-patagonia {
  width: 100%;
}
#columna-patagonia {
  display: flex;
  justify-content: flex-end;
}
</style>

