<template>
  <div class ="container">
    <div class = "row">
      <div class="col-xs-12">
        <h1>Enter User Details</h1>
        <form @submit.prevent="submitForm">
          <div class="form-group">
            <label for ="role">Role</label>
            <select class="form-control" id ="role" v-model="post.role">
              <option v-for="type in formData.role" v-bind:value="type">{{ type }}</option>
            </select>
          </div>

          <div class="form-group">
            <label>Date Of Join</label>
              <datepicker v-model="post.date"></datepicker>
          </div>

          <div class="form-group">
            <label for="isVictorian">Person located in Victoria</label>
            <div v-for="value in formData.values">
              <input type ="radio" id="isVictorian" v-bind:value="value" v-model="post.isVictorian">
              <label for="isVictorian">{{ value.toLowerCase() }}</label>
            </div >
          </div>

          <div v-show="post.isVictorian === 'YES'" class="form-group">
            <label for="place">Place</label>
            <input type ="text" class="form-control" id="place" v-model="post.place">
          </div>
          <button type="submit" class="btn btn-primary" >Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
  import Datepicker from 'vuejs-datepicker';
  export default {
    data () {
      return{
        post: {
          type:'',
          role:'',
          details:'',
          isVictorian:'',
          place:'',
          date:''
        },
        formData: {
          role:['Dev','Manager','Student'],
          values:['YES','NO']
        }
      };
    },
    components:{
      Datepicker
    },
    created(){
      //this.post.type = this.$router.params.type;
    },
    methods:{
      submitForm:function(){
        alert(this.post.type);
        this.$http.post('https://webhook.site/d9faf83d-6569-4b93-bc5e-579447e6202c', {
          params: {role: this.post.role,isVictorian: this.post.isVictorian,place:this.post.place,date_of_join:thi.post.date},
          headers: {"content-type": "application/json"}}).then(response => {
          alert("Data Successfully submitted to the server.");
        }, response => {
          // error callback
          alert("Error");
        });
      }
    }
  }
</script>

