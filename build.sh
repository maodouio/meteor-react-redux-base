npm install
meteor build --architecture=os.linux.x86_64 .
mv meteor-react-redux-base.tar.gz bundle.tar.gz

docker build -t="index.alauda.cn/zhaoic/meteord:base-staging" .
# docker push index.alauda.cn/zhaoic/meteord:base-react

rm bundle.tar.gz