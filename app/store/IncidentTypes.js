//IncidentTypes store
Ext.define('Imarisha-sys.store.IncidentTypes', {
  extend: 'Ext.data.Store',
  model: 'Imarisha-sys.model.IncidentClass',
  data: [
    { index:1, abbr:"wp", description: "Pollution", marker:"red", layer:new Object() },
    { index:2, abbr:"sw", description: "Sewerage", marker:"purple", layer:new Object() },
    { index:3, abbr:"dg", description: "Degradation", marker:"brown", layer:new Object() },
    { index:4, abbr:"pl", description: "Pipe-line", marker:"cyan", layer:new Object() },
    { index:5, abbr:"rd", description: "Road", marker:"black", layer:new Object() },
    { index:6, abbr:"wa", description: "Water", marker:"blue", layer:new Object() }
  ]
});
//--------------
