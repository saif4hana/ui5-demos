sap.ui.controller("externallibraries.demo", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf externallibraries.demo
*/
onInit: function() {
	
	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf externallibraries.demo
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf externallibraries.demo
*/
	onAfterRendering: function() {
		var inputId = this.getView().getContent()[0].getId();
		$("#"+inputId).knob({
		    'min':-50,
		    'max':50
		});
	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf externallibraries.demo
*/
//	onExit: function() {
//
//	}

});