var dados_meusPius=[];
var contador=0;
/*Na function janela é expandido a foto de perfil, adicionado
o fundo escura e desenvolvido um botão para fechar a tela de 
expansão */
function janela(libera){
    sombra2(0.7,0,0.7);
    var perfil=document.getElementById("perfil").style;
    var fechar=document.getElementById("fechar").style;
    perfil.width="400px";
    perfil.height="400px";
    perfil.borderRadius="400px";
    perfil.left="474px";
    perfil.top="128px";
    perfil.opacity="100%";
    document.getElementById("fechar").innerHTML="X";
    fechar.width="30px";
    fechar.height="30px";
    fechar.textAlign="center"
    fechar.fontSize="22px";
    fechar.position="absolute";
    fechar.left="20px";
    fechar.top="20px";
    fechar.borderRadius="30px";
    fechar.backgroundColor="black";
    fechar.color="white";
}
/*A function piu() abre o campo de post piu, gera um input com seu value
dentro, além de gerar um botão para fechar e retornar a tela inicial, e outro
botão para enviar o post*/
function piu(){
    sombra2(0.7,0,0.7);
    var piu=document.getElementById("espaço_de_piu").style;
    var fechar=document.getElementById("botão_fecha").style;
    var pos=document.getElementById("campo_post").style;
    var botao=document.getElementById("Piu_button").style;
    var input=document.getElementById("forms-1");
	var input2 = document.createElement("input");
	var atributo = document.createAttribute("type");
	var atributo2 = document.createAttribute("placeholder");
	
	atributo.value = "textarea";
	atributo2.value = "What's happening?";
	input2.setAttributeNode(atributo);
	input2.setAttributeNode(atributo2);
	input.appendChild(input2);
    input2.classList.add("post");
	
    piu.backgroundColor="white";
    piu.width="478px";
    piu.height="270px";
    piu.position="absolute";
    piu.left="435px";
    piu.top="193px";
    piu.borderRadius="10px";
	desativo4(true);
    document.getElementById("botão_fecha").getElementsByTagName("img")[0].style.position="absolute";
    document.getElementById("botão_fecha").getElementsByTagName("img")[0].style.left="15px";
    document.getElementById("botão_fecha").getElementsByTagName("img")[0].style.width="20px";
    document.getElementById("botão_fecha").getElementsByTagName("img")[0].style.height="20px";
    fechar.color="#FFE600";
    fechar.width="478px";
    fechar.height="30px";
    fechar.position="absolute";
    fechar.left="0px";
    fechar.top="10px";
    fechar.borderBottom="2px solid rgba(0, 0, 0, 0.2)";
    pos.width="478px";
    pos.height="230px";
    pos.position="absolute";
    pos.left="0px";
    pos.top="40px";
    document.getElementById("Piu_button").innerHTML="Piu";
    botao.width="120px";
    botao.height="34px";
    botao.position="absolute";
    botao.right="5px";
    botao.bottom="10px";
    botao.background= "#FFE600";
    botao.borderRadius= "40px";
    botao.fontFamily= "Roboto Slab";
    botao.fontWeight= "bold";
    botao.fontSize= "18px";
    botao.color= "#FFFFFF";
    botao.textAlign="center";
    botao.right="5px";
    botao.bottom="10px";
	
    input2=input.getElementsByTagName("input")[0];
	input2.style.width="465px";
    input2.style.height="150px";
    /*var caixadetexto = input2.querySelector('textarea');
    caixadetexto.addEventListener("input", function() {
            const qtdecaracteres = this.value.length;
            console.log(qtdecaracteres);
        }
    );*/
}
/*Abaixo tem o evento para a criação do post com as reações, sendo um processo
em que se usa o preventDefaul() para não recarregar a página, e depois são
criados os elementos do piu postado e configurado o tamanho, posicionamento,
distribuição e organização deles na página, e também é adicionado
os eventos que ocorrem com as imagens acionadas */
var adicionar=document.getElementById("Piu_button")
adicionar.addEventListener("click",function(event){
    event.preventDefault();

    var comentário=document.createElement("tr");
	var ul1=document.createElement("tr");
	var ul2=document.createElement("tr");
	var reaction=document.createElement("tr");
	comentário.appendChild(ul1);
	comentário.appendChild(ul2);
	comentário.appendChild(reaction);
    var img1=document.createElement("img");
    var lin_img1=document.createElement("td");
    var img2=document.createElement("img");
    var user_name=document.createElement("td");
    var user_ident=document.createElement("td");
    var time=document.createElement("td");
    var coment=document.createElement("td");
    var forms=document.querySelector("#forms-1");
	var coment_ic=document.createElement("img");
    var circle=document.createElement("img");
    var love=document.createElement("img");
	var upload=document.createElement("img");
	var p1=document.createElement("p");
	var p2=document.createElement("p");
	var p3=document.createElement("p");
	var p4=document.createElement("p");
	var cj1=document.createElement("tr");
	var cj2=document.createElement("tr");
	var cj3=document.createElement("tr");
	var cj4=document.createElement("tr");
    
    img2.src="./photos/Foto_Perfil.jpg";
	img1.src="./photos/Group 94.png";
	coment_ic.src="./photos/Vector 21.png";
    circle.src="./photos/Group 91.png";
	love.src="./photos/Group 90.png";
    upload.src="./photos/Arrow 3.png";
	coment_ic.addEventListener("mouseover",function(){
		coment_ic.style.backgroundColor="rgba(255,229,0,0.6)";})
	coment_ic.addEventListener("mouseout",function(){
		coment_ic.style.backgroundColor="rgba(0,0,0,0)";})
	coment_ic.addEventListener("click",function(){
	adição((4*contador));})
	circle.addEventListener("mouseover",function(){
		circle.style.backgroundColor="rgba(0,0,0,0.3)";})
	circle.addEventListener("mouseout",function(){
		circle.style.backgroundColor="rgba(0,0,0,0)";})
	circle.addEventListener("click",function(){
		adição((4*contador+1));})
	love.addEventListener("mouseover",function(){
		love.style.backgroundColor="rgba(255,0,0,0.3)";})
	love.addEventListener("mouseout",function(){
		love.style.backgroundColor="rgba(0,0,0,0)";})
	love.addEventListener("click",function(){
		adição((4*contador+2));})
	upload.addEventListener("mouseover",function(){
		upload.style.backgroundColor="rgba(90,90,180,0.3)";})
	upload.addEventListener("mouseout",function(){
		upload.style.backgroundColor="rgba(0,0,0,0)";})
	upload.addEventListener("click",function(){
		adição((4*contador+3));})
	
    user_name.textContent="Willer Santos";
    user_ident.textContent="@Willer Santos";
    time.textContent="Time";
    coment.textContent=forms.getElementsByTagName("input")[0].value;
    lista.push(coment.textContent);
    dados_meusPius.push(coment.textContent);
    console.log(dados_meusPius);
    fechar();

    user_ident.style.fontSize="13px";
    user_ident.style.width="120px";
    user_ident.style.fontWeight= "bold";
    user_ident.style.fontFamily= "Roboto Slab";
    user_ident.style.color= "rgba(0, 0, 0, 0.5)";
	time.style.fontSize="13px";
	time.style.fontFamily= "Roboto Slab";
	time.style.fontWeight= "bold";
    time.style.color= "rgba(0, 0, 0, 0.5)";
    time.style.width="100px";
	user_name.style.fontSize="14px";
	user_name.style.fontFamily= "Montserrat Alternates";
	user_name.style.fontWeight= "bold";
    user_name.style.color= "#000000";
    user_name.style.width="120px";
    user_name.style.paddingLeft="30px";
    coment.style.fontSize="14px";
	coment.style.color= "#000000";
	coment.style.textAlign="justify";
	coment.style.fontFamily="Roboto";
	coment.style.paddingBottom="10px";
    comentário.style.width="450px";
	comentário.style.height="120px";
	comentário.classList="comentário"
    cj1.style.marginRight= "80px";
	cj1.style.marginLeft= "70px";
    cj2.style.marginRight= "80px";
	cj3.style.marginRight= "80px";
	lin_img1.style.position="absolute";
    lin_img1.style.left="900px";
    img2.style.width="40px";
	img2.style.height="40px";
	img2.style.borderRadius="40px";
	
    lin_img1.appendChild(img1);
    ul1.appendChild(lin_img1);
    ul1.appendChild(img2);
    ul1.appendChild(user_name);
    ul1.appendChild(user_ident);
    ul1.appendChild(time);
    ul2.appendChild(coment);
	cj1.appendChild(coment_ic);
	cj1.appendChild(p1);
	cj2.appendChild(circle);
	cj2.appendChild(p2);
	cj3.appendChild(love);
	cj3.appendChild(p3);
	cj4.appendChild(upload);
	cj4.appendChild(p4);
	reaction.appendChild(cj1);
	reaction.appendChild(cj2);
	reaction.appendChild(cj3);
	reaction.appendChild(cj4);
	
	reaction.style.display="inline-flex";
	reaction.style.position="absolute";
	ul1.style.display="inline-flex";
	
    document.querySelector("#tbody").appendChild(comentário);
    contador+=1;
    return contador;
    return dados_meusPius;
})

