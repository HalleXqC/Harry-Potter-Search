const container = document.querySelector('.data-container');
let nameInput = document.querySelector('.nameInput');
let facultyInput = document.querySelector('.facultyInput');


window.addEventListener('load', e => {
    const base = JSON.parse(localStorage.getItem('base'))

    showCards(base)
})


function showCards(arr){
    const cards = arr.map(({name, species, gender, faculty, actor, image, id, info}) => {
        return `
            <div class="col-lg-3 col-md-4 col-sm-6 col-xs-12 mb-4 item card_item" data-id="${id}">
                <div class="card-header">
                    <h5 class="card-title text-center">${name}</h5>
                </div>
                <div class="card-body">
                    <div class="card-body-front">
                        <div class="card-image" style="background: url('${image}') top / cover no-repeat"></div>
                        <div class="card_body_list">
                            <ul>
                                <li>Species: ${species}</li>
                                <li>Gender: ${gender}</li>
                                <li>Faculty: ${faculty}</li>
                                <li>Actor: ${actor}</li>
                            </ul>
                        </div>
                    </div>
                    <div class="card-body-back">
                        <h6>${info}</h6>
                        <div class="bottom_block">
                            <a href="https://en.wikipedia.org/wiki/${actor}" target="_blank">About Actor</a>
                            <button class="deleteCharacter btn btn-outline-danger" onclick="deleteCharacter(${id})">Delete</button>
                            <button class="editCharacter btn btn-outline-success" onclick="editCharacter(${id})">Edit</button>
                        </div>
                    </div>
                </div> 
            </div>
        `
    }).join('');

    container.innerHTML = cards
}


// const editName = document.querySelector('.editName')
// const editSpecies = document.querySelector('.editSpecies')
// const editGender = document.querySelector('.editGender')
// const editFaculty = document.querySelector('.editFaculty')
// const editActor = document.querySelector('.editActor')
// const editImage = document.querySelector('.editImage')
// const editArr = [editName, editSpecies, editGender, editFaculty, editActor, editImage]

// function edit(id){
//     const base = JSON.parse(localStorage.getItem('base'));
//     const newBase = base.map(item => {
//         if(item.id == id){
//             return {
//                 ...item,
//                 name: editName,
//                 species: editSpecies,
//                 gender: editGender,
//                 faculty: editFaculty,
//                 actor: editActor,
//                 image: editImage
//             }
//         }else{
//             return item
//         }
//     })
    
//     localStorage.setItem('base', JSON.stringify(newBase))
// }


window.addEventListener('load',() => {
    const isAuth = localStorage.getItem('isAuth');
    if(isAuth == 'false'){
        window.open('auth.html', '_self');
    }else{
        null
    }
})

const signOutBtn = document.querySelector('.signOutBtn');

signOutBtn.addEventListener('click', e => {
    e.preventDefault();
    
    localStorage.setItem('isAuth', 'false');
    window.location.reload();
})

const mainBlock = document.querySelector('.main_block')

function createCharacter(){
    mainBlock.classList.remove('disactiveMainBlock')
    mainBlock.classList.toggle('activeMainBlock')
}

function closeCreate(){
    mainBlock.classList.add('disactiveMainBlock')
    mainBlock.classList.remove('activeMainBlock')
}

function createCharacterBtn(){
    const newName = document.querySelector('.newName');
    const newSpecies = document.querySelector('.newSpecies');
    const newGender = document.querySelector('.newGender');
    const newFaculty = document.querySelector('.newFaculty');
    const newActor = document.querySelector('.newActor');
    const newImage = document.querySelector('.newImage');
    const newInfo = document.querySelector('.newInfo')

    const base = JSON.parse(localStorage.getItem('base'));
    let tempId = base.length

    const newCharacter = {
        name: newName.value,
        species: newSpecies.value,
        gender: newGender.value,
        faculty: newFaculty.value,
        actor: newActor.value,
        image: newImage.value,
        info: newInfo.value,
        isFav: false,
        id: tempId
    }
    localStorage.setItem('base', JSON.stringify([
        ...base,
        newCharacter
    ])) 
}

function deleteCharacter(id){
    const confirmDelete = confirm('Are u sure about that?');
    if(!confirmDelete) return;

    const base = JSON.parse(localStorage.getItem('base'));
    const newBase = base.filter(item => item.id != id)

    localStorage.setItem('base', JSON.stringify(newBase))
    window.location.reload()
}


// Edit

const editBlock = document.querySelector('.edit_block')

function editCharacter(id){
    editBlock.classList.remove('disactiveEditBlock')
    editBlock.classList.toggle('activeEditBlock')
    let tempId = id;
    return tempId;
}

function closeEdit(){
    editBlock.classList.add('disactiveEditBlock')
    editBlock.classList.remove('activeEditBlock')
}

// function editCharacterBtn(id){
//     const editName = document.querySelector('.editedName');
//     const editSpecies = document.querySelector('.editedSpecies');
//     const editGender = document.querySelector('.editedGender');
//     const editFaculty = document.querySelector('.editedFaculty');
//     const editActor = document.querySelector('.editedActor');
//     const editImage = document.querySelector('.editedImage');
//     const editInfo = document.querySelector('.editedInfo')

//     const base = JSON.parse(localStorage.getItem('base'));
//     let tempId = id

//     const newBase = base.map(item => {
//         if(tempId == id){

//         }
//     })

//     const editedCharacter = {
//         name: editName.value,
//         species: editSpecies.value,
//         gender: editGender.value,
//         faculty: editFaculty.value,
//         actor:  editActor.value,
//         image: editImage.value,
//         info: editInfo.value,
//         isFav: false,
//         id: tempId
//     }
// }