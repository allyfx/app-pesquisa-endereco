function getCep (cep) {
	let xmlRequest = new XMLHttpRequest();
	
	cep = cep.split('-').join('');
	
	xmlRequest.open('GET', `https://viacep.com.br/ws/${cep}/json/unicode/`);

	xmlRequest.onreadystatechange = () => {
		if (xmlRequest.readyState == 4 && xmlRequest.status == 200) {
			const response = JSON.parse(xmlRequest.responseText);

			document.getElementById('endereco').value = response.logradouro;
			document.getElementById('bairro').value = response.bairro;
			document.getElementById('cidade').value = response.localidade;
			document.getElementById('uf').value = response.uf;
		}
	}

	xmlRequest.send();
}