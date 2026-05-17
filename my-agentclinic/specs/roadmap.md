# Roadmap

Implementation should proceed by feature areas, with each area broken into very small phases of work. Each phase should leave the app in a usable, verifiable state.

## Phase 1: Application Shell

- Create the main dashboard layout.
- Add primary navigation for agents, ailments, therapies, and appointments.
- Establish shared styling and responsive browser behavior.

## Phase 2: Agents

- List agents with basic status and recent clinic activity.
- Add agent detail views.
- Add simple create and edit flows for agent records.

## Phase 3: Ailments

- Define the ailment catalog.
- Connect ailments to agents.
- Show ailment severity, status, and notes in agent context.

## Phase 4: Therapies

- Define therapy options.
- Associate therapies with ailments.
- Show recommended therapies for an agent based on selected ailments.

## Phase 5: Appointments

- Add appointment availability and booking flow.
- Connect appointments to agents and selected therapies.
- Show upcoming and past appointments in dashboard and agent views.

## Phase 6: Clinic Dashboard

- Surface operational summaries for staff.
- Highlight agents needing attention.
- Show upcoming appointments and common ailments.

## Phase 7: Reliability And Polish

- Add validation and error states across core workflows.
- Add focused tests for booking, records, and dashboard behavior.
- Improve accessibility, loading states, empty states, and modern browser polish.
