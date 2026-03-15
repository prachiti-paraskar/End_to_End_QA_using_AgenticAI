# Comprehensive Test Plan for SCRUM-101

## A. Functional Scenarios

| ID | Scenario | Priority | AC Ref |
|----|----------|----------|--------|
| TP-A-001 | Verify cart page displays all added items with details | Critical | AC1 |
| TP-A-002 | Verify total price calculation on cart page | Critical | AC1 |
| TP-A-003 | Verify continue shopping and checkout options on cart page | High | AC1 |
| TP-A-004 | Verify checkout button redirects to information page | Critical | AC2 |
| TP-A-005 | Verify mandatory form fields on checkout information page | Critical | AC2 |
| TP-A-006 | Verify error message for empty fields on continue | Critical | AC2 |
| TP-A-007 | Verify order summary on checkout overview page | Critical | AC3 |
| TP-A-008 | Verify payment and shipping info display | High | AC3 |
| TP-A-009 | Verify subtotal, tax, and total calculation | Critical | AC3 |
| TP-A-010 | Verify cancel and finish options on overview page | High | AC3 |
| TP-A-011 | Verify finish button redirects to confirmation page | Critical | AC4 |
| TP-A-012 | Verify success message and back home button | Critical | AC4 |
| TP-A-013 | Verify validation error messages for invalid data | Critical | AC5 |
| TP-A-014 | Verify inability to proceed with invalid fields | High | AC5 |

## B. Negative / Sad-path Scenarios

| ID | Scenario | Priority | AC Ref |
|----|----------|----------|--------|
| TP-B-001 | Attempt checkout with empty cart | Critical | AC1 |
| TP-B-002 | Submit checkout info with all fields empty | Critical | AC2 |
| TP-B-003 | Submit with only first name filled | High | AC2 |
| TP-B-004 | Submit with only last name filled | High | AC2 |
| TP-B-005 | Submit with only zip code filled | High | AC2 |
| TP-B-006 | Network failure during order submission | High | AC4 |
| TP-B-007 | Session timeout during checkout | Medium | N/A |
| TP-B-008 | Invalid login attempt before checkout | Medium | N/A |

## C. Boundary Conditions

| ID | Scenario | Priority | AC Ref |
|----|----------|----------|--------|
| TP-C-001 | Checkout with maximum allowed cart items (99) | Medium | AC1 |
| TP-C-002 | Checkout with single item | High | AC1 |
| TP-C-003 | Zero quantity item in cart | Medium | AC1 |
| TP-C-004 | Maximum length for name fields | Medium | AC2 |
| TP-C-005 | Minimum length for zip code | Medium | AC2 |
| TP-C-006 | Very high price items | Low | AC3 |
| TP-C-007 | Free items (zero price) | Low | AC3 |

## D. Input Validation

| ID | Scenario | Priority | AC Ref |
|----|----------|----------|--------|
| TP-D-001 | Special characters in first name | Medium | AC2 |
| TP-D-002 | Special characters in last name | Medium | AC2 |
| TP-D-003 | Special characters in zip code | Medium | AC2 |
| TP-D-004 | SQL injection patterns in form fields | High | AC5 |
| TP-D-005 | XSS strings in name fields | High | AC5 |
| TP-D-006 | Numeric values in name fields | Medium | AC2 |
| TP-D-007 | Alphabetic values in zip code | Medium | AC2 |

## E. Security Checks

| ID | Scenario | Priority | AC Ref |
|----|----------|----------|--------|
| TP-E-001 | Direct access to /checkout URL without login | Critical | N/A |
| TP-E-002 | Attempt to modify cart via URL parameters | High | AC1 |
| TP-E-003 | Price tampering in order overview | Critical | AC3 |
| TP-E-004 | CSRF protection on checkout submission | High | AC4 |
| TP-E-005 | Session hijacking simulation | Medium | N/A |

## F. Accessibility (a11y) Checks

| ID | Scenario | Priority | AC Ref |
|----|----------|----------|--------|
| TP-F-001 | Keyboard navigation through checkout flow | Medium | N/A |
| TP-F-002 | ARIA labels on form fields | Medium | AC2 |
| TP-F-003 | Color contrast on error messages | Low | AC5 |
| TP-F-004 | Screen reader compatibility | Medium | N/A |
| TP-F-005 | Focus management during navigation | Medium | N/A |

## G. Cross-browser Matrix

| ID | Scenario | Priority | AC Ref |
|----|----------|----------|--------|
| TP-G-001 | Full checkout flow on Chromium | Critical | N/A |
| TP-G-002 | Full checkout flow on Firefox | Critical | N/A |
| TP-G-003 | Full checkout flow on WebKit | Critical | N/A |
| TP-G-004 | Form validation on Chromium | High | AC2 |
| TP-G-005 | Form validation on Firefox | High | AC2 |
| TP-G-006 | Form validation on WebKit | High | AC2 |

## H. Mobile Responsiveness

| ID | Scenario | Priority | AC Ref |
|----|----------|----------|--------|
| TP-H-001 | Checkout flow at 320px width | Medium | N/A |
| TP-H-002 | Checkout flow at 768px width | Medium | N/A |
| TP-H-003 | Checkout flow at 1024px width | Medium | N/A |
| TP-H-004 | Touch interactions on mobile | Medium | N/A |
| TP-H-005 | Form input on mobile devices | Medium | AC2 |