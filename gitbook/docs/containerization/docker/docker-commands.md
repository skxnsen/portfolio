---
cover: >-
  https://images.unsplash.com/photo-1605745341112-85968b19335b?crop=entropy&cs=srgb&fm=jpg&ixid=M3wxOTcwMjR8MHwxfHNlYXJjaHwxfHxkb2NrZXJ8ZW58MHx8fHwxNzQ1NzkxNzU3fDA&ixlib=rb-4.0.3&q=85
coverY: 0
---

# Docker commands

Docker is a containerization platform that allows SDETs to create consistent, isolated test environments.\
It enables fast setup of test dependencies ( services, browsers), ensures reproducible test runs, simplifies CI/CD pipelines, and improves scalability of automated testing.

### Getting Started

#### Create and run a container in background

```docker
docker run -d -p 80:80 docker/getting-started
```

* `-d`: Detached mode
* `-p 80:80`: Map port 80 on host to port 80 in container
* `docker/getting-started`: Image to use

#### Create and run a container in foreground

```docker
docker run -it -p 8001:8080 --name my-nginx nginx
```

* `-it`: Interactive mode with terminal
* `-p 8001:8080`: Map port 8001 on host to 8080 in container
* `--name my-nginx`: Name the container
* `nginx`: Image to use

***

### General Commands

<table><thead><tr><th width="264">Command</th><th>Description</th></tr></thead><tbody><tr><td><pre class="language-docker"><code class="lang-docker">docker ps
</code></pre></td><td>List running containers</td></tr><tr><td><pre class="language-docker"><code class="lang-docker">docker ps -a
</code></pre></td><td>List all containers</td></tr><tr><td><pre class="language-docker"><code class="lang-docker">docker ps -s
</code></pre></td><td>List running containers (with CPU/memory)</td></tr><tr><td><pre class="language-docker"><code class="lang-docker">docker images
</code></pre></td><td>List all images</td></tr><tr><td><pre class="language-docker"><code class="lang-docker">docker exec -it bash
</code></pre></td><td>Connect to container</td></tr><tr><td><pre class="language-docker"><code class="lang-docker">docker logs
</code></pre></td><td>Show container logs</td></tr><tr><td><pre class="language-docker"><code class="lang-docker">docker stop
</code></pre></td><td>Stop a container</td></tr><tr><td><pre class="language-docker"><code class="lang-docker">docker restart
</code></pre></td><td>Restart a container</td></tr><tr><td><pre class="language-docker"><code class="lang-docker">docker rm
</code></pre></td><td>Remove a container</td></tr><tr><td><pre class="language-docker"><code class="lang-docker">docker port
</code></pre></td><td>Show port mappings</td></tr><tr><td><pre class="language-docker"><code class="lang-docker">docker top
</code></pre></td><td>List running processes</td></tr><tr><td><pre class="language-docker"><code class="lang-docker">docker killcker
</code></pre></td><td>Kill a container</td></tr></tbody></table>

`<container>` can be container ID or name.

***

## Docker Containers

### Starting & Stopping

* Start: `docker start my-nginx`
* Stop: `docker stop my-nginx`
* Restart: `docker restart my-nginx`
* Pause: `docker pause my-nginx`
* Unpause: `docker unpause my-nginx`
* Kill: `docker kill my-nginx`
* Attach: `docker attach my-nginx`
* Wait (blocking): `docker wait my-nginx`

### Information

* List running: `docker ps`
* List all: `docker ps -a`
* Logs: `docker logs my-nginx`
* Inspect: `docker inspect my-nginx`
* Events: `docker events my-nginx`
* Public Ports: `docker port my-nginx`
* Running processes: `docker top my-nginx`
* Stats (resources): `docker stats my-nginx`
* Changes: `docker diff my-nginx`

### Creating

```docker
docker create [options] IMAGE
```

* `-a, --attach`: Attach stdout/err
* `-i, --interactive`: Attach stdin
* `-t, --tty`: Pseudo-tty
* `--name NAME`: Name the container
* `-p, --publish 5000:5000`: Port mapping
* `--expose 5432`: Expose a port
* `-P, --publish-all`: Publish all ports
* `--link container:alias`: Link containers
* `-v, --volume $(pwd):/app`: Mount a volume
* `-e, --env NAME=hello`: Set environment variables

