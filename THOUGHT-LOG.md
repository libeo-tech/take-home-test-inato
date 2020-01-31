
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