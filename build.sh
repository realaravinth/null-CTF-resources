#!/bin/bash
root_dir=$(git rev-parse --show-toplevel)
tsc $root_dir/challenges.ts --module commonjs
rm -rf $root_dir/build
mv $(echo "$root_dir/*js") $root_dir/build
mv $(echo "$root_dir/challenges/*.js") $root_dir/build
