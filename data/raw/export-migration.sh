#!/bin/bash
for i in {1..12}
do
  node export-migration.js $i
done