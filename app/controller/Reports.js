// Reports controllers
Ext.define('Imarisha-sys.controller.Reports', {
  extend: 'Ext.app.Controller',

  stores: [ 'ReportedIncidents', 'IncidentTypes'],
  models: [ 'CitizenReport', 'IncidentClass'],
  views: [ 'ReportsList'],
  init: function(){
    console.log('The controller on reports has been initialised');
  }
});
//--------------------------
