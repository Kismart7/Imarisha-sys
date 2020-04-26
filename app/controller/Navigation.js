// Navigation controller
Ext.define('Imarisha-sys.controller.Navigation', {
  extend: 'Ext.app.Controller',

  stores: [ 'ReportedIncidents', 'IncidentTypes' ],
  models: [ 'CitizenReport', 'IncidentClass' ],
  views: [ 'ReportsLocation' ],

  init: function() {
    navigationController = this; //Creates a global variable to access this Controller
  },

  //---Controller's launch function ------------
  onLaunch: function(){
    this.getReportedIncidentsStore().load({
    });
  }
  //------------------

});
//---------------------------------------
