init();//이니셜의 줄임말. 실행

function init(){
    document.querySelector('form').addEventListener('submit',addTodo);
    document.getElementById('clearAll').addEventListener('click',clearAll);
    document.querySelector('ul').addEventListener('click',delTodo);
}

function addTodo(e){
    e.preventDefault(); //자동 실행 될 때 버튼이 눌러 함수가 실행되는 것을 방지
    let toDoValue = document.getElementById('todo');
    if(toDoValue.value == ''){
        alert('내용을 입력해주세요.');
    } else {
        addTask(toDoValue.value);
        toDoValue.value='';
    }
}

function addTask(value){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = '<button class="del"></button><label id="val">to do</label>';
    ul.appendChild(li);//리스트 내용 추가
}

function delTodo(e){
    let remove = e.target.parentNone;
    let parenNode = remove.parentNode;
    if(e.target.className == 'del')
        parentNode.removeChild(remove);
}

function clearAll(e){
    let ul = document.querySelector('ul').innerHTML ='';
}