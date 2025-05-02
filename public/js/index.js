// Dinamik Navbar
(async function() {
  const nav = document.getElementById('nav-links');
  const token = localStorage.getItem('token');
  nav.innerHTML = token
    ? `
      <li class="nav-item"><a class="nav-link" href="/profile.html">Profil</a></li>
      <li class="nav-item"><a class="nav-link" id="logout" href="#">Çıkış</a></li>
      <li class="nav-item"><a class="nav-link" href="/cart.html">Sepet</a></li>
    `
    : `
      <li class="nav-item"><a class="nav-link" href="/login.html">Giriş Yap</a></li>
      <li class="nav-item"><a class="nav-link" href="/register.html">Kayıt Ol</a></li>
    `;
  if (token) {
    document.getElementById('logout').addEventListener('click', () => {
      localStorage.removeItem('token');
      window.location = '/';
    });
  }
})();