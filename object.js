var personArr = ["Inka", "Bella", "Female", 20];
var personObj = {
    firstName: "Inka",
    lastName: "Bella",
    gender: "Female",
    age: 20
};

// foreach
var sentenceFromArray = `Hello, my name is ${personArr[0]} ${personArr[1]}. I am a ${personArr[2]} of age ${personArr[3]}.`;
console.log(sentenceFromArray);

var buah = [
    {nama: "apel", warna: "merah", rasa: "manis"},
    {nama: "pisang", warna: "kuning", rasa: "manis"},
    {nama: "jeruk", warna: "orange", rasa: "asam"}
];

buah.forEach(function(item) {
    console.log("Nama: " + item.nama + ", Warna: " + item.warna + ", Rasa: " + item.rasa);
});

//map
var hewan = [
    {nama: "gajah", jenis: "herbivora", habitat: "hutan"},
    {nama: "singa", jenis: "karnivora", habitat: "savanna"},
    {nama: "kura-kura", jenis: "amfibi", habitat: "air tawar"}
];

var arrayJenisHewan = hewan.map(function(item) {
    return item.jenis;
});

console.log(arrayJenisHewan);

//filter
var filmHantu = [
    {judul: "The Conjuring", genre: "Horror", director: "James Wan"},
    {judul: "Paranormal Activity", genre: "Horror", director: "Oren Peli"},
    {judul: "The Ring", genre: "Horror", director: "Gore Verbinski"},
    {judul: "Insidious", genre: "Horror", director: "James Wan"}
];

var nonConjuringMovies = filmHantu.filter(function(item) {
    return item.judul !== "The Conjuring";
});

console.log(nonConjuringMovies);