window.addEventListener('load',() => {
	const canvas = document.querySelector('canvas');
	const ctx    = canvas.getContext('2d');
	let drawing  = false;
	let clr = document.getElementById('clear');
	let predict = document.getElementById('predict');
	//resize
	// canvas.height = 500;
	// canvas.width  = 500;




	function startPosition() {
		drawing = true;
	}
	
	function finishedPosition() {
		drawing = false;
		ctx.beginPath();
	}

	function draw(e) {
		if(!drawing) return;
		ctx.lineWidth = 5;
		ctx.lineCap = 'round';

		ctx.lineTo(e.clientX, e.clientY);
		ctx.stroke();
	}
	//event listners
	canvas.addEventListener('mousedown',startPosition);
	canvas.addEventListener('mouseup',finishedPosition);
	canvas.addEventListener('mousemove',draw);


	//  button 
	if(clr.addEventListener){
		clr.addEventListener('click',()=> {
			ctx.fillStyle = 'white';
			ctx.fillRect(0,0,500,500);
		})
	}

	if(predict.addEventListener) {
		predict.addEventListener('click',() => {
			alert('Sorry the code is under Construction!');
		})
	}







});

