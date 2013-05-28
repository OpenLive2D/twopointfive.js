TWOPFIVE.assetLoader = function(assetURL, type, callback){
	var t = type;
	var a = null;
	var c = callback;
	
	this.getType = function(){
		return t;
	}
	
	this.getAsset = function(){
		return a;
	};
	
	this.callback = function(){
		if(typeof c == "object")
			try{
				c();
			}catch(e){}
	};
}

TWOPFIVE.assetsLoader = function(assetArray, onFinished){
	
}
