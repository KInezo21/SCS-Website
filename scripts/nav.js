// SCS Website — shared navigation & footer injector
(function () {
  const pages = [
    { label: 'Home',          href: '../index.html',          file: 'index.html' },
    { label: 'Services',      href: '../pages/services.html', file: 'services.html' },
    { label: 'Photo Gallery', href: '../pages/gallery.html',  file: 'gallery.html' },
    { label: 'Contact Us',    href: '../pages/contact.html',  file: 'contact.html' },
    { label: 'Site Map',      href: '../pages/sitemap.html',  file: 'sitemap.html' },
  ];

  const rootPages = [
    { label: 'Home',          href: 'index.html',          file: 'index.html' },
    { label: 'Services',      href: 'pages/services.html', file: 'services.html' },
    { label: 'Photo Gallery', href: 'pages/gallery.html',  file: 'gallery.html' },
    { label: 'Contact Us',    href: 'pages/contact.html',  file: 'contact.html' },
    { label: 'Site Map',      href: 'pages/sitemap.html',  file: 'sitemap.html' },
  ];

  const isRoot = !window.location.pathname.includes('/pages/');
  const navItems = isRoot ? rootPages : pages;
  const currentFile = window.location.pathname.split('/').pop() || 'index.html';

  // ── Header ──────────────────────────────────────────────
  const header = document.getElementById('site-header');
  if (header) {
    const logoHref = isRoot ? 'index.html' : '../index.html';
    header.innerHTML = `
      <div class="header-inner">
        <a class="logo" href="${logoHref}">
          <div class="logo-mark">SCS</div>
          <div class="logo-text">
            <span class="logo-name">SCS TechStore</span>
            <span class="logo-tagline">Service &amp; Customer Satisfaction</span>
          </div>
        </a>
        <nav>
          <ul>
            ${navItems.map(p => `
              <li><a href="${p.href}" class="${p.file === currentFile ? 'active' : ''}">${p.label}</a></li>
            `).join('')}
          </ul>
        </nav>
      </div>
    `;
  }

  // ── Footer ───────────────────────────────────────────────
  const footer = document.getElementById('site-footer');
  if (footer) {
    const logoHref = isRoot ? 'index.html' : '../index.html';
    footer.innerHTML = `
      <div class="container">
        <div class="footer-inner">
          <div class="footer-brand">
            <a class="logo" href="${logoHref}" style="margin-bottom:0">
              <div class="logo-mark">SCS</div>
              <div class="logo-text">
                <span class="logo-name">SCS TechStore</span>
                <span class="logo-tagline">Service &amp; Customer Satisfaction</span>
              </div>
            </a>
            <p>Australia's trusted destination for computers, components, and digital solutions. Built on service. Driven by satisfaction.</p>
          </div>
          <div class="footer-col">
            <h4>Navigation</h4>
            <ul>
              ${navItems.map(p => `<li><a href="${p.href}">${p.label}</a></li>`).join('')}
            </ul>
          </div>
          <div class="footer-col">
            <h4>Contact</h4>
            <ul>
              <li><a href="mailto:support@scstechstore.com.au">support@scstechstore.com.au</a></li>
              <li><a href="tel:1800727832">1800 SCS TECH</a></li>
              <li style="color:var(--muted);font-size:14px;">Mon–Fri 9am–6pm AEST</li>
              <li style="color:var(--muted);font-size:14px;">123 Tech Blvd, Sydney NSW 2000</li>
            </ul>
          </div>
        </div>
        <div class="footer-bottom">
          <span>&copy; 2023–${new Date().getFullYear()} Service &amp; Customer Satisfaction (SCS). All rights reserved.</span>
          <span>ABN 12 345 678 901 &nbsp;|&nbsp; <a href="#">Privacy Policy</a> &nbsp;|&nbsp; <a href="#">Terms of Use</a></span>
        </div>
      </div>
    `;
  }
})();
