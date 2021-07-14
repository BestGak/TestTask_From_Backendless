let modalImage = document.querySelectorAll('.grid__item')
let body = document.querySelector('body');
let galery = document.querySelector('#galery')
let dark = document.querySelector('#dark');
let light = document.querySelector('#light')
let backendless = document.querySelector('#backendless')
let footer = document.querySelector('.footer')
let header = document.querySelector('.header');
let linkPlusPhoto = document.querySelectorAll('.footer__link')
let lightBtn = document.querySelector('#light1')
let darkBtn = document.querySelector('#dark1')
let beckendlesstBtn = document.querySelector('#backendless1')
let lightSelect = document.querySelector('#light2')
let darkSelect = document.querySelector('#dark2')
let beckendlesstSelect = document.querySelector('#backendless2')
let selectThemePhone = document.querySelector('#selectThemePhone')

function lightTheme(){
  
    footer.classList.remove('darkBG');
    header.classList.remove('darkBG');
    galery.classList.remove('darkGalery')
    footer.classList.remove('backendllesBG');
    header.classList.remove('backendllesBG');
    galery.classList.remove('backendllesGalery')
    linkPlusPhoto.forEach(link => {
    link.classList.remove('darkText');
    link.classList.remove('backendllesText');
    });
  
}
function darkTheme(){
  
    footer.classList.add('darkBG');
    header.classList.add('darkBG');
    galery.classList.add('darkGalery')
    footer.classList.remove('backendllesBG');
    header.classList.remove('backendllesBG');
    galery.classList.remove('backendllesGalery')
    linkPlusPhoto.forEach(link => {
    link.classList.add('darkText');
    link.classList.remove('backendllesText');
    });
}

function beckendlesstTheme(){ 
    footer.classList.add('backendllesBG');
    header.classList.add('backendllesBG');
    galery.classList.add('backendllesGalery')
    linkPlusPhoto.forEach(link => {
    link.classList.add('backendllesText');
    });
}

modalImage.forEach(photo => {
  photo.addEventListener('click' , function(){
    photo.classList.toggle('modal__image')
    body.classList.toggle('hidden')
    galery.scrollIntoView();
    console.log('clicked');
  })
});

dark.addEventListener('click', function(){
  if(dark.checked){
    darkTheme()
  }
})

light.addEventListener('click' , function(){
  if(light.checked){
    lightTheme();
  }
})

backendless.addEventListener('click' , function(){
  if(backendless.checked){
    beckendlesstTheme()
  }
})

lightBtn.addEventListener('click', function(){
  console.log('clicked');
  lightTheme();
})

darkBtn.addEventListener('click', function(){
  darkTheme()
})

beckendlesstBtn.addEventListener('click', function(){
  beckendlesstTheme()
})

selectThemePhone.addEventListener('change', function(){
  console.log(selectThemePhone.value);
  if(selectThemePhone.value == 1){
    lightTheme();
  } else if (selectThemePhone.value == 2){
    darkTheme()
  } else if (selectThemePhone.value == 3){
    beckendlesstTheme()
  }
})
