//CitizenReport Model
Ext.define('Imarisha-sys.model.CitizenReport', {
  extend: 'Ext.data.Model',
  fields: [
    {name: 'report_id', type: 'int'},
    {name: 'title', type: 'string'},
    {name: 'report_type', type: 'string'},
    {name: 'description', type: 'string'},
    {name: 'lon', type: 'float'},
    {name: 'lat', type: 'float'},
    {name: 'wrua', type: 'string'},
    {name: 'report_date', type: 'date', dateFormat: 'd/m/Y'},
    {name: 'status', type: 'string'},
    {name: 'user_id', type: 'string'}
  ],
  idProperty: 'report_id'
});
//---------------------
