document.querySelectorAll('.setup').forEach(div => {
	div.onclick = show;
});

function show() {
	const hidden = this.getElementsByClassName('hidden')[0];
	if (hidden.style.display == 'none') {
  	hidden.style.display = 'block';
  } else {
  	hidden.style.display = 'none';
  }
}