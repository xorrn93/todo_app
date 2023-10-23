
const input = document.querySelector("#addValue");
const addTag = document.querySelector("#addTag");
// 경고 메세지
function warring (){alert("Warring : empty value!")};

//   todo 추가
function addList()  {
 const addValue = document.querySelector('#addValue').value;
//  const tagValue = addTag.value;
 const itemList = document.getElementById("itemList");
 const li = document.createElement("li");
 const checkbox = document.createElement("input");
 const span = document.createElement("span"); 
 const tag = document.createElement("span");
 const button = document.createElement("button");
 const textNode = document.createTextNode(addValue);

 if(addValue == ""){
   warring();
 }else{
   // li.setAttribute('id',addValue);
   span.textContent = addValue;
//    tag.textContent = tagValue;
   checkbox.type = 'checkbox';
   button.innerText = 'delete';
 
    const addList  = document.getElementById('itemList')
    .appendChild(li);

    addList.appendChild(checkbox);
    addList.appendChild(span);
    // addList.appendChild(tag);
    addList.appendChild(button);
    
   checkbox.addEventListener('change',(e)=>{
       if(e.currentTarget.checked){
           span.style.textDecoration = "line-through";
       }else {
           span.style.textDecoration = "none";
       }

   })

   button.addEventListener('click',(e)=>{
       itemList.removeChild(e.currentTarget.parentNode);
   })

   input.value = "";
//    addTag.value = "";

   }
}
// enter 키로 추가
input.addEventListener('keypress', (event)=>{
   if(event.keyCode === 13){
       addList();
   }

})

// addTag.addEventListener('keypress',(e)=>{
//    if(e.keyCode === 13){
//        addList();
//    }
// })
// 테마 변환 기능
function changeTheme(self) {
const body = document.querySelector("body"); 
const themeBtn = document.getElementById("theme");
if(self.value === '다크모드'){
   body.style.background = "white";
   body.style.color = "black";
   themeBtn.style.background ='white';
   themeBtn.style.color = 'black';
   self.value = "화이트모드";
}
else{
   body.style.background = "black";
   body.style.color = "white";
   themeBtn.style.background ='black';
   themeBtn.style.color = 'white';
   self.value = "다크모드";
}
}
// toggle btn
function toggle() {
    const bar = document.querySelector(".bar");
    const hidden = bar.style.display;
    if(hidden == "none"){
        bar.style.display = "block";
    }else {
        bar.style.display = "none";
    }

}

