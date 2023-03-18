
function imprimir ()
{
	const c = document.getElementById("canvas");
	const dataUrl = c.toDataURL("png");

	//console.log(dataUrl);

	const j = window.open(dataUrl, '_blank');
}

function data_formatada ()
{
	const __d = new Date().toLocaleString("en-US",{timeZone:"America/Fortaleza"});
	const d = new Date(__d);

	return `${d.getDate()}/${zero_f(d.getMonth())}/${d.getFullYear()}`;
}

function picotar_str (str = String(""))
{
	var arr = str.split("\n");
	return arr;
}

function zero_f (num = Number(0))
{
	if(num > 9)
	{
		return num;
	}

	return '0' + num;
}

function adicionar_item ()
{
	document.getElementById("desc").value += "\n01 - ";
}
