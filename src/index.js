module.exports = function zeros(expression) {
	let a = expression.split('*');
	let quantity2 = 0;
	let quantity5 = 0;
	for(let i=0;i<a.length;i++) {
	    let matches = a[i].match(/!!/) 
		if (matches) { 
			a[i] = Number(a[i].replace(/!!/, ''));
			if (a[i]%2) {
				quantity5 = quantity5 + Math.floor(((a[i]+5)/10)) + Math.floor(((a[i]+25)/50)) + Math.floor(((a[i])/125));
				} else {
				quantity5 = quantity5 + Math.floor((a[i]/10)) + Math.floor((a[i]/50)) ;
				quantity2 = quantity2 + Math.floor((a[i]/2)) + Math.floor((a[i]/4)) + Math.floor((a[i]/8)) + Math.floor((a[i]/16)) + Math.floor((a[i]/32)) + Math.floor((a[i]/64)) + Math.floor((a[i]/128)) ;	
			}
		} else {
			a[i] = a[i].replace(/!/, '');
			quantity5 = quantity5 + Math.floor((a[i]/5)) + Math.floor((a[i]/25)) + Math.floor((a[i]/125));
			quantity2 = quantity2 + Math.floor((a[i]/2)) + Math.floor((a[i]/4)) + Math.floor((a[i]/8)) + Math.floor((a[i]/16)) + Math.floor((a[i]/32)) + Math.floor((a[i]/64)) + Math.floor((a[i]/128)) ;
		} 
    } 
	if (quantity5 < quantity2 ) {return quantity5} else {return quantity2}
}
