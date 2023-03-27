let buttonAdd = document.querySelector('.content-add button')    
let inputElements = document.querySelector('.content-add input')

const conteiner_result = document.querySelector('.conteiner-result')

const validateInput = ()=>{
   return inputElements.value.trim().length > 0
}


const addTaskButton = function () {
   const inputIsValid = validateInput()
   if (!inputIsValid) {
      
      return inputElements.classList.add('error')
   }
   
   const content_result = document.createElement('div')
   content_result.classList.add('content_result')

   const content_task = document.createElement('p')
   content_task.classList.add('name_task')
   content_task.innerText= inputElements.value
   
   const delete_icon = document.createElement('i')
   delete_icon.classList.add('far')
   delete_icon.classList.add('fa-trash-alt')
   
   content_task.addEventListener('click',()=> handleTaskComplete(content_task))
      
   delete_icon.addEventListener('click', ()=> taskDelete(content_result,content_task))
   
   content_result.appendChild(content_task)
   
   content_result.appendChild(delete_icon)
   
   conteiner_result.appendChild(content_result)

   inputElements.value=""
  
}

const removeTask= function () {
   const inputIsValid =validateInput()
   if(inputIsValid){
    return inputElements.classList.remove('error')
   }
}

const handleTaskComplete = (content_task) => {
   const tasks = conteiner_result.childNodes;
   for(const task of tasks ){
      if (task.firstChild===content_task) {
         task.firstChild.classList.toggle("completed")
         
      }
   }
}


const taskDelete=(content_result, content_task)=>{
   const tasks = conteiner_result.childNodes
   for(const task of tasks){
      if (task.firstChild === content_task) {
         content_result.remove()

      }
   }
   
}

buttonAdd.addEventListener('click', () =>{
   addTaskButton()
   
   
})
inputElements.addEventListener('change',() => {
   removeTask()
})