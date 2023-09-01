  let ininput = document.querySelector(".enter");
let btn1 = document.querySelector(".add");
let task = document.querySelector(".task");

let Alltasks=[];

let render = () => {
  let values ={
    vlu : ininput.value,
  };
Alltasks.push(values);
ininput.value="";
task.style.display = "block";
showTasks();
};

let deletetask = (index)=>{
  Alltasks.splice(index,1)
  showTasks();
}

let edittask = (index) => {
  let get = document.querySelectorAll(".get");
  let ebtn = document.querySelectorAll(".eddit");
  get[index].removeAttribute("readonly");
  ebtn[index].innerText = "Update";
  ebtn[index].setAttribute("onclick",`Updatetask(${index})`);
  ebtn[index].classList.replace("eddit","update");
};
let Updatetask = (index) =>{
  let get = document.querySelectorAll(".get");
  let ubtn = document.querySelectorAll(".update");
  get[index].setAttribute("readonly","readonly");
  Alltasks[index].vlu = get[index].value;
 ubtn[index].innerText ="Eddit" ;
 ubtn[index].setAttribute("onclick",`edittask(${index})`);
 ubtn[index].classList.replace("update","eddit");
  showTasks();
};

let showTasks = ( ) =>{
  task.innerHTML = "";
  Alltasks.forEach((elemnt,index) => {
task.innerHTML += `
<div class="out">
                <input class="get" type="text" readonly value="${elemnt.vlu}">
                <div class="bott">
                    <button class="btn eddit" onclick="edittask(${index})">Eddit</button>
                    <button class="btn Remove" onclick="deletetask(${index})">Remove</button>
                </div>
            </div>
`
  });
};

btn1.addEventListener("click",render);
 

















