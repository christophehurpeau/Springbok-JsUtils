require('../UArray');
module.exports = {
	slice1: function(t){
		t.deepEqual(UArray.slice1([1,2,3]),[2,3]);
		t.done();
	},
	has: function(t){
		t.strictEqual(UArray.has([1,2,3],4),false);
		t.strictEqual(UArray.has([1,2,3],2),true);
		t.done();
	},
	hasAmong: function(t){
		t.strictEqual(UArray.hasAmong([1,2,3],[4]),false);
		t.strictEqual(UArray.hasAmong([1,2,3],[2,4,6]),true);
		t.strictEqual(UArray.hasAmong([1,2,3],[4,2]),true);
		t.done();
	},
	remove: function(t){
		t.deepEqual(UArray.remove([1,2,3],1),[2,3]);
		t.deepEqual(UArray.remove([1,2,3],2),[1,3]);
		t.deepEqual(UArray.remove([1,2,3],3),[1,2]);
		t.deepEqual(UArray.remove([1,2,3],4),[1,2,3]);
		t.done();
	},
	last: function(t){
		t.strictEqual(UArray.last([1]),1);
		t.strictEqual(UArray.last([1,2,3]),3);
		t.done();
	},
	sortBy: function(t){
		t.deepEqual(UArray.sortBy([{a:2},{a:1}],'a','number'),[{a:1},{a:2}]);
		t.deepEqual(UArray.sortBy([{a:2},{a:1}],'a',true,'number'),[{a:2},{a:1}]);
		
		t.deepEqual(UArray.sortBy([{a:'a'},{a:'b'}],'a','string'),[{a:'a'},{a:'b'}]);
		t.deepEqual(UArray.sortBy([{a:'a'},{a:'b'}],'a',true,'string'),[{a:'b'},{a:'a'}]);
		
		t.done();
	},
	findBy: function(t){
		t.deepEqual(UArray.findBy([{a:2},{a:1}],'a',2),{a:2});
		t.strictEqual(UArray.findBy([{a:2},{a:1}],'a',3),false);
		t.deepEqual(UArray.findBy([{a:2},{a:1}],'a',1),{a:1});
		t.done();
	},
	findKeyBy: function(t){
		t.deepEqual(UArray.findKeyBy([{a:2},{a:1}],'a',2),0);
		t.strictEqual(UArray.findKeyBy([{a:2},{a:1}],'a',3),false);
		t.deepEqual(UArray.findKeyBy([{a:2},{a:1}],'a',1),1);
		t.done();
	}
}
