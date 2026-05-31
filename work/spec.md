# Spec Template

> **Purpose:** Define WHAT we're building and WHY - not HOW.
> This document is the single source of truth for requirements.
> Sections marked *(optional)* can be removed if they don't add clarity to your spec.

---

## 1. Objective

<!--
What are we trying to achieve? Keep this to 1-3 sentences.
Focus on the outcome, not the mechanism.

Good: "Allow admins to deactivate user accounts so deactivated users can no longer login"
Bad:  "Create an API endpoint that sets IsActive to false in the Users table."
-->

> *[Write objective here]*

---

## 2. User Outcome

<!--
What should the user (or system actor) be able to do after this is implemented?
Write from the user's perspective, not the developer's.
-->

-

---

## 3. Scope

### In Scope

-

### Out of Scope

<!--
Explicitly stating what we're NOT doing prevents scope creep and
stops the LLM from over-engineering the solution.
-->

-

---

## 4. Context

### Business Context

<!--
Why does this matter? What drives this change?
1-3 sentences is usually enough.
-->

-

### System Context

<!--
Where does this fit in the system? Which services, modules, or layers are involved?
Provide RELEVANT slices - not the entire architecture.
-->

-

### Existing Behavior *(optional)*

<!--
If modifying existing functionality, describe the current state.
What happens today that we want to change?
-->

-

### Existing System Patterns *(optional)*

<!--
For legacy codebases; document the patterns in the relevant area
so the LLM aligns with them instead of introducing new ones.
-->

- Naming conventions:
- Architectural style:
- Anti-patterns to avoid:

---

## 5. Inputs & Outputs

### Inputs

<!--
What data enters the system for this feature?
API payloads, UI form fields, events, etc.
-->

| Input | Type | Required | Description |
|---|---|---|---|
| | | | |

### Outputs

<!--
What does the system produce?
API responses, side effects, events emitted, state changes, etc.
-->

| Output | Type | Description |
|---|---|---|
| | | |

---

## 6. Constraints

<!--
Non-negotiable technical or business boundaries.
Be specific - vague constraints are worse than none.

Good: "API response must be < 200ms at p95 under 500 RPS"
Bad:  "System should be fast"
-->

-

---

## 7. Edge Cases

<!--
Known tricky scenarios. If you can think of a case that might
trip up the implementation, list it here.
-->

| Scenario | Expected Behavior |
|---|---|
| | |

---

## 8. Acceptance Criteria

<!--
Clear, testable statements. Prefer concrete examples over vague descriptions.
Use checkbox format so these can be tracked.

Good: "When an admin deactivates a user, subsequent login attempts return 403"
Bad:  "Deactivation should work correctly"
-->

- [ ]
- [ ]

---

## 9. Non-Functional Requirements *(optional)*

<!--
Only include if relevant. Don't fill this out mechanically.
-->

- **Performance:**
- **Security:**
- **Logging / Observability:**
- **Backward Compatibility:**

---

## 10. Assumptions

<!--
What are we assuming to be true? Making assumptions explicit
prevents silent misunderstandings.
-->

-

---

## 11. Open Questions

<!--
Things you're not sure about yet. Be honest about unknowns.
The LLM will use this section to generate targeted clarification questions.
Leave questions here rather than making silent decisions.
-->

-

---

## 12. Clarifications

<!--
This section is filled collaboratively during the clarification loop.
The LLM asks questions based on gaps it identifies -> you answer inline.

Format:
**Q:** [LLM's question]
**A:** [Your answer]
-->

---

## Usage Notes

> **How to use this template:**
>
> 1. Fill out sections 1-8 as completely as you can
> 2. Leave sections 10-11 honest - don't pretend you know things you don't
> 3. Hand this to the LLM and ask: *"Review this spec. Generate clarification questions before proceeding."*
> 4. Answer the clarifications in section 12
> 5. Then ask: *"Generate the implementation plan based on this spec."*
>
> **Rules:**
> - If a section doesn't add clarity for your feature, **remove it**
> - Keep entries **precise** - one clear sentence beats a paragraph
> - This is a **thinking tool**, not a documentation exercise
> - Update this document as understanding evolves - specs are iterative
