let links = document.querySelectorAll('a[href="#catalog"]');

links.forEach((link) => {
  link.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = document.querySelector('#catalog');
    
    blockID.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  });
});


