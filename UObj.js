global.UObj={
	extend:function(target,object){
		if(object)
			for(var i in object)
				target[i]=object[i];
		return target;
	},
	mextend:function(target){
		var objects=this.aSlice1(arguments),l=objects.length,i,obj,j;
		for(i=0;i<l;i++){
			obj=objects[i];
			for(j in obj)
				target[j]=obj[j];
		}
		return target;
	},
	union:function(target,object){
		if(object)
			for(var i in object)
				if(target[i]===undefined) target[i]=object[i];
		return target;
	},
	clone:function(o){
		return UObj.extend({},o);
	},
	
	forEach:function(o,callback){
		Object.keys(o).forEach(function(k){ callback(k,o[k]); });
	},
	
	forEachAsync:function(o,iterator,onEnd){
		UArray.forEachAsync(Object.keys(o),function(k,onEnd){ iterator(k,o[k],onEnd); },onEnd);
	},
	forEachSeries:function(o,iterator,onEnd){
		UArray.forEachSeries(Object.keys(o),function(k,onEnd){ iterator(k,o[k],onEnd); },onEnd);
	},
	
	
	
	implode:function(o,glue,callback){
		if(S.isFunc(glue)){ callback=glue; glue=''; }
		if(!callback) callback=function(k,v){ return v };
		for(var res=keys=Object.keys(o),length=keys.length,i=0;i<length;i++){
			var k=keys[i];
			if(i!==0) res+=glue;
			res+=callback(k,o[k]);
		}
		return res;
	}
};
