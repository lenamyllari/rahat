document.getElementById("hakunappi").addEventListener("click", haku); //Annetaan id-napille,
const xhr = new XMLHttpRequest(); //Tehdään apille kutsu
const xhr2 = new XMLHttpRequest();
let valuutta2;
let maara;
let kurssi;
let index;
let kaupunki;
let lampotila;
let kaupunki2;

function haku() {
  const sound = document.getElementById("sound");
  sound.play();
  maara = document.getElementById("maara").value;
  let index = document.getElementById("valuutta").selectedIndex;

  if(index==0){
    valuutta2 = 'USD';
    kaupunki = 'washington';
    kaupunki2 = 'Washingtonissa';
  }
  else if(index==1){
    valuutta2 = 'GBP';
    kaupunki = 'london';
    kaupunki2 = 'Lontoossa';
  }
  else if(index==2){
    valuutta2 = 'AUD';
    kaupunki = 'canberra';
    kaupunki2 = 'Canberrassa';
  }
  else if(index==3){
    valuutta2 = 'CAD';
    kaupunki = 'ottawa';
    kaupunki2 = 'Ottawassa';
  }
  else if(index==4){
    valuutta2 = 'PLN';
    kaupuki = 'warswav'
    kaupunki2 = 'Varsovassa';
  }
  else if(index==5){
    valuutta2 = 'MXN';
    kaupunki = 'mexico,mx'
    kaupunki2 = 'Meksiko Cityssä';
  }
  xhr.open('get', 'http://data.fixer.io/api/latest?access_key=635be098c3ffaf5a4c5581b5578b4068&base=EUR&symbols=' + valuutta2, true); //Kerrotaan XmlHttpRequest-oliollo metorid ja pyyntö, johon ne lähetetään
  xhr2.open('get', 'https://api.openweathermap.org/data/2.5/weather?q=' +kaupunki+ '&appid=bcf3d723e250c7cb9243036f6b5bffe1&units=metric', true);
  xhr.onreadystatechange = naytatiedot; //Kutsutaan funktio naytatiedot
  xhr2.onreadystatechange = naytasaatiedot;

  xhr.send(null); //Lähetetään pyyntö
  xhr2.send(null);
}

function naytatiedot() {
  if (xhr.readyState === 4 && xhr.status === 200) { //Jos lataus on valmis ja osoite löytyi
    const data = JSON.parse(xhr.responseText); //Säilytetään saadut tiedot  let index = document.getElementById("valuutta").selectedIndex;
    console.log(data);
    index = document.getElementById('valuutta').selectedIndex;
    if(index==0){
      kurssi=data.rates.USD;

    }
    else if(index==1){
      kurssi=data.rates.GBP;

    }
    else if(index==2){
      kurssi=data.rates.AUD;

    }
    else if(index==3){
      kurssi=data.rates.CAD;

    }
    else if(index==4){
      kurssi=data.rates.PLN;

    }
    else if(index==5){
      kurssi=data.rates.MXN;

    }


    const tulos = maara * kurssi;

    document.getElementById("tulos").innerText = maara + ' euroa on ' +
        tulos.toFixed(2) + valuutta2;
  }
}

    function naytasaatiedot() {
      if (xhr2.readyState === 4 && xhr2.status === 200) { //Jos lataus on valmis ja osoite löytyi
        const data2 = JSON.parse(xhr2.responseText);

        console.log(data2);

        lampotila = data2.main.temp;


        document.getElementById("lampotila").innerText = kaupunki2+ ' on nyt ' +lampotila+ ' astetta lämmintä.';
      }

  }



