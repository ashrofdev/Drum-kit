window.addEventListener('keypress', (e)=>{
    document.querySelector('audio').src = `sounds/${e.key}.wav`
    const letters = document.querySelectorAll('.letter')
    letters.forEach((l)=>{
        document.querySelector(`.${e.key}`).style = 'border: .6rem solid orange; transform: scale(1.2);'
        setTimeout(()=>{
            document.querySelector(`.${e.key}`).style = 'border: .6rem solid black;'
        }, 100)
    })
})

