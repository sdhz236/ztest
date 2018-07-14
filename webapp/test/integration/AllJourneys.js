jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 ORDERHEADERSet in the list

sap.ui.require([
	"sap/ui/test/Opa5",
	"lscrm/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"lscrm/test/integration/pages/App",
	"lscrm/test/integration/pages/Browser",
	"lscrm/test/integration/pages/Master",
	"lscrm/test/integration/pages/Detail",
	"lscrm/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "lscrm.view."
	});

	sap.ui.require([
		"lscrm/test/integration/MasterJourney",
		"lscrm/test/integration/NavigationJourney",
		"lscrm/test/integration/NotFoundJourney",
		"lscrm/test/integration/BusyJourney",
		"lscrm/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});