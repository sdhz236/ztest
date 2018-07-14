jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"lscrm/test/integration/NavigationJourneyPhone",
		"lscrm/test/integration/NotFoundJourneyPhone",
		"lscrm/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});