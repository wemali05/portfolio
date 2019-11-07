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
          <a href="/post" class="nav-link">
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

  <main id="home">
    <h1 class="lg-heading">
      John
      <span class="text-secondary">Doe</span>
    </h1>
    <h2 class="sm-heading">
      Web Developer, Programmer, Designer & Entrepreneur
    </h2>
    <div class="icons">
      <a href="#!">
        <i class="fab fa-twitter fa-2x"></i>
      </a>
      <a href="#!">
        <i class="fab fa-facebook fa-2x"></i>
      </a>
      <a href="#!">
        <i class="fab fa-linkedin fa-2x"></i>
      </a>
      <a href="#!">
        <i class="fab fa-github fa-2x"></i>
      </a>
    </div>
  </main>
</div>
</template>

<script>
export default {
       mounted() {
            console.log('Component mounted.')
        }
}
</script>