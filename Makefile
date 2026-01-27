# Makefile Variables.
include config.mk

# Docker's BuildKit feature.
export DOCKER_BUILDKIT=1

.PHONY: build push docker help

build: ## Build utexo landing docker image.
	docker build --ssh default -f ./Dockerfile -t $(IMAGE_UTEXO_LANDING_BACKUP) . && \
	docker build --ssh default -f ./Dockerfile -t $(IMAGE_UTEXO_LANDING_LATEST) .

push: ## Push utexo landing docker image.
	docker push $(IMAGE_UTEXO_LANDING_BACKUP) && \
	docker push $(IMAGE_UTEXO_LANDING_LATEST)

docker: ## Build and push all docker images.
	make build push

help: ## Show this help.
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-20s\033[0m %s\n", $$1, $$2}'

