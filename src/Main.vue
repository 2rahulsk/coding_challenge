<template>
  <div class ="container">
    <div class = "row">
      <div class="col-xs-12">
        <h1>Form : Page1</h1>
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

          <div class="form-group">
            <label for="firstName">First Name</label>
            <input type ="text" class="form-control" id="firstName" v-model="post.firstName">
          </div>

          <div class="form-group">
            <label for="lastName">Last Name</label>
            <input type ="text" class="form-control" id="lastName" v-model="post.lastName">
          </div>
          <!--<router-link to="/userDetails" >Go</router-link>-->
          <!--<input type="submit" class="btn btn-primary" v-on:click="goToNextPage()" value="Next">-->
          <router-link to="/userDetails" tag="button" class="btn btn-primary">Next</router-link>
        </form>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return{
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
    }
  }
</script>

