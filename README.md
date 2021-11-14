# Lab 8 - Starter

Em Nam (A14569484)

1. Where would you fit your automated tests in your Recipe project development pipeline? Select one of the following and explain why.

Within a Github action that runs whenever code is pushed 

Placing the tests within a Github action means that it is guaranteed that the code is tested before it is pushed. Although it would be good to test code locally as well, there is no guarantee that all team members would do this and have their code pass. It would be better to have a uniform consistent set of tests that guarantees all code pushed will be tested. Putting tests in at this stage is a lot better than after all development is complete. This way we can debug iteratively and we should always be able to maintain a working piece of software instead of realizing everything is broken at the end of development. This also helps because it ensures that developers are not working off of code that is unknowingly not running properly.

### Part 1 - Expose: E2E Testing with Jest-Puppeteer
2. Would you use an end to end test to check if a function is returning the correct output? (yes/no) 

No, end to end testing makes sure the interactions and flow of the system is working properly. For checking the output of a specific function, it would be better to use a unit test.

### Part 1 - Explore: Unit Testing with Jest
3. Would you use a unit test to test the “message” feature of a messaging application? Why or why not? For this question, assume the “message” feature allows a user to write and send a message to another user.

I would not because the "message" feature covers the majority of the application's functionality. I think a lot of parts go into writing and sending a message correctly and the unit tests should be done on these smaller parts instead of the whole "messaging" ability.

4. Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not? For this question, assume the “max message length” feature prevents the user from typing more than 80 characters.

Yes I would. The "max message length" feature is a small scale feature and would be a small part to test. Changing this and testing this feature should not affect the overall applications ability to message another user (user should still be able to type, send message, receive messages, send pictures, etc.) so it would be a good chance to decompose the tests.
