
/*
================================================================================
	RELACIONADO À IMAGEM DA TELA
================================================================================
*/

function imprimir ()
{
	const canvas = document.getElementById("canvas");
	const dataUrl = canvas.toDataURL("png");

	const imagem = new Image();
	imagem.src = dataUrl;

	const janela = window.open("imagem", '_blank');
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
	const dataUrl = c.toDataURL("png");
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

	var dia = d.getDate();
	var mes = formatar_numero(d.getMonth() + 1);
	var ano = d.getFullYear();

	return `${dia}/${mes}/${ano}`;
}

function picotar_str (str = String(""))
{
	var arr = str.split("\n");
	return arr;
}

function formatar_numero (n = Number(0))
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
