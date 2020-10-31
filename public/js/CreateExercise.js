const select = document.querySelector('#ptop');
const form = document.querySelector('#form');
form.addEventListener('submit', (e) => {
    e.preventDefault()
    console.log(select.value);
    if(select.value === 'Public'){
        window.open('public.html', '_self')
    }else if(select.value === 'private'){
        window.open('private.html', '_self')
    }else {
        console.log('es no bueno');
    }
})