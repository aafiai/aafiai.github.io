document.getElementById('year').textContent = new Date().getFullYear();

// ---------- Mobile nav toggle ----------
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');
navToggle.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
});
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});

// ---------- Coursework toggle (index.html only) ----------
const coursesToggle = document.getElementById('coursesToggle');
const coursesList = document.getElementById('coursesList');
if(coursesToggle && coursesList){
  coursesToggle.addEventListener('click', () => {
    const open = coursesList.classList.toggle('open');
    coursesToggle.setAttribute('aria-expanded', open);
    coursesToggle.innerHTML = (open ? 'Hide coursework ' : 'Show coursework ') + '<span class="chevron">▾</span>';
  });
}

// ---------- KPI count-up on scroll into view ----------
const kpiNums = document.querySelectorAll('.kpi-num');
const kpiObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      const el = entry.target;
      const target = parseInt(el.getAttribute('data-target'), 10);
      const suffix = el.getAttribute('data-suffix') || '';
      let current = 0;
      const duration = 1200;
      const stepTime = Math.max(Math.floor(duration / target), 20);
      const timer = setInterval(() => {
        current += 1;
        el.textContent = current + suffix;
        if(current >= target){
          el.textContent = target + suffix;
          clearInterval(timer);
        }
      }, stepTime);
      kpiObserver.unobserve(el);
    }
  });
}, {threshold: 0.4});
kpiNums.forEach(el => kpiObserver.observe(el));

// ---------- Back to top ----------
document.getElementById('backToTop').addEventListener('click', () => {
  window.scrollTo({top:0, behavior:'smooth'});
});

// ---------- Honors certificate lightbox (know-more.html only) ----------
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
const lightboxClose = document.getElementById('lightboxClose');

function closeLightbox(){
  lightbox && lightbox.classList.remove('open');
}

if(lightbox && lightboxImg){
  document.querySelectorAll('.honor-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      if(thumb.classList.contains('no-img')) return;
      lightboxImg.src = thumb.getAttribute('data-full');
      lightbox.classList.add('open');
    });
  });
  lightboxClose && lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if(e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if(e.key === 'Escape') closeLightbox();
  });
}
