//função para mascarar e criar botão de copiar do nome
function maskNome(){
    let nome = document.getElementById('nome').value
    let nomec = document.getElementById('nomec')
    let inputNome = document.getElementById('inputNome').value = nomeMask(nome)
    nomec = nomec.innerHTML = `<button onclick="copyNome()" id="btn" type="button" class="maskBtn">Copy</button>`
}

//função para criar a mascara do nome
function nomeMask(name) {
    var regex1 = /\b[^\W]{2}([^\W]{1,2})\b/g;
    var regex2 = /\b[^\W]{2}([^\W]{2,})[^\W]\b/g;
    return name.replace(regex1,"**$1").replace(regex2,"**$1*");
 }
        
//email
//função para ocultar caracteres do email
function emailMask(email) {
	var maskedEmail = email.replace(/([^@\.])/g, "*").split('');
	var previous	= "";
	for(i=0;i<maskedEmail.length;i++){
		if (i<=1 || previous == "." || previous == "@"){
			maskedEmail[i] = email[i];
		}
		previous = email[i];
	}
	return maskedEmail.join('');
}
//função para identificar um email válido
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
//função para mascarar e criar botão de copiar do email
 function execute(){ 
   let email =  document.getElementById('email').value
   let inputEmail = document.getElementById('inputEmail')
   let emailc = document.getElementById('emailc').innerHTML = `<button onclick="copyEmail()" id="btn" type="button" class="maskBtn">Copy</button>`
   
   if(!isEmail(email)){
    
    inputEmail.value = 'Não é um email válido'    
     
   }else{
    
    inputEmail.value = emailMask(email)
   }
   
 }
//cpf
const mask = {
    //método para criar a mascara do cpf
    cpf (value){
        return value
        .replace(/\D/g, '')
        .replace(/(\d{3})(\d)/,'$1.$2')
        .replace(/(\d{3})(\d)/,'$1.$2')
        .replace(/(\d{3})(\d{1,2})/,'$1-$2')
        .replace(/(-\d{2})\d+?$/,'$1')
    },
    //método para criar a mascara da data
    data (value){
        return value
        .replace(/\D/g, '')
        .replace(/(\d{2})(\d)/,'$1/$2')
        .replace(/(\d{2})(\d)/,'$1/$2')
        .replace(/(\d{4})(\d{1,2})/,'$1')
        .replace(/(-\d{2})\d+?$/,'$1')
      
    }
    
}


//função para ocultar caracteres do cpf
 function cpfMask(cpf) {
     var cpfMask = cpf.replace(/([^@\.-])/g, "*").split('');
     var previous	= "";
     for(i=0; i<cpfMask.length; i++){
         if (i<=2 || i==13){
             cpfMask[i] = cpf[i];
         }
         previous = cpf[i];
     }
     return cpfMask.join('');
 }
//função para mascarar e criar botão de copiar do cpf
 function executeCpf(){ 
    let cpf =  document.getElementById('cpf').value
    let inputCpf = document.getElementById('inputCpf')
    let cpfc = document.getElementById('cpfc').innerHTML = `<button onclick="copyCpf()" id="btn" type="button" class="maskBtn">Copy</button>`
    

    if(cpfMask(cpf).length>14){
    
    let cpfcsul = cpfMask(cpf).slice(0,-1)
    inputCpf= inputCpf.value = cpfcsul
      
    }else{
        inputCpf = inputCpf.value = cpfMask(cpf) 
    
    }
    
  }

document.querySelectorAll('#data, #cpf').forEach(($input)=>{
   const field =  $input.dataset.js
   $input.addEventListener('input',(e)=>{
    e.target.value = mask[field](e.target.value)
   }, false)
})

//função para ocultar caracteres da data
function dateMask(date) {
    var dateMask = date.replace(/([^/])/g, "*").split('');
    var previous = "";
    for(i=0; i<dateMask.length; i++){
        if (i<=1){
            dateMask[i] = date[i];
        }
        previous = date[i];
    }
    return dateMask.join('');
}
//função para mascarar e criar botão de copiar da data
function maskDate(){ 
    let data =  document.getElementById('data').value
    let inputData = document.getElementById('inputData')
    let datac = document.getElementById('datac').innerHTML = `<button onclick="copyData()" id="btn" type="button" class="maskBtn">Copy</button>`
    

    if(dateMask(data).length>10){
    
    let datacsul = dateMask(data).slice(0,-1)
    console.log(datasul)
    inputData = inputData.value = datacsul
      
    }else{
        inputData = inputData.value = dateMask(data)
    
    }
    
  }
//mensagem
//função para achar email na mensagem e ocutar caracteres do email
function acharEmail(){
let texto = document.getElementById('texto').value
console.log(texto)
let RegExAcharEmail = /(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/gi
let emailEncontrado = RegExAcharEmail.exec(texto)
console.log(emailEncontrado[0])
let regExpEmail = texto.replace(/(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/gi, emailMask(emailEncontrado[0]))
console.log(regExpEmail)
let c = document.getElementById('texto').value = regExpEmail
}

//função para achar cpf na mensagem e ocutar caracteres do cpf
function acharCpf(){
    let texto = document.getElementById('texto').value
    // console.log(texto)
    let RegExAcharCpf = /\d{3}\.\d{3}\.\d{3}-\d{2}|\d{7}-\d{2}|\d{11}/gi
    let cpfEncontrado = RegExAcharCpf.exec(texto)
    let regExpCpf = texto.replace(/\d{3}\.\d{3}\.\d{3}-\d{2}|\d{7}-\d{2}|\d{11}/gi, cpfMask(cpfEncontrado[0]))
    // console.log(regExpCpf)
    let c = document.getElementById('texto').value = regExpCpf
    }
//função para achar data na mensagem e ocutar caracteres da data
function acharData(){
        let texto = document.getElementById('texto').value
        console.log(texto)
        let RegExAcharData = /(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/gi
        let dataEncontrado = RegExAcharData.exec(texto)
        console.log(dataEncontrado[0])
        let regExpData = texto.replace(/(\d{1,4}([.\-/])\d{1,2}([.\-/])\d{1,4})/gi, emailMask(dataEncontrado[0]))
        // console.log(regExpData)
        let c = document.getElementById('texto').value = regExpData
        }
 //função para achar email e cpf na mensagem e ocutar caracteres
function acharCpfEmail(){
    acharEmail()
    acharCpf()
}
//função para achar email, cpf e data na mensagem e ocutar caracteres
function acharTodos(){
    acharEmail()
    acharCpf()
    acharData()
}
//função para limpar área da mensagem
function limpar(){
    let texto = document.getElementById('texto').value = ''
    

}
//função copiar nome
function copyNome(){
    var copyText = document.getElementById("inputNome");
    
    copyText.select();

    document.execCommand("copy");
}
//função copiar email
function copyEmail(){
    var copyText = document.getElementById("inputEmail");
    
    copyText.select();

    document.execCommand("copy");
}
//função copiar cpf
function copyCpf(){
    var copyText = document.getElementById("inputCpf");
    
    copyText.select();

    document.execCommand("copy");
}
//função copiar data
function copyData(){
    var copyText = document.getElementById("inputData");
    
    copyText.select();

    document.execCommand("copy");
}
