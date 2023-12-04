// Função para validar o campo info1 de acordo com o padrão 'xxx.xxx_y'
function validateInfo1(event) {
    const info1Field = event.target;
    const inputValue = info1Field.value;
    const pattern = /^[a-zA-Z]{3}\.[a-zA-Z]{3}_[0-9]$/; // Padrão xxx.xxx_y
    const messageSpan = document.getElementById('info1Message');
  
    if (pattern.test(inputValue)) {
      messageSpan.textContent = 'Válido';
      messageSpan.classList.remove('invalid');
      messageSpan.classList.add('valid');
    } else {
      messageSpan.textContent = 'Inválido';
      messageSpan.classList.remove('valid');
      messageSpan.classList.add('invalid');
    }
  }
  
  // Função para validar o campo info2 de acordo com o padrão 'n.xxxxxx'
  function validateInfo2(event) {
    const info2Field = event.target;
    const inputValue = info2Field.value;
    const pattern = /^[A-Za-z].[0-9]{1,10}$/; // Padrão letra seguida por até 10 números
    const messageSpan = document.getElementById('info2Message');
  
    if (pattern.test(inputValue)) {
      messageSpan.textContent = 'Válido';
      messageSpan.classList.remove('invalid');
      messageSpan.classList.add('valid');
    } else {
      messageSpan.textContent = 'Inválido';
      messageSpan.classList.remove('valid');
      messageSpan.classList.add('invalid');
    }
  }
  
  // Função para gerar informações
  document.getElementById('gerarButton').addEventListener('click', function () {
    const info1Field = document.getElementById('info1').value;
    const info2Field = document.getElementById('info2').value;
  
    const infoOutput1 = document.getElementById('infoOutput1');
    const infoOutput2 = document.getElementById('infoOutput2');
  
    infoOutput1.textContent = `Informação 1:  ${info1Field}`;
    infoOutput2.textContent = `Informação 2:  ${info2Field}`;
  });
  
  // Função para apagar informações
  document.getElementById('apagarButton').addEventListener('click', function () {
    const infoOutput1 = document.getElementById('infoOutput1');
    const infoOutput2 = document.getElementById('infoOutput2');
  
    infoOutput1.textContent = '';
    infoOutput2.textContent = '';
  });
  