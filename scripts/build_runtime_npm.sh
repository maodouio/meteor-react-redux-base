set -e

echo "=> build runtime npm."

cd /bundle/bundle/programs/server/
# fix cloneCurrentTree problem
rm npm-shrinkwrap.json
# echo "=> [zhaoic] fix fibers"
# npm uninstall fibers
# npm install fibers
echo "=> npm install."
npm install --unsafe-perm

cd /bundle/bundle
