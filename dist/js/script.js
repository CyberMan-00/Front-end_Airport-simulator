/* DATE */
const time = setInterval(function () {
    let date = new Date();

    date.setHours(date.getHours() - 6)

    document.getElementById("time").innerHTML = ('UTC: ' + getZero(date.getHours()) + ":" + getZero(date.getMinutes()) + ":" + getZero(date.getSeconds()));
}, 1000);


function getZero(num) {
    if (num >= 0 && num < 10) {
        return `0${num}`
    } else {
        return num
    }
}

/* TABS */
const tabsParent = document.querySelector('.main__tabs__wrapper')
const tabs = document.querySelectorAll('.main__tabs__item')
const tabsContent = document.querySelectorAll('.tab-content')

function hideTabsContent() {
    tabsContent.forEach((item) => {
        item.style.cssText = 'display: none;';
    })

    tabs.forEach((item) => {
        item.classList.remove('main__tabs__item_active');
    })
}

function showTabContent(i = 0) {
    tabsContent[i].style.cssText = 'display: flex;';
    tabs[i].classList.add('main__tabs__item_active');
}

hideTabsContent();
showTabContent();

tabsParent.addEventListener('click', (e) => {
    if (e.target && e.target.matches('div.main__tabs__item')) {
        tabs.forEach((item, i) => {
            if (e.target == item) {
                hideTabsContent();
                showTabContent(i);
            }
        })
    }
});

const startSimulationBTN = document.querySelector('.tab-content__button'),
    modalOvelay = document.querySelector('.overlay'),
    modalWindow = document.querySelector('.modal'),
    modalClose = document.querySelector('.modal__cross'),
    cities = document.querySelectorAll('[data-simulation]'),
    gifs = document.querySelectorAll('[data-simpic]'),
    modalText = document.querySelector('.modal__text')

startSimulationBTN.addEventListener('click', () => {
    openModal()
    activeGifs = []

    cities.forEach((item, i) => {
        if (item.checked == true) {
            gifs[i].style.display = 'block'
        }

        console.log(item.checked, i)
        activeGifs.push(item.checked)
    })

    const sum = activeGifs.reduce((partialSum, a) => partialSum + a, 0);
    console.log(sum);

    if (sum > 1) {
        gifs.forEach(item => {
            item.style.display = 'none'
        });

        modalText.innerHTML = 'Вы не можете выбрать более одного городского аэропорта. Для начала моделирования выберите только один.'
    };

    if (sum < 1) {
        modalText.innerHTML = 'Для начала моделирования выберите аэропорт города.'
    }
})

modalClose.addEventListener('click', () => {
    closeModal()
})

window.addEventListener('click', (e) => {
    if (e.target == modalOvelay) {
        closeModal()
    }
});

function openModal() {
    modalOvelay.style.display = 'block'
    modalWindow.classList.add('modal__active')
    // modal scroll lock
    // document.body.style.overflow = 'hidden'
}

function closeModal() {
    modalOvelay.style.display = 'none'
    gifs.forEach((item, i) => {
        item.style.display = 'none'
    })

    modalWindow.classList.remove('modal__active')
    modalText.innerHTML = ''
    // modal scroll unlock
    // document.body.style.overflow = ''
}

/* ANIMATION */

// const btnToStart = document.querySelector('.simulation__button');
// const checkboxAirport = document.querySelectorAll('.checkbox-round__airport');
// const checkboxMap = document.querySelectorAll('.checkbox-round__map');

// function startSimulation() {
//     btnToStart.addEventListener('click', () => {
//         checkboxAirport.forEach((i) => {
//             if (i.checked) {
//                 return console.log(i);
//             }
//         })
//         checkboxMap.forEach((i) => {
//             if (i.checked) {
//                 return console.log(i)
//             }
//         })
//     })
// }

// startSimulation()




































// const animation = document.getElementById('animation');
// const atclinks = document.getElementById('atclinks');
// const flightplan = document.getElementById('flightplan');
// const metar = document.getElementById('metar');
// if (e.target.id === '1'){
//     animation.classList.remove('disabled');
//     atclinks.classList.add('disabled');
//     flightplan.classList.add('disabled');
//     metar.classList.add('disabled');
// }else if (e.target.id === '2'){
//     atclinks.classList.remove('disabled');
//     animation.classList.add('disabled');
//     flightplan.classList.add('disabled');
//     metar.classList.add('disabled');
// }else if (e.target.id === '3'){
//     flightplan.classList.remove('disabled');
//     animation.classList.add('disabled');
//     atclinks.classList.add('disabled');
//     metar.classList.add('disabled');
// }else if (e.target.id === '4'){
//     metar.classList.remove('disabled');
//     animation.classList.add('disabled');
//     atclinks.classList.add('disabled');
//     flightplan.classList.add('disabled');
// }


