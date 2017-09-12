var weight1 = 190;
var weight2 = 199;
var maxWeight = 200;

function tezina(num)
{
	if (weight1 + weight2 <= maxWeight) 
	{
		console.log("Nosimo oba.");
	}
	else if (weight1 > maxWeight && weight2 > maxWeight)
	{
		console.log("Ne mozemo poneti ni jedan.");
	}
	else if (weight1 > maxWeight && weight2 <= maxWeight)
	{
		console.log("Mozemo poneti drugi.");
	}
	else if (weight1 <= maxWeight && weight2 > maxWeight)
	{
		console.log("Mozemo poneti prvi.");
	}
	else if (weight1 <= maxWeight && weight2 <= maxWeight && weight1 + weight2 > maxWeight)
	{
		console.log("Mozemo poneti samo jedan. Moramo izabrati.")
	}
}

tezina();