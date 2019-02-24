(function(){

  let btnClose = document.querySelector('#btn-close'),
      navToggler = document.querySelector('.nav-toggler'),
      navCollapse = document.querySelector('.nav-collapse'),
      navCollapseLink = document.querySelectorAll('.nav-collapse li');


  // Display Navbar Links
  navToggler.addEventListener('click', function(){
    navCollapse.classList.add('show');
  })


  // Close Navbar Links
  btnClose.addEventListener('click', function(){
    navCollapse.classList.remove('show');
  })


  // On window scroll
  window.addEventListener('scroll', function(){
    let header = document.querySelector('.main-header'),
        headerOffsetTop = header.offsetTop,
        body = document.querySelector('body');

    if(window.pageYOffset > 80) {
      body.style.paddingTop = '70px';
      header.classList.add('fixed');
    } else {
      body.style.paddingTop = '0';
      header.classList.remove('fixed');
    }
  })


  // Set active class to clicked link item
  navCollapseLink.forEach(link => {
    link.onclick = function() {

      let firstLink = navCollapseLink[0];
      while(firstLink){
        if(firstLink.tagName == 'LI'){
          firstLink.classList.remove('active');
        }
        firstLink = firstLink.nextSibling;
      }
      this.classList.add('active');
    }
  })

})()