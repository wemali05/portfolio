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
        <li class="nav-item current">
          <a href="/contact" class="nav-link">
            How To Reach Me
          </a>
        </li>
      </ul>
    </nav>
  </header>

  <main id="contact">
    <h1 class="lg-heading">
      Contact
      <span class="text-secondary">Me</span>
    </h1>
    <h2 class="sm-heading">
      This is how you can reach me...
    </h2>
    <div class="boxes">
      <div>
        <span class="text-secondary">Email: </span> johndoe@test.com
      </div>
      <div>
        <span class="text-secondary">Phone: </span> (555) 555-5555
      </div>
      <div>
        <span class="text-secondary">Address: </span> 50 Main st Boston MA 02101
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