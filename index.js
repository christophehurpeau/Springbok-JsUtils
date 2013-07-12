var S=global.S={
	log:function(){console&&console.log.apply(console,arguments)},
	nextTick:/*#ifelse NODE*/(process.nextTick||function(fn){ setTimeout(fn,0); })/*#/if*/,
	
	/* IS */
	
	isString:function(varName){ return typeof varName === 'string'; },
	isObj:function(varName){ return typeof varName === 'object'; },
	isFunc:function(varName){ return typeof varName === 'function'; },
	isNb:function(varName){ return typeof varName === 'number'; },
	isArray:Array.isArray,
	
	/* utils */
	map:function(arrayOrObject,callback){
		return S.isArray(arrayOrObject) ? arrayOrObject.map(callback) : UObj.map(arrayOrObject,callback);
	},
	join:function(arrayOrObject,separator){
		return S.isArray(arrayOrObject) ? arrayOrObject.join(separator) : UObj.join(arrayOrObject,separator);
	},
	
	iterator:function(iterable){
		//TODO performances ?
		var iterator=iterable.iterator(),
			nextValue,hasNext=true,
			next=function(){
				try{
					nextValue=iterator.next();
				}catch(StopIteration){
					hasNext=false;
					nextValue=undefined;
				}
			};
		next();
		return Object.freeze({
			hasNext:function(){ return hasNext; },
			next:function(){ var currentValue=nextValue; next(); return currentValue; }
		})
	},
	
	
	/* Inheritance & Classes */
	defineProperties:function(targetObject,props, writable,configurable){
		/*#if DEV*/if(!S.isObj(targetObject) && !S.isFunc(targetObject)){
			console.error('targetObject is not an Object: ',targetObject,'props=',props,'writable=',writable);
			throw new Error('S.defineProperties : targetObject is not an Object !');
		}/*#/if*/
		writable=!!writable; configurable=!!configurable;
		if(props)
			for(var k in props)
				if(k==='writable') S.defineProperties(targetObject,props[k],true);
				else if(k==='configurable') S.defineProperties(targetObject,props[k],false,true);
				else Object.defineProperty(targetObject,k,{ value:props[k], writable:writable, configurable:configurable });
		return targetObject;
	},
	
	
	extProto:function(targetClass,methods, writable){
		S.defineProperties(targetClass.prototype,methods, writable);
		return targetClass;
	},
	
	mixin:function(targetClass){
		UArray.slice1(arguments).forEach(function(mixin){
			var methods=mixin._inheritsproto_;
			for(var i in methods)
				if(!targetClass.prototype.hasOwnProperty(i))
					Object.defineProperty(targetClass.prototype,i,{ value:methods[i] });
		});
	},
	
	extChild:function(child,parent,protoProps){
		// Set the prototype chain to inherit from `parent`, without calling `parent`'s constructor function.
		// + Set a convenience property in case the parent's prototype is needed later.
		child.prototype=Object.create(child.super_ = parent.prototype);
		Object.defineProperty(child,'superCtor',{ value:parent });
		
		// Add prototype properties (instance properties) to the subclass,
		// if supplied.
		S.extProto(child,protoProps);
		Object.defineProperty(child,'_inheritsproto_',{ value:protoProps });
		
		return child;
	},
	
	
	/* http://backbonejs.org/backbone.js */
	inherits:function(parent,protoProps,classProps){
		// The constructor function for the new subclass is either defined by you
		// (the "constructor" property in your `extend` definition), or defaulted
		// by us to simply call the parent's constructor.
		var child = protoProps && protoProps.hasOwnProperty('ctor') ?
				protoProps.ctor
				: function(){ parent.apply(this,arguments); };
		S.extChild(child,parent,protoProps,classProps);
		
		// Add static properties to the constructor function, if supplied.
		UObj.extend(child,classProps);
		
		child.prototype.self = child;
		//child.prototype.super_ = child.super_;
		//child.prototype.superCtor = parent;
		
		return child;
	},
	
	extThis:function(protoProps,classProps){ return S.extClass(this,protoProps,classProps); },
	extClass:function(parent,protoProps,classProps){
		var child = S.inherits(parent,protoProps,classProps);
		child.extend || (child.extend = S.extThis);
		return child;
	},
	newClass:function(protoProps,classProps){
		return S.extClass(Object,protoProps,classProps);
	},
	extClasses:function(parents,protoProps,classProps){
		var parent=parents[0];
		for(var i=1,l=parents.length;i<l;i++) UObj.union(protoProps,parents[i].prototype);
		return S.extClass(parent,protoProps,classProps);
	},
	
	/* HTML */
	escape:function(html){
		return String(html)
			.replace(/&(?!\w+;)/g, '&amp;')
			.replace(/</g, '&lt;')
			.replace(/>/g, '&gt;')
			.replace(/"/g, '&quot;');
	},
	escapeUrl:function(html){
		return html.replace('&','&amp;');
	},
	
	regexpEscape:function(s){
		return s.replace( /([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1" );
	},
};
//S.Class=S.extClass(Object);

/*#if NODE*/
module.exports=S;
/*#/if*/