
const input = document.querySelector("#addValue");
// 경고 메세지
function warring (msg){alert(`오류 : ${msg}`)};

// inrto 삭제
function delIntro(self){
    self.remove();
}
//   todo 추가
function addList()  {
 const addValue = document.querySelector('#addValue').value;
 let dateValue = document.querySelector('#dateValue').value;
 const itemList = document.getElementById("itemList");
 
 // dom 생성
 const li = document.createElement("li");
 const span = document.createElement("span"); 
 const day = document.createElement("span");
 const checkbox = document.createElement("input");
 const button = document.createElement("button");
// 속성 편집
 li.setAttribute('class','item headline fadein');
 checkbox.type = 'checkbox';
 span.textContent = addValue;
 button.innerText = 'x';

 // D-day 계산
 let today = new Date();
 let d_day = new Date(dateValue);
 let timeGap = d_day.getTime() - today.getTime();
 let remainTime = Math.ceil(timeGap/(1000*60*60*24));
 
 // 빈칸 입력시
 if(addValue == ""){
   warring('빈칸 을 입력하셨습니다.');
 }
 // 오늘 날짜로 d-day 를 설정시
 else if(remainTime == 0){
 const addList = itemList.appendChild(li);
    day.textContent = 'Today';
    addList.setAttribute('id',addValue);
     addList.append(checkbox, span, day , button);
 }
 // 오늘 날짜보다 적은 날로 d-day 를 설정 시
 else if(remainTime < 0){
    warring('D-day 는 오늘보다 적은날로 설정할 수 없습니다.');
 }
 // d-day 를 설정 하지 않을 시
 else if(dateValue == ("" && undefined && NaN)){
 const addList = itemList.appendChild(li);
    addList.setAttribute('id',addValue);
    addList.append(checkbox, span ,button);
 }
 // d-day 설정
 else{
 const addList = itemList.appendChild(li);
   day.textContent = `Day-${remainTime}`;
   addList.setAttribute('id',addValue);
   addList.append(checkbox, span, day, button);
   }

   input.value = "";

   // todo 완료 시 밑줄
checkbox.addEventListener('change',(e)=>{
    if(e.currentTarget.checked){
        span.setAttribute('class','checked');
        span.style.textDecoration = "line-through";
    }else {
        span.setAttribute('class','');
        span.style.textDecoration = "none";
    }
    
    sucess();
})

// 완료 개수
function sucess(){
    const sucess = document.querySelector('.sucess');
    let checkedes = document.getElementsByClassName('checked').length;

    console.log(checkedes);
    sucess.innerText = `sucess : ${checkedes}`; 
}

// todo 삭제
button.addEventListener('click',(e)=>{
    itemList.removeChild(e.currentTarget.parentNode);
})
}

// 기본 설명 todo 삭제
function delDefault (self) {
    self.parentNode.remove();
}

// enter 키로 추가
input.addEventListener('keypress', (event)=>{
   if(event.keyCode === 13){
       addList();
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
if(self.value === 'Dark'){
   body.style.background = "white";
   body.style.color = "black";
   themeBtn.style.color = 'black';
   self.value = "White";
   self.innerText = "bedtime";
}
else{
   body.style.background = "black";
   body.style.color = "white";
   themeBtn.style.color = 'white';
   self.value = "Dark";
   self.innerText = "partly_cloudy_day"
}
}

// toggle btn
const bar = document.querySelector(".input_bar");

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
const exitBtn = document.getElementById("exitBtn");
const toggleBtn = document.getElementById("toggle");
exitBtn.addEventListener('click', function(){
    bar.style.display = "none";
    toggleBtn.style.display = "block";
    input.value = "";
})
