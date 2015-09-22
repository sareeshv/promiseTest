/**
 * Created by sareesh on 9/20/15.
 */

(function(){
	console.log('This is an Immediately-Invoked Function');

	/**
	 * Sample wait function
	 * @param ms
	 * @returns {*}
	 */
	function wait(ms) {
		var deferred = $.Deferred();
		setTimeout(deferred.resolve, ms);
		// We just need to return the promise not the whole deferred.
		return deferred.promise();
	};

	/**
	 * Sample wait function1
	 * The delay uses to show the concept
	 * @param ms
	 * @returns {*}
	 */
	function wait1(ms) {
		var deferred = $.Deferred();
		console.log('Executing wait1(100)');
		setTimeout(deferred.resolve, ms);
		// We just need to return the promise not the whole deferred.
		return deferred.promise();
	};

	/**
	 * Sample wait function2: to create a deferred function which resolves after the specified timeout
	 * The delay uses to show the concept
	 * @param ms
	 * @returns {*}
	 */
	function wait2(ms) {
		var deferred = $.Deferred();
		console.log('Executing wait2 after(100)');
		setTimeout(deferred.resolve, ms);

		// We just need to return the promise not the whole deferred.
		return deferred.promise();
	};

	//Usage1:
	wait(1500).done(function(){
		console.log('Executing after the 1500ms');
	});

	//Usage2:
	wait(1500).then(function () {
		// Do something brilliant here!
		console.log('Is executing after 1500ms');
	});

	//To show more than one function can be used together and will get executed after both are resolved.
	$.when(wait1(100), wait2(100)).done(function(){
		//Will be executed after the two promises are resolved
		console.log('Executing the promise after the 200ms. After the two promises are resolved');
		console.log('after the wait using multiple promises');
	})
})();
