init: clean down up build migration fixtures

clean:
	rm -Rf /dist

up:
	docker-compose up -d

down:
	docker-compose down

build:
	docker-compose exec rest-api npm run prebuild rest-api
	docker-compose exec rest-api npm run build rest-api

migration:
	docker-compose exec rest-api npm run migration:run

fixtures:
	docker-compose exec rest-api npm run fixtures

shell:
	docker-compose exec rest-api sh

test:
	docker-compose exec rest-api npm run test

test-e2e:
	docker-compose exec rest-api npm run test:e2e

fix:
	docker-compose exec rest-api npm run lint

logs:
	docker-compose logs -f rest-api

.PHONY: init clean up down build migration fixtures test shell fix log