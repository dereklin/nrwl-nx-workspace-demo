Feature: Main Tab Feature

@LandingPageScenario
  Scenario: Show Landing Page
    Given I am on the main tab
    When I enter IVV
    Then I should see the cost analysis chart
