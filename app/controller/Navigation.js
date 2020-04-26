// Navigation controller
Ext.define('Imarisha-sys.controller.Navigation', {
  extend: 'Ext.app.Controller',

  stores: [ 'ReportedIncidents', 'IncidentTypes' ],
  models: [ 'CitizenReport', 'IncidentClass' ],
  views: [ 'ReportsLocation' ],

  navMap: null,

  init: function() {
    navigationController = this; //Creates a global variable to access this Controller
  },

  //--- create and display the navigation map
  displayNavigationMap: function(mapPanel){
    if (!this.navMap) {
      console.log('The panel ('+mapPanel.id +') is ready to deploy the map');
      this.navMap = new OpenLayers.Map(); // temporary
    } else {
      console.log('navMap needs refreshing');
    }
  },
  //----------------

  //---Controller's launch function ------------
  onLaunch: function(){
    this.getReportedIncidentsStore().load({
    });
  }
  //------------------

});
//---------------------------------------
