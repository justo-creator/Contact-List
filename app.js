document.addEventListener('DOMContentLoaded', ()=>{

  const InputName = document.getElementById('InputName')
  const InputPhone = document.getElementById('InputPhone')
  const InputGender = document.getElementById('InputGender')
  const ContactButton = document.getElementById('ContactButton')
  const ContactList = document.getElementById('ContactList')


  const addContact = ()=>{

   const textInput = InputName.value
   const textPhone = InputPhone.value
   const textGender = InputGender.value

   if (textInput == '' || textPhone == '' || textGender == '') {
     alert('empty field')
   } else {

    const CreateLi = document.createElement('li')
    const CreateSpan = document.createElement('span')

 

   const x = CreateSpan.textContent = ` ${textInput} - ${textPhone} - ${textGender}`
    CreateSpan.classList.add('text-input')

    // create edit button
    const editButton = document.createElement('button')
    editButton.textContent = 'Edit'
    editButton.classList.add('edit-button')
    editButton.onclick = () => editHandler(CreateSpan)

    // create delete button
    const deleteButton = document.createElement('button')
    deleteButton.textContent = 'Delete'
    deleteButton.classList.add('delete-button')
    deleteButton.onclick = () => deleteHandler(CreateLi)

    CreateLi.appendChild(CreateSpan)
    CreateLi.appendChild(editButton)
    CreateLi.appendChild(deleteButton)
    ContactList.appendChild(CreateLi)

    textInput.textContent = ''
    textPhone.textContent = ''
    
   }
  }

  // handler edit
  const editHandler = (CreateSpan)=>{
   const NewText = prompt('New Text: ', CreateSpan.textContent)
   if (NewText !== null && NewText.trim() !== '') {
    CreateSpan.textContent = NewText
   }
  }

  //handler delete

  const deleteHandler = (CreateLi) =>{
    ContactList.removeChild(CreateLi)
  }

  ContactButton.addEventListener('click', addContact)



})