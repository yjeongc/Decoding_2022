init();//�̴ϼ��� ���Ӹ�. ����

function init(){
    document.querySelector('form').addEventListener('submit',addTodo);
    document.getElementById('clearAll').addEventListener('click',clearAll);
    document.querySelector('ul').addEventListener('click',delTodo);
}

function addTodo(e){
    e.preventDefault(); //�ڵ� ���� �� �� ��ư�� ���� �Լ��� ����Ǵ� ���� ����
    let toDoValue = document.getElementById('todo');
    if(toDoValue.value == ''){
        alert('������ �Է����ּ���.');
    } else {
        addTask(toDoValue.value);
        toDoValue.value='';
    }
}

function addTask(value){
    let ul = document.querySelector('ul');
    let li = document.createElement('li');
    li.innerHTML = '<button class="del"></button> <label id="val">${value}</label>';
    ul.appendChild{li};//����Ʈ ���� �߰�
}

function delTodo(e){
    let remove = e.target.parentNone;
    let parenNode = remove.parenNode;
    if(e.target.className == 'del')
        parentNode.removeChild(remove);
}

function clearAll(e){
    let ul = document.querySelector('ul').innerHTML ='';
}