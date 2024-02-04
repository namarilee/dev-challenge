function update() {
    var elems = document.getElementsByClassName("connect-btn");
    for(var i = 0; i < elems.length; i++) {
        elems[i].addEventListener('click', function() {
            if (this.innerHTML == "Connect") {
                this.innerHTML = "Connected";
                this.style.backgroundColor = "rgb(207, 235, 208)";
				this.style.color = "rgb(103, 146, 105)";
				this.style.borderColor = "rgb(255, 255, 255)";
            } else {
                this.innerHTML = "Connect";
                this.style.backgroundColor = ""; // Reset to default color
				this.style.color = "";
				this.style.borderColor = "";
			}
        });
    }
}
window.onload = update;