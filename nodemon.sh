#!/usr/bin/env bash
#  This script is useful for WebStorm so that 
#   when restarting in debug mode it does not use
#   use nodemon, which seems to just hang when restarting in debug mode
#  so it sees if it is going to be in debug mode then just calls node
PATH=/usr/local/bin:$PATH
CMD=nodemon
for s in $@; do
  case $s in
 	--debug-brk=*) CMD=node;break;;
  esac
done
echo "$CMD $*"
$CMD $*
