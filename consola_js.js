var local_consoles_js = Array();
var consoles_js_height = 16;
function consola_javascript_clear()
  {
    this.childNodes[0].innerHTML='';
    return '';
  }
function consola_javascript_ejecutar(event)
  {
    var event = event || window.event;
    if (event.type == 'keyup')
      {
        if (event.keyCode != 13) return;
      }
    var console_js = this.parentNode;
    var comando = console_js.childNodes[2].value;
    console_js.childNodes[2].value = "";
    var screen = console_js.childNodes[0].innerHTML;
    screen = screen.split("<br>");
    screen.pop();
    while (screen.length > (consoles_js_height - 2) )
      {
        screen.shift();
      }
    console_js.childNodes[0].innerHTML = screen.join("<br>") + "<br>";
    console_js.childNodes[0].innerHTML += 
      " >> " + comando;
    if (comando[comando.length-1] != ";")
      {
        console_js.childNodes[0].innerHTML +=
          "<span class='consola-javascript-error'>;</span>";
      }
    console_js.childNodes[0].innerHTML += "<br>";
    valor_retornado = eval (comando);
    if (valor_retornado != '')
      {
        console_js.childNodes[0].innerHTML += valor_retornado + "<br>";
      }
  }
function activar_consolas_javascript()
  {
    local_consoles_js =
      document.getElementsByClassName('consola-javascript');
    var numero_consola=0;
    for(numero_consola=0;
      numero_consola < local_consoles_js.length; numero_consola++)
      {
        local_consoles_js[numero_consola].clear=consola_javascript_clear;
        local_consoles_js[numero_consola].innerHTML =
          '<div>Console ' + numero_consola +
          '<br></div><input type="button" /><input type="text" />';
        local_consoles_js[numero_consola].childNodes[1].value = " >> ";
        local_consoles_js[numero_consola].childNodes[1].onclick =
          consola_javascript_ejecutar;
        local_consoles_js[numero_consola].childNodes[2].onkeyup =
          consola_javascript_ejecutar;
      }
  }
