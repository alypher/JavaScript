function aleatorio(limit, qtd)
{

  let nums = [];

  do 
  {
    let num = Math.floor(Math.random() * limit + 1)

    nums.push(num)

    nums = nums.filter( 
      
      function(item, index)
      {
        return nums.indexOf(item) === index
      }
    
    )

  } while (nums.length < qtd);

  return nums.sort(function(a, b){return a-b})
}

for(let i = 1; i <= 13; i++)
{
  console.log(aleatorio(25, 15))
}


