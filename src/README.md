# Campaign API

## Development

Start the API locally:
`node api`

## Configurations

Environment variables used in the application are read by
[ApplicationProperties](../blob/master/api/setup/applicationProperties.js).

| Env       |Description                   | Default   |
|-----------|------------------------------|-----------|
| PORT      | Port the server is listening | 8000      |
| DB_NAME   | Name of the Database         | core      |
| DB_USER   | Database user                | root      |
| DB_PASS   | Database password            | null      |
| TEST_HOST | Host to run tests against    | 127.0.0.1 |
| TEST_PORT | Port of the API to test      | 8000      |

## Vagrant

Start the API in a vagrantbox: `vagrant up`

By default the application runs on port 8000 and the port is forwarded to port
8000 on the host machine. The guest and host ports can be modified by setting
the environment variables `HOST_PORT` or `GUEST_PORT`. Check the
[Vagrantfile](../blob/master/Vagrantfile).

The [startup_script](../blob/master/vagrant_startup) copies the `src` directory
to `/app/src` in the virtual machine. Then it removes the `node_modules`
directory, runs `npm install` and installs
[forever](https://github.com/foreverjs/forever). After that the application is
startet by *forever*. 

## Test the API with curl

Create campaign:
`curl -X POST -H "Content-type: application/json" -d '{"type":"foo", "title":"bar"}' 127.0.0.1:8000/api/campaign`
Get all campaigns:
`curl -X GET -H 127.0.0.1:8000/api/campaign`
Get campaign detail:
`curl -X GET -H 127.0.0.1:8000/api/campaign/<id>`
Update campaign:
`curl -X PUT -H "Content-type: application/json" -d '{"type":"baz", "title":"qux"}' 127.0.0.1:8000/api/campaign/<id>`
Delete campaign:
`curl -X DELETE -H "Content-type: 127.0.0.1:8000/api/campaign/<id>`

## Tests

The test suite uses the [jasmine](http://jasmine.github.io/) framework.

Run the tests:

```
cd api
npm api/test
```

By default the tests run against `http://127.0.0.1:8000`. Check the
_Configurations_ section how to configure the test host and port for the
test suite.

## What's missing
- good error handling and mapping
- request validation
- detailed code documentation
- unit tests
