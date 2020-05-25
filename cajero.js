var imagenes = [];
imagenes["50"] = "billete50.png";
imagenes["20"] = "billete20.png";
imagenes["10"] = "billete10.png";

class Billete
{
  constructor(v, c)
  {
    this.imagen = new Image();
    this.valor = v;
    this.cantidad = c;

    this.imagen.src = imagenes[this.valor];
  }
}

var caja = [];
caja.push( new Billete(50,3));
caja.push( new Billete(20,5));
caja.push( new Billete(10,5));
var dinero = 0;
var papeles = 0;
var div = 0;

var tabla = document.getElementById("tabla");
var tabla2 = document.getElementById("tabla2");
var title = document.getElementById("title")

var resultado = document.getElementById("resultado");
var b = document.getElementById("extraer");
b.addEventListener("click", entregarDinero);

function entregarDinero()
{
  var entregado = [];
  var t = document.getElementById("dinero");
  dinero = parseInt(t.value);

  if (contar >= dinero)
  {
    for(bi of caja)
    {
      if(dinero > 0)
      {
        div = Math.floor(dinero/bi.valor);
        if (div > bi.cantidad)
        {
          papeles = bi.cantidad;
        }
        else
        {
          papeles = div;
        }
        bi.cantidad = bi.cantidad - papeles;
        for (var i = 0; i < papeles; i++)
        {
          entregado.push( new Billete(bi.valor, 1));
        }
        dinero = dinero - (bi.valor * papeles);
      }
    }

    if (dinero == 0)
    {
      resultado.innerHTML += "Se ha retirado: <br />";
      for(var e of entregado)
      {
        resultado.innerHTML += "<img src=" + e.imagen.src + " />";
      }
      resultado.innerHTML += "<hr />";
      tabla2.innerHTML += "<tr>"+"<td>" + total() + "</td>"+"</tr>";
    }
    else
    {
      resultado.innerHTML += "No tengo la suma para es valor, intente con otro por favor";
    }
  }

  else
  {
    resultado.innerHTML += "Ya no tengo mas dinero :(";

  }
}
title.innerText = "Esta es la cantidad de dinero que tienes"
tabla.innerHTML = "<th>" + total() + "$" + "</th>";

function total()
{
  contar = 0;
  for (var t of caja)
  {
    contar = contar + (t.valor * t.cantidad);
  }
  return contar;
}
