
<!-- Hello ! this is the equivalent of me live coding this technical test. It will also
help me remember the different steps of this test when telling you about it during the
interview on Monday. And no, I don't usually do this when coding ;) -->

First observations :
  - index.js is basically the "functional" test that generates output.txt
  - another test not to break is pharmacy.test.js
  - refactoring and testing will be a big part of this test, it's not about just adding one drug

Tentative startegy :
  - start by writing some tests ?
  - refactor pharmacy.js, in a way that makes adding or removing drugs easy and painless
    How ? config is easier than code :)


#### step one, writing the test:
  - okay so it seems that expiresIn can be negative
  - pretty easy and pleasant so far

  PS: I've been running "yarn start" + "git status" to check that I haven't broken the index.js test so far => if output.txt is still the same it means the "test" is still passing

#### step two, refacto:
  - Constat:
    - `pharmacy.js` is basically unreadable, you have to read through 20 IFs to see what happens for a given drug.
    - with `pharmacy.js` you cannot immediately know the "rules of engagement/rules that govern the behavior" of a given drug: you are forced to read through the whole code, reason about it, and then deduce it yourself.

  => This code is not scalable, will become a "usine à gaz" real soon


  - How do we make it easier ?
    - If I want to add, remove, or change a drug => I only have to see the very few lines that describe this drug's behavior, not read through 40 lines of code.
    - Ideally I wouldn't eve see any code, and just modify a javascript object

  => why ? this would make our code much more scalable and understandable by humans

  - How do we make that ?
    - we define a base case, that applies to each drub by default
    - UNLESS that drug is a specific drug, in which case we will:
      - use a specific function to know how to update the benefit of a drug :)


In practice this seems to work : 
  => "Fixed all Herbal Tea tests in two seconds, CONFIG is turning out to be a good idea"

- Finished the refacto and I just ran "yarn start" + "git status" and "output.txt" hasn't changed


#### step three, later possible improvements

  - we already have good enough Tests and ESlint, which is very nice !
  - next I would add types, with either Flow or Typescript

  - I would make the Drug class throw an error if it's initialized with a drug
  that has a benefit that is either negative or higher than 50

  - I would turn index.js into a proper test instead of having to run "yarn start" then "git satus" to see whether the file has changed or not

  - Conceptually, I feel like "updateBenefitValue" should be a method of Drug and not Pharmacy, but this is open to discussion. And to be honest, I would rather write code without classes because I find it much easier to test and maintain (of course we still have Classes at CallDesk and I'm not really dogmatic with my opinions)
