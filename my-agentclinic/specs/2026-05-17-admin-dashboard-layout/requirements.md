# Requirements: Admin Dashboard Layout

## Scope

Create the first application shell for AgenticClinic: a responsive dashboard layout that gives Admin and User roles a clear place to access clinic operations.

This feature covers layout, navigation structure, dashboard content placeholders, and responsive behavior. It does not require backend integration, authentication, persistence, or real booking flows yet.

## Users

- Admin: needs broad operational visibility and access to clinic management areas.
- User: needs a simpler clinic-facing view focused on their own agent care activity.

## Screens

- Responsive dashboard shell that works on mobile, tablet, and desktop.
- Desktop layout should support persistent navigation.
- Mobile layout should collapse navigation into a compact pattern.
- The first screen should be the usable dashboard, not a marketing landing page.

## Navigation

Use these primary navigation items:

- Dashboard
- Agents
- Ailments
- Therapies
- Appointments
- Settings

Admin users should see all navigation items. User views may hide or de-emphasize Settings and broad clinic-management actions in later phases.

## Dashboard Content

The dashboard should include operational placeholders aligned with the roadmap:

- Clinic activity summary.
- Agents needing attention.
- Upcoming appointments.
- Common ailments.
- Therapy queue or recommended therapies.
- Recent clinic updates.

Content can use static sample data in this phase, but names and labels should reflect the AgenticClinic domain.

## Visual Decisions

Because no explicit visual style was provided, follow the constitution:

- Polished and approachable.
- Operational dashboard first, not a decorative landing page.
- Clear hierarchy, compact cards or panels, and readable status indicators.
- Responsive and modern-browser friendly.
- Playful enough for the AI clinic premise, but reliable enough for repeated staff use.

## Technical Context

Reference:

- `specs/mission.md`
- `specs/tech-stack.md`

Implementation should fit the TypeScript web frontend direction. Backend work in .NET 10, PostgreSQL, and EF Core is out of scope for this layout phase unless needed to support compile-time contracts or project structure.

## Out Of Scope

- Authentication and authorization enforcement.
- Real database persistence.
- EF Core migrations.
- Appointment booking workflow.
- CRUD workflows for agents, ailments, or therapies.
- Production analytics or live operational metrics.
