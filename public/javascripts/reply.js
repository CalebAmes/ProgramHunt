window.addEventListener("load", (event)=>{
  let visibility = false
  const reply = document.getElementById('reply')
    reply.addEventListener('click', () => {
      if (visibility === false){
        visibility= true
      }else{
        visibility=false
      }
  })

})
