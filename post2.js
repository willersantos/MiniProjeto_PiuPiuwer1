var tamanho=0;
var lista=[];
var followName=[];
var followUser=[];
var followImage=[];
/*a function piu2() serve para carregar os pius de outras pessoas
sendo ativado na parte de likes, onde criam se a linha de comentário 
primeiramente, depois criam o local de reação, identificação do 
usuário e imagem, depois organiza-se dentro de cada comentário,
além de criar os eventos com as reações em relações ao piu e sua contagem */
function piu2(nome, username, mensagem, imagem,a,i){
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
	
	img2.src=imagem;
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
	adição((4*i));})
	circle.addEventListener("mouseover",function(){
		circle.style.backgroundColor="rgba(0,0,0,0.3)";})
	circle.addEventListener("mouseout",function(){
		circle.style.backgroundColor="rgba(0,0,0,0)";})
	circle.addEventListener("click",function(){
		adição((4*i+1));})
	love.addEventListener("mouseover",function(){
		love.style.backgroundColor="rgba(255,0,0,0.3)";})
	love.addEventListener("mouseout",function(){
		love.style.backgroundColor="rgba(0,0,0,0)";})
	love.addEventListener("click",function(){
		adição((4*i+2));})
	upload.addEventListener("mouseover",function(){
		upload.style.backgroundColor="rgba(90,90,180,0.3)";})
	upload.addEventListener("mouseout",function(){
		upload.style.backgroundColor="rgba(0,0,0,0)";})
	upload.addEventListener("click",function(){
		adição((4*i+3));})
	
    user_name.textContent=nome;
    user_ident.textContent=username;
    time.textContent="Time";
    coment.textContent=mensagem;
    
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
	reaction.style.width="530px";
	ul1.style.display="inline-flex";
	document.querySelector("#inferior").style.height=((i+1)*120+10)+"px";
    document.querySelector("#tbody").appendChild(comentário);
}
/*fazerRequisição1() é ativada com o evento onClick em likes, e 
serve para fazer a requisição dos dados HTTP pelo método GET, obtendo os 
dados do endpoind do API, além de servir para chamar a function limpar() 
para limmpar a tela quando mudada a opção */
var xhttp = new XMLHttpRequest();
var url1 = "https://next.json-generator.com/api/json/get/EkyZfHLU_"; 
function fazerRequisicao1(abrir){
	tamanho=lista.length;
	if(tamanho!=0){
		limpar(tamanho,lista);}
	xhttp.open("GET", url1, false);
	xhttp.send();
	if(abrir==true){
		resposta(xhttp.responseText);}
	return lista;
}
/*a function resopta() serve para usar os dados obtidos, converrtendo-os 
primeiro e fazendo uma estrutura de repetição para executar a criação
dos pius postados, chamando a funçãõ piu2() */
function resposta(Response){
			var nome,username,mensagem,imagem,dados;
			dados=JSON.parse(Response);
			tamanho = Object.keys(dados).length;
			for (var i=0;i<tamanho;i++){
				lista.push(dados[i]['mensagem']);
				nome=(dados[i]['nome']);
				username=(dados[i]['username']);
				mensagem=(dados[i]['mensagem']);
				imagem=(dados[i]['imagem']);
				piu2(nome, username, mensagem, imagem,1,i);
			}
}
/*a function follows() faz com que de forma aleatória são gerados no campo de seguir, pessoas que postaram pius
utilizando os dados da requisição HTTP e colocados em uma lista, e depois 
com a função math.random geram números aleatórios de 0 a 1 e são multiplicados
pelo número de pessoas que postaram comentário, que no caso é a quantidade
de linhas de dados de JSON */
function follows(){
	var Resposta, tamanho2;
	var aleatórios=[];

	xhttp.open("GET", url1, false);
	xhttp.send();
	Resposta=JSON.parse(xhttp.responseText);
	tamanho2 = Object.keys(Resposta).length;
	for(i=0;i<tamanho2;i++){
		followName.push(Resposta[i]['nome']);
		followUser.push(Resposta[i]['username']);
		followImage.push(Resposta[i]['imagem']);
	}
	for(var a=0;a<3;a++){
		aleatórios.push(Math.round(Math.random()*(tamanho2-1)));
		var foto=document.createElement("img");
		var p1=document.createElement("h1");
		var p2=document.createElement("h2");
		p1.textContent=(followName[aleatórios[a]]);
		p2.textContent=(followUser[aleatórios[a]]);
		foto.src=(followImage[aleatórios[a]]);
		foto.style.position="absolute";
		foto.style.top=(a*50+70)+"px";
		foto.style.right="30px";
		p1.style.position="absolute";
		p1.style.top=(a*50+55)+"px";
		p2.style.position="absolute";
		p2.style.top=(a*50+75)+"px";
		document.querySelector("#follow").getElementsByTagName("li")[a].appendChild(p1);
		document.querySelector("#follow").getElementsByTagName("li")[a].appendChild(p2);
		document.querySelector("#follow").getElementsByTagName("li")[a].appendChild(foto);
	}
}
follows();
//
function adição(a){
	if (document.getElementById("tbody").getElementsByTagName("p")[a].innerHTML=="1"){
		document.getElementById("tbody").getElementsByTagName("p")[a].innerHTML="";
	}
	else{
		document.getElementById("tbody").getElementsByTagName("p")[a].innerHTML="1";
	}
}
/*A function limpar() serve para limpar os posts presentes na div inferior
utilizando o laço de repetição e a quantidade de elementos postados para
serem apagados */
function limpar(quantidade,lista){
	for(var i=(quantidade-1);i>=0;i--){
		document.getElementsByClassName("comentário")[i].remove();
		lista.pop();
	}
	return lista;
}
