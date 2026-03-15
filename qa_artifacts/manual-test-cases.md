# Manual Test Cases for SCRUM-101

## TC-001
**Title:** Verify cart displays all added items with details  
**AC Reference:** AC1  
**Priority:** Critical  
**Preconditions:** User is logged in with items in cart  
**Test Steps:**  
1. Navigate to cart page  
2. Observe the cart contents  
**Test Data:** Standard user login, add 2-3 items to cart  
**Expected Result:** All items displayed with name, description, price, quantity  

## TC-002
**Title:** Verify total price calculation  
**AC Reference:** AC1  
**Priority:** Critical  
**Preconditions:** User logged in with multiple items  
**Test Steps:**  
1. Add items to cart  
2. Go to cart page  
3. Check total price  
**Test Data:** Item prices: $29.99, $9.99  
**Expected Result:** Total = sum of all item prices  

## TC-003
**Title:** Verify continue shopping option  
**AC Reference:** AC1  
**Priority:** High  
**Preconditions:** Items in cart  
**Test Steps:**  
1. Click "Continue Shopping"  
2. Verify navigation to inventory page  
**Test Data:** N/A  
**Expected Result:** Redirected to products page  

## TC-004
**Title:** Verify checkout button redirects to info page  
**AC Reference:** AC2  
**Priority:** Critical  
**Preconditions:** Items in cart  
**Test Steps:**  
1. Click "Checkout"  
2. Observe page change  
**Test Data:** N/A  
**Expected Result:** Redirected to checkout info page with form fields  

## TC-005
**Title:** Verify mandatory fields on checkout info  
**AC Reference:** AC2  
**Priority:** Critical  
**Preconditions:** On checkout info page  
**Test Steps:**  
1. Check form fields  
**Test Data:** N/A  
**Expected Result:** First Name, Last Name, Zip Code fields present and marked required  

## TC-006
**Title:** Verify error for empty first name  
**AC Reference:** AC2  
**Priority:** Critical  
**Preconditions:** On checkout info page  
**Test Steps:**  
1. Leave first name empty, fill others  
2. Click Continue  
**Test Data:** Last Name: Doe, Zip: 12345  
**Expected Result:** Error: "First Name is required"  

## TC-007
**Title:** Verify order summary on overview page  
**AC Reference:** AC3  
**Priority:** Critical  
**Preconditions:** Valid info entered  
**Test Steps:**  
1. Enter valid info and continue  
2. Check overview page  
**Test Data:** First: John, Last: Doe, Zip: 12345  
**Expected Result:** All cart items listed with details  

## TC-008
**Title:** Verify payment and shipping info  
**AC Reference:** AC3  
**Priority:** High  
**Preconditions:** On overview page  
**Test Steps:**  
1. Observe payment and shipping sections  
**Test Data:** N/A  
**Expected Result:** Info from form displayed  

## TC-009
**Title:** Verify subtotal, tax, total  
**AC Reference:** AC3  
**Priority:** Critical  
**Preconditions:** On overview page  
**Test Steps:**  
1. Check calculations  
**Test Data:** Items totaling $39.98  
**Expected Result:** Subtotal correct, tax calculated, total = subtotal + tax  

## TC-010
**Title:** Verify cancel option  
**AC Reference:** AC3  
**Priority:** High  
**Preconditions:** On overview page  
**Test Steps:**  
1. Click Cancel  
**Test Data:** N/A  
**Expected Result:** Return to cart page  

## TC-011
**Title:** Verify finish redirects to confirmation  
**AC Reference:** AC4  
**Priority:** Critical  
**Preconditions:** On overview page  
**Test Steps:**  
1. Click Finish  
**Test Data:** N/A  
**Expected Result:** Redirected to confirmation page  

## TC-012
**Title:** Verify success message and back home  
**AC Reference:** AC4  
**Priority:** Critical  
**Preconditions:** On confirmation page  
**Test Steps:**  
1. Observe message and button  
**Test Data:** N/A  
**Expected Result:** "Thank you" message, "Back Home" button  

