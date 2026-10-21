/* Plain JavaScript: no build step, framework or package manager required. */
(() => {
  'use strict';
  const navigation = document.querySelector('#main-navigation');
  const menuButton = document.querySelector('.menu-toggle');
  const navigationLinks = [...navigation.querySelectorAll('a')];
  const menuIcon = '<path d="M4 6h16M4 12h16M4 18h16" />';
  const closeIcon = '<path d="m18 6-12 12M6 6l12 12" />';
  function setMenu(open, restoreFocus = false) {
    navigation.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    menuButton.querySelector('svg').innerHTML = open ? closeIcon : menuIcon;
    if (restoreFocus) menuButton.focus();
  }
  menuButton.addEventListener('click', () => setMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
  navigationLinks.forEach(link => link.addEventListener('click', () => setMenu(false)));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') setMenu(false, true);
  });
  document.addEventListener('click', event => {
    if (!event.composedPath().includes(document.querySelector('.site-header'))) setMenu(false);
  });
  window.addEventListener('resize', () => { if (window.innerWidth > 900) setMenu(false); });
  function setActiveSection(id) {
    navigationLinks.forEach(link => {
      const active = link.hash === `#${id}`;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
  }
  if ('IntersectionObserver' in window) {
    const sectionObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => { if (entry.isIntersecting) setActiveSection(entry.target.id); });
    }, { rootMargin: '-18% 0px -62% 0px', threshold: 0 });
    document.querySelectorAll('main > section[id]').forEach(section => sectionObserver.observe(section));
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        revealObserver.unobserve(entry.target);
      });
    }, { threshold: 0.06 });
    document.querySelectorAll('.reveal').forEach(section => revealObserver.observe(section));
  }
  function setProject(button, expanded) {
    button.setAttribute('aria-expanded', String(expanded));
    button.closest('.project-card').classList.toggle('expanded', expanded);
    document.getElementById(button.getAttribute('aria-controls')).hidden = !expanded;
    const label = [...button.childNodes].find(node => node.nodeType === Node.TEXT_NODE);
    if (label) label.textContent = expanded ? 'Less detail' : 'Explore the project';
    button.querySelector('svg').innerHTML = expanded ? '<path d="M5 12h14" />' : '<path d="M5 12h14M12 5v14" />';
  }
  const projectButtons = [...document.querySelectorAll('.project-toggle')];
  projectButtons.forEach(button => button.addEventListener('click', () => {
    const expand = button.getAttribute('aria-expanded') !== 'true';
    projectButtons.forEach(other => setProject(other, other === button && expand));
  }));
  document.querySelectorAll('[data-current-year]').forEach(element => { element.textContent = new Date().getFullYear(); });
})();
