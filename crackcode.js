//game work on 2 digit,3 digit or n
//digit of number
const digit = 100;

//set random numbers. the task of user
// is to find these numbers.
let num1 = Math.floor(Math.random() * digit);
let num2 = Math.floor(Math.random() * digit);
let num3 = Math.floor(Math.random() * digit);

//Hints are generated here onwards.

//hint 1
let h1_a = Math.floor(Math.random() * digit);
let h1_b = Math.floor(Math.random() * digit);
let h1_c = num3;

//hint2
let h2_a = Math.floor(Math.random() * digit);
let h2_b = Math.floor(Math.random() * digit);
let h2_c = num2;

//hint3
let h3_a = num2;
let h3_b = num1;
let h3_c = Math.floor(Math.random() * digit);

//hint4
let h4_a = Math.floor(Math.random() * digit);
let h4_b = Math.floor(Math.random() * digit);
let h4_c = Math.floor(Math.random() * digit);

//hint5
let h5_a = Math.floor(Math.random() * digit);
let h5_b = Math.floor(Math.random() * digit);
let h5_c = num1;

//hint generation ends

//puting hints to crackcode.html page
document.getElementById('h1').innerHTML = `<input type="text" value="${h1_a}" readonly> <input type="text" value="${h1_b}" readonly> <input type="text" value="${h1_c}" readonly>`;
document.getElementById('h2').innerHTML = `<input type="text" value="${h2_a}" readonly> <input type="text" value="${h2_b}" readonly> <input type="text" value="${h2_c}" readonly>`;
document.getElementById('h3').innerHTML = `<input type="text" value="${h3_a}" readonly> <input type="text" value="${h3_b}" readonly> <input type="text" value="${h3_c}" readonly>`;
document.getElementById('h4').innerHTML = `<input type="text" value="${h4_a}" readonly> <input type="text" value="${h4_b}" readonly> <input type="text" value="${h4_c}" readonly>`;
document.getElementById('h5').innerHTML = `<input type="text" value="${h5_a}" readonly> <input type="text" value="${h5_b}" readonly> <input type="text" value="${h5_c}" readonly>`;

//function to check whether game is solved or not
function myfunc() {

    //getting value of user though input feilds.
    let a = document.getElementById('b1').value;
    let b = document.getElementById('b2').value;
    let c = document.getElementById('b3').value;

    //cheking weather input feilds are blank or not
    if (a != '' && b != '' && c != '') {
        if (a == num1 && b == num2 && c == num3) {

            //outputting this message to crackcode.html
            //page with id result
            $('#result').html('You Crack it &#128525;');

            //opening popup modal
            $('#popup').modal('toggle');
        } else {
            //outputing this message to crackcode.html
            //page with id result.
            $('#result').html('Try Again &#129300;');

            //opening popup modal
            $('#popup').modal('toggle')
        }
    }
    else {

        //outputing this message to crackcode.html
        //page with id result
        $('#result').html('Fill all fields &#128580');

        //opening popup modal
        $('#popup').modal('toggle');
    }
}

 // JavaScript for displaying popup on hint hover
 $(document).ready(function () {
    $('.hint-card').hover(function () {
        var hintTitle = $(this).find('.card-title').text();
        var hintBody = $(this).find('.card-body').text();
        $('#popup .modal-title').text(hintTitle);
        $('#popup .modal-body h3').text(hintBody);
        $('#popup').modal('show');
    });
});
