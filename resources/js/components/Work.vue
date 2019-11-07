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
        <li class="nav-item">
          <a href="/" class="nav-link">
            Home
          </a>
        </li>
        <li class="nav-item">
          <a href="/about" class="nav-link">
            About Me
          </a>
        </li>
        <li class="nav-item current">
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

  <main id="work">
    <h1 class="lg-heading">
      My
      <span class="text-secondary">Work</span>
    </h1>
    <h2 class="sm-heading">
      Check out some of my projects...
    </h2>
    <div class="projects">
      <div class="item">
        <a href="#!">
          <img src="img/projects/project1.jpg" alt="Project">
        </a>
        <a href="#" class="btn-light">
          <i class="fas fa-eye"></i> Project
        </a>
        <a href="#" class="btn-dark">
          <i class="fab fa-github"></i> Github
        </a>
      </div>
      <div class="item">
        <a href="#!">
          <img src="img/projects/project2.jpg" alt="Project">
        </a>
        <a href="#" class="btn-light">
          <i class="fas fa-eye"></i> Project
        </a>
        <a href="#" class="btn-dark">
          <i class="fab fa-github"></i> Github
        </a>
      </div>
      <div class="item">
        <a href="#!">
          <img src="img/projects/project3.jpg" alt="Project">
        </a>
        <a href="#" class="btn-light">
          <i class="fas fa-eye"></i> Project
        </a>
        <a href="#" class="btn-dark">
          <i class="fab fa-github"></i> Github
        </a>
      </div>
      <div class="item">
        <a href="#!">
          <img src="img/projects/project4.jpg" alt="Project">
        </a>
        <a href="#" class="btn-light">
          <i class="fas fa-eye"></i> Project
        </a>
        <a href="#" class="btn-dark">
          <i class="fab fa-github"></i> Github
        </a>
      </div>
      <div class="item">
        <a href="#!">
          <img src="img/projects/project5.jpg" alt="Project">
        </a>
        <a href="#" class="btn-light">
          <i class="fas fa-eye"></i> Project
        </a>
        <a href="#" class="btn-dark">
          <i class="fab fa-github"></i> Github
        </a>
      </div>
    </div>
  </main>

  <footer id="main-footer">
    Copyright &copy; 2018
  </footer>
    </div>
</template>

<script>
export default {
       mounted() {
            console.log('Component mounted.')
        }
}
</script>