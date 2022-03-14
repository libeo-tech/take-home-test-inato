# Inato Take-Home Test Specification

## Description / Before reading the PR

This is my repo for the test project that you sent me. I spent 1h45 on this project.

I must precise that there has been an issue with what I did : I did all my commits on a new branch under the main repository. When I tried to add them to this repo, I did a few bad moves and lost my commits.. I am sorry for this, and as a substitute, I will explain here what I did and the order in which I did it.

## Methodology

1. I added a .prettierrc to stop having conflitcs on my IDE
2. I wrote more tests, at least one for each marginal case. I did it drug by drug in order to get a better understanding of what is happening
3. I started refactoring the `updateBenefitValue`. I always kept the previous one, as deprecated, in case I wanted to go back.

- I implemented a config reader that sends a default config, and then started to work my way through repairing the tests
- I implemented the config for Herbal Tea drug via the `name` and `benefitMultipliersByExpiresIn` properties of the config
- I implemented the 'Magic Pill' config and added the `expires` property that I saw I needed.
- I implemented the 'Fervex' drug config and added the `benefitAfterExpired` that I saw I needed
- I added a configuration and test for the 'Dafalgan' drug
- I finished cleaning my code and commented where it was needed
- I lost my commits and wrote this README
