# WebDriverIOTestFramework

This is an example of project based on WebDriver IO. WebDriverIOTestFramework repository is actually more a get-to-know playground. Here i get familiar with this testing framework and it's cool features. Based on Udemy course: [WebdriverIO - Selenium Webdriver using Node.js & More!](https://www.udemy.com/course/automation-testing-javascript-webdriverio-selenium-more/)

## Resources

There are UI tests for such websites as:
* http://webdriveruniversity.com/ - Testing playground taken from the Udemy course.
* https://store.google.com/us/ - Google Store as an example of ecommerce webapp.

## Usage

1) Install [NodeJS](https://nodejs.org/en/download/).
2) Download the repository.

    You can do this using the command line: 
    ```bash
    git clone https://github.com/SergeiKuzminych/WebDriverIOTestFramework.git
    ```

3) Install dependencies.
    You can do this using the command line: 
    ```bash
    npm install
    ```
    It will install all necessary components based on package.json file.
    
    Keep in mind: chromedriver (location: /node_modules/chromedriver/lib/chromedriver/chromedriver.exe) should have version equal to your chrome browser version (For more information visit https://chromedriver.chromium.org/).

4) Run tests.
    * To run all tests you can use such command while you are in the project directory:

        ```bash
        npx wdio run ./wdio.conf.js
        ```

    * To run specific spec file:

        ```bash
        npx wdio run ./wdio.conf.js --spec %SPEC_NAME%.js
        ```

    * To run specific suite:

        ```bash
        npx wdio run ./wdio.conf.js --suite %SUITE_NAME%
        ```
        You can find list of available suites in wdio.conf.js file.

## Reporting

Beside default console-based reporter you can use auto-generated Allure report to examine test results. To do this you need to:

1) Install allure-commandline package globally by running:

    ```bash
    npm install -g allure-commandline --save-dev
     ```

    There might be a problem with [Execution Policy](https:/go.microsoft.com/fwlink/?LinkID=135170) while running this command. Quick fix is to open Windows PowerShell as an administrator and run ``` Set-ExecutionPolicy RemoteSigned ``` and answer "Yes for all" by entering ```A```.

2) Open allure-report by running this command being in main directory of the project:

    ```bash
    allure open
     ```

The Allure report will be opened in the new tab of your browser.


## Contributing

Pull requests are welcome. 

## License
[MIT](https://choosealicense.com/licenses/mit/)