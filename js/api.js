document.getElementById("hakunappi").addEventListener("click", haku);
const xhr = new XMLHttpRequest();
let valuutta2;
let maara;
let kurssi;
let index;
function haku() {
    const sound = document.getElementById("sound");
    sound.play();
    maara = document.getElementById("maara").value;
    let index = document.getElementById("valuutta").selectedIndex;

    if(index==0){
        valuutta2 = 'USD';
    }
    else if(index==1){
        valuutta2 = 'GBP';
    }
    else if(index==2){
        valuutta2 = 'AUD';
    }
    else if(index==3){
        valuutta2 = 'CAD';
    }
    else if(index==4){
        valuutta2 = 'PLN';
    }
    else if(index==5){
        valuutta2 = 'MXN';
    }
    xhr.open('get', 'http://data.fixer.io/api/latest?access_key=635be098c3ffaf5a4c5581b5578b4068&base=EUR&symbols=' + valuutta2, true);
    xhr.onreadystatechange = naytatiedot;
    xhr.send(null);
}
function naytatiedot() {
    if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText);
        console.log(data);
        index = document.getElementById("valuutta").selectedIndex;
        if (index == 0) {
            kurssi = data.rates.USD;
        } else if (index == 1) {
            kurssi = data.rates.GBP;
        } else if (index == 2) {
            kurssi = data.rates.AUD;
        } else if (index == 3) {
            kurssi = data.rates.CAD;
        } else if (index == 4) {
            kurssi = data.rates.PLN;
        } else if (index == 5) {
            kurssi = data.rates.MXN;
        }

        const tulos = maara * kurssi;
        console.log(tulos);
        document.getElementById("tulos").innerText = maara + ' euroa on ' + tulos.toFixed(2) + valuutta2;
    }
}



