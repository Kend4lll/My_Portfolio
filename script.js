

// const img = document.getElementById('images');

// let toggle = true;
// img.addEventListener('click', function(){
//     toggle = !toggle;
//     if(toggle){
//         img.src = './resources/images/IMG_0015.jpg';
//     } else{
//         img.src = './resources/images/2.jpg'
//     }
// });


const img = document.getElementById('images');
let x = 1;
img.addEventListener('click', function(){
    switch(x){
        case 1:
            img.src = './resources/images/2.jpg';
            x++;
            break;
        case 2:
            img.src = './resources/images/3.jpg';
            x++;
            break;
        case 3:
            img.src = './resources/images/4.jpg';
            x++;
            break;
        case 4:
            img.src = './resources/images/5.jpg';
            x++;
            break;
        case 5:
            img.src = './resources/images/6.jpg';
            x++;
            break;
        case 6:
            img.src = './resources/images/7.jpg';
            x++;
            break;
        case 7:
            img.src = './resources/images/8.jpg';
            x++;
            break;
        case 8:
            img.src = './resources/images/9.jpg';
            x++;
            break;
        case 9:
            img.src = './resources/images/10.jpg';
            x++;
            break;
        default:
            img.src = './resources/images/IMG_0015.jpg';
            x = 1;
            break;
    };

    // toggle = !toggle;
    // if(toggle){
    //     img.src = './resources/images/IMG_0015.jpg';
    // } else{
    //     img.src = './resources/images/2.jpg'
    // }
});
