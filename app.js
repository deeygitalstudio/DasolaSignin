const eyeIcon = document.getElementById('eye')
const input = document.getElementById('input')

eyeIcon.addEventListener('click', () => {
    if (input.type === 'password'){
        input.type = 'text';
        eyeIcon.classList.remove('fa-eye')
        eyeIcon.classList.add('fa-eye-slash')
    }else{
         input.type = 'password';
        eyeIcon.classList.remove('fa-eye-slash')
        eyeIcon.classList.add('fa-eye')
    }
})