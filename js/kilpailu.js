const nappi = document.getElementById("nappi");
nappi.addEventListener('click', aanestys);
let aanetEka=0;
let aanetToka=0;
let aanetKolmas=0;

function aanestys() {
console.log("funktio");


        if (document.getElementById("eka").checked==true) {
            aanetEka++;

        } else if (document.getElementById("toka").checked==true) {
            aanetToka++;

        } else if (document.getElementById("kolmas").checked==true) {
            aanetKolmas++;

        }
    refreshResults();
    console.log(aanetEka, aanetToka, aanetKolmas);
}
function refreshResults () {
    var results = document.getElementById('results');
    results.innerHTML = 'total: ' + (aanetKolmas + aanetToka + aanetEka);
    results.innerHTML += '<br />eka: ' + aanetEka;
    results.innerHTML += '<br />toka: ' + aanetToka;
    results.innerHTML += '<br />kolmas: ' + aanetKolmas;
}

