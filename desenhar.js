
function desenhar_canvas ()
{
	var c = document.getElementById("canvas");
	var ctx = c.getContext("2d");

	//var link = "https://upload.wikimedia.org/wikipedia/pt/5/57/Doom_cover_art.jpg";
	const link = "https://raw.githubusercontent.com/GIOdeBrito/PlacaEnvio/main/modelo/modelo.png";
	var dados = opcao_loja();

	if(dados.pegarNumero() == "99")
	{
		let nome = document.getElementById("custom_destino").value;
		let num = document.getElementById("custom_num").value;
		dados = new Loja(nome,num);
	}

	var texto = definir_vetor_texto(dados);
	var img = new Image();

	img.crossOrigin = "anonymous";
	img.src = link;
	img.onload = () =>
	{
		ctx.drawImage(img, 0,0, c.width,c.height);

		texto.forEach((item, i) =>
		{
			ctx.font = item.fonte;
			ctx.textAlign = item.alinhamento;
			ctx.fillText(item.texto, item.Posicao().x,item.Posicao().y);
		});
	};
}

function definir_vetor_texto (dados)
{
	const chamado = document.getElementById("chamado");
	const desc = document.getElementById("desc");
	const pessoa = document.getElementById("pessoa");
	const cLargura = parseFloat(document.getElementById("canvas").width / 2);

	const func_def_pos = (num) =>
	{
		let y = textos_linha[textos_linha.length-1].Posicao().y + num;
		return y;
	};
	const func_valor_chamado = (valor) =>
	{
		if(valor)
		{
			return String(`#${valor}`);
		}

		return valor;
	};

	var textos_linha = new Array(
		new Texto(`PARA: ${dados.pegarNome()}`, new Vetor2(160,280)),
		new Texto(`${dados.pegarNumero()}`, new Vetor2(1850,280)),
		new Texto(`${func_valor_chamado(chamado.value)}`, new Vetor2(160,405), "left", "70"),
	);
	var quebrasl = picotar_str(desc.value);
	var posY = 0;

	for(let i = 0; i < quebrasl.length; i++)
	{
		textos_linha.push(new Texto(`${quebrasl[i]}`, new Vetor2(160,741 + posY), "left", "110"));
		posY += 115;
	}

	// Remetente
	textos_linha.push(new Texto(`DE: ${pessoa.value} - T.I`,new Vetor2(160,func_def_pos(125))));

	// Frágil
	textos_linha.push(new Texto(`FRÁGIL`,new Vetor2(cLargura,func_def_pos(150)),"center"));

	// Data de envio
	textos_linha.push(new Texto(`DATA: ${data_formatada()}`,new Vetor2(cLargura,func_def_pos(150)),"center"));

	return textos_linha;
}

function Texto (t, v = new Vetor2(0,0), a = "left", f = "120")
{
	this.texto = t;
	this.fonte = `bold ${f}px Liberation Serif`;
	this.alinhamento = a;

	var pos = v;

	this.Posicao = () =>
	{
		return pos;
	};
}

function Vetor2 (x, y)
{
	this.x = x;
	this.y = y;
}
