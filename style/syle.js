alert

var firstName = ["Felicien", "Belyse", "Blaise", "Bertrand", "Faustine", "Neilla", "Lyanna", "Joanna", "Yves", "Kiara", "Kiany",
    "Cynthia", "Emilienne", "Boston", "Leilla", "Christopher", "Cleniella", "Vestine", "Justin", "Moghan", "Christella"];

var lastName = ["Irakoze", "Mugisha", "Irumva", "Intsinzi", "Irambona", "Akarabo", "Akumugisha", "Goswami", "Munezero", "Nahayo", "Iranyibutse",
    "Kapur", "Ininahazwe", "Nsabiyeze", "Mugisha", "Gikundiro", "Ishimwe", "Iratabara", "Shurweryiza", "Ajeneza", "Arakaza",];

function getName() {
    var randomName = firstName[Math.floor(Math.random() * firstName.length)] + ' ' + lastName[Math.floor(Math.random() * lastName.length)];
    return randomName;
}
function nameQty() {
    var userQty = document.querySelector('.qty').value;
    document.querySelector('.nameList').innerHTML = '';
    if (userQty > 10) {
        document.querySelector('.nameList').innerHTML = 'ONLY 10 NAMES CAN BE GENERATE';
    }
    else {
        for (var i = 0; i < userQty; i++) {
            document.querySelector('.nameList').innerHTML += getName() + '<br>';
        }
    }
}