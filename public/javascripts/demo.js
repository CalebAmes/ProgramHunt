window.addEventListener("load", (event)=>{
    console.log("hello from javascript!")

    const demo = document.getElementById('demo')
    demo.addEventListener('click', () => {
        const email = document.getElementById('email')
        const password = document.getElementById('password')
        email.value = 'demo@demo.com'
        password.value = 'Demo1!'
        document.getElementById('loginform').submit()
    })
})
