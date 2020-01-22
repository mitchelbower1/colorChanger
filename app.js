// const title = document.getElementById('title');

// title.addEventListener('click', function(){
  
//   title.innerHTML = 'testing';
// })

function generateRandomNum() {
  return Math.floor(Math.random() * 256);
}

setInterval(function(){


    document.body.style.backgroundColor = `rgb(${generateRandomNum()},${generateRandomNum()},${generateRandomNum()})`;
}, 1000)
