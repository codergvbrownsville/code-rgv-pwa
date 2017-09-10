#!/bin/bash
docker exec -it my_mongo mongoimport --db codergv --collection events --type json --file events.json --jsonArray
