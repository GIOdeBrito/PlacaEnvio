
function desenhar_canvas ()
{
	var c = document.getElementById("canvas");
	var ctx = c.getContext("2d");

	//var link = "https://upload.wikimedia.org/wikipedia/pt/5/57/Doom_cover_art.jpg";
	var link = "./recursos/modelo.png";
	var dados = opcao_loja();

	var chamado = document.getElementById("chamado");
	var desc = document.getElementById("desc");
	var pessoa = document.getElementById("pessoa");

	var t = definir_vetor_texto(dados);

	var img = new Image();
	img.src = link;
	img.onload = () => {

		ctx.drawImage(img, 0,0, c.width,c.height);

		t.forEach((item, i) => {

			ctx.font = item.fonte;
			ctx.textAlign = item.alinhamento;

			ctx.fillText(item.texto, item.Posicao().x, item.Posicao().y);
		});
	};
}

function definir_vetor_texto (dados)
{
	var t = new Array();
	const cLargura = document.getElementById("canvas").width / 2;

	t.push(new Texto(`PARA: ${dados.pegarNome()}`, new Vetor2(160,280)));
	t.push(new Texto(`${dados.pegarNumero()}`, new Vetor2(1850,280)));
	t.push(new Texto(`#${chamado.value}`, new Vetor2(160,405), "left", "62"));

	var quebrasl = picotar_str(desc.value);
	var posY = 0;

	for(let i = 0; i < quebrasl.length; i++)
	{
		t.push(new Texto(`${quebrasl[i]}`, new Vetor2(160,741 + posY), "left", "110"));
		posY += 115;
	}

	// Destinatário
	let destinatarioPosY = t[t.length-1].Posicao().y + 125;
	t.push(new Texto(`DE: ${pessoa.value} - T.I`, new Vetor2(160,destinatarioPosY)));

	// Frágil
	let fragilPosY = t[t.length-1].Posicao().y + 150;
	t.push(new Texto(`FRÁGIL`, new Vetor2(cLargura,fragilPosY), "center"));

	// Data de envio
	let dataPosY = t[t.length-1].Posicao().y + 150;
	t.push(new Texto(`DATA: ${data_formatada()}`, new Vetor2(cLargura,dataPosY), "center"));

	return t;
}

function Texto (t, v = new Vetor2(0,0), a = "left", f = "120") {

	this.texto = t;
	this.fonte = `bold ${f}px Liberation Serif`;
	this.alinhamento = a;
	var pos = v;

	this.Posicao = () => {
		return pos;
	};
}

function Vetor2 (x, y) {
	this.x = x;
	this.y = y;
}
