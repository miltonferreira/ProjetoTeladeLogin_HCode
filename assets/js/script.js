let email = 'joao@hcode.com.br';

let email_ = 'joao_2@hcode.com.br';

console.log('Seu email é:' + email);
console.log(`Seu email é: ${email_}`);

document.getElementById('btn-submit').addEventListener('click', e => {
    console.log('O botao foi clicado!');
});

document.getElementById('form-login').addEventListener('mouseenter', e => {
    console.log('Mouse sobre o formulário.');
});

document.querySelector('#form-login').addEventListener('mouseleave', e => {
    console.log('Mouse saiu do formulário.');
});

document.querySelector('#form-login').addEventListener('submit', e => {
    e.preventDefault();

    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    let json = {
        email,
        password
    };

    if(!json.email){
        console.error("o campo email deve ser preenchido!");
    } else if(!json.password){
        console.error("o campo password deve ser preenchido!");
    }else{
        console.log("Entrou no sistema");
    }

});