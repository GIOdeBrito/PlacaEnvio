
/*
================================================================================
	RELACIONADO À IMAGEM DA TELA
================================================================================
*/

function imprimir ()
{
	const canvas = document.getElementById("canvas");
	const dataUrl = canvas.toDataURL("jpg");

	//const dimensoes = new Vetor2(1024,720);

	const imagem = new Image();
	imagem.src = dataUrl;

	/*const neo_canvas = document.createElement("canvas");
	const neo_ctx = neo_canvas.getContext("2d");
	neo_canvas.width = dimensoes.x;
	neo_canvas.height = dimensoes.y;
	neo_canvas.setAttribute("id","canvas-invisivel");

	document.body.appendChild(neo_canvas);

	const urlFinal = neo_canvas.toDataURL("jpg");

	const imagem_final = new Image();
	imagem_final.src = urlFinal;
	imagem_final.onload = () =>
	{
		neo_ctx.drawImage(imagem, 0,0, dimensoes.x,dimensoes.y);

		const janela = window.open(imagem_final, '_blank');
		janela.document.write(imagem_final.outerHTML);
	};*/

	const janela = window.open("img", '_blank');
	janela.document.write(imagem.outerHTML);

	setTimeout(() =>
	{
		janela.focus();
		janela.print();
		janela.close();
	}, 250);
}

function salvar_imagem ()
{
	const c = document.getElementById("canvas");
	const dataUrl = c.toDataURL("jpg");
	const link = document.createElement("a");
	const l = opcao_loja();

	link.download = `${l.pegarNome().toLowerCase()}_${data_formatada().replaceAll("/","")}.png`;
	link.href = c.toDataURL();
	link.click();

	link.remove();
}

/*
================================================================================
	MODIFICAÇÃO DE DADOS
================================================================================
*/

function data_formatada ()
{
	const __d = new Date().toLocaleString("en-US",{timeZone:"America/Fortaleza"});
	const d = new Date(__d);

	var dia = numero_data(d.getDate());
	var mes = numero_data(d.getMonth() + 1);
	var ano = d.getFullYear();

	return `${dia}/${mes}/${ano}`;
}

function picotar_str (str = String(""))
{
	var arr = str.split("\n");
	return arr;
}

function numero_data (n = Number(0))
{
	if(n > 9)
	{
		return n;
	}

	return String('0' + n);
}

/*
================================================================================
	OUTROS
================================================================================
*/

function adicionar_item ()
{
	document.getElementById("desc").value += "\n01 - ";
}
