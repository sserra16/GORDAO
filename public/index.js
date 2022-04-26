const sr = ScrollReveal({
    origin: 'right',
    distance: '60px',
    duration: 1400,
    delay: 400
})

sr.reveal('.home-text h1, p')
sr.reveal('.home-text a', { delay: 550 })

sr.reveal('div.main img', { delay: 500 })

sr.reveal('div.top', { origin: 'top' })
sr.reveal('div.bottom', { delay: 500, origin: 'top' })