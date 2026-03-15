# Exploratory Testing Strategy for SCRUM-101

## Charter 1 — Cart Review and Item Management
**Mission/Area:** Explore cart functionality and item management  
**Time-box:** 45 minutes  
**Test Ideas:**  
- Add/remove items, quantity changes, persistence across sessions  
- Cart icon updates, empty cart states, max items  
**Risks:** Cart data corruption, performance with large carts  
**Oracles:** Cart should reflect accurate item counts and prices  
**What Could Go Wrong:** Items disappear, prices miscalculate, cart not saving  

## Charter 2 — Checkout Information Form Validation
**Mission/Area:** Explore form input validation and error handling  
**Time-box:** 45 minutes  
**Test Ideas:**  
- Boundary values, special chars, paste operations, auto-fill  
- Field focus, tab order, validation timing  
**Risks:** Insecure data handling, poor UX for errors  
**Oracles:** All invalid inputs rejected with clear messages  
**What Could Go Wrong:** XSS attacks succeed, confusing error messages  

## Charter 3 — Order Overview Accuracy and Price Calculation
**Mission/Area:** Explore order summary and financial calculations  
**Time-box:** 45 minutes  
**Test Ideas:**  
- Tax calculations, discounts, currency formatting  
- Item changes post-overview, price updates  
**Risks:** Financial discrepancies, rounding errors  
**Oracles:** All calculations match expected formulas  
**What Could Go Wrong:** Wrong totals, tax misapplied, negative amounts  

## Charter 4 — Order Completion and Confirmation State
**Mission/Area:** Explore order submission and post-completion behavior  
**Time-box:** 45 minutes  
**Test Ideas:**  
- Confirmation messages, cart clearing, order history  
- Duplicate submissions, back button after completion  
**Risks:** Orders not processed, cart not cleared  
**Oracles:** Successful orders confirmed, cart reset  
**What Could Go Wrong:** Orders lost, multiple charges, stuck in processing  

## Charter 5 — Error Handling and Validation Messaging
**Mission/Area:** Explore error scenarios and user feedback  
**Time-box:** 45 minutes  
**Test Ideas:**  
- Network errors, timeouts, invalid sessions  
- Error message clarity, recovery options  
**Risks:** Users stuck in error states, unclear guidance  
**Oracles:** All errors handled gracefully with recovery paths  
**What Could Go Wrong:** App crashes, infinite loading, misleading errors  

## Charter 6 — Session Handling and Authentication Boundaries
**Mission/Area:** Explore login states and session management  
**Time-box:** 45 minutes  
**Test Ideas:**  
- Session expiry, multiple tabs, logout during checkout  
- Direct URL access, bookmarking checkout steps  
**Risks:** Security breaches, unauthorized access  
**Oracles:** Secure access control, session integrity  
**What Could Go Wrong:** Checkout accessible without login, session hijacking  

## Charter 7 — Navigation Flow, Back-Button, and Cancel Behavior
**Mission/Area:** Explore navigation patterns and cancel actions  
**Time-box:** 45 minutes  
**Test Ideas:**  
- Browser back/forward, refresh, deep links  
- Cancel at each step, navigation consistency  
**Risks:** Broken flows, data loss on navigation  
**Oracles:** Intuitive navigation, no data loss  
**What Could Go Wrong:** Stuck pages, lost progress, inconsistent states