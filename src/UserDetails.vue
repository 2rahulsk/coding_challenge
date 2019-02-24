<template>
  <div class ="container">
    <div class = "row">
      <div class="col-xs-12">
        <h1>Enter User Details</h1>
        <form>
          <div class="form-group">
            <label for ="role">Role</label>
            <select class="form-control" id ="role" v-model="post.role">
              <option v-for="type in formData.role" v-bind:value="type">{{ type }}</option>
            </select>
          </div>

          <div class="form-group">
            <label for ="datepicker">Date Of Join</label>
            <div class="input-group date" data-provide="datepicker">
              <input type="text" class="form-control" id="datepicker">
              <div class="input-group-addon">
                <span class="glyphicon glyphicon-th"></span>
              </div>
            </div>
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
          <input type="submit" class="btn btn-primary" value="Submit">
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return{
        post: {
          role:'',
          details:'',
          isVictorian:'',
          place:''
        },
        formData: {
          role:['Dev','Manager','Student'],
          values:['YES','NO']
        }
      };
    }
  }
</script>

