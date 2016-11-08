set -e

# npm config set registry https://registry.npm.taobao.org
# npm config set disturl https://npm.taobao.org/dist
# echo "=> Prepare run app."

# if [ -d /bundle ]; then
#   echo "=> unzip /bundle."
#   cd /bundle
#   tar xzf *.tar.gz
#   cd /bundle/bundle/programs/server/
#   # fix cloneCurrentTree problem
#   rm npm-shrinkwrap.json
#   # echo "=> [zhaoic] fix fibers"
#   # npm uninstall fibers
#   # npm install fibers
  # echo "=> npm install."
#   npm install --unsafe-perm
#   cd /bundle/bundle/
# elif [[ $BUNDLE_URL ]]; then
#   echo "=> unzip url bundle."
#   cd /tmp
#   curl -L -o bundle.tar.gz $BUNDLE_URL
#   tar xzf bundle.tar.gz
#   cd /tmp/bundle/programs/server/
#   npm install --unsafe-perm
#   cd /tmp/bundle/
# elif [ -d /built_app ]; then
#   echo "=> /bundle_app."
#   cd /built_app
# else
#   echo "=> You don't have an meteor app to run in this image."
#   exit 1
# fi

# if [[ $REBUILD_NPM_MODULES ]]; then
#   if [ -f /opt/meteord/rebuild_npm_modules.sh ]; then
#     echo "rebuild_npm_modules.sh."
#     cd programs/server
#     bash /opt/meteord/rebuild_npm_modules.sh
#     cd ../../
#   else
#     echo "=> Use meteorhacks/meteord:bin-build for binary bulding."
#     exit 1
#   fi
# fi

# Set a delay to wait to start meteor container
if [[ $DELAY ]]; then
  echo "Delaying startup for $DELAY seconds"
  sleep $DELAY
fi

# Honour already existing PORT setup
export PORT=${PORT:-80}

cd /bundle/bundle
echo "=> Starting meteor app on port:$PORT"
node main.js
