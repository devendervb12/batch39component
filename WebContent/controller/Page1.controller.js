sap.ui.controller("com.smax.batch39.controller.Page1", {

/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf view.Page1
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf view.Page1
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf view.Page1
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf view.Page1
*/
//	onExit: function() {
//
//	}
	/*onPressBtntoPage2 : function(oEvent){
		//Navigate to page 2
		var oRouter = this.getOwnerComponent().getRouter();
		oRouter.navTo("SecondPage", { custID : });
	}*/
	onItemPress : function(oEvent){
		var customerID = "";
		
		customerID = oEvent.getSource().getTitle();
		
		this.getOwnerComponent().getRouter().navTo("SecondPage", {custID : customerID});
	}

});


















