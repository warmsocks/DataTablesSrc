describe( "stateLoadParams Option", function() {
	dt.libs( {
		js:  [ 'jquery', 'datatables' ],
		css: [ 'datatables' ]
	} );

	describe("Check the defaults", function () {

		dt.html( 'basic' );
		it("Default should not be true", function () {
			$('#example').dataTable();
			expect($.fn.dataTable.defaults.fnStateLoadedCallback).not.toBe(true);
			//$.fn.DataTable.defaults
		});

		dt.html( 'basic' );
		it("First argument is the settings object", function () {
			test = false;
			$('#example').dataTable( {
				"stateSave": true,
				"stateLoadParams": function ( settings, data ){
					test = settings;
				}
			});
			expect(test == $('#example').DataTable().settings()[0]).toBe(true);
		});
		dt.html( 'basic' );

		it("Modify search parameter that gets saved", function () {
			test = false;
			$('#example').dataTable( {
				"staveSave": true,
				"stateLoadParams": function ( settings, data ){

				}
			});

		});
	});


});
