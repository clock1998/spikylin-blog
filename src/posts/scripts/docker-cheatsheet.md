---
title : Docker Cheatsheet
description: Some useful docker commands and scripts
date: '2025-01-05'
tags: 
    - DevOps
    - Docker
published: true
---
# Docker Cheat Sheet

## clear build cache
docker builder prune -f

## Reset docker
docker system prune -a

docker stop $(docker ps -a -q)

docker rm $(docker ps -a -q)

## How to show all logs
docker build --no-cache --progress=plain .

## How to view container

## How to check a docker container log
docker logs --since=1h <container_id>