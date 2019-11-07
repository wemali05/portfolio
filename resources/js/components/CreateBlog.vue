// CreatePost.vue

<template>
  <div>
   <header>
    <div class="menu-btn">
      <div class="btn-line"></div>
      <div class="btn-line"></div>
      <div class="btn-line"></div>
    </div>

    <nav class="menu">
      <div class="menu-branding">
        <div class="portrait"></div>
      </div>
      <ul class="menu-nav">
        <li class="nav-item current">
          <a href="/" class="nav-link">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a href="/about" class="nav-link">
            About Me
          </a>
        </li>
        <li class="nav-item">
          <a href="/work" class="nav-link">
            My Work
          </a>
        </li>
        <li class="nav-item">
          <a href="/posts" class="nav-link">
            Blog
          </a>
        </li>
        <li class="nav-item">
          <a href="/contact" class="nav-link">
            How To Reach Me
          </a>
        </li>
      </ul>
    </nav>
  </header>
    <h1>Create A Post</h1>
    <form @submit.prevent="addPost">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Post Title:</label>
            <input type="text" class="form-control" v-model="post.title">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Post Body:</label>
              <textarea class="form-control" v-model="post.body" rows="5"></textarea>
            </div>
          </div>
        </div><br />
        <div class="form-group">
          <button class="btn btn-primary">Create</button>
        </div>
    </form>
  </div>
</template>

<script>
    export default {
        data(){
        return {
          post:{}
        }
    },
    methods: {
      addPost(){
        let uri = 'http://portfolio.loc/api/post/create';
         this.axios.post(uri, this.post).then((response) => {
        this.$router.push({name: 'posts'});
       });
     }
    }
  }
</script>