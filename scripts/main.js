var myButton = document.querySelector('button');
var welcomeUserName = document.querySelector('h2'); 
var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === './images/swami_vivekananda.png') {
        myImage.setAttribute('src','./images/swami-vivekananda02.png');
    } 
    else {
         myImage.setAttribute('src','./images/swami_vivekananda.png');
    }
}


function setUserName(){
    var userName = prompt('Please Enter your name');
    localStorage.setItem('name',userName);
    welcomeUserName.textContent = 'Welcome '+ userName;
}

if(!localStorage.getItem('name')){
    setUserName();
}
else{
    var storedName = localStorage.getItem('name');
    welcomeUserName.textContent = 'Welcome '+storedName;
    welcomeUserName.textContent = 'Welcome '+storedName;
}

myButton.onclick = function() { 
    setUserName();
}