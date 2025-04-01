// const searchbtn = document.getElementsByClassName('searchbtn');
// const searchdiv = document.getElementsByClassName('searchdiv')
// const searchinput = document.getElementById('searchinput');//
const menubtn = document.getElementById('menubtn');//
const menulist = document.getElementById('menulist');//
const person_search = document.getElementsByClassName('person_search')[0];
const searchinput1 = document.getElementById('searchinput1');
let menubtnclick = false;
let searchbtnclick = false;
let data = {
    'Dheeraj': {
        'profile': 'logo.png',
        'lastmessage': 'Hello from Dheeraj',
        'm1': 'hello hello',
        'm2': 'Hello from Dheeraj'
    },
    'Shivam': {
        'profile': 'IMG_20221125_170307.jpg',
        'lastmessage': 'Hello from shivam',
        'm1': 'hello hello',
        'm2': 'Hello from shivam'
    },
    'Jangapally Vijay Sathvik': {
        'profile': 'IMG_20231303_21320074039119919299656392.jpg',
        'lastmessage': 'Hello from Jangapally',
        'm1': 'hello hello',
        'm2': 'Hello from Jangapally'
    }
}

window.addEventListener('resize', ()=>{
    location.reload();
})

person_search.addEventListener('click', ()=>{
    // if(!searchbtnclick){
    //     searchdiv[0].style.visibility = 'visible';
    //     searchdiv[0].style.opacity = '1';
    //     searchinput.focus()
    //     searchbtnclick = true;
    // }else{
    //     searchdiv[0].style.visibility = 'hidden';
    //     searchdiv[0].style.opacity = '0';
    //     searchbtnclick = false;
    // }
    searchinput1.focus()
});

menubtn.addEventListener('click', ()=>{
    // console.log('menubtn clicked');
    if(!menubtnclick){
        menulist.style.visibility = 'visible';
        menulist.style.opacity = '1';
        menubtnclick = true;
    }else{
        menulist.style.visibility = 'hidden';
        menulist.style.opacity = '0';
        menubtnclick = false;
    }
});

const chatcontacts = document.getElementById('chatcontacts');//
for(key in data){
    let div = document.createElement('div');
    div.innerHTML = `
                <img src="${data[key]['profile']}" alt="profile">
                <div>
                    <div><b>${key}</b></div>
                    <div style="font-size: 0.9rem; color: grey;"><i>last messagecdsfsdf</i></div>
                </div>`;
    div.classList.add('cc');
    chatcontacts.appendChild(div, 'beforeend');
}

const cc = document.querySelectorAll('.cc');//
const chatroom = document.getElementById('chatroom');//
const chatboxdiv = document.getElementsByClassName('chatboxdiv')[0];//
const chatbox = document.getElementById('chatbox');//
if(window.screen.width < '768'){
    chatboxdiv.style.left = '15vw';
    chatbox.style.width = '67vw';
}

Array.from(cc).forEach(node=>{
    node.addEventListener('click', ()=>{
        let str = node.innerHTML;
        let cname = '';
        if(window.screen.width < '768'){
            chatcontacts.style.display = 'none';
            chatroom.style.display = 'block';
            person_search.style.display = 'none'
        }

        for(let i = 0; i < str.length; i++){
            if(str[i] == '<'){
                if(str[i+1] == 'b'){
                    let j = i+3;
                    while(str[j] != '<'){
                        cname+=str[j];
                        j++;
                    }
                    break;
                }
            }
        }
        console.log(cname);
        const chatroomnav = document.getElementById('chatroomnav');
        chatroomnav.innerHTML = `
                    <img src="${data[cname]['profile']}" alt="profile">
                    <div>
                        <div><b>${cname}</b></div>
                    </div>`;
    });
});
