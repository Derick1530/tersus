// trying to write some good code
const section = document.querySelector('section');
const ul = document.querySelector('ul');
console.log(section);
section.className = 'col-red visible';
const button  = document.querySelector('button');


button.addEventListener('click', () =>{
    // if (section.className ==="col-red visible"){
    //     section.className = 'invisible';
    // }else{
    //     section.className = 'col-red visible';
    // }
   section.classList.toggle('invisible');
}
);
