let container = document.getElementById('container')
let subdiv = document.createElement('div')

let input_value = document.getElementById('input')
let submit_btn = document.getElementById('btn')
            submit_btn.addEventListener('click',addli)


let clear = document.createElement('p')




    

     function addli(){    

    
        
    let ul = document.createElement('ul')
    let del_btn = document.createElement('button')
    let span_goup = document.createElement('span')
        del_btn.innerText = 'X'
    let li = document.createElement('li')
        li.innerText = (input_value.value)
    let edit_btn = document.createElement('button')
         edit_btn.innerText='+'
   
     
        if(input_value.value==""){
            alert('invalid input')
        }else{
            container.append(subdiv)
            subdiv.append(ul)
           ul.append(li)
           ul.append(span_goup)
           span_goup.append(edit_btn)
           span_goup.append(del_btn)
           input_value.value=""
        }

        del_btn.addEventListener('click',del_li)
        function del_li(){
            li.parentElement.remove()
        }
       
       
        edit_btn.addEventListener('click',function(){edit(edit_btn)})

        function edit(ebtn){

                  let value = ebtn.parentElement.parentElement.firstChild.innerText
                       input_value.value = value

                   
                
               input_value.addEventListener('keypress',function(e){if(e.key=='Enter'){change(ebtn)}})
                 
               function change(ebtn){
                   
                   
                    ebtn.parentElement.parentElement.firstChild.innerText = input_value.value
                    input_value.value = ''
                   
               }
                
        }
       
        
        subdiv.append(clear)
        clear.innerText  ='Clear all'
        
        clear.addEventListener('click',clr_all)

        function clr_all(){
            li.parentElement.remove()
            clear.parentElement.remove()
        }
        
    }

    