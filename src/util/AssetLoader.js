TWOPFIVE.assetLoader = function(assetURL, type, callback){
	var t = type;
	var a = null;
	var ref = assetURL;
	var c = callback;
	
	this.getType = function(){
		return t;
	}
	
	this.getAsset = function(){
		return a;
	};
	
	this.load = function(){
		if(t == "model"){
			var r = this;
			var xhr = new XMLHttpRequest();
			xhr.onreadystatechange = function(){
				if(xhr.readyState==4 && xhr.status==200){
					a = xhr.responseText;
					r.callback();
				}
			};
			xhr.open("GET", ref, true);
			xhr.send();
		}else if(t == "image"){
			a = new Image();
			a.src = ref;
			var self = this;
			a.onload(function(){
				self.callback();
			});
		}else
			this.callback();
	};
	
	this.callback = function(){
		if(typeof c == "function")
			try{
				c();
			}catch(e){}
	};
	
	this.setCallback = function(cb){
		c = cb;
	};
}

TWOPFIVE.assetsLoader = function(assetArray, onFinished){
	var numLoaded = 0;
	var numTotal = assetArray.length;
	var assetsToLoad = assetArray;
	for(var i = 0; i < numTotal; i++){
		if(!typeof assetArray[i] == "object"){
			numLoaded++;
			continue;
		}
		assetArray[i].setCallback(function(){
			numLoaded ++;
			if(numLoaded >= numTotal){
				onFinished();
			}
		});
		assetArray[i].load();
	}
}
