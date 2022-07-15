#!/bin/bash
# How to?
#    ./make {route-folder} {packages.scripts}
#
# As an example below:
#    ./make demo dev
#    ./make admin dev
#    ./make blog dev
#    ./make landing dev
#    ./make admin build
#    ./make admin package
#    ./make admin preview
ROUTE_FOLDER=$1 $(which npm) run $2 ${@:3}
