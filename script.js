document.getElementById('fahrenheit').addEventListener('click', function(){
    const celc = parseFloat(document.getElementById('celcious').value);
    const showingCelcious = document.getElementById('show-celcious');
    const showingFarhenheit = document.getElementById('show-fahrenheit');
    const showingCalvin = document.getElementById('show-calvin');
    if(celc >= -273){
        showingCelcious.innerText = celc;
        let far = ((celc*9)/5)+32;
        showingFarhenheit.innerText = far;
        let calv = (celc+273);
        showingCalvin.innerText = calv;
    }
    else{
        showingCelcious.innerText = 'Dont Exist'
    }
})