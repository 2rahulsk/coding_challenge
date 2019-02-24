<template>
  <div class ="container">
    <div class = "row">
      <div class="col-xs-12">
        <h1>Form</h1>
        <form>
          <div class="form-group">
            <label for ="select-storetype">Store Type</label>
            <select class="form-control" id ="select-storetype" v-model="post.storetype">
              <option v-for="type in formData.storetype" v-bind:value="type">{{ type }}</option>
            </select>
          </div>

          <div v-show="post.storetype === 'Metro'" class="form-group">
            <label for="details">Details</label>
            <input type ="text" class="form-control" id="details" v-model="post.details">
          </div>

          <Autocomplete @clicked="onChildClicked"></Autocomplete>

          <div class="form-group">
            <label for="firstName">First Name</label>
            <input type ="text" class="form-control" id="firstName" v-model="post.firstName" disabled>
          </div>

          <div class="form-group">
            <label for="lastName">Last Name</label>
            <input type ="text"  class="form-control" id="lastName" v-model="post.lastName" disabled >
          </div>
          <!--<router-link to="/userDetails" >Go</router-link>-->
          <!--<input type="submit" @click.p="updateJson" class="btn btn-primary" value="Next">-->
          <router-link to="/userDetails"  tag="button" class="btn btn-primary">Next</router-link>
        </form>

      </div>
    </div>
  </div>
</template>

<script>
  import Autocomplete from './Autocomplete';
  export default {
    data () {
      return{
        names: [],
        roles:[],
        errors:[],
        view:'first',
        post: {
          storetype:'',
          details:'',
          firstName:'',
          lastName:''
        },
        formData: {
          storetype:['Mall','Metro','Arcade','Centre']
        }
      };
    },
    methods:{
      onChildClicked(value1,value2){
        this.post.firstName = value1;
        this.post.lastName = value2;
      }
    },
    components:{
      Autocomplete
    },
    created() {
      this.$http.get('https://randomuser.me/api/?results=50&nat=au&exc=login').then(function(data){
        this.roles = data.body.results;
        for ( var i in this.roles){
          this.names.push(this.roles[i].name.first + ' ' + this.roles[i].name.last);
        }
        console.log(this.names);
      })
    }
  }
</script>

