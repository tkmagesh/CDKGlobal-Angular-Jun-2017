var app = (function(){
	function addSync(x,y){
		console.log(`	[Service] processing ${x} and ${y}`)
		var result = x + y;
		console.log(`	[Service] returning result`);
		return result;
	}

	function addSyncClient(x,y){
		console.log(`[Client] triggering addSync`);
		var result = addSync(x,y);
		console.log(`[Client] result = ${result}`);
	}


	function addAsync(x,y, onResult){
		console.log(`	[Service] processing ${x} and ${y}`)
		setTimeout(function(){
			var result = x + y;
			console.log(`	[Service] returning result`);
			if (typeof onResult === 'function')
				onResult(result);
		},3000);
	}

	function addAsyncClient(x,y){
		console.log(`[Client] triggering addAsync`);
		addAsync(x,y, function(result){
			console.log(`[Client] result = ${result}`);	
		});
		
	}

	var addAsyncEvents = (function(){
		var _subscribers = [];
		function subscribe(subscriptionFn){
			if (typeof subscriptionFn === 'function')
				_subscribers.push(subscriptionFn);
		}
		function process(x,y){
			console.log(`	[Service] processing ${x} and ${y}`)
			setTimeout(function(){
				var result = x + y;
				console.log(`	[Service] returning result`);
				_subscribers.forEach(function(subscriptionFn){
					subscriptionFn(result);
				})
			},3000);
		}
		return {
			subscribe : subscribe,
			process : process
		}
	})();


	function addAsyncPromise(x,y){
		console.log(`	[Service] processing ${x} and ${y}`)

		var promise = new Promise(function(resolveFn, rejectFn){
			setTimeout(function(){
				var result = x + y;
				console.log(`	[Service] returning result`);
				resolveFn(result);
			},3000);
		});

		return promise;
	}

	return {
		addSyncClient : addSyncClient,
		addAsyncClient : addAsyncClient,
		addAsyncEvents : addAsyncEvents,
		addAsyncPromise : addAsyncPromise
	};

})();
