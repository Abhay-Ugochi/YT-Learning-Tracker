# YouTube Learning Tracker — Project Instructions

## Project purpose

This is a personal desktop-only web application for tracking learning from YouTube playlists.

The application is intentionally desktop-only. Mobile and tablet layouts are not required.

The application will allow the user to:

- Import YouTube playlists
- Store video metadata
- Extract timestamps from YouTube video descriptions
- Convert timestamps into editable learning topics
- Create topics manually
- Rename topics
- Split topics
- Merge topics
- Reorder topics
- Modify topic timestamps
- Delete topics
- Track topic completion
- Calculate duration-weighted progress
- Track actual study time separately from video/content duration
- Watch YouTube videos inside the application
- Jump between timestamp-based topics
- Take notes
- Track study sessions
- View daily, weekly, and monthly analytics

## Current architecture

The project currently uses:

- Next.js 16
- React 19
- TypeScript
- App Router
- Tailwind CSS v4
- shadcn/ui
- Zod
- Recharts
- Lucide React
- PostgreSQL will be added later
- Prisma will be added later
- YouTube Data API will be added later

Current project structure:

app/
components/
components/ui/
lib/

Do not introduce a src/ directory unless explicitly requested.

## Development phases

Phase 2:
Frontend UI using mock data.

Phase 3:
Database and Prisma.

Phase 4:
YouTube API integration.

Phase 5:
Playlist importing and timestamp parsing.

Phase 6:
Topic management and progress tracking.

Phase 7:
YouTube player integration.

Phase 8:
Study timer and study sessions.

Phase 9:
Notes.

Phase 10:
Analytics.

Phase 11:
Testing, security, optimization, and deployment.

AI features are not part of the initial version.

Authentication is not required for the initial version.

## Critical product rules

Content duration and actual study time are different concepts.

For example:

A 60-minute video may require 2 hours of actual study time.

Never use study time as content completion time.

Learning progress must be duration-weighted.

A 40-minute topic contributes more progress than a 5-minute topic.

YouTube timestamps are initial topic data only.

Users can modify imported topics.

If a video contains no timestamps, initially create one topic representing the entire video.

Users can manually add videos later.

Automatic YouTube playlist synchronization is not required.

## Coding rules

- Use TypeScript.
- Prefer clear and readable code.
- Avoid unnecessary abstractions.
- Do not introduce dependencies without a clear reason.
- Do not use `any` unless absolutely necessary.
- Keep business logic separate from UI components.
- Keep reusable components separate from page components.
- Validate external input with Zod where appropriate.
- Handle loading, error, and empty states.
- Do not hardcode API keys or secrets.
- Use environment variables for secrets.
- Do not modify unrelated files.
- Do not rewrite the entire application when implementing a small feature.
- Prefer existing shadcn/ui components where appropriate.
- Optimize layouts for desktop and laptop browsers.
- Avoid horizontal overflow.
- Prefer accessible semantic HTML.
- Keep components reasonably small and focused.

## UI principles

The application should feel like a serious personal learning/productivity application.

Avoid:

- Generic AI-dashboard appearance
- Excessive gradients
- Excessive rounded cards
- Excessive shadows
- Huge empty spaces
- Lorem ipsum
- Unnecessary animations

Use:

- Clear typography hierarchy
- Consistent spacing
- Subtle borders
- Strong information hierarchy
- Desktop-focused layouts
- Useful visualizations
- Clear progress indicators

## Copilot workflow

Before making a significant architectural change:

1. Explain what will change.
2. Explain why it is necessary.
3. Identify the files that will be modified.
4. Keep the change limited to the current task.

For implementation tasks:

1. Inspect the existing code.
2. Reuse existing components where appropriate.
3. Implement only the requested feature.
4. Run relevant checks.
5. Fix errors caused by the implementation.
6. Summarize files changed.

Do not implement future phases unless explicitly requested.
