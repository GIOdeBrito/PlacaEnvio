
var lojas = new Array();

window.onload = () => {

	definir_lojas();
	controles();
	desenhar_canvas();
}

function controles ()
{
	var sele = document.getElementById('loja-select');

	lojas.forEach((item, i) => {

		let opt = document.createElement("option");
		opt.value = `l${item.pegarNumero()}`;
		opt.innerHTML = item.pegarNome();

		sele.appendChild(opt);
	});

	const f_atualizar = () => {

		desenhar_canvas();
	};

	document.getElementById('loja-select').onchange = () => { f_atualizar(); }
	document.getElementById('chamado').onchange = () => { f_atualizar(); }
	document.getElementById('desc').onchange = () => { f_atualizar(); }
	document.getElementById('pessoa').onchange = () => { f_atualizar(); }
	document.getElementById('imp').onclick = () => { imprimir(); }
	document.getElementById('adi').onclick = () => { adicionar_item(); }
}

function opcao_loja ()
{
	const sele = document.getElementById("loja-select");
	//console.log(sele.selectedIndex);
	return lojas[sele.selectedIndex];
}

function definir_lojas ()
{
	lojas = new Array(
		new Loja("Maracanaú", "01"),
		new Loja("Varjota", "03"),
		new Loja("Monte Castelo", "04"),
		new Loja("Aracati", "05"),
		new Loja("Cocó", "06"),
		new Loja("Araxá", "07"),
		new Loja("Itaperi", "09"),
		new Loja("Eusébio", "10"),
		new Loja("Álvaro Weyne", "11"),
		new Loja("Santos Dumont", "12"),
		new Loja("MEGA Messejana", "13"),
		new Loja("Rui Barbosa", "14"),
		new Loja("Messejana", "15"),
		new Loja("Aldeota", "16"),
		new Loja("Maraponga", "17"),
		new Loja("Guararapes", "18"),
		new Loja("MEGA Pacajus", "19"),
		new Loja("Beberibe", "20"),
	);
}

function Loja (_nome, _num) {

	var numero = _num;
	var nome = _nome;

	this.pegarNumero = () => {
		return numero;
	};
	this.pegarNome = () => {
		return nome;
	};
}