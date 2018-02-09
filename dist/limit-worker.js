onmessage = function (e) {
    console.log(e.data);
    let positionAndTexture = [];
    let index = []
    let m = e.data.num;
    let r = e.data.r;
    let notSame = true;
    for (let i = 0; i <= m; i++) {
      	let u;
      	let v;
        let x;
        let z;
        let l = r*Math.sin(Math.PI*i/m);
        let y = r*Math.cos(Math.PI*i/m);
        if(i == m) notSame = false;
        else notSame = true;
        for(let j = 0; j <= m; j++){
          let first = (i*(m+1)) + j;
          let second = first + m + 1;
          x = l*Math.cos(2*Math.PI*j/m);
          z = l*Math.sin(2*Math.PI*j/m);
          u = 1-(j/m);  
          v = 1-(i/m);
          positionAndTexture.push(x, y, z, u, v);
          if(notSame&&(j !== m)){
          	index.push(first);
          	index.push(second);
          	index.push(first + 1);
          	index.push(second);
          	index.push(second + 1);
          	index.push(first + 1);
          }
          
        }
      }
    postMessage({positionAndTexture:positionAndTexture,index:index})
};
