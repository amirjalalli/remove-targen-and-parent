let titleElem  = document.querySelector('.title')
let btnElem  = document.querySelector('.btn')

// btnElem.addEventListener('click',function(){
//     // console.log('click')
//     titleElem.remove()
// })
let listItem = document.querySelectorAll('.items')

listItem.forEach(function(li){
    li.addEventListener('click', function(event){
        // event.target.remove()
        event.target.parentElement.remove()
    })
})