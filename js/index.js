const input = document.querySelector('input');
const btn = document.querySelector('.addTask > button');
let sizenotcom = 0;
// let sizecom = 0;
const sizeBox1 = document.getElementById('sizenotcom');
// const sizeBox2 = document.getElementById('sizecom');
sizeBox1.innerHTML = "Size Current: "+sizenotcom;
// sizeBox2.innerHTML = "Size Complete: "+sizecom;

btn.addEventListener('click',addList);// btn akan bekerja ketika diclick
const empty = document.getElementById('empty');
empty.innerHTML = "Your box still empty";

input.addEventListener('keyup',(e)=>{
    if(e.keyCode === 13){
        addList(e);
    }
    else{
        null;
    }
})

function addList(e){
    if(sizenotcom == 10){
        alert('You can add list until 10 list');
    }    
    else{        
        const notCompleted = document.querySelector('.notCompleted');
        const Completed = document.querySelector('.Completed');
    
        const newList = document.createElement('li');
        const checkbtn = document.createElement('button');
        const deletebtn = document.createElement('button');
    
        checkbtn.innerHTML = '<i class="fa fa-check"></i>';
        deletebtn.innerHTML = '<i class="fa fa-trash"></i>';
        
        if(input.value !==''){
            sizenotcom+=1;
            newList.textContent = input.value;
            input.value = '';
            notCompleted.appendChild(newList);
            newList.appendChild(checkbtn);
            newList.appendChild(deletebtn);
            sizeBox1.innerHTML = "Size Current: "+sizenotcom;
            const empty = document.getElementById('empty');
            empty.innerHTML = " ";
            // sizeBox2.innerHTML = "Size Complete: "+sizecom;
        }        
    
        checkbtn.addEventListener('click',function(){
            // sizecom+=1;
            // sizenotcom+=1;
            this.parentNode.remove();
            Completed.appendChild(this.parentNode);
            checkbtn.style.display = 'none';
            sizeBox1.innerHTML = "Size Current: "+sizenotcom;
            // sizeBox2.innerHTML = "Size Complete: "+sizecom;
            if(sizenotcom == 0){
                const empty = document.getElementById('empty');
                empty.innerHTML = "Your box still empty";
            }
            else{
                const empty = document.getElementById('empty');
                empty.innerHTML = " ";
            }
        });   
    
        deletebtn.addEventListener('click',function(){
            sizenotcom-=1;
            this.parentNode.remove();
            sizeBox1.innerHTML = "Size Current: "+sizenotcom;
            // sizeBox2.innerHTML = "Size Complete: "+sizecom;
            if(sizenotcom == 0){
                const empty = document.getElementById('empty');
                empty.innerHTML = "Your box still empty";
            }
            else{
                const empty = document.getElementById('empty');
                empty.innerHTML = " ";
            }
        });
    }



}

// if(sizenotcom == 1 && sizecom == 0){
//     sizenotcom-=1;
// }
// if(sizenotcom > 0){
//     sizenotcom-=1;
// } 
// if(sizecom > 0){
//     sizecom-=1;
// }  
// else if(sizecom == 0){
//     sizecom = 0;
// }
// else if(sizenotcom == 0){
//     sizenotcom = 0;
// }

//step by step
// 1. buat const input dan btn untuk mengambil hasil dari inputan dan btn bekerja sebagai executor
// 2. btn.addEventListener akan bekerja jika ada fungsi addList
// 3. pada 
// input.addEventListener('keyup',(e)=>{
//     if(e.keyCode === 13){
//         addList(e);
//     }
//     else{
//         null;
//     }
// })
// gunanya agar input dapat diambil.
// 4. ambil semua element mulai dari notComplete dan Complete, newlist,check,dan delete
// notComplete dan Complete berfungsi sebagai penampung dari newlist,dll.

// 5. fungsi addList(e)
// a. cek input.value !=='' maka
// newList mengambil input.value
// input.value = ''
// lalu notcomplete appendchild new list -> gunanya newlist sebagai isi dari not complete
// lalu newlist append child del dan check btn
// b. cek.addEventListener yg dimana jika di centang maka parentnode dari notcomplete hilang
// complete appendchild this.parentNode
// check nya harus none
// c. del.addEventListener
// maka parennode.remove
