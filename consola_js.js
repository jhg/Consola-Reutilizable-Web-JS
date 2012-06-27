var local_consoles_js = Array();
var consoles_js_height = 16;
var local_consoles_js_log = {};
local_consoles_js_log.value = "";
local_consoles_js_log.print = function (texto_registro)
  {
    this.value += texto_registro + "\n";
  }
function consola_javascript_clear()
  {
    this.childNodes[0].innerHTML='';
    return '';
  }
function consola_javascript_print(texto_a_pantalla)
  {
    while (texto_a_pantalla.indexOf("\n") != -1)
      {
        texto_a_pantalla = texto_a_pantalla.replace("\n", "<br>");
      }
    return texto_a_pantalla+'<br>';
  }
function consola_javascript_ejecutar(event)
  {
    var event = event || window.event;
    if (event.type == 'keyup')
      {
        if (event.keyCode != 13 || event.shiftKey) return;
      }
    var console_js = this.parentNode;
    var comando = console_js.childNodes[1].value;
    console_js.childNodes[1].value = "";
    var comando_formateado = comando;
    while (comando_formateado.indexOf("\n") != -1)
      {
        comando_formateado = comando_formateado.replace("\n", "<br>");
      }
    var screen = console_js.childNodes[0].innerHTML;
    screen = screen.split("<br>");
    screen.pop();
    while (screen.length > (consoles_js_height - 2) )
      {
        screen.shift();
      }
    console_js.childNodes[0].innerHTML = screen.join("<br>") + "<br>";
    console_js.childNodes[0].innerHTML += comando_formateado;
    valor_retornado = eval (comando);
    while (valor_retornado.indexOf("\n") != -1)
      {
        valor_retornado = valor_retornado.replace("\n", "<br>");
      }
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
        local_consoles_js[numero_consola].print=consola_javascript_print;
        local_consoles_js[numero_consola].innerHTML =
          '<div>Console ' + numero_consola +
          '<br></div><textarea></textarea>';
        local_consoles_js[numero_consola].childNodes[1].onkeyup =
          consola_javascript_ejecutar;
      }
  }
