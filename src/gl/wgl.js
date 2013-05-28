TWOPFIVE.wgl = new function(){
	var gl = null;
	this.drawTexture = function(){
		if(gl === null)
			throw "[WGL] drawTexture called before gl initialized";
		
		//gl.enable(3553);  /** No need **/
		gl.enable(3042);
		gl.blendFunc(1, 771);
		
	};
	
	this.getGl = function(canvasElement){
		gl = canvasElement.getContext("experimental-webgl");
		if(gl === null)
			return false;
		return true;
	};
	
	this.glClear = function(n){
		gl.clear(n);
	};
	
	this.glEnable = function(n){
		gl.enable(n);
	};
	
};
