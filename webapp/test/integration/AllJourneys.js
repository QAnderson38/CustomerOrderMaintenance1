jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 SalesOrderSet in the list
// * All 3 SalesOrderSet have at least one ToLineItems

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/sap/demo/customer/order/maintenance/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/sap/demo/customer/order/maintenance/test/integration/pages/App",
	"com/sap/demo/customer/order/maintenance/test/integration/pages/Browser",
	"com/sap/demo/customer/order/maintenance/test/integration/pages/Master",
	"com/sap/demo/customer/order/maintenance/test/integration/pages/Detail",
	"com/sap/demo/customer/order/maintenance/test/integration/pages/Create",
	"com/sap/demo/customer/order/maintenance/test/integration/pages/NotFound"
], function(Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.sap.demo.customer.order.maintenance.view."
	});

	sap.ui.require([
		"com/sap/demo/customer/order/maintenance/test/integration/MasterJourney",
		"com/sap/demo/customer/order/maintenance/test/integration/NavigationJourney",
		"com/sap/demo/customer/order/maintenance/test/integration/NotFoundJourney",
		"com/sap/demo/customer/order/maintenance/test/integration/BusyJourney",
		"com/sap/demo/customer/order/maintenance/test/integration/FLPIntegrationJourney"
	], function() {
		QUnit.start();
	});
});