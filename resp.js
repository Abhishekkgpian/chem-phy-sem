// burger=document.querySelector('.burger') 
// navbar=document.querySelector('.navbar') 
// navList=document.querySelector('.nav-list')
// rightNav=document.querySelector('.rightNav') 


// burger.addEventListener('click',()=>{
// rightNav.classList.toggle('v-class-resp')
// navList.classList.toggle('v-class-resp')
// navbar.classList.toggle('h-nav-resp')
// })

    function toggleHide(){
        // let btn = document.getElementById('btn');
        let para = document.getElementById('navbar'); 
        if(para.style.display != 'none'){
        para.style.display = 'none';
        }
        else{
        para.style.display = 'flex';
        }
        }
       var footer=document.getElementById('footer');
       var contributors=document.getElementById('contributors');
       footer.addEventListener('click',show_hide);
      function show_hide() {
              if (contributors.style.display!='none') { contributors.style.display='none';
                  
              } else {
                contributors.style.display='block';
              }          
      }
     
           
       
           
       
           
       

