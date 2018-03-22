Feature: Landing Feature

@TestScenario
  Scenario: Test angularjs.org
    Given I am on "https://angularjs.org"
    When I enter "Julie" in "yourName" field
    Then I should see "Hello Julie" in the "yourName" field
