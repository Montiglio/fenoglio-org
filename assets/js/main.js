// Minimal JavaScript for Fenoglio-org static site
// Handles dynamic year and reduced-motion-aware section reveal
(function(){
  var y = new Date().getFullYear();
  document.querySelectorAll('.copyright').forEach(function(e){
    if(e.textContent.indexOf('©')!==-1){
      e.textContent = '© '+y+' Fenoglio-org. Contact enquiries are welcome; privacy and data note in the contact section.';
    }
  });

  var prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if(prefersReduced){
    document.querySelectorAll('.section').forEach(function(section){section.classList.add('visible');});
    return;
  }

  var sections = Array.from(document.querySelectorAll('.section'));
  function reveal(){
    var viewportHeight = window.innerHeight;
    sections.forEach(function(section){
      var rect = section.getBoundingClientRect();
      if(rect.top < viewportHeight - 60){
        section.classList.add('visible');
      }
    });
  }
  reveal();
  window.addEventListener('scroll', reveal, {passive: true});
})();
