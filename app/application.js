// Requiring necessary modules
Ext.require([
  'Ext.container.Viewport',
  'Ext.tab.Panel',
  'Ext.layout.container.Border'
]);

// Activating debugging mechanism
Ext.Loader.setConfig({
  enabled: true,
  disableCaching: true
});

// App setup
Ext.application({
  name: 'Imarisha-sys',
  appFolder: 'app',

  launch: function() {
    Ext.create('Ext.container.Viewport', {//Viewport
    padding: 6,
  layout: 'fit',
items: [{
  xtype: 'tabpanel',
  items: [{
    name: 'public-panel',
    title:'&nbsp;&nbsp;Statistical & Cadastral Data&nbsp;&nbsp;',
    html: '<br />&nbsp;To be used for reporting incidents'
  }],
  border: false,
  tabBar: {
    items:[{
      xtype: 'tbfill'
    },{
      xtype: 'tool',
      type: 'help',
      tooltip: 'Get Help',
      Margins: '3 3 0 0',
      handler: function(event, toolEL, panel){
        //codel for help here....
      }
    }]
  }
}]
});
imarishaApp = this;
// Uncomment the line below in case of 'Gateway Timeout' responses on Layers
// OpenLayers.IMAGE_RELOAD_ATTEMPTS = 4;
  }
});
//
