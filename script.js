function indexOfIgnoreCase(s1, s2) {
  // write your code here
	let idx=-1;
	for(let i=0;i<s1.length;i++){
		let ch=charAt(i);
		if(ch==s2.charAt(0)){
			let n=s2.length;
			for(let j=1;j<n;j++){
				ch1=s2.chaAt(j);
				if(ch1==s1.charAt(i+j) && j==n-1){
					idx=i;
				}
				
			}
		}
	}
	return idx;
}

// // // // Please do not change the code below
// const s1 = prompt("Enter s1:");
// const s2 = prompt("Enter s2:");
// alert(indexOfIgnoreCase(s1, s2));
