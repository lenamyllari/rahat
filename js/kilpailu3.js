// Initialize Firebase
var config = {
    apiKey: "AIzaSyCHSmiMYbdE-ZGO1SpWT0HvoIHqJ5d7Nvw",
    authDomain: "videokilpailu.firebaseapp.com",
    databaseURL: "https://videokilpailu.firebaseio.com",
    projectId: "videokilpailu",
    storageBucket: "videokilpailu.appspot.com",
    messagingSenderId: "100593650954"
};
firebase.initializeApp(config);
const db = firebase.firestore();
const aaneet = document.querySelector("#results");

function naytaVideo(num){

    console.log(num);
    const klippi = document.getElementById("videoKlippi");
    klippi.className="visible";
    console.log("naytavideo");
    switch (num){
        case 1:
            console.log('1');
            klippi.innerHTML="<video  id='rahat' controls>\n" +
                "        <source src=\"../video/../video/anniMp4.mp4\" type=\"video/mp4\">\n" +
                "        <source src=\"../video/anniOgg.ogg\" type=\"video/ogg\">\n" +
                "</video>";
            break;
        case 2:
            klippi.innerHTML="<video id='rahat' controls>\n" +
                "        <source src=\"../video/../video/Rahat.mp4\" type=\"video/mp4\">\n" +
                "        <source src=\"../video/Rahat.ogg\" type=\"video/ogg\">\n" +
                "        <source src=\"../video/Rahat.webm\" type=\"video/webm\">\n" +
                "</video>";
            break;
        case 3:
            klippi.innerHTML="<video id='rahat' controls>\n" +
                "        <source src=\"../video/../video/juusoMp4.mp4\" type=\"video/mp4\">\n" +
                "        <source src=\"../video/juusoOgg.ogg\" type=\"video/ogg\">\n" +
                "</video>";
            break;
        default:
            klippi.innerHTML="<video id='rahat' controls>\n" +
                "        <source src=\"../video/../video/anniMp4.mp4\" type=\"video/mp4\">\n" +
                "        <source src=\"../video/anniOgg.ogg\" type=\"video/ogg\">\n" +
                "</video>";
    }
}


function naytaVideo(num){

    console.log(num);
    const klippi = document.getElementById("videoKlippi");
    klippi.className="visible";
    console.log("naytavideo");
    switch (num){
        case 1:
            console.log('1');
            klippi.innerHTML="<video  id='rahat' controls>\n" +
                "        <source src=\"../video/../video/anniMp4.mp4\" type=\"video/mp4\">\n" +
                "        <source src=\"../video/anniOgg.ogg\" type=\"video/ogg\">\n" +
                "</video>";
            break;
        case 2:
            klippi.innerHTML="<video id='rahat' controls>\n" +
                "        <source src=\"../video/../video/Rahat.mp4\" type=\"video/mp4\">\n" +
                "        <source src=\"../video/Rahat.ogg\" type=\"video/ogg\">\n" +
                "        <source src=\"../video/Rahat.webm\" type=\"video/webm\">\n" +
                "</video>";
            break;
        case 3:
            klippi.innerHTML="<video id='rahat' controls>\n" +
                "        <source src=\"../video/../video/juusoMp4.mp4\" type=\"video/mp4\">\n" +
                "        <source src=\"../video/juusoOgg.ogg\" type=\"video/ogg\">\n" +
                "</video>";
            break;
        default:
            klippi.innerHTML="<video id='rahat' controls>\n" +
                "        <source src=\"../video/../video/anniMp4.mp4\" type=\"video/mp4\">\n" +
                "        <source src=\"../video/anniOgg.ogg\" type=\"video/ogg\">\n" +
                "</video>";
    }
}

//create element and render results
function renderResults(doc){
    let li = document.createElement("li");
    let videoNumero = document.createElement("span");
    let aaniMaara = document.createElement("span");
    li.setAttribute('data-id', "doc-id");
    li.setAttribute("id", doc.data().number);
    videoNumero.textContent = doc.data().number + ". video ";
    aaniMaara.textContent = " on saanut " + doc.data().voted + " ääniä";
    li.appendChild(videoNumero);
    li.appendChild(aaniMaara);
    aaneet.appendChild(li);
}
/*
//getting data
db.collection('votes').get().then((snapshot) => {
    snapshot.docs.forEach(doc => {
        renderResults(doc);
    })
})

*/
//real time listener
db.collection('votes').onSnapshot(snapshot => {
    let changes = snapshot.docChanges();
    changes.forEach(change =>{
        if (change.type == 'added'){
            renderResults(change.doc);
        }
        else if (change.type == 'modified'){
            let ind = change.doc.data().number;
            let remove_li = document.getElementById(ind);
            aaneet.removeChild(remove_li);
            renderResults(change.doc);
        }
    })
});

const nappi = document.getElementById("nappi");
nappi.addEventListener('click', aanestys);
const increment = firebase.firestore.FieldValue.increment(1);

function aanestys() {
    aaneet.className="visible";
    if (document.getElementById("eka").checked==true) {
        db.collection('votes').doc('video1').update({
            voted: increment
        });
    } else if (document.getElementById("toka").checked==true) {
        db.collection('votes').doc('video2').update({
            voted: increment
        })
    } else if (document.getElementById("kolmas").checked==true) {
        db.collection('votes').doc('video3').update({
            voted: increment
        })
    }
    alert("Valitettavasti tällä kertaa arvonta ei osunut sinulle");

}
