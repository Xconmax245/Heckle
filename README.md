# 🎤 Heckle

> **Practice your launch before the internet does.**

Heckle is an AI-powered launch rehearsal platform that simulates realistic public reactions to your startup pitch before you publish it. Instead of discovering flaws after launching on Product Hunt, X, or the App Store, Heckle lets you pressure-test your messaging against a panel of AI critics and receive structured, actionable feedback.

Whether you're writing a Product Hunt launch, a tweet thread, an App Store description, or an investor elevator pitch, Heckle gives you the private criticism you'd rather receive before thousands of people see it.

---

## ✨ Why Heckle?

Founders spend weeks building products.

Many spend less than an hour writing the launch copy that determines whether anyone cares.

A weak pitch can make a great product look forgettable.

A vague hook gets ignored.

A generic value proposition gets compared to competitors.

A missing differentiation kills curiosity.

Most founders only discover these problems **after** they launch.

Heckle changes that.

Instead of publishing first and learning later, you can rehearse your launch against AI personas designed to think like real internet audiences.

---

# 🚀 Features

## 🎭 AI Persona Gauntlet

Your pitch is reviewed by multiple independent AI personas, each evaluating it through a different lens.

Current reviewers include:

- **The PH Commenter**
  - Skeptical
  - Has seen thousands of launches
  - Looks for differentiation and obvious competitors

- **The Journalist**
  - Looking for a story
  - Wants a compelling "why now?"
  - Rejects generic announcements

- **The Reply Guy**
  - Scrolling with zero patience
  - Judges your first sentence instantly
  - Represents cold public reactions

- **The Investor**
  - Performs rapid startup triage
  - Looks for market size, credibility and defensibility

Every reviewer responds independently.

No shared prompt.

No canned responses.

---

## 📊 Pitch Report

After every review, Heckle performs a second AI pass that analyzes your pitch as a whole.

The report evaluates:

- Clarity
- Differentiation
- Credibility
- Hook Strength

alongside:

- Consensus
- Rewrite suggestions
- Overall verdict
- Launch confidence

---

## 🧠 Consensus Engine

Rather than simply displaying four separate opinions, Heckle identifies patterns across reviewers.

Example:

> "Three reviewers independently questioned your differentiation."

This helps founders understand recurring weaknesses instead of reading disconnected comments.

---

## 🎯 Hook Analysis

Your opening line determines whether people keep reading.

Heckle analyzes whether your hook:

- Stops scrolling
- Creates curiosity
- Clearly communicates value
- Gives readers a reason to continue

---

## ✍️ Rewrite Suggestions

Instead of generic advice like:

> "Be clearer."

Heckle provides concrete recommendations tied directly to your pitch.

For example:

- mention traction
- remove buzzwords
- improve differentiation
- rewrite your opening
- specify your audience

---

## 🔁 Immediate Re-Hell™

After improving your pitch, you can immediately throw it back into the gauntlet and compare results.

See whether your rewrite actually changed how critics react.

---

# 🖼 Product Flow

```
Paste Pitch
      │
      ▼
Select Personas
      │
      ▼
Run the Gauntlet
      │
      ▼
AI Persona Responses
      │
      ▼
Consensus Analysis
      │
      ▼
Pitch Scorecard
      │
      ▼
Rewrite Suggestions
      │
      ▼
Immediate Re-Hell
```

---

# 💻 Tech Stack

### Frontend

- Next.js 14 (App Router)
- React
- TypeScript
- Tailwind CSS

### AI

- OpenRouter
- NVIDIA Nemotron 3 Ultra 550B

### Deployment

- Vercel

### Design

- Custom Design System
- Responsive Layout
- Web Audio micro-interactions
- Sequential persona reveal animations

---

# ⚙️ How It Works

## Step 1

The user pastes:

- Product Hunt launch
- Tweet thread
- App Store description
- Landing page copy
- Startup elevator pitch

---

## Step 2

Heckle sends the pitch to multiple AI reviewers simultaneously.

Each reviewer has:

- unique personality
- unique evaluation rubric
- unique system prompt

Each response is generated independently.

---

## Step 3

Once all reviewers finish, Heckle performs a second AI pass.

Instead of roleplaying, this model becomes an objective pitch coach.

It extracts:

- common weaknesses
- consensus
- scores
- rewrite suggestions

---

## Step 4

The results are presented through an editorial dashboard that feels like your pitch has just survived a public launch.

---

# 📂 Project Structure

```
.
├── app
│   ├── api
│   │   └── heckle
│   ├── components
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── lib
│   ├── ai
│   │   ├── heckle.ts
│   │   └── pitchReport.ts
│   │
│   └── personas.ts
│
├── public
│
├── styles
│
└── README.md
```

---

# 🎨 Design Philosophy

Heckle deliberately avoids generic AI startup aesthetics.

Instead of:

❌ Purple gradients

❌ Glassmorphism

❌ Neon AI visuals

❌ Generic chatbot UI

It embraces an editorial design language inspired by magazines, newspapers and critique.

Core principles:

- generous whitespace
- restrained motion
- warm paper palette
- minimal shadows
- typography-first layouts
- interaction over decoration

---

# 🔊 Interaction Design

Micro-interactions are intentionally sparse.

Rather than attaching sounds everywhere, Heckle reserves feedback for meaningful moments.

Examples include:

- submitting a pitch
- reviewers finishing
- verdict generation
- rewrite completion

This creates anticipation without overwhelming the interface.

---

# 🚫 No Mock Data

Heckle does **not** ship with fake reviews.

Every persona response is generated live.

If the AI model fails:

The user receives an honest error message.

No canned examples.

No placeholder scores.

No fabricated feedback.

---

# 🌍 Potential Use Cases

- Product Hunt launches
- App Store descriptions
- Startup landing pages
- Hacker News posts
- Investor outreach
- Cold emails
- Tweet threads
- LinkedIn launch posts
- Demo Day pitches
- Hackathon submissions

---

# 🛣 Roadmap

- [ ] Saved pitch history
- [ ] Browser extension before posting
- [ ] More reviewer personas
- [ ] Team collaboration
- [ ] Shareable review links
- [ ] AI-generated alternative hooks
- [ ] Launch readiness score
- [ ] Version comparison
- [ ] Competitor comparison
- [ ] Pitch history timeline
- [ ] Public community templates

---

# 🤝 Contributing

Contributions are welcome.

If you'd like to improve Heckle, feel free to:

- open an issue
- submit a pull request
- suggest new reviewer personas
- improve prompt engineering
- improve UI/UX
- optimize AI orchestration

---

# 🏗 Local Development

Clone the repository.

```bash
git clone https://github.com/Xconmax245/Heckle.git
```

Install dependencies.

```bash
npm install
```

Create an environment file.

```env
OPENROUTER_API_KEY=your_api_key_here
```

Run the development server.

```bash
npm run dev
```

Open:

```
http://localhost:3000
```

---

# 📸 Screenshots

> Add screenshots or GIFs here.

```
/public/screenshots/hero.png
/public/screenshots/results.png
/public/screenshots/report.png
```

---

# 💡 Inspiration

Heckle was built around one simple belief:

> **The internet will judge your pitch eventually. Better to hear it from four AI critics first than four thousand real people later.**

---

# 📄 License

MIT License

---

<div align="center">

### 🎤 Better to get roasted in private than ignored in public.

**Built with ❤️ for HackOnVibe 2026**

</div>
