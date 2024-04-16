// show menu
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

    //   menu show
    if(navToggle){
        navToggle.addEventListener('click', () =>{
            navMenu.classList.add('show-menu')
        })
    }

    // menu hidden
    if(navClose){
        navClose.addEventListener('click', () =>{
            navMenu.classList.remove('show-menu')
        })
    }

    // remove menu mobile
    const navLink = document.querySelectorAll('.nav__link')

    const linkAction = () =>{
        const navMenu = document.getElementById('nav_menu')
        // ketika nav__link di klik, kita menghapus show menu
        navMenu.classList.remove('show-menu')
    }

navLink.forEach(n => n.addEventListener('click', linkAction))

// add blur header
const blurlHeader = () =>{
    const header = document.getElementById('header')
    // tambah class jika bttom offset is greater dari 50 of the value
    this.scrollY >= 50 ? header.classList.add('blur-header')
                       : header.classList.remove('blur-header')
}
window.addEventListener('scroll', blurlHeader)

// show scroll up
    const scrollUp = () =>{
        const scrollUp = document.getElementById('scroll-up')
        this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                            :scrollUp.classList.remove('show-scroll')
    }
    window.addEventListener('scroll', scrollUp)

//  SCROLL SECTIONS ACTIVE LINK
  const sections = document.querySelectorAll('section[id')
  

  const sectionsActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute('id'),
        sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')

        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        } else {
            sectionsClass.classList.remove('active-link')
        }
    })
  }
  window.addEventListener('scroll', scrollActive)

//  SCROLL REVEAL ANIMATION
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2500,
    delay: 300,
    // reset:true, animation repeat
})

sr.reveal(`.home__img, .new__data, .care__img, .contact__content, .footer`)
sr.reveal(`.home__data, .care__list, .contact__img`, {delay: 500})
sr.reveal(`.new__card`, {delay: 500, interval: 100})
sr.reveal(`.shop__card`, {interva: 100})
