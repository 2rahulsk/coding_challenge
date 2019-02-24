<template>
  <div class="form-group">
    <label for="search">Search User</label>
    <input type ="text" class="form-control" id="search" placeholder="Search..." v-model="query">
    <div>
      <ul>
        <li v-for="(match,index) in matches" v-text="match" @click="itemClicked(index)">
          {{ match }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  const API_URL = 'https://randomuser.me/api/?results=50&nat=au&exc=login';
  export default {
    data () {
      return {
        query : '',
        roles : [],
        names: [],
        searchItems: [],
        firstName:'',
        lastName:''
      };
    },
    methods: {
      itemClicked:function(index) {
       // console.log(index);
        var fullName = this.searchItems[index];
       // console.log(fullName);
        var name = fullName.split(" ");
        this.firstName = name[0];
        this.lastName = name[1];
        this.$emit('clicked',name[0],name[1])
      }
    },
    created() {
      this.$http.get(API_URL).then(function(data){
        this.roles = data.body.results;
        for ( var i in this.roles){
          this.names.push(this.roles[i].name.first + ' ' + this.roles[i].name.last);
        }
        //console.log(this.names);
      })
    },
    computed: {
      matches() {
        if(this.query === ''){
          return [];
        } else {
         for(var i in this.names){
           if(this.names[i].includes(this.query)){
             this.searchItems.push(this.names[i]);
           }
         }

         return this.searchItems;
        }

      }
    }
  }
</script>
