/* burger */
import {mainPage} from './_vars';
const logo = document.querySelector('.header__logo');
if(mainPage){
  logo.addEventListener('click',function(){
    document.querySelector('body').style.background = 'green';
  });
}