Example:

```docker
docker create --name my_redis --expose 6379 redis:3.0.2
```

### Manipulating

* Rename: `docker rename old-name new-name`
* Remove: `docker rm my-nginx`
* Update: `docker update --cpu-shares 512 -m 300M my-nginx`

{% hint style="info" %}
Docker containers are lightweight, isolated environments that run applications and their dependencies.\
They share the host OS kernel but have their own filesystem, making them fast to start and efficient in resource usage. Containers provide consistency across development, testing, and production environments, simplifying deployment and scalability.
{% endhint %}

***

## Docker Images

### Manipulating

* List images: `docker images`
* Remove image: `docker rmi nginx`
* Load image: `docker load < ubuntu.tar.gz` or `docker load --input ubuntu.tar`
* Save image: `docker save busybox > ubuntu.tar`
* Show history: `docker history nginx`
* Commit container: `docker commit nginx`
* Tag image: `docker tag nginx user/nginx`
* Push image: `docker push user/nginx`

### Building Images

* Current directory: `docker build .`
* From GitHub: `docker build github.com/creack/docker-firefox`
* From Dockerfile via stdin: `docker build - < Dockerfile`
* From tar context: `docker build - < context.tar.gz`
* Tag build: `docker build -t user/nginx .`
* Custom Dockerfile: `docker build -f MyDockerfile .`
* From remote: `curl example.com/Dockerfile | docker build -f - .`

{% hint style="info" %}
Docker images are read-only templates used to create Docker containers.\
They contain the application code, libraries, dependencies, and runtime environment needed for the application to run. Images can be pulled from Docker Hub or built locally from a Dockerfile. Once created, images are versioned, shared, and reused to ensure consistency across environments.
{% endhint %}

***

## Docker Networking

### Manipulating Networks

* List networks: `docker network ls`
* Inspect network: `docker network inspect MyOverlayNetwork`
* Remove network: `docker network rm MyOverlayNetwork`
* Connect running container: `docker network connect MyOverlayNetwork nginx`
* Connect at start: `docker run -it -d --network=MyOverlayNetwork nginx`
* Disconnect: `docker network disconnect MyOverlayNetwork nginx`

{% hint style="info" %}
Docker Networking allows containers to communicate with each other and with the outside world.\
It provides various network types such as bridge, host, and overlay, each suited for different use cases. Networking features include connecting containers, exposing ports, managing network security, and handling communication between containers in a multi-host setup.
{% endhint %}

***

## Docker Cleanup

### Clean All

* Remove unused containers, volumes, networks: `docker system prune`
* Remove all unused images too: `docker system prune -a`

### Containers

* Stop all containers: `docker stop $(docker ps -a -q)`
* Delete stopped containers: `docker container prune`

### Images

* Remove dangling images: `docker image prune`
* Remove all unused images: `docker image prune -a`

### Volumes

* List volumes: `docker volume ls`
* Prune unused volumes: `docker volume prune`

{% hint style="info" %}
Docker volumes are used to persist data generated by and used by Docker containers.\
Unlike container filesystems, volumes are stored outside of containers, ensuring data remains intact even when containers are stopped or deleted. Volumes can be shared between containers, making them ideal for storing databases, configuration files, and logs.
{% endhint %}

***

## Miscellaneous

### Docker Hub

* Search images: `docker search nginx`
* Pull image: `docker pull user/image`
* Login: `docker login`
* Push image: `docker push user/image`

{% hint style="info" %}
Docker Hub is a cloud-based registry where users can store, share, and manage Docker images. It provides access to both public and private repositories, enabling easy distribution of containerized applications.
{% endhint %}

### Batch Cleanup

* Stop all containers: `docker stop -f $(docker ps -a -q)`
* Remove all containers: `docker rm -f $(docker ps -a -q)`
* Remove all images: `docker rmi -f $(docker images -q)`
