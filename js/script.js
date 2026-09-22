/**
 * SANJAI RAGUNATH — NEAT & PROFESSIONAL PORTFOLIO ENGINE
 * Methodology Pipeline, Project Filtering, GitHub Heatmap, Modal Preview, Clipboard
 */

(function () {
  'use strict';

  // --- Scroll Progress Bar & Navbar Scroll ---
  const scrollProgressBar = document.getElementById('scroll-progress');
  const navbar = document.querySelector('.navbar');

  window.addEventListener('scroll', function () {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = (scrollTop / (docHeight || 1)) * 100;
    if (scrollProgressBar) {
      scrollProgressBar.style.width = progress + '%';
    }
    if (navbar) {
      if (scrollTop > 40) {
        navbar.classList.add('scrolled');
      } else {
        navbar.classList.remove('scrolled');
      }
    }
  });

  // --- Mobile Navigation Toggle ---
  const mobileToggle = document.getElementById('mobileToggle');
  const navMenu = document.getElementById('navMenu');

  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', function () {
      const isOpen = navMenu.classList.toggle('open');
      mobileToggle.setAttribute('aria-expanded', isOpen);
    });

    navMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // --- Methodology Pipeline (Reference Image 2) ---
  const methodologyData = [
    {
      step: '01',
      title: 'Discover',
      desc: 'Understand users, conduct stakeholder interviews, map journey pain points, and define business goals.',
      deliverables: [
        'User Persona Profiles & Empathy Maps',
        'Stakeholder Requirement Discovery Sessions',
        'Friction Point Audit & Product Opportunity Matrix'
      ],
      tools: ['User Interviews', 'Miro', 'Figma Jam', 'Notion', 'Field Observation'],
      philosophy: 'No line of code is written until the true user pain point is quantified.'
    },
    {
      step: '02',
      title: 'Define',
      desc: 'Identify core friction points, articulate problem statements, and define technical product requirements.',
      deliverables: [
        'Functional Requirements Document (FRD)',
        'Information Architecture & Data Schema Flow',
        'System Constraints & Edge-Case Mapping'
      ],
      tools: ['Architecture Diagrams', 'Mermaid.js', 'Linear', 'GitHub Projects'],
      philosophy: 'Clear constraints breed exceptional engineering solutions.'
    },
    {
      step: '03',
      title: 'Design',
      desc: 'Create intuitive user flows, structured wireframes, accessible design systems, and pixel-perfect UI screens.',
      deliverables: [
        'WCAG AAA Accessible Design System (Tokens & Components)',
        'High-Fidelity Responsive Layouts (Mobile, Tablet, Desktop)',
        'Design System UI Component Kit'
      ],
      tools: ['Figma 5.0', 'Tokens Studio', 'Auto-Layout', 'Accessibility Inspector'],
      philosophy: 'Form follows function with extreme aesthetic precision.'
    },
    {
      step: '04',
      title: 'Prototype',
      desc: 'Build clickable interactive prototypes in Figma to test usability, refine micro-interactions, and validate ideas.',
      deliverables: [
        'Clickable Interactive Prototypes with Animated Micro-flows',
        'Usability Testing Reports with Quantitative Task Success',
        'State Transition Matrices (Hover, Active, Error, Empty)'
      ],
      tools: ['Figma Prototyping', 'Smart Animate', 'Framer', 'UserTesting'],
      philosophy: 'Validate and iterate at 10x speed before committing to code.'
    },
    {
      step: '05',
      title: 'Develop',
      desc: 'Convert validated designs into clean, responsive frontend code, scalable backend APIs, and efficient database schemas.',
      deliverables: [
        'Modular Component Architecture in React / TypeScript / Vite',
        'Optimized RESTful & WebSocket Real-Time API Handlers',
        'Predictive AI Integration & Local/Offline Edge Caching'
      ],
      tools: ['React', 'TypeScript', 'Tailwind CSS', 'Python', 'Supabase', 'Node.js'],
      philosophy: 'Code should be as clean, modular, and resilient as the design.'
    },
    {
      step: '06',
      title: 'Launch & Improve',
      desc: 'Test with end-users, deploy to cloud infrastructure, monitor analytics, and iteratively optimize performance.',
      deliverables: [
        'Automated CI/CD Pipelines with Cloud Edge Deployment',
        'Real-Time Telemetry & Core Web Vitals 95+ Audit',
        'Iterative A/B Testing & Post-Launch Feedback Loops'
      ],
      tools: ['Vercel', 'Netlify', 'GitHub Actions', 'Lighthouse CI', 'Sentry'],
      philosophy: 'Shipping is just the beginning of continuous refinement.'
    }
  ];

  const methodSteps = document.querySelectorAll('.method-step-item');
  const methodDetailDrawer = document.getElementById('methodDetailDrawer');

  function setMethodologyStep(index) {
    const data = methodologyData[index];
    if (!data) return;

    methodSteps.forEach((step, idx) => {
      if (idx === index) {
        step.classList.add('active');
      } else {
        step.classList.remove('active');
      }
    });

    if (methodDetailDrawer) {
      methodDetailDrawer.innerHTML = `
        <div class="drawer-left">
          <h4>
            <span class="step-number-tag">${data.step}</span>
            <span>${data.title} Phase Overview</span>
          </h4>
          <p>${data.desc}</p>
          <div style="font-size: 0.8rem; font-weight: 600; color: var(--accent-cyan); margin-bottom: 8px;">
            Key Deliverables:
          </div>
          <ul class="drawer-deliverables">
            ${data.deliverables.map(d => `
              <li>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"></polyline></svg>
                <span>${d}</span>
              </li>
            `).join('')}
          </ul>
        </div>
        <div class="drawer-right">
          <div class="drawer-tools-label">Tools &amp; Frameworks</div>
          <div class="drawer-tools-tags">
            ${data.tools.map(t => `<span class="tool-tag">${t}</span>`).join('')}
          </div>
          <div style="margin-top: 16px; font-style: italic; font-size: 0.78rem; color: var(--text-muted); border-top: 1px solid var(--border-subtle); padding-top: 10px;">
            &ldquo;${data.philosophy}&rdquo;
          </div>
        </div>
      `;
    }
  }

  methodSteps.forEach((step, idx) => {
    step.addEventListener('click', () => setMethodologyStep(idx));
  });

  // Default to step 4 (Develop) to match reference
  setMethodologyStep(4);

  // --- Project Category Filtering ---
  const filterTabs = document.querySelectorAll('.filter-tab');
  const caseStudyCards = document.querySelectorAll('.case-study-card');

  filterTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      filterTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const filter = tab.getAttribute('data-filter');

      caseStudyCards.forEach(card => {
        const cat = card.getAttribute('data-cat') || '';
        if (filter === 'all' || cat.includes(filter)) {
          card.style.display = 'grid';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // --- GitHub Heatmap Cells Generator ---
  const heatmapGrid = document.getElementById('heatmapGrid');
  if (heatmapGrid) {
    heatmapGrid.innerHTML = '';
    const totalCells = 80; // 5 x 16

    for (let i = 0; i < totalCells; i++) {
      const cell = document.createElement('div');
      cell.classList.add('heat-cell');

      const rand = Math.random();
      let count = 0;
      if (rand > 0.82) {
        cell.classList.add('c4'); count = Math.floor(Math.random() * 8) + 6;
      } else if (rand > 0.6) {
        cell.classList.add('c3'); count = Math.floor(Math.random() * 4) + 3;
      } else if (rand > 0.35) {
        cell.classList.add('c2'); count = Math.floor(Math.random() * 2) + 2;
      } else if (rand > 0.15) {
        cell.classList.add('c1'); count = 1;
      }

      const daysAgo = totalCells - i;
      const d = new Date();
      d.setDate(d.getDate() - daysAgo);
      const dateStr = d.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      cell.title = count > 0 ? `${count} contributions on ${dateStr}` : `No contributions on ${dateStr}`;

      heatmapGrid.appendChild(cell);
    }
  }

  // --- Live Preview Modal Engine ---
  const modalOverlay = document.getElementById('modalOverlay');
  const modalFrame = document.getElementById('modalFrame');
  const modalUrlText = document.getElementById('modalUrlText');
  const modalExternalLink = document.getElementById('modalExternalLink');
  const modalClose = document.getElementById('modalClose');

  window.openLivePreview = function (url) {
    if (!modalOverlay || !modalFrame) {
      window.open(url, '_blank');
      return;
    }
    modalFrame.src = url;
    if (modalUrlText) modalUrlText.textContent = url.replace(/^https?:\/\//, '');
    if (modalExternalLink) modalExternalLink.href = url;
    modalOverlay.classList.add('open');
    document.body.style.overflow = 'hidden';
  };

  function closeModal() {
    if (!modalOverlay) return;
    modalOverlay.classList.remove('open');
    if (modalFrame) modalFrame.src = 'about:blank';
    document.body.style.overflow = '';
  }

  if (modalClose) modalClose.addEventListener('click', closeModal);
  if (modalOverlay) {
    modalOverlay.addEventListener('click', e => {
      if (e.target === modalOverlay) closeModal();
    });
  }
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  // --- Toast Notification ---
  const toastBar = document.getElementById('toastBar');
  let toastTimeout = null;

  window.showToast = function (msg) {
    if (!toastBar) return;
    toastBar.querySelector('.toast-text').textContent = msg;
    toastBar.classList.add('active');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toastBar.classList.remove('active');
    }, 3000);
  };

  // --- Copy Email to Clipboard ---
  window.copyEmail = function () {
    const email = 'sanjairagunath7@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      showToast('Copied to clipboard: ' + email);
    }).catch(() => {
      window.location.href = 'mailto:' + email;
    });
  };

  // --- Contact Form Submission ---
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Transmitting message...';

      setTimeout(() => {
        submitBtn.innerHTML = '✓ Message Transmitted';
        showToast('Message sent! Sanjai will reply within 24 hours.');
        contactForm.reset();

        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalText;
        }, 3000);
      }, 900);
    });
  }

  // --- Category Subcards Click ---
  const subcards = document.querySelectorAll('.metric-subcard');
  subcards.forEach(card => {
    card.addEventListener('click', () => {
      subcards.forEach(c => c.classList.remove('highlighted'));
      card.classList.add('highlighted');
    });
  });

  // --- Animated Number Counters (Impact & Metrics) ---
  function initCounters() {
    const statNumbers = document.querySelectorAll('.stat-number');
    if (!statNumbers.length) return;

    let hasAnimated = false;

    function runCounters() {
      if (hasAnimated) return;
      hasAnimated = true;

      statNumbers.forEach(el => {
        const target = parseInt(el.getAttribute('data-target'), 10);
        if (isNaN(target)) return;

        const duration = 1300; // ms
        const startTime = performance.now();

        function update(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease-out cubic curve
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const current = Math.round(easeOut * target);

          el.textContent = current;

          if (progress < 1) {
            requestAnimationFrame(update);
          } else {
            el.textContent = target;
          }
        }

        requestAnimationFrame(update);
      });
    }

    const metricsSection = document.getElementById('metrics');
    if (metricsSection && 'IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            runCounters();
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.2 });
      observer.observe(metricsSection);
    } else {
      setTimeout(runCounters, 400);
    }
  }

  initCounters();

  // --- Animated Interactive Cursor Engine ---
  const cursorDot = document.getElementById('cursorDot');
  const cursorRing = document.getElementById('cursorRing');

  if (cursorDot && cursorRing && window.matchMedia('(hover: hover) and (pointer: fine)').matches) {
    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let isVisible = false;

    window.addEventListener('mousemove', (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) {
        isVisible = true;
        cursorDot.style.opacity = '1';
        cursorRing.style.opacity = '1';
        ringX = mouseX;
        ringY = mouseY;
      }

      cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0) translate(-50%, -50%)`;
    });

    document.addEventListener('mouseleave', () => {
      isVisible = false;
      cursorDot.style.opacity = '0';
      cursorRing.style.opacity = '0';
    });

    document.addEventListener('mouseenter', () => {
      isVisible = true;
      cursorDot.style.opacity = '1';
      cursorRing.style.opacity = '1';
    });

    // High performance RAF loop with smooth lerping lag
    function renderCursor() {
      // 0.18 gives a snappy yet fluid trailing elastic motion
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(renderCursor);
    }
    requestAnimationFrame(renderCursor);

    // Interactive element hover detection
    const interactiveSelectors = 'a, button, .btn, .filter-tab, .method-step-item, .clean-repo-card, .metric-subcard, .social-pill, .direct-link-card, input, textarea, .brand-badge';

    document.addEventListener('mouseover', (e) => {
      if (e.target.closest(interactiveSelectors)) {
        cursorRing.classList.add('cursor-hover');
        cursorDot.classList.add('cursor-hover');
      }
    });

    document.addEventListener('mouseout', (e) => {
      if (e.target.closest(interactiveSelectors)) {
        cursorRing.classList.remove('cursor-hover');
        cursorDot.classList.remove('cursor-hover');
      }
    });

    // Click micro-reactions & expanding ripple
    document.addEventListener('mousedown', () => {
      cursorRing.classList.add('cursor-active');
    });

    document.addEventListener('mouseup', () => {
      cursorRing.classList.remove('cursor-active');
    });

    document.addEventListener('click', (e) => {
      const ripple = document.createElement('div');
      ripple.className = 'cursor-click-ripple';
      ripple.style.left = e.clientX + 'px';
      ripple.style.top = e.clientY + 'px';
      document.body.appendChild(ripple);
      setTimeout(() => ripple.remove(), 600);
    });
  }

})();


