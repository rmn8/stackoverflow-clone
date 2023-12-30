#start-containers.sh

#!/bin/sh
cd /home/ram/devopspipeline

docker-compose build
docker-compose up -d