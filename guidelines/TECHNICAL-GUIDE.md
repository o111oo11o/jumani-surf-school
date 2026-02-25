## 🧭 User Experience Clarity

The user should understand within 5 seconds:

- What the business does
- Where it is located (if applicable)
- How to book
- What makes it unique

Avoid:

- Vague messaging
- Overly abstract design
- Hidden navigation
- Confusing service hierarchy

---

# 🔧 Technical Requirements

## 1️⃣ Core Stack

- Next.js (latest stable, App Router only)
- React (latest stable)
- TypeScript (strict mode enabled)
- Sanity (latest v3+)
- ESLint + Prettier
- Tailwind CSS (latest) OR modern CSS architecture (if Tailwind not used, justify choice)
- Zod (for validation where appropriate)
- React Server Components where beneficial
- Server Actions where appropriate
- Edge-ready compatible code

---

# 📁 Required Project Structure (Explicit)

Follow this exact high-level structure:

/root  
│  
├── /app  
│   ├── layout.tsx  
│   ├── page.tsx  
│   ├── globals.css  
│   ├── (routes)/  
│   │   ├── surf-lessons/  
│   │   ├── board-rentals/  
│   │   ├── smoothie-bar/  
│   │   ├── about/  
│   │   └── contact/  
│   └── api/  
│  
├── /components  
│   ├── ui/  
│   ├── layout/  
│   ├── sections/  
│   └── shared/  
│  
├── /lib  
│   ├── sanity/  
│   │   ├── client.ts  
│   │   ├── queries.ts  
│   │   └── types.ts  
│   ├── utils/  
│   └── constants/  
│  
├── /hooks  
│  
├── /types  
│  
├── /styles  
│  
├── /public  
│  
├── /sanity  
│   ├── schema.ts  
│   ├── schemas/  
│   └── sanity.config.ts  
│  
├── .env.local  
├── next.config.js  
├── tsconfig.json  
└── package.json  

### Rules

- NO logic inside page files beyond orchestration.
- UI logic stays in components.
- Data fetching isolated in `/lib/sanity`.
- No duplicated code.
- Absolute imports (`@/components/...`).

---

# 🧠 Architectural Guidelines

## 2️⃣ Design Principles

- Component-driven architecture
- Atomic design principles where applicable
- DRY (Don't Repeat Yourself)
- Single responsibility per component
- Clear separation between:
  - UI
  - Data fetching
  - Business logic
  - CMS integration

---

## 3️⃣ Reusability Requirements

- Extract reusable UI elements (buttons, containers, typography, cards).
- Create layout primitives (Section, Container, Grid, Stack).
- Make CMS-driven sections dynamic:
  - Hero
  - Service highlights
  - Pricing blocks
  - Testimonials
  - FAQs
  - CTA sections
- Avoid hardcoding content.
- All repeatable sections must be schema-driven in Sanity.

---


# 📦 CMS Integration (Sanity)

## 5️⃣ Sanity Requirements

Create structured schemas for:

- Page
- Surf Lesson
- Rental Item (board types)
- Smoothie Product
- Pricing Plan
- Testimonial
- FAQ
- Author (if blog exists)
- Category

Use:

- GROQ queries
- Centralized queries in `/lib/sanity/queries.ts`
- Proper TypeScript types
- PortableText renderer for rich content
- Optimized images via next/image + Sanity image builder

No hardcoded business content.

---

# 🧹 Code Style Rules

## 7️⃣ Consistency Requirements

- Strict TypeScript
- Functional components only
- Named exports only (no default exports except for pages/layouts)
- No `any`
- Use proper typing for props
- Use async/await (no `.then`)
- Clean folder naming conventions
- Descriptive naming
- No unused code
- No console.logs
- ESLint must pass with zero warnings

---

# 🚀 Performance & Optimization

- Use React Server Components where possible
- Optimize images
- Use dynamic imports when appropriate
- Avoid unnecessary client components
- Proper metadata handling
- SEO-ready (structured data for services)
- Accessible (ARIA where needed)
- Lighthouse score target: 95+

---

# 🔐 Environment Configuration

- Use environment variables for:
  - Sanity project ID
  - Dataset
  - API token
- Never hardcode secrets.

---

# 📖 Documentation Requirements

Generate:

- `README.md` including:
  - Setup instructions
  - Dev commands
  - Deployment instructions
  - Environment variables
  - CMS workflow
  - Project structure explanation
  - Content modeling explanation for services
- Inline documentation only when necessary

---

# ✅ Definition of Done

The project is complete when:

- It builds successfully
- Sanity is connected and functional
- Code is modular and reusable
- Structure matches defined architecture
- ESLint passes
- No obvious technical debt

---

You are expected to operate like a senior architect, not a junior developer.

Think long-term maintainability.  
Think conversion.  
Prefer clarity over cleverness.  
Write clean, scalable, business-focused code.