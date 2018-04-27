// function randomNumber(){
//     return Math.floor(Math.random()*256)
// }

// function randomColorCode(){
//     return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
// }

// const colorCodeEl = document.querySelector('.color-code');
// const boxes = document.querySelectorAll('.black');
// // colorCodeEl.textContent = randomColorCode();

// let correctAnswer;
// let score = 0;
// document.querySelector('.score').textContent = score;

// function newStage(){
//     const colorCodes = [randomColorCode(), randomColorCode(), randomColorCode()]
//     boxes.forEach((el, index)=> {
//         el.style.backgroundColor = colorCodes[index];
//     }); 

//     correctAnswer = Math.floor(Math.random() * 3);
//     colorCodeEl.textContent = colorCodes[correctAnswer];
// }

// // boxes[0].style.backgroundColor = randomColorCode();
// // boxes[1].style.backgroundColor = randomColorCode();
// // boxes[2].style.backgroundColor = randomColorCode();

// boxes.forEach((el,index)=> {

//     el.addEventListener('click', ()=> {

//     if (correctAnswer === index){
//         alert('맞음');
//         document.querrySelector('.modal.right').classList.add('show');
//         score ++;
//     }else{
//         alert('틀림');
//         score = 0;
//     }
//     document.querySelector('.score').textContent = score;
//     newStage();
//     })
// })


// document.querySelector('.modal.right .close').addEventListener('click', ()=>{
//     document.querySelector('.modal.right').classList.remove('show');
// })

// newStage();





// // boxes[1].addEventListener('click', ()=> {
// //     if (correctAnswer === 1){
// //         alert('맞음');
// //     }else{
// //         alert('틀림');
// //     }
// // });

// // boxes[2].addEventListener('click', ()=> {
// //     if (correctAnswer === 2){
// //         alert('맞음');
// //     }else{
// //         alert('틀림');
// //     }
// // });

// //     }



function randomNumber(){
    return Math.floor(Math.random()*256)
  }
  


function randomColorCode(){
  return `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`;
  }
  
  const colorCodeEl = document.querySelector('.color-code');
  
  const boxes = document.querySelectorAll('.box')
  
  let correctAnswer;
  let score = 0;

  document.querySelector('.score').textContent = `SCORE: ${score}`;

  function newStage() {

    const colorCodes = [randomColorCode(),randomColorCode(),randomColorCode()];
     //
    boxes.forEach((el, index) => {
      el.style.backgroundColor = colorCodes[index];
  }); //
  
  correctAnswer = Math.floor(Math.random()*3); //
  
  colorCodeEl.textContent = colorCodes[correctAnswer]; //
  }
  
  boxes.forEach((el,index) => {
    el.addEventListener('click', () => {
      el.classList.add('large');
        
      if(correctAnswer === index){
        score++;
        // alert('맞았습니다.');
        document.querySelector('.modal.right').classList.add('show');
        
      } else {
        document.querySelector('.modal.left .score').textContent = `SCORE: ${score}`;
        score = 0;
        // alert('틀렸습니다.')

        document.querySelector('.modal.left').classList.add('show');

      }
      document.querySelector('.score').textContent = score;
    })
  })


  document.querySelector('.modal.right .close').addEventListener('click', () => {
    newStage();

    boxes.forEach(el => {
        el.classList.remove('large');
    })

    document.querySelector('.modal.right').classList.remove('show');
  })


  document.querySelector('.modal.left .close').addEventListener('click', ()=> {
    newStage();

    boxes.forEach(el => {
        el.classList.remove('large');
    })

    document.querySelector('.modal.left').classList.remove('show');

  })
  
  newStage();