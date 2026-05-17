# Validation: Admin Dashboard Layout

## Merge Criteria

The feature can be merged when the application has a responsive dashboard shell that supports the Phase 1 roadmap goal: main dashboard layout, primary navigation, and shared responsive styling.

## Functional Checks

- The app opens directly to the dashboard experience.
- Navigation includes Dashboard, Agents, Ailments, Therapies, Appointments, and Settings.
- Admin-oriented dashboard content is visible.
- Dashboard sections include clinic summary, agents needing attention, upcoming appointments, common ailments, and therapy-related activity.
- Static sample data is clearly domain-specific and does not imply live backend integration.

## Responsive Checks

- Desktop viewport shows a stable dashboard layout with efficient navigation.
- Tablet viewport preserves readable content and usable navigation.
- Mobile viewport avoids horizontal scrolling and uses compact navigation.
- Text does not overlap or overflow its containers.

## Technical Checks

- TypeScript build or type-check passes.
- Existing tests pass if present.
- No backend, PostgreSQL, or EF Core work is introduced unless explicitly required by implementation constraints.
- The implementation stays compatible with the future .NET 10 backend, PostgreSQL database, and EF Core persistence direction in `specs/tech-stack.md`.

## Product Checks

- The result supports clinic operations rather than a marketing landing page.
- The tone is polished, approachable, and lightly playful.
- The layout makes agents, ailments, therapies, and appointments feel like first-class clinic concepts.
- The feature remains small enough to serve as the first roadmap phase.
