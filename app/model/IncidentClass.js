//IncidentClass model
Ext.define('Imarisha-sys.model.IncidentClass', {
  extend: 'Ext.data.Model',
  fields: [
    { name: 'index', type: 'int'},
    { name: 'abbr', type: 'string'},
    { name: 'description', type: 'string'},
    { name: 'marker', type: 'string'},
    { name: 'layer', type: 'object'}
  ],
  idProperty: 'abbr'
});
//-------------
