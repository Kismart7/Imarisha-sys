#!C:/Users/Gathecha/python

import cgi
import psycopg2
import json
from psycopg2.extras import RealDictCursor

print ("Content-type: application/json")
print ()

file = open(".postgres")
connection_string = file.readline()
pg = psycopg2.connect(connection_string)

data_query = pg.cursor(cursor_factory=RealDictCursor)
data_query.execute("SELECT report_id, title, report_type, description, \
                      ST_X(geom) AS lon, ST_Y(geom) AS lat, status, \
                      wrua, to_char(report_date,'DD/MM/YYYY') AS report_date, user_id \
               FROM apps.reports ORDER BY report_id")

#print ('{"success":"true", "reports":',data_query.fetchall(),'}')
print (json.dumps(data_query.fetchall()))
