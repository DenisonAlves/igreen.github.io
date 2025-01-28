const btnMobile = document.getElementById ('btn-mobile');

function toggleMenu (event){
    if (event.type === 'touchstart') event.preventDefault();

    const nav = document.getElementById('nav');
    nav.classList.toggle('active');    
    const active = nav.classList.contains('active');   

    event.currentTarget.setAttribute('aria-expanded', active);
    if (active) {
        event.currentTarget.setAttribute('aria-label', 'fechar menu');
    } else{
        event.currentTarget.setAttribute('aria-label', 'abrir menu');        
    }
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('touchstart', toggleMenu);

function showIt2() {document.getElementById("msg1").style.visibility = "visible";}    setTimeout("showIt2()", 5000); 
function hiddenIt() {document.getElementById("msg1").style.visibility = "hidden";}setTimeout("hiddenIt()", 15000); 
function showIt3() {document.getElementById("msg1").style.visibility = "visible";} setTimeout("showIt3()", 25000);  
msg1.onclick = function() {document.getElementById('msg1').style.visibility = "hidden"; };



document.addEventListener('DOMContentLoaded', function() {
    const clienteImgs = document.querySelectorAll('.cliente-img');
    let currentIndex = 0;
  
    function updateOpacity() {
      clienteImgs.forEach((img, index) => {
        img.style.opacity = index === currentIndex ? '1' : '0.5';
      });
      currentIndex = (currentIndex + 1) % clienteImgs.length;
    }
  
    setInterval(updateOpacity, 2000);
    updateOpacity(); // Initialize the first state
  });





  
  document.addEventListener('DOMContentLoaded', function() {
    const etapaImgs = document.querySelectorAll('.etapa-img');
  
    function checkVisibility() {
      const triggerBottom = window.innerHeight / 5 * 4;
  
      etapaImgs.forEach((img, index) => {
        const imgTop = img.getBoundingClientRect().top;
  
        if (imgTop < triggerBottom) {
          if (window.innerWidth > 600) {
            setTimeout(() => {
              img.classList.add('visible');
              setTimeout(() => {
                img.classList.add('zoom');
              }, 1800); // Add zoom class after initial animation
            }, index * 200); // Delay each image by 800ms
          } else {
            img.classList.add('visible');
          }
        }
      });
    }
  
    window.addEventListener('scroll', checkVisibility);
    window.addEventListener('resize', checkVisibility);
    checkVisibility(); // Initial check
  });