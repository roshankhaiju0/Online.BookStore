
    document.getElementById('myCart').addEventListener('click', function(){
      document.querySelector('.cart-modal').style.display='flex';
  });

document.getElementById('right').addEventListener('click', function(){
document.querySelector('.cart-modal').style.display = 'none';
});



function goBack(){
  window.history.back();
}

function goBack2(){
  window.history.go(-2);
}

