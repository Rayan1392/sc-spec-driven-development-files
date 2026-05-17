# Plan: Admin Dashboard Layout

1. Establish the application shell
   - Identify the current frontend entry points and styling approach.
   - Create or update the dashboard root layout.
   - Ensure the first loaded view is the dashboard experience.

2. Add responsive navigation
   - Add primary navigation for Dashboard, Agents, Ailments, Therapies, Appointments, and Settings.
   - Use a persistent sidebar or rail on desktop.
   - Use a compact mobile navigation pattern for narrow viewports.

3. Build role-aware dashboard framing
   - Represent Admin and User roles in the UI structure.
   - Default this phase to Admin-oriented content.
   - Keep the layout ready for later User-specific filtering without implementing auth.

4. Add dashboard content sections
   - Add clinic activity summary.
   - Add agents needing attention.
   - Add upcoming appointments.
   - Add common ailments.
   - Add therapy queue or recommendations.
   - Use static domain sample data for this phase.

5. Apply visual and accessibility polish
   - Make the UI responsive across mobile, tablet, and desktop.
   - Use readable hierarchy, status indicators, and accessible labels.
   - Keep the design operational and polished, with a light AgenticClinic personality.

6. Validate the phase
   - Run available build or type-check commands.
   - Verify the dashboard renders without console-blocking errors.
   - Check responsive behavior at representative viewport widths.
   - Confirm the implementation matches `requirements.md` and remains within scope.
