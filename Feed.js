function ativo(a){
    document.getElementById("barra_de_opção").style.left=a+"px";
    if (a==415){
        fazerRequisicao1();
    }
}
//A function ativo2() tem como função mudar a cor do botão SetUpProfile
//Quando o evento do mouse entrando dentro dele ocorrer
//Enquanto o desativo2)() tem a função de voltar ao estilo inicial
//Quando o mouse sai do botão
function ativo2(){
    document.getElementById("SetUpProfile").style.backgroundColor="#FAE02B";
    document.getElementById("SetUpProfile2").style.color="white";
    document.getElementById("SetUpProfile").style.borderColor="black";
}
function desativo2(){
    document.getElementById("SetUpProfile").style.backgroundColor="white";
    document.getElementById("SetUpProfile2").style.color="#FAE02B";
    document.getElementById("SetUpProfile").style.borderColor="#FAE02B";
}
//A function ativo3() muda a cor do button de Piu para uma cor mais escura
//Enquanto a function desativo3() retorna para a cor inicial com eventos
///de onMouseover e onMouseout
function ativo3(){
    document.getElementsByTagName("button")[0].style.backgroundColor="#F1D900";
}
function desativo3(){
    document.getElementsByTagName("button")[0].style.backgroundColor="#FFE600";
}
//As funções ativo4() e desativo4() funcionam para
//muda a cor do botão de fechar do local para input de Piu, quando há o
//evento de onMouseover e onMouseout
function ativo4(){
    document.getElementById("botão_fecha").getElementsByTagName("img")[0].src="./Photos/Group 106.png";
}
function desativo4(){
    document.getElementById("botão_fecha").getElementsByTagName("img")[0].src="./Photos/Group 107.png";
}
//Na ativo5() e desativo5() selecionamos primeiro o li, que variar conforme
//sua posição de referência (no caso são as opções de menu) e vão variar a
//cor quando forem selecionadas, e o argumento b é para se manterem na cor 
//certa quando houver a expansão da imagem de profile ou do campo de poost do piu
var evento=document.getElementsByTagName("li");
function ativo5(a,b){
    evento[a].style.backgroundColor="rgba(0,0,0,"+b+")";
}
function desativo5(a){
    evento[a].style.backgroundColor="rgba(0,0,0,0)";
}
//a function ativo6() e desativo6() tem a função de mudar a cor das opções
//para um tom de amarelo mais clareado quando ocorre o evento onMouseover
//e onMouseout
function ativo6(b){
    document.getElementById("options").getElementsByTagName("li")[b].style.backgroundColor="rgba(250, 224, 43,0.2)";
}
function desativo6(b){
    document.getElementById("options").getElementsByTagName("li")[b].style.backgroundColor="rgba(255,255,255)";
}
//as functions expandir() e sombra() servem, respectivamente, para mudar
//o tamanho da faixa de opções amarela com onClick e muda a sombra da imagem
//que representa o logo
//A function Nsombra() retorna a imagem inicial do logo, quando onMouseout
//é acionado
function expandir(b){
    document.getElementById("barra_de_opção").style.width=b+"px";
}
function sombra(){
    document.getElementById("Logo_PiuPiuwer").src="./Photos/Group 7 (2).jpg";
}
function Nsombra(){
    document.getElementById("Logo_PiuPiuwer").src="./Photos/Group 7.png";
}
//diminuirfoto() reduz a foto de perfil pra seu tamanho inicial, executada
//quando apertado o X na parte superior direita pelo onClick
function diminuifoto(){
    sombra2(1,1,0);
    var perfil=document.getElementById("perfil").style;
    var fechar=document.getElementById("fechar").style;
    perfil.width="120px";
    perfil.height="120px";
    perfil.borderRadius="120px";
    perfil.left="420px";
    perfil.top="155px";
    perfil.opacity="100%";
    document.getElementById("fechar").innerHTML="";
    fechar.width="0px";
    fechar.height="0px";
    document.getElementById("Piu_button").innerHTML=" ";
}
//fechar() fecha o campo de post de piu quando é apertado o botão de fechar
//ou quando é clicado para postar um novo Piu, essa função ocorre no evento
//onClick
function fechar(){
    sombra2(1,1,0);
    var piu=document.getElementById("espaço_de_piu").style;
    var fechar=document.getElementById("botão_fecha").style;
    var pos=document.getElementById("campo_post").style;
    var botao=document.getElementById("Piu_button").style;
    var input=document.getElementById("coment").style;
    piu.width="0px";
    piu.height="0px";
    fechar.width="0px";
    fechar.height="0px";
    pos.width="0px";
    pos.height="0px";
    botao.position="absolute";
    botao.left="0px";
    botao.width="0px";
    botao.height="0px";
    input.width="0px";
    input.height="0px";
    document.getElementById("botão_fecha").getElementsByTagName("img")[0].src=" ";
}
