//ReportedIncidents store
Ext.define('Imarisha-sys.store.ReportedIncidents', {
  extend: 'Ext.data.store',
  model: 'Imarisha-sys.model.CitizenReport',

  proxy: {
    type: 'ajax',
    url: 'cgi/ReportsRetriever.py',
    reader: {
      type: 'json',
      root: 'reports',
      successProperty: 'success'
    }
  }
});
//--------------
