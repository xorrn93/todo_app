const input = document.querySelector("#addValue");
window.onload = function(){
    // winow onload 시 적용되는 함수
    // 체크박스 checked value 에 따른 style 변경
    const done = document.getElementsByClassName("off");
    for(let i = 0; i < done.length; i++){
        done[i].nextElementSibling.style.textDecoration = "line-through";
        done[i].parentNode.style.opacity = "50%";
        done[i].setAttribute('checked',true);
    }
    // done 한 todo list length 를 반영함
    sucess();      
    ddayCount();
}

// 경고 메세지
function warring (msg){alert(`오류 : ${msg}`)};

// inrto 삭제
function delIntro(self){
    self.remove();
}
//   todo 추가
async function addTodo(){
 const name = document.getElementById('addValue').value;
 const date = document.getElementById('dateValue').value;

 let today = new Date();
 let d_day = new Date(date);
 let timeGap = d_day.getTime() - today.getTime();
 let remainTime = Math.ceil(timeGap/(1000*60*60*24));

   // d-day 를 설정 하지 않을 시
 if(date == ("" && undefined && NaN)){
        warring('날짜를 설정해 주세요!');
    }
 // 빈칸 입력시
 if(name == ""){
   warring('빈칸 을 입력하셨습니다.');
 }
 // 오늘 날짜보다 적은 날로 d-day 를 설정 시
 if(remainTime < 0){
    warring('D-day 는 오늘보다 적은날로 설정할 수 없습니다.');
 }else {
    try{
        await axios.post('/users',{ name , date });
        // getUser();
        location.reload(true);
    }catch (err){
        console.error(err);
    }
 }

name = "";
date = "";
}
// delete
async function delTodo(self){
    const id = self.parentNode.getAttribute('id');
    try {
        if(confirm('삭제하시겠습니까?')){
            await axios.delete(`/users/${id}`);
            location.reload(true);
        }else{
            location.reload(true);
        }
    }catch(err){
        console.error(err)
    }
}
// update
async function doneTodo(self) {
    const title = self.nextElementSibling;
    const checked = self.getAttribute('value');
    const id = self.parentNode.getAttribute('id');
    if(checked === 'on'){
        title.setAttribute('class','checked');
        try {
            await axios.patch(`/users/${id}`,{
                checked : "off",
            });
        }
        catch(err){
            console.error(err);
        }
    }else {
        title.setAttribute('class','');
        try {
            await axios.patch(`/users/${id}`,{
                checked : "on",
            });
        }
        catch(err){
            console.error(err);
        }
    }
    sucess();
    location.reload(true);
}

function lineTruogh(self){
    const title = self.nextElementSibling;
    const checked = self.getAttribute('value')
    if(checked === "off"){
        title.style.textDecoration = "line-thruogh";
    }else {
        title.style.textDecoration = "none";
    }
}

// 완료 개수
function sucess(){
    const sucess = document.querySelector('.sucess');
    let checkedes = document.getElementsByClassName('off').length;

    sucess.innerText = `sucess : ${checkedes}`; 
}

// 기본 설명 todo 삭제
function delDefault (self) {
    self.parentNode.remove();
}

// enter 키로 추가
input.addEventListener('keypress', (event)=>{
   if(event.keyCode === 13){
       addTodo();
   }
})

// 전체 삭제
function deleteAll() {
    if(confirm('정말 삭제 하시겠습니까?')){
        if(itemList.innerText != ''){
            const itemList = document.getElementById("itemList");
            itemList.innerText = '';
        }else{
            warring('삭제할 목록이 없습니다.');
        }
    }
}

// 테마 변환 기능
function changeTheme(self) {
const body = document.querySelector("body"); 
const themeBtn = document.getElementById("theme");
const toggle = document.getElementById("toggle");
const input_bar = document.querySelector("#input_bar");
const addList = document.querySelector("#addList");
const dateValue = document.querySelector("#dateValue");
const item = document.querySelectorAll(".item");
const header = document.querySelector("#header");

if(self.value === 'Dark'){
   body.style.background = "white";
   body.style.color = "black";
   themeBtn.style.color = 'black';
   self.value = "White";
   self.innerText = "bedtime";
   toggle.style.color = "black";
   input_bar.style.border = "1px solid black";
   addList.style.color = "black";
   addList.style.border = "1px solid black";
   dateValue.style.border = "1px solid black";
   header.style.borderBottom = "1px solid black";
   for(i=0;i < item.length;i++){
    const btn = item[i].querySelector("button");
    btn.style.color = "black";
    item[i].style.borderBottom = "1px solid black";
   }
}
else{ 
   body.style.background = "#262626";
   body.style.color = "white";
   themeBtn.style.color = 'white';
   self.value = "Dark";
   self.innerText = "partly_cloudy_day"
   toggle.style.color = "white";
   input_bar.style.border = "1px solid white";
   addList.style.color = "white";
   addList.style.border = "1px solid white";
   dateValue.style.border = "none";
   header.style.borderBottom = "1px solid white";
   for(i=0;i < item.length;i++){
    const btn = item[i].querySelector("button");
    btn.style.color = "white";
    item[i].style.borderBottom = "1px solid white";
   }

}
}

// toggle btn
const bar = document.querySelector(".input_bar");

function toggle(self) {
    const hidden = bar.style.display;
    if(hidden === "none"){
        bar.style.display = "block";
        self.style.display = "none";
    }else {
        bar.style.display = "none";
    }
}
// exit btn
const exitBtn = document.getElementById("exitBtn");
const toggleBtn = document.getElementById("toggle");
exitBtn.addEventListener('click', function(){
    bar.style.display = "none";
    toggleBtn.style.display = "block";
    input.value = "";
})

// ddayCount
function ddayCount(){
    const item = document.querySelectorAll(".item");
    for(i=0;i<item.length;i++){
        const dday = item[i].querySelector(".dday").innerHTML;
        
        let today = new Date();
        let d_day = new Date(dday);
        let timeGap = d_day.getTime() - today.getTime();
        let remainTime = Math.ceil(timeGap/(1000*60*60*24));
       if(remainTime === 0){
           item[i].querySelector(".dday").innerHTML = "Today";
           item[i].querySelector(".dday").style.color = "green";
       }
       else if(remainTime < 0){
        item[i].querySelector(".dday").innerHTML = "Day+"+ -remainTime;
        item[i].querySelector(".dday").style.color = "red";
       }
       else {
            item[i].querySelector(".dday").innerHTML = "Day-"+remainTime;
       }
       console.log(remainTime); // d-day Check
    }
}