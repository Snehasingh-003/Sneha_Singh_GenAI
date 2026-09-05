import {setWorldConstructor,World} from '@cucumber/cucumber';  
// this const is a method which i am importing from the cucumber package and it is 
// used to set the world constructor for the cucumber tests. 
// The world constructor is a function that creates a new instance 
// of the world object for each scenario. The world object is an object
//  that is shared between all steps in a scenario and can be used to store data and state between steps.

import {Browser,BrowserContext,Page} from '@playwright/test';

export class CustomWorld extends World {

browser!: Browser;

context!: BrowserContext;

page!: Page;

}

setWorldConstructor(CustomWorld);
