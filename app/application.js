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
    layout: 'border',
    items: [{
      xtype: 'panel', //view for reportLocations
      layout: 'fit',
      region: 'center'
    },{
      xtype: 'panel',
      name: 'south-panel',
      layout: 'border',
      region: 'south',
      minHeight: 200,
      maxHeight:400,
      collapsible: true,
      split: true,
      height: 250,
      items: [{
        xtype: 'panel', //neighborhoods view
        width: 250,
        region: 'west',
        margins: 2
      },{
        xtype: 'panel', //ReportsList view
        region: 'center',
        padding: '2 0 2 0'
      },{
        xtype: 'panel', // Images view
        width: 250,
        region: 'east',
        margins: 2
      }]
    }]
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
