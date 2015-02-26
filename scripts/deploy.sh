#!/bin/bash

DIR=$(dirname $0)

pushd $DIR/../OnsenUI/css-components
gulp build
popd

pushd $DIR/../OnsenUI
gulp build
popd

pushd $DIR/..
gulp deploy --lang en
gulp deploy --lang ja
popd
