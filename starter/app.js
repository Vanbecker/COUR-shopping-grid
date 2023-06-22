const containerRow = document.querySelector('.row')
const checks = document.querySelectorAll('.btn-check');

let data;
fetchData()

// checks.forEach((check) => {
//     check.addEventListener('change', onCheckChange)
// })

async function fetchData() {
    try {
        const response = await fetch(`https://fakestoreapi.com/products`)

        if (!response.ok) {
            throw new Error(`Erreur: ${response.status}`)
        }

        data = await response.json()
        console.log(data)
        displayData(data);
    }
    catch (error) {
        console.log(error);
    }

}

function displayData(arr) {

    arr.forEach((el) => {
        const item = document.createElement('div')
        item.className = "col-md-4";
        buildStars(el.rating.rate)
        let rateStar = `<i class="fa-solid fa star"></i><i class="fa-solid fa-star"></i>`
        item.innerHTML = `<div class="row">
        <div class="col-4">
            <div class="card p-3 m-1">
                <div class="d-flex flex-row mb-3"><img src="${el.image}" width="70">
                    <div class="d-flex flex-column ml-2"><span>${el.title}</span><span class="text-black-50">${el.category}</span><span class="ratings"><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i><i class="fa fa-star"></i></span></div>
                </div>
                <h6>${el.description}</h6>
                <div class="d-flex justify-content-between install mt-3">${el.price}</span><span class="text-primary">View&nbsp;<i class="fa fa-angle-right"></i></span></div>
            </div>
        </div>`
        containerRow.appendChild(item)
    });
}

function buildStars(rate) {
    let = ''
    for (let i = 0; i < 5 - Math.round(rate); i++) {
        result += '<i class="fa-solid fa-star"></i>'

    }

    for (let i = 0; i < 5 - Math.round(rate); i++) {
        result += '<i class="fa-solid fa-star"></i>'
        return result
    }
//INDEX//

// element.innerHTML
// La propriété Element.innerHTML de Element récupère ou définit la syntaxe HTML décrivant les descendants de l'élément.


// document.createElement
// Dans un document HTML, la méthode document.createElement() crée un élément HTML du type spécifié par tagName ou un HTMLUnknownElement si tagName n’est pas reconnu.

// Array.prototype.includes()
// La méthode includes() permet de déterminer si un tableau contient une valeur et renvoie true si c'est le cas, false sinon. */

