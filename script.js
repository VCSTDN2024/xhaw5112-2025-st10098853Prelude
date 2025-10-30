// NAV toggle for mobile
document.getElementById('menuToggle')?.addEventListener('click', function () {
  const nav = document.getElementById('navList');
  const expanded = this.getAttribute('aria-expanded') === 'true';
  this.setAttribute('aria-expanded', String(!expanded));
  nav.style.display = expanded ? 'none' : 'flex';
});

// year in footer
document.getElementById('yr') && (document.getElementById('yr').textContent = new Date().getFullYear());

// Calculator logic (discount rules based on number of courses selected)
const calcBtn = document.getElementById('calcBtn');
const clearBtn = document.getElementById('clearBtn');
const calcResult = document.getElementById('calcResult');

function calculateTotal() {
  const checkboxes = Array.from(document.querySelectorAll('#calculatorForm input[name="course"]:checked'));
  if (checkboxes.length === 0) {
    calcResult.textContent = 'Please select at least one course to calculate fees.';
    return;
  }

  const prices = checkboxes.map(cb => parseFloat(cb.value));
  const subtotal = prices.reduce((s, p) => s + p, 0);

  // discount rules:
  // 1 course - 0%
  // 2 courses - 5%
  // 3 courses - 10%
  // >3 courses - 15%
  let discountPercent = 0;
  if (checkboxes.length === 2) discountPercent = 5;
  if (checkboxes.length === 3) discountPercent = 10;
  if (checkboxes.length > 3) discountPercent = 15;

  const discount = subtotal * (discountPercent / 100);
  const afterDiscount = subtotal - discount;
  const vat = afterDiscount * 0.15; // 15% VAT
  const total = afterDiscount + vat;

  calcResult.innerHTML = `
    <strong>Summary</strong><br>
    Courses selected: ${checkboxes.length}<br>
    Subtotal: R${subtotal.toFixed(2)}<br>
    Discount (${discountPercent}%): -R${discount.toFixed(2)}<br>
    After discount: R${afterDiscount.toFixed(2)}<br>
    VAT (15%): R${vat.toFixed(2)}<br>
    <strong>Total payable: R${total.toFixed(2)}</strong>
  `;
}

calcBtn?.addEventListener('click', calculateTotal);
clearBtn?.addEventListener('click', function () {
  document.querySelectorAll('#calculatorForm input[type="checkbox"]').forEach(cb => cb.checked = false);
  calcResult.textContent = '';
});

// Contact form (client-side only)
const contactForm = document.getElementById('contactForm');
const contactStatus = document.getElementById('contactStatus');

if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    e.preventDefault();
    contactStatus.textContent = '';
    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    if (!name || !email || !message) {
      contactStatus.textContent = 'Please fill in all fields.';
      contactStatus.style.color = '#b91c1c';
      return;
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      contactStatus.textContent = 'Please enter a valid email address.';
      contactStatus.style.color = '#b91c1c';
      return;
    }

    contactStatus.style.color = '#166534';
    contactStatus.textContent = 'Thanks — your message has been received. We will reply within 48 hours.';
    contactForm.reset();
  });
}