#!/bin/bash
mongoimport --db codergv --collection events --type json --file events.json --jsonArray
