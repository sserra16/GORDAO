const sr = ScrollReveal({
    origin: 'right',
    distance: '60px',
    duration: 1400,
    delay: 400
})

sr.reveal('.home-text h1, p')
sr.reveal('.home-text a', { delay: 550 })

sr.reveal('div.main img', { delay: 500 })

sr.reveal('div.top', { origin: 'top', duration: 900 })
sr.reveal('div.bottom', { duration: 900, origin: 'top', delay: 500 })

sr.reveal('.text-long', { origin: 'left',delay: 100, duration: 700 })
sr.reveal('.text-long p', { origin: 'left', duration: 700 })
sr.reveal('main img', { origin: 'left', delay: 200, duration: 700 })
