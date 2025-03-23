const searchbtn = document.getElementsByClassName('searchbtn');
const searchdiv = document.getElementsByClassName('searchdiv')
const searchinput = document.getElementById('searchinput');
const menubtn = document.getElementById('menubtn');
const menulist = document.getElementById('menulist');
let menubtnclick = false;
let searchbtnclick = false;

Array.from(searchbtn).forEach(node =>{
    node.addEventListener('click', ()=>{
        if(!searchbtnclick){
            searchdiv[0].style.visibility = 'visible';
            searchdiv[0].style.opacity = '1';
            searchinput.focus()
            searchbtnclick = true;
        }else{
            searchdiv[0].style.visibility = 'hidden';
            searchdiv[0].style.opacity = '0';
            searchbtnclick = false;
        }
    })
})
menubtn.addEventListener('click', ()=>{
    console.log('menubtn clicked');
    if(!menubtnclick){
        menulist.style.visibility = 'visible';
        menulist.style.opacity = '1';
        menubtnclick = true;
    }else{
        menulist.style.visibility = 'hidden';
        menulist.style.opacity = '0';
        menubtnclick = false;
    }
})
console.log(searchbtn)