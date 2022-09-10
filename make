#!/bin/bash
# How to?
#    ./make {route-folder} {packages.scripts}
#
# As an example below:
#    ./make demo dev
#    ./make admin dev
#    ./make admin-in dev
#    ./make admin-out dev
#    ./make blog dev
#    ./make landing dev
#
# Others such as:
#    ./make admin build
#    ./make admin package
ROUTE_FOLDER=$1 $(which npm) run $2 ${@:3}
