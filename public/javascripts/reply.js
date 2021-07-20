window.addEventListener("load", (event)=>{
  
  const reply = document.getElementById('reply')
    reply.addEventListener('click', () => {
      console.log('YOU CLICKED ME!!!!')
     document.getElementById('replyInputField').removeAttribute('hidden')

  })

})
