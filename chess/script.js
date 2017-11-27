

function chess(containerwidth) {
	document.write('<div class="container" style="width:' + containerwidth + 'px; height:' + containerwidth + 'px; border:1px solid black; margin: 10px auto;">');
	for (var a = 1; a <= 4; a++) {
		if (a == 4) {
			for (var i = 1; i <= 8; i++) {
				if (i % 2 == 0) {
					document.write('<div class="active" style="width: calc(100%/8); height: calc(100%/8); background: gray; text-align:center; line-height:calc(100%*2); cursor: pointer;">&#9817;</div>');
				} else {
					document.write('<div class="active" style="width: calc(100%/8); height: calc(100%/8); background: white; text-align:center; line-height:calc(100%*2); cursor: pointer;">&#9817;</div>');
				}
			}
		} else {
			if (a == 1) {
				for (var i = 1; i <= 8; i++) {
					if (i == 1 || i == 8) {
						if (i % 2 == 0) {
							document.write('<div class="active" style="width: calc(100%/8); height: calc(100%/8); background: gray; text-align:center; line-height:calc(100%*2); cursor:pointer;">&#9820;</div>');
						} else {
							document.write('<div class="active" style="width: calc(100%/8); height: calc(100%/8); background: white; text-align:center; line-height:calc(100%*2); cursor:pointer;">&#9820;</div>');
						}
					}
					if (i == 2 || i == 7) {
						if (i % 2 == 0) {
							document.write('<div class="active" style="width: calc(100%/8); height: calc(100%/8); background: gray; text-align:center; line-height:calc(100%*2); cursor:pointer;">&#9822;</div>');
						} else {
							document.write('<div class="active" style="width: calc(100%/8); height: calc(100%/8); background: white; text-align:center; line-height:calc(100%*2); cursor:pointer;">&#9822;</div>');
						}
					}
					if (i == 3 || i == 6) {
						if (i % 2 == 0) {
							document.write('<div class="active" style="width: calc(100%/8); height: calc(100%/8); background: gray; text-align:center; line-height:calc(100%*2); cursor:pointer;">&#9821;</div>');
						} else {
							document.write('<div class="active" style="width: calc(100%/8); height: calc(100%/8); background: white; text-align:center; line-height:calc(100%*2); cursor:pointer;">&#9821;</div>');
						}
					}
					if (i == 4 || i == 5) {
						if (i % 2 == 0) {
							document.write('<div class="active" style="width: calc(100%/8); height: calc(100%/8); background: gray; text-align:center; line-height:calc(100%*2); cursor:pointer;">&#9819;</div>');
						} else {
							document.write('<div class="active" style="width: calc(100%/8); height: calc(100%/8); background: white; text-align:center; line-height:calc(100%*2); cursor:pointer;">&#9818;</div>');
						}
					}

				}
			} else {
				for (var i = 1; i <= 8; i++) {
					if (i % 2 == 0) {
						document.write('<div  style="width: calc(100%/8); height: calc(100%/8); background: gray; text-align:center; line-height:calc(100%/8);"></div>');
					} else {
						document.write('<div  style="width: calc(100%/8); height: calc(100%/8); background: white; text-align:center; line-height:calc(100%/8);"></div>');
					}
				}
			}

		}

		if (a == 1) {
			for (var i = 1; i <= 8; i++) {
				if (i % 2 != 0) {
					document.write('<div class="active" style="width: calc(100%/8); height: calc(100%/8); background: gray; text-align:center; line-height: calc(100%*2); cursor: pointer;">&#9823;</div>');
				} else {
					document.write('<div class="active" style="width: calc(100%/8); height: calc(100%/8); background: white; text-align:center; line-height: calc(100%*2); cursor: pointer;">&#9823;</div>');
				}
			}
		} else {
			if (a == 4) {
				for (var i = 1; i <= 8; i++) {
					if (i == 1 || i == 8) {
						if (i % 2 != 0) {
							document.write('<div class="active" style="width: calc(100%/8); height: calc(100%/8); background: gray; text-align:center; line-height:calc(100%*2); cursor:pointer;">&#9814;</div>');
						} else {
							document.write('<div class="active" style="width: calc(100%/8); height: calc(100%/8); background: white; text-align:center; line-height:calc(100%*2); cursor:pointer;">&#9814;</div>');
						}
					}
					if (i == 2 || i == 7) {
						if (i % 2 != 0) {
							document.write('<div class="active" style="width: calc(100%/8); height: calc(100%/8); background: gray; text-align:center; line-height:calc(100%*2); cursor:pointer;">&#9816;</div>');
						} else {
							document.write('<div class="active" style="width: calc(100%/8); height: calc(100%/8); background: white; text-align:center; line-height:calc(100%*2); cursor:pointer;">&#9816;</div>');
						}
					}
					if (i == 3 || i == 6) {
						if (i % 2 != 0) {
							document.write('<div class="active" style="width: calc(100%/8); height: calc(100%/8); background: gray; text-align:center; line-height:calc(100%*2); cursor:pointer;">&#9815;</div>');
						} else {
							document.write('<div class="active" style="width: calc(100%/8); height: calc(100%/8); background: white; text-align:center; line-height:calc(100%*2); cursor:pointer;">&#9815;</div>');
						}
					}
					if (i == 4 || i == 5) {
						if (i % 2 != 0) {
							document.write('<div class="active" style="width: calc(100%/8); height: calc(100%/8); background: gray; text-align:center; line-height:calc(100%*2); cursor:pointer;">&#9812;</div>');
						} else {
							document.write('<div class="active" style="width: calc(100%/8); height: calc(100%/8); background: white; text-align:center; line-height:calc(100%*2); cursor:pointer;">&#9813;</div>');
						}
					}

				}
			} else {
				for (var i = 1; i <= 8; i++) {
					if (i % 2 != 0) {
						document.write('<div  style="width: calc(100%/8); height: calc(100%/8); background: gray; text-align:center; line-height:calc(100%/8);"></div>');
					} else {
						document.write('<div  style="width: calc(100%/8); height: calc(100%/8); background: white; text-align:center; line-height:calc(100%/8);"></div>');
					}
				}
			}

		}

	}
	document.write('</div>');
}



chess(600);