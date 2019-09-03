var students = [
    {
        name:"Bamigboye Christiana Temitope",
        age: 25,
        address:"Village Hostel",
        tribe:"Yoruba",
        gender:"female",
        Height:1.70,
        department:"CSC",
        level:300,
        grade: [54,63,80,96,96]
    },
    {
        name:"Duada Yohanna Awari",
        age: 23,
        address:"Angwa Rukuba",
        tribe:"Afizare",
        gender:"male",
        Height:1.69,
        department:"CSC",
        level:300,
        grade: [67,87,69,80,96]
    },
    {
        name:"Elizabeth John",
        age: 27,
        address:"Salama Hostel",
        tribe:"Ibibo",
        gender:"female",
        Height:"1.68",
        department:"CSC",
        level:400,
        grade: [56,67,80,99,87]
    },
    {
        name:"Ifeoma Ibedu",
        age: 24,
        address:"Angwa Rukuba",
        tribe:"Igbo",
        gender:"female",
        Height:1.70,
        department:"CSC",
        level:300,
        grade: [69,70,80,90,100]
    },
    {
        name:"Job Gift Elejo",
        age: 22,
        address:"Village Hostel",
        tribe:"Igala",
        gender:"female",
        Height:1.68,
        department:"CSC",
        level:300,
        grade: [78,56,60,80,89]
    },
    {
        name:"Joy Ohue Osedebamen",
        age: 21,
        address:"Odus",
        tribe:"Idoma",
        gender:"female",
        Height:1.70,
        department:"CSC",
        level:300,
        grade: [67,89,67,90,94]
    },
    {
        name:"Josephine Sunday",
        age: 22,
        address:"Odus",
        tribe:"Eggon",
        gender:"female",
        Height:1.60,
        department:"CSC",
        level:300,
        grade: [67,67,80,90,95]
    },
    {
        name:"kaslong Kevin Shitnan",
        age: 23,
        address:"Twad",
        tribe:"Yoruba",
        gender:"male",
        Height:1.69,
        department:"CSC",
        level:300,
        grade: [60,70,87,93,91]
    },
    {
        name:"Mabas Maryam",
        age: 24,
        address:"PTS, Jos",
        tribe:"Challa",
        gender:"female",
        Height:1.67,
        department:"CSC",
        level:400,
        grade: [56,67,85,96,98]
    },
    {
        name:"Mark Adams",
        age: 24,
        address:"Rukuba Road",
        tribe:"Idoma",
        gender:"male",
        Height:1.69,
        department:"CSC",
        level:300,
        grade: [69,70,83,94,97]
    },
    {
        name:"Musa Deborah Kibba",
        age: 23,
        address:"Odus",
        tribe:"Berom",
        gender:"female",
        Height:1.67,
        department:"CSC",
        level:300,
        grade: [50,60,87,89,92]
    },
    {
        name:"Nanbal Moses Kumdam",
        age: 23,
        address:"Federal locust",
        tribe:"Mupun",
        gender:"male",
        Height:1.68,
        department:"CSC",
        level:300,
        grade: [30,40,60,70,84]
    },
    {
        name: "Oyekale Tosin",
        age: 25,
        address: "Farin-gada",
        tribe: "Yoruba",
        gender: "female",
        Height: 1.66,
        department:"CSC",
        level: 400,
        grade: [78,70,80,90,97]
    },
    {
        name:"Peter Temitope Asalu",
        age: 20,
        address:"Celebridge",
        tribe:"Yagba",
        gender:"male",
        Height:1.70,
        department:"CSC",
        level:300,
        grade: [70,76,89,96,93]
    },
    {
        name:"Ponfa Micheal",
        age: 22,
        address:"Odus",
        tribe:"Berom",
        gender:"male",
        Height:1.66,
        department:"CSC",
        level:300,
        grade: [50,57,80,86,90]
    },
    {
        name:"Susan Owoicho",
        age: 26,
        address:"Salama Hostel",
        tribe:"Idoma",
        gender:"female",
        Height:1.69,
        department:"CSC",
        level:300,
        grade: [58,67,60,80,95]
    },

    {
        name:"Uzaifat Ibrahim",
        age: 24,
        address:"Dodo street Jos",
        tribe:"Magwavul",
        gender:"female",
        Height:1.68,
        department:"CSC",
        level:300,
        grade: [67,54,80,98,70]
    },
    {
        name:"Victoria Bok",
        age: 22,
        address:"Odus",
        tribe:"Berom",
        gender:"female",
        Height:1.60,
        department:"CSC",
        level:300,
        grade: [50,52,80,90,96]
    },
    {
        name:"Yada Martins",
        age: 24,
        address:"Village Hostel",
        tribe:"Kagoro",
        gender:"male",
        Height:1.70,
        department:"CSC",
        level:300,
        grade: [65,55,67,80,89]
    },
    {
        name:"Yusuf Osanga Paul ",
        age: 25,
        address:"Rayfield",
        tribe:"Berom",
        gender:"male",
        Height:1.69,
        department:"CSC",
        level:400,
        grade: [50,70,84,89,93]
    },
]

var max = 0;
var student = students.filter(function(value){
    if(max<value.Height){
        max = value.Height;
    }
});

var check = students.filter(function(record){
    if(record.Height == max){
        return record;
    }
});
console.log(check);