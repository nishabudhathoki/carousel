//creating array of object of pictures
const reviews = [
    {
    id:1,
    name:"Nature1",
    img:"https://unsplash.com/photos/_tBeFVZPlPY.jpg",
    text: 
    "It is my favourite ever Nature has own beatuy ..",
    },
   {
    id :"2",
    name:"Nature2",
    img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F472244710907739481%2F&psig=AOvVaw0TxVEcChx89HHYrOGGClRj&ust=1618742365765000&source=images&cd=vfe&ved=2ahUKEwiLwumui4XwAhVNAbcAHWbYBQwQr4kDegUIARC5AQ",
    text:
    "It is the most beautiful lake .The photo is taken with right landscape .",
},
{
    id:"3",
    name:"Nature3",
    img:"",
    text:"Beautiful Landscape.Images may be subject to copyright.",
},{
    id:"4",
    name:"Nature4",
    img:"https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.wallpapertip.com%2Fwpic%2FbTiT_most-beautiful-wallpapers-in-the-world-free-download%2F&psig=AOvVaw0S6h7NKJ3Hj4VyXziQLWKD&ust=1618742874542000&source=images&cd=vfe&ved=2ahUKEwj65bahjYXwAhVm5HMBHYeGAesQr4kDegUIARD4AQ.jpg",
    text:"Most Beautiful Nature Wallpapers.It is the beautiful place to visit.",
},
];

// to access the html file
const img=document.getElementById('imgs');
const name=document.getElementById('secene');
const info=document.getElementById('info');
const prve_btn=document.querySelector(".prev_button");
const next_btn=document.querySelector(".next_button");
const random_btn=document.querySelector(".random_button");


// set the data of array of object
let currentItem=0;

// load inital item
window.addEventListener("DOMContentLoaded",function (){
    const item= reviews[currentItem];
    img.src=item.img;
});