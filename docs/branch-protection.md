# Branch Protection Guide

After pushing this repo to GitHub:

1. Go to Settings → Branches.
2. Add a branch protection rule for `main`.
3. Enable:
   - Require a pull request before merging.
   - Require status checks to pass before merging.
   - Require branches to be up to date before merging.
4. Select required status check:
   - `Static Prototype — Install · Smoke · Build`
5. Save.

This makes the Phase 16 Runtime Gate mandatory before merges.
