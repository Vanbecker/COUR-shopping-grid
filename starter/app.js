const containerRow = document.querySelector('.row')
const checks = document.querySelectorAll('.btn-check');

let data;
fetchData()

checks.forEach((check) => {
    check.addEventListener('change', onCheckChange)
})

async function fetchData() {
    try {
        const response = await fetch(`https://fakestoreapi.com/products`)

        if (!response.ok) {
            throw new Error(`Erreur: ${response.status}`)
        }

        data = await response.json()
        displayData(data);
    }
    catch (error) {
        console.log(error);
    }
}



