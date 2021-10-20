let Amenu = document.getElementById('elementM');

let body = document.querySelector('body');

let menu = document.querySelector('.mark1');

let menuD = document.querySelector('.mark2');

let last1 = document.querySelector('.last1');

let last2 = document.querySelector('.last2');

let nav = document.getElementById('navigation');

let ekipmans = document.getElementsByClassName("ekipman");
  
let sembols = document.getElementsByClassName("sem"); 

let item = document.getElementsByClassName("item");




    menu.addEventListener('click',function(){
       

        for(i=0; i<ekipmans.length; i++){
            ekipmans[i].classList.remove('d-inline');
        }
        Amenu.style.width =  "10%";
       
        for(i=0; i<ekipmans.length; i++){
            ekipmans[i].classList.add('d-none');
        }
        
        for(i=0; i<item.length; i++){
            item[i].classList.add('item2');
        }
    
        nav.style.width = "90%";
       
      
    function myFunc(x){
        if(x.matches){
            Amenu.style.display = "none";
            nav.style.width = "100%";
            menuD.style.display = "none";
         
        }
       else{
        Amenu.style.display = "inline-block";
        Amenu.style.width = "10%";
        nav.style.width = "90%";
        menuD.style.display = "inline";
        menu.style.display = "none";
       }
    }
        var x = window.matchMedia("(max-width: 600px)")
        myFunc(x);
        x.addListener(myFunc);
});


    menuD.addEventListener('click', function() {
        
        for(i=0; i<ekipmans.length; i++){
            ekipmans[i].classList.remove('d-none');
        }
        Amenu.style.width =  "22.5%";
       nav.style.width = "77.5%";
        for(i=0; i<ekipmans.length; i++){
            ekipmans[i].classList.add('d-inline');
        }
        
        for(i=0; i<item.length; i++){
            item[i].classList.remove('item2');
        }
    
        function myFunc(x){
        if(x.matches){
            nav.style.width = "100%";
            menu.style.display = "none"
        }
       else{
           Amenu.style.width = "22.5%";
        nav.style.width = "77.5%";
        menu.style.display = "inline";
        menuD.style.display = "none";
     
       }
     }
        var x = window.matchMedia("(max-width: 600px)");
        myFunc(x);
        x.addListener(myFunc);
    });
    
    last1.addEventListener('click',function(){
        for(i=0; i<ekipmans.length; i++){
            ekipmans[i].classList.remove('d-none');
        }
        for(i=0; i<ekipmans.length; i++){
            ekipmans[i].classList.add('d-inline');
        }
        for(i=0; i<item.length; i++){
            item[i].classList.remove('item2');
        }
        nav.style.width = "77.5%";
        Amenu.style.width = "22.5%";
        Amenu.style.display = "inline-block";

        function myFunc(x){
            if(x.matches){
                last1.style.display = "none";
                last2.style.display = "inline";
            }
           else{
           last1.style.display = "none";
           last2.style.display = "none";
           }
         }
            var x = window.matchMedia("(max-width: 600px)");
            myFunc(x);
            x.addListener(myFunc);
    });

    last2.addEventListener('click',function(){
        Amenu.style.display = "none";
        nav.style.width = "100%";

        function myFunc(x){
            if(x.matches){
                last1.style.display = "inline";
                last2.style.display = "none";
            }
           else{
           last1.style.display = "none";
           last2.style.display = "none";
           }
         }
            var x = window.matchMedia("(max-width: 600px)");
            myFunc(x);
            x.addListener(myFunc);
    });

   let home = document.getElementById('list-home-list');

   let profil = document.getElementById('list-profile-list');

   let message = document.getElementById('list-messages-list');

   let setting = document.getElementById('list-settings-list');
        
//


    var url = window.location.href;
    var sonuc = url.slice(50);
    var a = sonuc.split(".",1);
    var myItem = a.toString();
    

    function yap(){
        if(myItem=="Main"){
           home.classList.add("active");
        }
        else if(myItem=="Profil"){
            profil.classList.add("active");
        }
        else if(myItem=="Messages"){
            message.classList.add("active");
        }
        else if(myItem=="Setting"){ 
            setting.classList.add("active");
        }
    }
  
   window.onload = function (){
             yap();
   }

   
    
   
    
   