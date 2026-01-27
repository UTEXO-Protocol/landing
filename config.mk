# Variables.
ENVIRONMENT             ?=
IMAGE_TAG               ?= latest
REGISTRY_HOST           ?= ghcr.io/utexo-protocol
CURRENT_DATE_TIME       := $(shell date +'%Y-%m-%d')
LATEST_COMMIT           := $$(git rev-parse --short HEAD)

# Image names.
UTEXO_LANDING_IMAGE := utexo-landing

# Variables for build.
IMAGE_UTEXO_LANDING_BACKUP = $(REGISTRY_HOST)/$(UTEXO_LANDING_IMAGE)$(ENVIRONMENT):$(CURRENT_DATE_TIME)-$(LATEST_COMMIT)
IMAGE_UTEXO_LANDING_LATEST = $(REGISTRY_HOST)/$(UTEXO_LANDING_IMAGE)$(ENVIRONMENT):$(IMAGE_TAG)

