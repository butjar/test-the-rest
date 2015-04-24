# Test-the-Rest - One of Blogfoster’s Coding Tests
This coding test is all about REST APIs and contains two fundamental tasks:

1. Design a REST API interface which follows best practices and
2. Implement the previous designed interface

The test itself is not related to any particular technology which means you can implement the REST API in any language you want. 

A SQL schema definition serves as underlaying data model. You will find the schema definition in the `data` folder.

##  API Interface Design
Please design an API interface based on the schema definition. The schema definition is derived by the following data model:

![Data Model](/data/data_model.jpg)

It is completely up to you how you structure the interface and resources, but please design it from a user centric perspective.

- Expose all data. All fields which are in the schema should be also be available through the API
- All resources should provide CRUD (create, read, update & delete) operations.

This task should only encourage you to think about the interface and the design before you start with the implementation. You don’t need to create any output for this tasks.

## API Implementation
After you have finished the design you can start with the implementation. Use whatever language and frameworks you want!

Please put your code into the `src` folder and if necessary add documentation or comments.

We provide a Vagrant box for development. It already contains a Mysql instance and the schema definition. If you want you can use and extend the box or use whatever else you want. 

## Expectations
1. You need to implement at least one resource route (e.g. campaign) completely including all CRUD operations. 
2. It is fine if you don’t implement all routes as long as you return some dummy data on all routes (only GET responses).
3. Your code should be production ready. This means the code is the best you can deliver currently.

