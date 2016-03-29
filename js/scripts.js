/*$(document).ready(function(){
  $('#button').click(function(event){
    var input = parseInt($('#value').val());
    var array = [];
console.log(input);

for(ii=2; ii<= input; ii++){
  array.push(ii);
  console.log(array);
}

for (i = array.length; i >= array.length; i--){
  if (array[i] /  = 1 && array[i]>1){
    console.log('divided');
  }else{
  console.log(array);
}

  if((array[i] / i) = 1 && array[i]>1){
    console.log('divided');
  }

  // }else if ((array[i] / i) != 1 || array[i] )
  //
  // }
    event.preventDefault();
  });
});*/
$(document).ready(function(){
  $('#button').click(function(event){
    event.preventDefault();
    console.log("click");
    var num = $('#value').val();
    for(var ii = num; ii < 12 ; ii++){
      if(num >=2 && num % ii === 0){
        alert('correct');
      }else{
        alert('no');
        break;
      }
      event.preventDefault();
    }
  });
});