/*
function comentários_salvos(){
    for(var a=0;a<dados_meusPius.lenght;a++){
         piu2("Willer Santos", "@Willer Santos", dados_meusPius[a], "./photos/Foto_Perfil.jpg",1,a);
    }
    return dados_meusPius;
}*/
/*A function sombra2() serve tanto para deixa a tela escura, quanto para retorná-la
a cor inicial, quando acionada, sendo usada para o post de piu e para 
o fundo escuro da expansão da imagem de perfil, ou para voltar com o 
fundo claro quando fechado qualquer um desses dois campos */
function sombra2(opac,opac2,opac3){
    document.getElementById("body").style.backgroundColor="rgba(0, 0, 0,"+opac3+")";
    document.getElementById("SetUpProfile").style.backgroundColor="rgba(0, 0, 0,"+opac3+")";
    document.getElementById("SetUpProfile").style.borderColor="rgba(250, 224, 43,"+opac+")";
    document.getElementById("SetUpProfile").getElementsByTagName("p")[0].style.color="rgba(250, 224, 43,"+opac+")";
    for(var i = 0; i < 8; i++){
        document.getElementsByTagName("li")[i].style.opacity=(opac*100)+"%";
    }
    document.querySelector("#perfil").style.opacity=(opac*100)+"%";
    document.querySelector("#capa").style.opacity=(opac*100)+"%";

    document.getElementById("barra_de_opção").style.backgroundColor="rgba(250, 224, 43,"+opac+")";
    for(var i = 0; i < 4; i++){
        document.getElementById("options").getElementsByTagName("li")[i].style.color="rgba(250, 224, 43,"+opac+")";
    }
    document.getElementById("piu").style.opacity=(opac*100)+"%";
    document.getElementById("follow").getElementsByTagName("a")[0].style.color="rgba(250, 224, 43,"+opac+")";
    document.getElementById("Botão_Piu").querySelector("button").style.backgroundColor="rgba(250, 224, 43,"+opac+")";
    for (var a=0;a<8;a++){
        ativo5(a,0);
    }
}
/*a funcction fechar() serve para fechar o campo do post piu, removendo o 
input e deixando de stand--bye os outros elementos, além de ativar a function
sombra2() para voltar o fundo claro */
function fechar(){
    var input=document.querySelector("#forms-1").getElementsByTagName("input")[0];
    var piu=document.getElementById("espaço_de_piu").style;
    var fechar=document.getElementById("botão_fecha").style;
    var pos=document.getElementById("campo_post").style;
    var botao=document.getElementById("Piu_button").style;
    input.remove();
    piu.width="0px";
    piu.height="0px";
    fechar.width="0px";
    fechar.height="0px";
    pos.width="0px";
    pos.height="0px";
    botao.width="0px";
    botao.height="0px";
    document.getElementById("Piu_button").innerHTML=" ";
    document.getElementById("botão_fecha").getElementsByTagName("img")[0].style.width="0px";
    document.getElementById("botão_fecha").getElementsByTagName("img")[0].style.height="0px";
    sombra2(1,1,0);
}
//O for serviu somente para distribuir os elementos das opções de 
//pius, repius, media e likes na faixa de opções
for(var a=13;a<17;a++){
    document.getElementsByTagName("li")[a].style.paddingRight="37px";
    document.getElementsByTagName("li")[a].style.paddingLeft="36.5px";
}