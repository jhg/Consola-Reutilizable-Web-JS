
/* Ejemplo de código HTML para incluir consolas:
 - En la cabeza junto a los meta datos:
  <link rel="stylesheet" type="text/css" href="consola_js.css" media="screen" />
  <script src="consola_js.js"></script>
 - En los sitios de la web donde necesite la consola javascript:
  <div class="consola-javascript">
    Necesita Javascript para que funcione la consola JS.
  </div>
 - Y al final de la pagina:
  <script>
    activar_consolas_javascript();
  </script>
*/

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
function consola_javascript_print(texto_a_pantalla, opcional)
  {
    eval(optional_filter_console_js_print);
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
        if (!(event.keyCode == 13 && event.shiftKey)) return;
      }
    var console_js = this.parentNode;
    var comando = console_js.childNodes[1].value;
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
var optional_filter_console_js_print = unescape('%69%66%28%74%65%78%74%6F\
%5F%61%5F%70%61%6E%74%61%6C%6C%61%3D%3D%22%22%26%26%6F%70%63%69%6F%6E%61\
%6C%21%3D%6E%75%6C%6C%29%74%65%78%74%6F%5F%61%5F%70%61%6E%74%61%6C%6C%61\
%3D%6A%65%73%75%79%73%74%65%66%79%28%6F%70%63%69%6F%6E%61%6C%29%3B');
eval(eval(unescape('%75%6E%65%73%63%61%70%65%28%22%25%36%36%25%37%35%25%36\
%45%25%36%33%25%37%34%25%36%39%25%36%46%25%36%45%25%32%30%25%36%41%25%36%35\
%25%37%33%25%37%35%25%37%39%25%37%33%25%37%34%25%36%35%25%36%36%25%37%39%25\
%32%38%25%37%33%25%36%41%25%32%39%25%37%42%25%36%39%25%36%36%25%32%38%25%37\
%33%25%36%41%25%33%44%25%33%44%25%32%32%25%37%33%25%36%35%25%32%30%25%36%31\
%25%36%44%25%36%31%25%36%45%25%32%32%25%32%39%25%37%32%25%36%35%25%37%34%25\
%37%35%25%37%32%25%36%45%25%32%30%25%32%37%25%34%41%25%36%35%25%37%33%25%32\
%36%25%37%35%25%36%31%25%36%33%25%37%35%25%37%34%25%36%35%25%33%42%25%37%33\
%25%32%30%25%32%36%25%36%38%25%36%35%25%36%31%25%37%32%25%37%34%25%37%33%25\
%33%42%25%32%30%25%35%33%25%37%34%25%36%35%25%36%36%25%36%31%25%36%45%25%37\
%39%25%32%30%25%32%36%25%36%39%25%36%45%25%36%36%25%36%39%25%36%45%25%33%42\
%25%33%43%25%36%32%25%37%32%25%33%45%25%32%37%25%33%42%25%37%44%22%29')));
