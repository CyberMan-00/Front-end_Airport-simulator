/* DATE */
const time = setInterval(function() {
    const date = new Date();
    document.getElementById("time").innerHTML = ('UTC: ' + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
}, 1000);

/* TABS */
const tabsParent = document.querySelector('.main__content__tabs__wrapper')
const tabsContent = document.querySelectorAll('.tabs__content__item')
const tabs = document.querySelectorAll('.main__content__tabs__wrapper__item')

function hideTabsContent() {
    tabsContent.forEach((item)=>{
        item.style.cssText = 'display: none';
    })

    tabs.forEach((item) => {
        item.classList.remove('item_clicked')
    })
}

function showTabContent(i=0) {
    tabsContent[i].style.cssText = 'display: block';
    tabs[i].classList.add('item_clicked')
}

hideTabsContent();
showTabContent();

tabsParent.addEventListener('click', (e)=>{
    if (e.target&&e.target.matches('div.main__content__tabs__wrapper__item')){
        tabs.forEach((item, i)=>{
            if (e.target == item) {
                hideTabsContent();
                showTabContent(i);
            }
        })
    }
})







































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


