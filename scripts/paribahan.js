function buyTickets(){
    hideElementById('header');
    hideElementById('best-offer')
    showElementById('ph-paribahan');
}


function handleClickButton(event){
    const click = event.srcElement;
    console.log('Click', click);
    click.classList.add('bg-[#1DD100]');

    if(click === click) {
        const totalSeat = document.getElementById('total-seat');
        const allSeat = totalSeat.innerText;
        const seat = parseInt(allSeat);

        const fakaSeat = seat - 1;
        setTextElementValueById('total-seat', fakaSeat);

        if(fakaSeat <40) {
            const total = document.getElementById('tk');
            const totalTk = total.innerText;
            const allTk = parseInt(totalTk);
            
            const fillUp = 40 - fakaSeat;
            const totalPrice = allTk * fillUp;
            setTextElementValueById('tk', totalPrice);
        }
    }
     
    
}

document.addEventListener('click', handleClickButton);