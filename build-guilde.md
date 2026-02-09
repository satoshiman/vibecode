# Vibe Code JS

**Learn JavaScript by Building First, Understanding Later**

A practical, beginner-friendly JavaScript roadmap designed for learning by doing.  
No prior coding knowledge required.

---

## Page Design Principles

- Minimal on-screen information
- Titles and milestones are always visible
- All detailed explanations are hidden inside **Drawers**
- Timeline-based learning journey
- Build first, understand later

---

## Section 1 – Environment Setup

### Section Title

**Environment Setup**

### Section Description

Everything you need to start coding immediately.

### Layout Rules

- Vertical list
- Each item is a **Setup Step Card**
- Clicking a card opens a **Drawer**
- Only titles are visible by default

---

### Setup Step Cards (Visible)

- Install Node.js
- Code Editor Setup
- Terminal Basics
- Project Bootstrap

---

### Drawer Content Structure (Per Setup Step)

#### Drawer Title

`<Step Name>`

#### Drawer Sections

- Goal
- Required Actions
- Helpful Links
- Validation Checklist

---

### Example Drawer – Install Node.js

#### Goal

Enable JavaScript to run on your local machine.

#### Required Actions

- Download Node.js (LTS version)
- Install Node.js
- Verify installation using terminal

#### Helpful Links

- Node.js Official Website
- Node.js Installation Guide

#### Validation Checklist

- `node -v` returns a version number
- `npm -v` returns a version number

---

## Section 2 – Core Fundamentals

### Section Title

**Core Fundamentals**

### Section Description

The minimum knowledge required to start building real projects.

### Layout Rules

- Grid layout
- Each item is a **Concept Card**
- Card shows:
  - Concept title
  - One-line purpose
- Clicking a card opens a **Drawer**

---

### Concept Cards (Visible)

- Variables & Data Types
- Functions
- Objects & Arrays
- Control Flow
- Asynchronous Basics
- Modules & Imports

---

### Drawer Content Structure (Per Concept)

#### Drawer Title

`<Concept Name>`

#### Drawer Sections

- Why This Matters
- What You Need to Know (Minimal)
- Practical Usage
- Common Mistakes
- When to Learn More

---

### Example Drawer – Functions

#### Why This Matters

Functions are the basic building blocks of any JavaScript application.

#### What You Need to Know (Minimal)

- Function declaration
- Parameters
- Return values

#### Practical Usage

- Handle user actions
- Process data
- Reuse logic

#### Common Mistakes

- Overcomplicating function logic
- Forgetting to return values

#### When to Learn More

After building your first backend API.

---

## Section 3 – Vibe Code Cookbook

### Section Title

**Vibe Code Cookbook**

### Section Description

Each milestone is a practical recipe. Build first, learn along the way.

### Layout Rules

- Vertical **Timeline**
- Each timeline item is a **Milestone**
- Only title and short goal are visible
- Full lesson content is hidden inside a **Drawer**

---

### Timeline Milestones (Visible)

1. Run Your First JavaScript Script
2. Build a Simple HTTP Server
3. Create Your First API Endpoint
4. Connect Frontend to Backend
5. Build a React Interface
6. Ship a Real Project

---

### Drawer Content Structure (Per Milestone)

#### Drawer Title

`Milestone <Number>: <Title>`

#### Drawer Sections

- Objective
- What You Will Build
- Tools Used
- Step-by-Step Tasks
- Expected Outcome
- Next Milestone Trigger

---

### Example Drawer – Milestone 2: Build a Simple HTTP Server

#### Objective

Understand how a backend server works by building one.

#### What You Will Build

- A basic Node.js server using Express
- One public API endpoint

#### Tools Used

- Node.js
- Express.js

#### Step-by-Step Tasks

- Initialize a Node.js project
- Install Express
- Create a server file
- Define a basic route

#### Expected Outcome

- Server runs locally
- API endpoint returns JSON data

#### Next Milestone Trigger

Once the API can be accessed via browser or Postman.

---

## Global UI & Behavior Rules

### Drawer Behavior

- Only one drawer open at a time
- Drawer slides from the right
- URL state handling is optional

### Information Density

- Titles must be short
- Descriptions must be concise
- No long-form text visible by default

---

## Target Audience Assumptions

- Zero programming background
- Learns by execution and imitation
- Prefers visible results over theory

---

## Core Philosophy (Internal)

> The user is never required to fully understand before building.  
> Understanding emerges naturally through execution.