## TC-013
**Title:** Verify error for special characters in name  
**AC Reference:** AC5  
**Priority:** Medium  
**Preconditions:** On info page  
**Test Steps:**  
1. Enter special chars in first name  
2. Click Continue  
**Test Data:** First: @#$%, Last: Doe, Zip: 12345  
**Expected Result:** Validation error message  

## TC-014
**Title:** Verify cannot proceed with invalid data  
**AC Reference:** AC5  
**Priority:** High  
**Preconditions:** Invalid data entered  
**Test Steps:**  
1. Try to continue  
**Test Data:** Empty fields  
**Expected Result:** Stay on page, show errors  

## TC-015
**Title:** Attempt checkout with empty cart (Negative)  
**AC Reference:** AC1  
**Priority:** Critical  
**Preconditions:** Cart empty  
**Test Steps:**  
1. Try to access checkout  
**Test Data:** N/A  
**Expected Result:** Prevented or error  

## TC-016
**Title:** Session expiry during checkout (Edge)  
**AC Reference:** N/A  
**Priority:** Medium  
**Preconditions:** Mid-checkout  
**Test Steps:**  
1. Expire session  
2. Continue  
**Test Data:** N/A  
**Expected Result:** Redirect to login  

## TC-017
**Title:** Browser back button during checkout (Edge)  
**AC Reference:** N/A  
**Priority:** Medium  
**Preconditions:** On overview page  
**Test Steps:**  
1. Use back button  
**Test Data:** N/A  
**Expected Result:** Handle gracefully  

## TC-018
**Title:** Price tampering via URL (Security)  
**AC Reference:** AC3  
**Priority:** High  
**Preconditions:** On overview  
**Test Steps:**  
1. Modify URL params  
**Test Data:** Change price in URL  
**Expected Result:** Prices not altered  

## TC-019
**Title:** Direct access to checkout without login (Security)  
**AC Reference:** N/A  
**Priority:** Critical  
**Preconditions:** Not logged in  
**Test Steps:**  
1. Navigate to /checkout  
**Test Data:** N/A  
**Expected Result:** Redirect to login  

## TC-020
**Title:** Mobile responsiveness at 320px (Mobile)  
**AC Reference:** N/A  
**Priority:** Medium  
**Preconditions:** Viewport 320px  
**Test Steps:**  
1. Complete checkout  
**Test Data:** N/A  
**Expected Result:** UI adapts properly  

## TC-021
**Title:** Cross-browser on Firefox (Cross-browser)  
**AC Reference:** N/A  
**Priority:** Critical  
**Preconditions:** Firefox browser  
**Test Steps:**  
1. Full checkout flow  
**Test Data:** N/A  
**Expected Result:** Works identically  

## TC-022
**Title:** Keyboard navigation (Accessibility)  
**AC Reference:** N/A  
**Priority:** Medium  
**Preconditions:** No mouse  
**Test Steps:**  
1. Tab through form  
**Test Data:** N/A  
**Expected Result:** All elements focusable  

## TC-023
**Title:** Boundary: Max cart items (Boundary)  
**AC Reference:** AC1  
**Priority:** Medium  
**Preconditions:** 99 items  
**Test Steps:**  
1. Add max items  
2. Checkout  
**Test Data:** N/A  
**Expected Result:** Handles large cart  

## TC-024
**Title:** Input validation: SQL injection (Input)  
**AC Reference:** AC5  
**Priority:** High  
**Preconditions:** On form  
**Test Steps:**  
1. Enter SQL in field  
2. Submit  
**Test Data:** First: ' OR 1=1 --  
**Expected Result:** Sanitized, no injection  

## TC-025
**Title:** Network interruption during finish (Negative)  
**AC Reference:** AC4  
**Priority:** High  
**Preconditions:** On overview  
**Test Steps:**  
1. Disconnect network  
2. Click Finish  
**Test Data:** N/A  
**Expected Result:** Handle gracefully, perhaps retry or error