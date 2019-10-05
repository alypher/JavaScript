var facts = [
  ['gabriel', 'endereço', 'av rio branco, 109', true],
  ['joão', 'endereço', 'rua alice, 10', true],
  ['joão', 'endereço', 'rua bob, 88', true],
  ['joão', 'telefone', '234-5678', true],
  ['joão', 'telefone', '91234-5555', true],
  ['joão', 'telefone', '234-5678', false],
  ['gabriel', 'telefone', '98888-1111', true],
  ['gabriel', 'telefone', '56789-1010', true],
];

var schema = [
  ['endereço', 'cardinality', 'one'],
  ['telefone', 'cardinality', 'many']
];

function valida(fatos = [], estrutura = [])
{
  var validado = []

  for (let i in estrutura)
  { 
    for (let j in fatos)
    {
      if(estrutura[i][0] == fatos[j][1] && estrutura[i][2]=='one')
      {
        let temp = 0 
          
        for(let l in validado) 
        {
          if(validado[l][0] == fatos[j][0])
          {
            temp = l
          }
        }
        if(temp > 0)  
        { 
          validado[temp] = fatos[j]
        }
        else 
        {
          validado.push(fatos[j])
        }
  
      }
      else if(estrutura[i][0] == fatos[j][1] && estrutura[i][2]=='many')
      {
        validado.push(fatos[j])      
      }

      if (estrutura[i][0] == fatos[j][1] && !fatos[j][3])
      {

        validado.pop()

        for(let k in validado)
        {

          if(fatos[j][0] == validado[k][0] && fatos[j][1] == validado[k][1] && fatos[j][2] == validado[k][2])
          {
            validado.splice(k,1)
          }

        }
      }  
    }
  }

  return validado
}

console.log(valida(facts,schema))


/*
Resultado esperado:

[
  ['gabriel', 'endereço', 'av rio branco, 109', true],
  ['joão', 'endereço', 'rua bob, 88', true],
  ['joão', 'telefone', '91234-5555', true],
  ['gabriel', 'telefone', '98888-1111', true],
  ['gabriel', 'telefone', '56789-1010', true]
];

*/