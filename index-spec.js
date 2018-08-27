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

  const selectItem = product => {
    element.all(by.tagName("app-card")).each(item => {
      item
        .element(by.css("h4[class='card-title'] a"))
        .getText()
        .then(text => {
          if (text === product) {
            item.element(by.css("button[class*='btn-info']")).click();
          }
        });
    });
  };

  fit("Clicks on Shop Link", done => {
    fillTheForm("Vivek", "vr329@njit.edu", "password", "Female", 0);
    // emptyValues(email, " ");
    element(by.linkText("Shop")).click();
    //Take all cards into list and iterate thru them and get the title if title = desired title
    //Then select Add button
    selectItem("Samsung Note 8");
    selectItem("iphone X");
    selectItem("Nokia Edge");

    element(by.partialLinkText("Checkout"))
      .getText()
      .then(text => {
        // console.log(text);
        const res = text.split("(");
        console.log(res);
        // expect(parseInt(res[1].trim().charAt(0))).toBe(3);
      });
    //nav-link btn btn-primary

    element(by.css("a[class='nav-link btn btn-primary']")).click();
    let arr = [];

    // element(by.tagName("tbody"))
    //   .all(by.tagName("tr"))
    //   .each(item => {
    //     item
    //       .element(by.css("td:nth-child(4)"))
    //       .getText()
    //       .then((val, i) => {
    //         if (parseInt(val)) {
    //           arr.unshift(val);
    //           console.log(arr);
    //         }
    //         done();
    //       });
    //   });

    element(by.tagName("tbody"))
      .all(by.tagName("tr"))
      .each(item => item.element(by.css("td:nth-child(4)")))

      .getText()
      .then(val => console.log(val));

    // console.log(abcd);
    // console.log(typeof val);
    // var res = val.split(". ");

    // element.all(by.tagName("tr")).each(item => {
    //   item.element
    //     .all(by.css("td:nth-child(3)"))
    //     .element(by.tagName("strong"))
    //     .getText()
    //     .then(val => console.log(val));
    // });

    // element(by.tagName("tbody")).then(() => {
    //   element
    //     .all(by.tagName("tr"))
    //     .count()
    //     .then(val => console.log(val));
    // });

    // element
    //   .all(by.tagName("tr"))
    //   .get(4)
    //   .getText()
    //   .then(val => {
    //     const res = val;
    //   });

    // .each(item => {
    // item.element(by.css("text-center"));
    // .element(by.tagName("strong"))
    // .getText()
    // .then(val => console.log(val));
  });

  // .element(by.css("td:nth-child(3)"))
  // .element(by.tagName("strong"))
  // .getText()
  //   .getText()
  //   .then(val => console.log(val));
  // item.element(by.css("td:nth-child(3)"));
  // });
  // });
});
