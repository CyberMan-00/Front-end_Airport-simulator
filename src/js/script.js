/* DATE */
const time = setInterval(function () {
    const date = new Date();
    document.getElementById("time").innerHTML = ('UTC: ' + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
}, 1000);

/* TABS */
const tabsParent = document.querySelector('.main__tabs__wrapper')
const tabs = document.querySelectorAll('.main__tabs__item')
const tabsContent = document.querySelectorAll('.tab-content')

console.log(tabsParent)
console.log(tabsContent)
console.log(tabs)

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


