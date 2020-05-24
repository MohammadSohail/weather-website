
// fetch('http://puzzle.mead.io/puzzle').then((response) => {
//     response.json().then((data) => {
//         console.log(data);
        
//     })
// })

// fetch('http://localhost:3000/weather?address=boston').then((res) => {
//     res.json().then((data) => {
//         if(data.error){
//             console.log(data.error);
//         }
//         else{
//             console.log(data.location);
//             console.log(data.forecast);       
//         }
//     })
// })

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageone = document.querySelector('#message-1')
const messagetwo = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    const location = search.value

        messageone.textContent = 'Loading...'
        messagetwo.textContent = ''

        fetch('http://localhost:3000/weather?address=' + location).then((res) => {
        res.json().then((data) => {
            if(data.error){
                messageone.textContent = data.error
            }
            else{
                messageone.textContent = data.location
                messagetwo.textContent = data.forecast      
            }
        })
    })
    
})