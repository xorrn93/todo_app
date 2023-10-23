
const input = document.querySelector("#addValue");
const addTag = document.querySelector("#addTag");
// 경고 메세지
function warring (){alert("Warring : empty value!")};
const checkbox = document.createElement("input");
const button = document.createElement("button");

function dateFomat(){
    const today = new Date(); 
    let result = today.getFullYear() + '-' +((today.getMonth()+1)<9?"0"+(today.getMonth()+1) : (today.getMonth()+1))+'-'+
    ((today.getDate()) < 9 ? "0" +(today.getDate()):(today.getDate()));

    return result;
}
//   todo 추가
function addList()  {
 const addValue = document.querySelector('#addValue').value;
    //  const tagValue = addTag.value;
 const dateValue = document.querySelector('#dateValue').value;
 const itemList = document.getElementById("itemList");
 const li = document.createElement("li");
 const span = document.createElement("span"); 
 const day = document.createElement("span");
 const dday = document.createElement("span");
 const textNode = document.createTextNode(addValue);
 const today = new Date();
 const d_day = new Date(dateValue);
 const timeGap = d_day.getTime() - today.getTime();
 const remainTime = Math.ceil(timeGap/(1000*60*60*24));


 console.log(remainTime);

 if(addValue == ""){
   warring();
 }
 else if(remainTime == 1){
    span.textContent = addValue;
    checkbox.type = 'checkbox';
    button.innerText = 'delete';
  
     const addList  = document.getElementById('itemList')
     .appendChild(li);
 
     addList.appendChild(checkbox);
     addList.appendChild(span);
     day.textContent = 'Today';
     addList.appendChild(day);
     addList.appendChild(button);
 
    input.value = "";
 }
 else if(remainTime <= 0){
    alert("D-day 는 오늘보다 적은날로 설정할 수 없습니다.");
 }
 else if(dateValue == ("" && undefined)){

   span.textContent = addValue;
   checkbox.type = 'checkbox';
   button.innerText = 'delete';
 
    const addList  = document.getElementById('itemList')
    .appendChild(li);

    addList.appendChild(checkbox);
    addList.appendChild(span);
    addList.appendChild(button);

   input.value = "";
 }
 else{
   // li.setAttribute('id',addValue);
   span.textContent = addValue;
//    tag.textContent = tagValue;
   checkbox.type = 'checkbox';
   button.innerText = 'delete';
 
    const addList  = document.getElementById('itemList')
    .appendChild(li);

    addList.appendChild(checkbox);
    addList.appendChild(span);
    day.textContent = 'Day-';
    addList.appendChild(day);
    // dday.setAttribute('class','dateValue');
    dday.innerText = remainTime;
    addList.appendChild(dday);
    // addList.appendChild(tag);
    addList.appendChild(button);
    
 


   input.value = "";
//    addTag.value = "";

   }
}
// 체크박스 체크 시 밑줄
checkbox.addEventListener('change',(e)=>{
    if(e.currentTarget.checked){
        span.style.textDecoration = "line-through";
    }else {
        span.style.textDecoration = "none";
    }

})

// todo 삭제
button.addEventListener('click',(e)=>{
    itemList.removeChild(e.currentTarget.parentNode);
})

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
const bar = document.querySelector(".bar");
function toggle(self) {
    const hidden = bar.style.display;
    if(hidden == "none"){
        bar.style.display = "block";
        self.style.display = "none";
    }else {
        bar.style.display = "none";
    }
}
// exit btn
const exitBtn = document.querySelector("#exitBtn");
const toggleBtn = document.querySelector("#toggle");
exitBtn.addEventListener('click', function(){
    bar.style.display = "none";
    toggleBtn.style.display = "block";
    input.value = "";
})

// function dateCount(value){
//     const today = new Date();
//     const dday = new Date(value);
//     const timeGap = dday.getTime() - today.getTime();
//     const remainTime = Math.ceil(timeGap/(1000*60*60*24));    

//     return remainTime;
// }
