

sap.ui.core.UIComponent.extend("com.smax.batch39.Component", {
	
	metadata : {
		rootView : "com.smax.batch39.view.App",
		routing : {
			config : {
				viewType : "XML",
				viewPath : "com.smax.batch39.view",
				routerClass : "sap.m.routing.Router"
					
			},
			routes : [
			          {
			        	pattern : "",
			        	name : "FirstPage",
			        	viewName : "Page1",
			        	controlId : "idApp",
			        	controlAggregation : "pages"
			          },
			          {
				        	pattern : "toPage2",
				        	name : "SecondPage",
				        	viewName : "Page2",
				        	controlId : "idApp",
				        	controlAggregation : "pages"
				          }
			          ]
		}
		
	},
	init : function(){
		
		sap.ui.core.UIComponent.prototype.init.apply(this);
		
		this.getRouter().initialize();
	}
	
});

