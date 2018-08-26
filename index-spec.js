describe("The test of an E-Commerce Application", () => {
  //Test 1

  const fillTheForm = (name, email, password, gender, status) => {
    browser.get("https://qaclickacademy.github.io/protocommerce");
    element(by.name("name")).sendKeys(name);
    element(by.css("input[name='email']")).sendKeys(email);
    element(by.id("exampleInputPassword1")).sendKeys(password);
    element(by.css("input[type='checkbox']")).click();
    element(
      by.cssContainingText("[id='exampleFormControlSelect1'] option", gender)
    ).click();
    element
      .all(by.name("inlineRadioOptions"))
      .get(status)
      .click();

    element(by.buttonText("Submit"))
      .click()
      .then(() => {
        // browser.sleep(5000);
        element(by.css("div[class*='success']"))
          .getText()
          .then(text => console.log(text));
      });
  };

  it("Loads the E-Commerce Site", () => {
    fillTheForm("Vivek", "vr329@njit.edu", "password", "Female", 0);
  });

  const emptyValues = name => {
    element(by.name("name")).clear();
    element(by.name("name"))
      .sendKeys(name)
      .then(() => {
        element(by.css("[class='alert alert-danger']"))
          .getText()
          .then(txt => console.log(txt));
      });
  };

  it("Displays Error Message when Name field is less than 2 characters", () => {
    fillTheForm("Vivek", "vr329@njit.edu", "password", "Female", 0);
    emptyValues("v");
  });

  fit("Clicks on Shop Link", () => {
    fillTheForm("Vivek", "vr329@njit.edu", "password", "Female", 0);
    // emptyValues(email, " ");
    element(by.linkText("Shop")).click();
    //Take all cards into list and iterate thru them and get the title if title = desired title
    //Then select Add button

    element.all(by.tagName("app-card"));
  });
});
