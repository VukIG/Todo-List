
//all the consts
const jovan=document.getElementById('sandwitch');
const inputt=document.querySelector('input');
const lista=document.querySelector('.lista');
const check=document.querySelector('.check');
const x=document.querySelector('.del');

//
let list;
let br=0;
//actual code

function createIt() {
    br++;
    let mistake=document.createElement('h1');
    mistake.style.color='red';
    mistake.style.margin='30px';
    document.querySelector('.input').appendChild(mistake);
    mistake.innerHTML='Please enter your task';
    setTimeout(() => {
        mistake.style.display='none';
        br--;
    }, 1000);
    
}

jovan.addEventListener('click',function () {
    if(inputt.value=='' && br==0){
        createIt();
    }
    else if(inputt.value!=''){
        let iop=document.createElement('div');
        iop.classList.add('item');
        let brisi=document.createElement('button');
        let prekrizi=document.createElement('button');
        let dugmad=document.createElement('div');
        let paragraph=document.createElement('p');
        paragraph.innerHTML=inputt.value;
        iop.appendChild(paragraph);
        prekrizi.classList.add('check');
        brisi.classList.add('del');
        prekrizi.innerHTML='Check'
        brisi.innerHTML='X'
        dugmad.classList.add('buttons');
        iop.appendChild(dugmad);
        dugmad.appendChild(prekrizi)
        dugmad.appendChild(brisi);
        lista.appendChild(iop);
        prekrizi.addEventListener('click',()=>{
            if(paragraph.style.textDecoration=='line-through'){
                paragraph.style.textDecoration='none'
            }
            else{
                paragraph.style.textDecoration='line-through'
            }
        });
        brisi.addEventListener('click',()=>{
            brisi.parentElement.parentElement.style.display='none';
        });
    };
});

x.addEventListener('click',function (e) {
    let newX=e.target;
    newX.parentElement.parentElement.style.display='none';
})