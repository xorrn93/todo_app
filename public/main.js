const input = document.querySelector("#addValue");

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
        console.log(name);
        console.log(date);
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
    console.log(id);
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

async function doneTodo(self) {
    const title = self.nextElementSibling;
    const checked = self.getAttribute('value');
    const id = self.parentNode.getAttribute('id');

    console.log(id);
    if(checked === 'on'){
        title.setAttribute('class','checked');
        self.setAttribute('value','off');
        title.style.textDecoration = "line-through";
        try {
            await axios.patch(`/users/${id},on`);
        }
        catch(err){
            console.error(err);
        }
    }else {
        title.setAttribute('class','');
        checkbox.setAttribute('value','on');
        title.style.textDecoration = "none";
        try {
            await axios.patch(`/users/${id},off`);
        }
        catch(err){
            console.error(err);
        }
    }
    sucess();      
}

// 완료 개수
function sucess(){
    const sucess = document.querySelector('.sucess');
    let checkedes = document.getElementsByClassName('checked').length;

    console.log(checkedes);
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
