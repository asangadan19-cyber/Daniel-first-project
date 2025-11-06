// document.createElement("h1").innerHTML = "Daniel for Class Rep";
// document.getElementById("mark").appendChild(document.createElement("h1")).innerHTML = "Mark for Class Rep";
// document.getElementById("mark").innerHTML = "MARK"
// const sectionItem = document.getElementById('mark')

// document.getElementById('clickup').addEventListener('click', ()=>{
//     const sectionItem = document.getElementById('mark')
//     sectionItem.style.backgroundColor = 'lightblue'
// })

document.getElementById('presidentBtn').addEventListener('click', (e)=>{
    e.preventDefault()
    document.getElementById('fullName')
    document.getElementById('email')
  const President=  document.querySelectorAll('input[name="candidate"]:checked')

  President.forEach((option) => {
    console.log(option.value)
if (option) {
    alert(`You have voted for ${option.value}`)
    
    let votingForm = document.getElementById('Votingform')
    console.log(votingForm)
    let vote = document.createElement ('div') 
 vote = document.getElementById('fullName').value 
    votingForm.innerHTML = `<div>Thanks ${vote}</div> `
  
//     votingForm.appendChild(vote)
//     let vote1 = document.createElement ('div') 
//     vote1 = document.getElementById('email').value
//      votingForm.appendChild(vote1)
// 

}


  } )
let arrayname = ["New form", "New form email", "New form vote"]
arrayname.forEach((item) => {
    console.log(item)
})


console.log(President)
President.for
}
)