
async function imprimir ()
{
	const c = document.getElementById("canvas");
	const dataUrl = c.toDataURL("png");

	const imagem = new Image();
	imagem.src = dataUrl;

	const j = window.open("imagem", '_blank');
	j.document.write(imagem.outerHTML);

	j.focus();
	j.print();
	j.close();
}

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

function adicionar_item ()
{
	document.getElementById("desc").value += "\n01 - ";
}

function formatar_numero (n = Number(0))
{
	if(n > 9)
	{
		return n;
	}

	return '0' + n;
}
