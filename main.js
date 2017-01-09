(function () {
	var sets = document.querySelectorAll('.set');
	var len = sets.length;
	var half = len/2;
	var that;
	var detect = true;
	var pending = false;
	var x = randomNum16(half);
	var y = randomNum16(half);
		
	function randomNum16(len) {
		var ary = [];
		for(var i = 1; i <= len; i++) {
			var n = Math.floor(len*(Math.random()));
			ary.splice(n, 0, i)
		}
		return ary
	}
	
	x.map(function (elm, idx) {
		var n = Math.floor(y.length*(Math.random()));
		y.splice(n, 0, elm);	
	});

	y.map(function (elm, idx) {
		sets[idx].querySelector('.number').textContent = elm;
	});
	

	[].map.call(sets, function (elm) {
		elm.addEventListener('click', detectFn, false);
	});

	
	function detectFn (e) {
		if(this.classList.contains('flag')|| pending ) return
		this.classList.add('flag');	

		if(detect) {	
			that = this;
			detect = false;

		} else {
			chk(that, this)
			detect = true;
		}
	}

	function chk(that, _this) {
		if(that.childNodes[3].textContent === _this.childNodes[3].textContent) {
				that = undefined;
		} else {
			pending = true;
			setTimeout(function () {
				that.classList.remove('flag');
				_this.classList.remove('flag');
				pending = false;
			}.bind(_this),500);
		}
	}
})()
