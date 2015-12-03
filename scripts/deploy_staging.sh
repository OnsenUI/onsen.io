#!/bin/bash

DIR=$(dirname $0)

pushd $DIR/../project-templates
gulp build
popd

pushd $DIR/..
echo "{\"key\": \"${AWS_KEY}\", \"secret\": \"${AWS_SECRET}\", \"bucket\": \"${AWS_BUCKET_EN}\", \"region\": \"\"}" > aws_en.json
gulp deploy --lang en
echo "{\"key\": \"${AWS_KEY}\", \"secret\": \"${AWS_SECRET}\", \"bucket\": \"${AWS_BUCKET_JA}\", \"region\": \"\"}" > aws_ja.json
gulp deploy --lang ja
popd
