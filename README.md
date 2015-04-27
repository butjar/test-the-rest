# Test-the-Rest - One of Blogfoster’s Coding Tests
This coding test is all about REST APIs and contains two fundamental tasks:

1. Design a REST API interface which follows best practices and
2. Implement the previous designed interface

The test itself is not related to any particular technology which means you can implement the REST API in any language you want.

A SQL schema definition serves as an underlaying data model. You will find the schema definition in the `data` folder.

## How To Do The Test
Please fork the project on Github. As soon as you have finished your implementation create an pull request against the original project and send us a message.

##  API Design
Please design an API  based on the schema definition. The schema definition is derived by the following data model:

![Data Model](/data/data_model.jpg)

It is completely up to you, how you structure the API and resources, but please design it from a user centric perspective.

- Expose all data. All fields which are in the schema definition should also be available through the API
- All resources should provide CRUD (create, read, update & delete) operations.

This task should only encourage you to think about the interface and the design before you start with the implementation. You don’t need to create any output for this tasks.

## API Implementation
After you have finished the design you can start with the implementation. Use whatever language and frameworks you want! The only prerequisite is using MySQL as the data source.

`schema.sql` in the `data` folder contains everything you need, starting from table definitions to dummy data.

Please put your code into the `src` folder and if necessary, add documentation or comments.

### Development Setup
If you have experience with [Vagrant](https://www.vagrantup.com/), we provide a Vagrant box for development. The box already contains a MySQL instance and the schema definition. You can use and extend the box or use whatever you want.

If you don't want to use the Vagrant setup you need to setup all dependencies on your local machine by your own.

If you need other dependencies (e.g. Nginx or Apache) as well you need to install it as well.

## Expectations
1. You need to implement at least one complete resource route (e.g. campaign) including all CRUD operations.
2. It is fine if you don’t implement all routes as long as you return some dummy data on all routes (only GET responses).
3. Your code should be **production ready**. This means the code is the best which you can currently deliver.

