
// initialise variables
/* 

// ceci est la methode simplifier 

let form = document.getElementById('form') */

/* if (localStorage.getItem('username') && localStorage.getItem('email') && localStorage.getItem('profession') && localStorage.getItem('number') && localStorage.getItem('location')) {

  document.getElementById('username').value = localStorage.getItem('username')
  document.getElementById('email').value = localStorage.getItem('email')
  document.getElementById('profession').value = localStorage.getItem('profession')
  document.getElementById('number').value = localStorage.getItem('number')
  document.getElementById('location').value = localStorage.getItem('location')
}
 */

if (localStorage.getItem('user')) {
  // parse to JSON Object

  let obj = JSON.parse(localStorage.getItem('user'))

  document.getElementById('username').value = obj.username
  document.getElementById('email').value = obj.email
  document.getElementById('profession').value = obj.profession
  document.getElementById('number').value = obj.number
  document.getElementById('location').value = obj.location
}





// ici notre code js permet d'ajouter les informations dans notre localstorage

document.getElementById('card').addEventListener('click', (e) => {
  e.preventDefault()
  let username = document.getElementById('username').value
  let email = document.getElementById('email').value
  let profession = document.getElementById('profession').value
  let number = document.getElementById('number').value
  let location = document.getElementById('location').value




  // ici on cree notre objet

  let user = {
    username: username,
    email: email,
    profession: profession,
    number: number,
    location: location
  }

  //localstorage

  localStorage.setItem('user', JSON.stringify(user))

  console.log(JSON.stringify(user));



  // ceci est la methode simplifier 


  /*  localStorage.setItem('username', username)
   localStorage.setItem('email', email)
   localStorage.setItem('profession', profession)
   localStorage.setItem('number', number)
   localStorage.setItem('location', location) */

  // alert("Your Information it save at localstorage")


})


// ici nous avons notre code js  qui permet de supprimer les informations dans notre localstorage
document.getElementById('clear').addEventListener('click', () => {
  localStorage.clear()



  // ceci est la methode simplifier 

  /* localStorage.removeItem('username')
  localStorage.removeItem('email')
  localStorage.removeItem('profession')
  localStorage.removeItem('number')
  localStorage.removeItem('location') */
})










