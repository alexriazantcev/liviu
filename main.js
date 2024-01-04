import {pdfjsLib} from "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/4.0.189/pdf.mjs";

console.log("begin");

var myState = {
        pdf: null,
        currentPage: 1,
        zoom: 1
}
 


pdfjsLib.getDocument('./my_document.pdf').then((pdf) => {
 
    // more code here
 
});




console.log("end");