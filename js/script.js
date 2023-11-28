// console.info(document)
// console.dir(document)

// console.info(document.querySelector('.tabsLinks'))
// console.dir(document.querySelector('.tabsLinks'))

const hour = document.querySelector('.h'),
    sec = document.querySelector('.s'),
    min = document.querySelector('.m'),
    numberHour = document.querySelector('.hours'),
    numberMinutes = document.querySelector('.minutes')

// console.dir(numberHour)


// console.info(hour, sec, min)

function clock() {
    const time = new Date(),
        hours = time.getHours(),
        minutes = time.getMinutes(),
        seconds = time.getSeconds()

    // console.info(hours, minutes, seconds)
    // console.dir(hours, minutes, seconds)

    sec.style.transform = `rotate(${seconds * 6}deg)`
    min.style.transform = `rotate(${minutes * 6}deg)`
    hour.style.transform = `rotate(${hours * 30}deg)`


    numberHour.innerHTML = hours < 10 ? `0${hours}` : hours
    numberMinutes.innerHTML = minutes < 10 ? `0${minutes}` : minutes



    setTimeout(clock, 1000)
}

clock()

const tabsLink = document.querySelectorAll('.tabsItem'),
        tabsItem = document.querySelectorAll('.tabsContentItem')

// console.dir(tabsLink)

for(const key in tabsLink) {
    // console.dir(tabsLink[key])
    if(typeof tabsLink[key] === 'object')
        tabsLink[key].addEventListener('click', function() {
        // console.info('elementni bostim.', this.innerText)
            for(let i = 0; i < tabsLink.length; i++) {
                tabsLink[i].classList.remove('active')
                tabsItem[i].classList.remove('active')
            }

            addActive(this, tabsItem[key])

        })
}

function addActive(link, content) {
    link.classList.add('active')
    content.classList.add('active')
}


const start = document.querySelector('.stopwatch__btn'),
    tabsSpan = document.querySelector('.tabsLink__span'),
    stopSecond = document.querySelector('.stopwatch__seconds'),
    stopMinute = document.querySelector('.stopwatch__minutes'),
    stopHour = document.querySelector('.stopwatch__hours')
// console.log(start.innerHTML);
// console.log(start.innerText);

start.addEventListener('click', function() {

    if(start.innerHTML == 'start') {
        start.innerHTML = 'stop'
        tabsSpan.classList.add('active')
        let i = 0
        setTimeout(() => stopWatch(this, i),1000)
        // console.log(this, i);

    }else if(start.innerHTML == 'stop') {
        start.innerHTML = 'clear'
        tabsSpan.classList.remove('active')
        tabsSpan.classList.add('active_clear')

    }else if( start.innerHTML == 'clear') {
        start.innerHTML = 'start'
        tabsSpan.classList.remove('active_clear')
        stopSecond.innerHTML = 0
        stopMinute.innerHTML = 0
        stopHour.innerHTML = 0
    }

})


function stopWatch(el, i){
    if(el.innerHTML == 'stop') {
        if(i == 59) {
            i = 0
            stopSecond.innerHTML = i
            
            if(stopMinute.innerHTML == 59) {
                stopMinute.innerHTML = 0
                stopHour.innerHTML++
            }else {
                stopMinute.innerHTML++
            }
        }else {
            i++
            stopSecond.innerHTML++

        }
        setTimeout(() => stopWatch(el, i), 1000)
    }
}








