const container = document.querySelector('.data-container');
let nameInput = document.querySelector('.nameInput');
let facultyInput = document.querySelector('.facultyInput');


window.addEventListener('load', () => {
    const favBase = JSON.parse(localStorage.getItem('favBase'))
    // container.innerHTML = showCards(favBase)
    showCards(favBase)
})


function showCards(arr){
    let cards = arr.map(({name, species, gender, faculty, actor, image, id}) => {
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
                        <h6>Информация Info Информация Info Информация Info Информация Info Информация Info Информация Info Информация Info Информация Info Информация Info Информация Info Информация Info Информация Info Информация Info Информация Info</h6>
                        <div class="bottom_block"><a href="https://en.wikipedia.org/wiki/${actor}" target="_blank">About Actor</a></div>
                    </div>
                </div> 
            </div>
        `
    }).join('');

    container.innerHTML = cards
}