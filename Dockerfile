FROM index.alauda.cn/zhaoic/debian:m1
MAINTAINER Maodou Ltd.

ENV METEORD_DIR /opt/meteord

ADD bundle.tar.gz /bundle
COPY scripts/build_runtime_npm.sh $METEORD_DIR/
COPY scripts/run_app.sh $METEORD_DIR/

RUN bash $METEORD_DIR/build_runtime_npm.sh

EXPOSE 80
ENTRYPOINT bash $METEORD_DIR/run_app.sh
