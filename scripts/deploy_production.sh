#!/bin/bash

DIR=$(dirname $0)

pushd $DIR/../OnsenUI/css-components
gulp build
popd

pushd $DIR/../OnsenUI
gulp build
popd

pushd $DIR/..
echo "{\"key\": \"${AWS_KEY}\", \"secret\": \"${AWS_SECRET}\", \"bucket\": \"${AWS_BUCKET_EN_PROD}\", \"region\": \"${AWS_REGION_EN}\"}" > aws_en_prod.json 
gulp deploy --lang en --production
echo "{\"key\": \"${AWS_KEY}\", \"secret\": \"${AWS_SECRET}\", \"bucket\": \"${AWS_BUCKET_JA_PROD}\", \"region\": \"${AWS_REGION_JA}\"}" > aws_ja_prod.json 
gulp deploy --lang ja --production
popd
