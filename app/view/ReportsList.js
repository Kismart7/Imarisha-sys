//ReportsList Viewport
Ext.define('Imarisha-sys.view.ReportsList', {
  extend: 'Ext.grid.Panel',
  alias: 'widget.reportslist',

  store: 'ReportedIncidents',

  repTypeDesc: function(abbr){ //Retrieves the descriptive text of incident types
  var typesStore = Ext.getStore("IncidentTypes");
  return typesStore.getById(abbr).data.description;
},

viewConfig: {
  stripeRows: true
},
columnLines: true,

initComponent: function() {
  this.columns = [
    Ext.create("Ext.grid.RowNumberer"),
    {
      header : "Title",
      width : 150,
      sortable : true,
      dataIndex : "title"
    },{
      header : "Type",
      width : 70,
      sortable : true,
      renderer : this.repTypeDesc,
      dataIndex : "report_type"
    },{
      header    : "Description",
      flex      : 1,
      sortable  : false,
      dataIndex : "description"
    },{
      header    : "Lon (X)",
      width     : 60,
      sortable  : false,
      dataIndex : "lon", xtype: "numbercolumn", format:"0.0"
    },{
      header    : "Lat (Y)",
      width     : 60,
      sortable  : false,
      dataIndex : "lat", xtype: "numbercolumn", format:"0.0"
    },{
      header    : "Wrua",
      width     : 80,
      sortable  : false,
      dataIndex : "wrua"
    },{
      xtype     :"datecolumn",
      header    : "Date",
      width     : 80,
      sortable  : true,
      format    : "d-M-Y",
      dataIndex : "report_date"
    },{
      xtype     : "actioncolumn",
      header    : "ok",
      width     : 30,
      items : [{
        icon : "images/blank.gif",
        tooltip : "",
        getClass : function(value,metadata,record){//Status icon selection
        if (record.data.status == "repaired"){
          return "repaired-icon";
        } else if (record.data.status == "in progress"){
          return "inprogress-icon";
        } else{
          return "waiting-icon";
        }
      },
      getTip : function (value,metadata,record){//Status tooltip selection
      if (record.data.status == "repaired"){
        return "Repaired";
      } else if (record.data.status == "in progress"){
        return "work in progress";
      } else{
        return "Recently added";
      }
    }
      }]
    }
  ];

  this.dockedItems = [{// Task Bar items
  dock : "bottom",
xtype: "toolbar",
items: [{
  xtype: "button",
  text: "New Report",
  action: "newreport"

},"-",{
  xtype: "button",
  text: "Commit Changes"
}]
}],
this.callParent(arguments);
},
});
//-----------------
