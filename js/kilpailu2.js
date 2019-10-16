const aaneet = document.querySelector("#results");


//create element and render results
function renderResults(doc){

        let li = document.createElement("li");
        let videoNumero = document.createElement("span");
        let aaniMaara = document.createElement("span");
        li.setAttribute('data-id', "doc-id");
        videoNumero.textContent = doc.data().number + ". video ";
        console.log(doc.data().number);
        aaniMaara.textContent = " on saanut " + doc.data().voted + " ääniä";
        console.log(doc.data().voted);
        li.appendChild(videoNumero);
        li.appendChild(aaniMaara);
        aaneet.appendChild(li);

}
//getting data
//db.collection('votes').get().then((snapshot) => {
  //  snapshot.docs.forEach(doc => {
    //    renderResults(doc);
    //})
//})



//real time listener
db.collection('votes').onSnapshot(snapshot => {

    let changes = snapshot.docChanges();
    console.log(changes);
    changes.forEach(change =>{
        if (change.type == 'added'){
            renderResults(change.doc);
        }
        else if (change.type == 'modified'){

            renderResults(change.doc);

        }
    })

});

const nappi = document.getElementById("nappi");
nappi.addEventListener('click', aanestys);
const increment = firebase.firestore.FieldValue.increment(1);

function aanestys() {

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

}






