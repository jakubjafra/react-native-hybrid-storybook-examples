#!/usr/bin/env bash
set -e

cd ./crna && yarn add ../react-native-hybrid-storybook/ && yarn run internal-compile-smoketest && cd ../
cd ./elements && yarn add ../react-native-hybrid-storybook/ && yarn run internal-compile-smoketest && cd ../
cd ./minimal-expo && yarn add ../react-native-hybrid-storybook/ && yarn run internal-compile-smoketest && cd ../
cd ./rninit && yarn add ../react-native-hybrid-storybook/ && yarn run internal-compile-smoketest && cd ../
cd ./typography && yarn add ../react-native-hybrid-storybook/ && yarn run internal-compile-smoketest && cd ../
cd ./minimal-rninit && yarn add ../react-native-hybrid-storybook/ && yarn run internal-compile-smoketest && cd ../