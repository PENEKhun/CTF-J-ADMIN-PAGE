<template>
  <div class="row m-4">

    <!--        page Number-->
    <div class="col-6">
      <label for="exampleFormControlSelect1" class="col-form-label">total Items : {{totalElements}}</label>
      <label class="col-md-1"></label> <!-- for little space -->
      <label for="exampleFormControlSelect1" class="col-form-label">total Items : {{totalElements}}</label>
      <br/>
    <ul>
      <li v-for="pageNumber in totalPage" :key="pageNumber--">
        <li v-if="Math.abs(pageNumber - search.pageNum) < 5 || pageNumber === totalPage - 1 || pageNumber === 0">
        <a @click="search.pageNum = pageNumber"
           :class="{last: (pageNumber === totalPage - 1 && Math.abs(pageNumber - search.pageNum) > 5),
                    first:(pageNumber === 0 && Math.abs(pageNumber - search.pageNum) > 5),
                    current: pageNumber === search.pageNum }">
          {{ pageNumber + 1}}
        </a>
        </li>
      </li>
    </ul>
    </div>

    <!--        sort by-->
    <div class="col-2">
      <label for="exampleFormControlSelect1" class="col-form-label">sort by</label>
      <select class="form-select col-6" v-model.trim="this.search.sortBy.value" @change="this.search.pageNum=0" id="exampleFormControlSelect1">
        <option v-for="column in this.search.sortBy.list" :value="column">{{ column }}</option>
      </select>
    </div>

    <!--        sort Type-->
    <div class="col-2">
      <label for="exampleFormControlSelect1" class="col-form-label">sort type</label>
      <select class="form-select col-6" v-model.trim="this.search.sortType" @change="this.search.pageNum=0" id="exampleFormControlSelect1">
        <option value="desc">DESC</option>
        <option value="asc">ASC</option>
      </select>
    </div>

    <!--        page Per-->
    <div class="col-2">
      <label for="exampleFormControlSelect1" class="col-form-label">page per</label>
      <select class="form-select col-6" v-model.trim="this.search.amount" @change="this.search.pageNum=0" id="exampleFormControlSelect1">
        <option value="10">10</option>
        <option value="30">30</option>
        <option value="50">50</option>
        <option value="100">100</option>
      </select>
    </div>
  </div>
</template>

<script>
export default {
  name: "CommonPaging",
  props:{
    search : Object,
    totalPage : Number,
    totalElements : Number
  }
}
</script>

<style scoped>

a.first::after {
  content:'...'
}

a.last::before {
  content:'...'
}

li {
  display: inline;
  margin: 3px 3px;
}

.current {
  color: red!important;
}
a {
  color: black;
}
ul {
  padding: 0;
  list-style-type: none;
}

</style>