#!/bin/bash
docker exec -it dark_browny mongoimport --db codergv --collection events --type json --file events.json --jsonArray
