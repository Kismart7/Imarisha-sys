// ReportsLocation Viewport
Ext.define('Imarisha-sys.view.ReportsLocation',{
  extend: 'Ext.panel.Panel',
  alias: 'widget.reportslocation',

  //title : 'Locations of reported incidents',
  store: 'ReportedIncidents',

  initComponent: function() {

    this.items =[{
      xtype: 'panel', //navigation map's panel
      id: 'navMapPanel',
      layout: 'fit',
      padding: 5
    }],

    this.dockedItems = [{
      dock: 'bottom',
      xtype: 'toolbar',
      items: [{
        xtype: 'button',
        text: 'Base Map',
        enableToggle: true,
        toggleHandler: this.toggleBaseLayer,
        pressed: true
      }]
    }],

    this.callParent(arguments);
  },

  //Toggles the visilbility of the base layer
  toggleBaseLayer: function(item, pressed){
    //code goes here
  }
  //----------------------------
});
//-------------------
