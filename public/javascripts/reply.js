window.addEventListener("load", (event)=>{
  // let visibility = false
  const reply = document.getElementById('reply')
    reply.addEventListener('click', () => {
      document.getElementById('replyInputBox').setAttribute('visibility', 'visible')
      // if (visibility === false){
      //   visibility= true
      // }else{
      //   visibility=false
      // }
  })

})
