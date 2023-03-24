function compoundInterest(p, t, r, n) {
	let a = p * ((1 + r/n) ** (n*t));
	let total = a.toFixed(2);
	return parseFloat(total)
}
