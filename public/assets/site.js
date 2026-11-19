/**
 * COGS Global — analytics & form helpers (defer in HTML)
 */
(function () {
  var cfg = window.COGS_SITE_CONFIG || {};
  var gaId = cfg.ga4MeasurementId;
  if (gaId && gaId !== 'G-XXXXXXXXXX') {
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + encodeURIComponent(gaId);
    document.head.appendChild(s);
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag('js', new Date());
    gtag('config', gaId, { send_page_view: true });
  }

  function track(name, params) {
    if (typeof window.gtag === 'function') {
      window.gtag('event', name, params || {});
    }
  }

  document.querySelectorAll('a[href^="tel:"]').forEach(function (el) {
    el.addEventListener('click', function () {
      track('click_phone', { link_url: el.getAttribute('href') });
    });
  });

  document.querySelectorAll('a[href^="mailto:"]').forEach(function (el) {
    el.addEventListener('click', function () {
      track('click_email', { link_url: el.getAttribute('href') });
    });
  });

  var form = document.getElementById('contact-form');
  if (form) {
    var params = new URLSearchParams(window.location.search);
    ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'].forEach(function (key) {
      var input = form.querySelector('[name="' + key + '"]');
      if (input && params.get(key)) input.value = params.get(key);
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      track('generate_lead', {
        service_line: (form.querySelector('[name="service_line"]') || {}).value || '',
        page_language: document.documentElement.lang || 'en',
        lead_source: (form.querySelector('[name="utm_source"]') || {}).value || 'organic',
      });
      var thanks = form.getAttribute('data-thanks') || 'Thank you. We will contact you shortly.';
      form.innerHTML =
        '<p style="font-weight:600;color:#0c2340">' +
        thanks +
        '</p><p><a href="mailto:info@cogsglobal.ae">info@cogsglobal.ae</a></p>';
    });
  }

  document.querySelectorAll('[data-track-download]').forEach(function (el) {
    el.addEventListener('click', function () {
      track('download_panel_pdf', { file_name: el.getAttribute('href') });
    });
  });
})();
