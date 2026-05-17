# Tech Stack

AgenticClinic should use a popular, reliable web stack centered on TypeScript for the browser experience and .NET 10 for backend services.

## Frontend

- Language: TypeScript.
- Runtime: modern browser.
- Primary experience: dashboard-first web application.
- UI goals: responsive, attractive, accessible, and efficient for repeated operational use.
- Browser support: current evergreen browsers.

## Backend

- Platform: .NET 10.
- Database: PostgreSQL.
- Data access: Entity Framework Core.
- Responsibilities: agent records, ailment catalog, therapy catalog, appointment booking, and API support for the dashboard.
- API style: choose the simplest project-appropriate approach, with clear contracts between frontend and backend.


## Engineering Principles

- Choose established libraries and patterns over experimental foundations.
- Keep domain models explicit for agents, ailments, therapies, and appointments.
- Use EF Core migrations to evolve the PostgreSQL schema alongside the application.
- Build small, testable slices that connect frontend behavior to backend capability.
- Prefer boring reliability for booking and records workflows.
- Keep implementation choices compatible with future authentication, persistence, and staff-facing dashboards.
