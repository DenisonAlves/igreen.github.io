document.addEventListener('DOMContentLoaded', function() {
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptCookiesButton = document.getElementById('accept-cookies');
  const declineCookiesButton = document.getElementById('decline-cookies');

  // Check if the user has already made a choice
  if (!localStorage.getItem('cookiesAccepted') && !localStorage.getItem('cookiesDeclined')) {
    cookieBanner.style.display = 'flex';
  }

  acceptCookiesButton.addEventListener('click', function() {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieBanner.style.display = 'none';
  });

  declineCookiesButton.addEventListener('click', function() {
    localStorage.setItem('cookiesDeclined', 'true');
    cookieBanner.style.display = 'none';
  });
});