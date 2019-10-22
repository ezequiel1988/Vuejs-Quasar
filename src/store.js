import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"

Vue.use(Vuex, axios);

export default new Vuex.Store({
  state: {
    posts: [],
  },
  mutations: {
   postPhoto(state, posts) {
     state.posts = posts
   }
  },
  actions: {
    //Api key
    //https://pixabay.com/api/?key=13037765-6b3d5f564ba744c96de4adcae&q=yellow+flowers&image_type=photo
     DataPhoto({ commit }) {
      
      axios.get("https://pixabay.com/api/?key=13037765-6b3d5f564ba744c96de4adcae&q=patagonia&image_type=photo")
      .then(response =>{
        commit("postPhoto", response)
        console.log(response.data)
      })
      .catch(e=>{
        console.log(e)
      })
    }}
    
});
