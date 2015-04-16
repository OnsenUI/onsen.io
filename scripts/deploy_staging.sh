#!/bin/bash

DIR=$(dirname $0)

pushd $DIR/../OnsenUI/css-components
gulp build
popd

pushd $DIR/../OnsenUI
gulp build
popd

pushd $DIR/../project-templates
gulp build
popd

pushd $DIR/..
echo "{\"key\": \"${AWS_KEY}\", \"secret\": \"${AWS_SECRET}\", \"bucket\": \"${AWS_BUCKET_EN}\", \"region\": \"${AWS_REGION_EN}\"}" > aws_en.json 
gulp deploy --lang en
echo "{\"key\": \"${AWS_KEY}\", \"secret\": \"${AWS_SECRET}\", \"bucket\": \"${AWS_BUCKET_JA}\", \"region\": \"${AWS_REGION_JA}\"}" > aws_ja.json 
gulp deploy --lang ja
popd
