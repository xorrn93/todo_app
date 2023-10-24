
const input = document.querySelector("#addValue");
// 경고 메세지
function warring (msg){alert(`오류 : ${msg}`)};

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
 checkbox.type = 'checkbox';
 span.textContent = addValue;
 button.innerText = 'delete';

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
        span.style.textDecoration = "line-through";
    }else {
        span.style.textDecoration = "none";
    }

})

// todo 삭제
button.addEventListener('click',(e)=>{
    itemList.removeChild(e.currentTarget.parentNode);
})

}

// enter 키로 추가
input.addEventListener('keypress', (event)=>{
   if(event.keyCode === 13){
       addList();
   }

})

// 전체 삭제


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

