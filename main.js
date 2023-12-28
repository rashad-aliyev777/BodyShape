// overlay menyu
const overlayDivi = document.querySelector('.overlay_menyu')
const barsIconu = document.querySelector('.fa-bars')
const xmarkIconu = document.querySelector('.fa-xmark')

barsIconu.addEventListener('click',() => {
    overlayDivi.style.width = '100%'
    barsIconu.style.transform = scaleZ("180px");
})
xmarkIconu.addEventListener('click',() => {
    overlayDivi.style.width = '0'
})

// birinci sectionda h3 ve p teqleri elave edildi
const birinciSectionDivi = document.querySelector('.gym_bir_top')
const yaziElave = document.createElement('h3')
const pTeqiElave = document.createElement('p')

yaziElave.innerText = 'Transform Your Body'
pTeqiElave.innerText = 'We are dedicated to helping you transform your body and mind through the power of fitness.'

birinciSectionDivi.appendChild(yaziElave)
birinciSectionDivi.appendChild(pTeqiElave)

// birinci sectionda 2 button elave js vasitesi ile
const daxildeIkiButton = document.querySelector('.gym_bir_orta')
const birinciButton = document.createElement('button')
const ikinciButton = document.createElement('button')

birinciButton.classList.add('ikinci_button')
birinciButton.innerText = 'Get Started'
ikinciButton.classList.add('ayri_button')
ikinciButton.innerText = 'Watch Reviews'

daxildeIkiButton.appendChild(birinciButton)
daxildeIkiButton.appendChild(ikinciButton)

