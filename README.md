# Aesthetic Training Hub Directory

A public practitioner directory for the Aesthetic Training Hub, a marketplace where vetted UK aesthetics trainers can be discovered by prospective students.

The directory supports two paid listing tiers:

* **Standard** — £150/month
* **Premium** — £249/month

Premium practitioners are visually highlighted and prioritised above Standard practitioners.

## Tech Stack

* Next.js
* React
* TypeScript
* Tailwind CSS
* Radix UI
* Typed in-memory seed data
* Optional SQL seed file included in `db/seed.sql`

## How to Run It

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open the app:

```bash
http://localhost:3000
```
## Links

- **Repository:** https://github.com/devjoseph1992/aesthetic-training-hub
- **Live Demo:**  https://aesthetic-training-hub-seven.vercel.app

## What I Built

I built a working public practitioner directory for the Aesthetic Training Hub.

The implementation includes:

* A marketplace-style landing page
* A practitioner directory section
* Seed practitioners with:

  * name
  * specialisms
  * location
  * tier
  * monthly listing price
* Standard and Premium pricing:

  * Standard: £150/month
  * Premium: £249/month
* Premium-first sorting
* Premium visual treatment so Premium trainers stand out from Standard trainers
* Filters for:

  * specialism
  * location
  * tier
* Reusable React components
* Custom hooks for directory filtering and marketplace stats
* Typed in-memory data for speed and simplicity
* SQL seed file showing how the data could be moved into a relational database later

## Progress Report

### Built

The core directory experience is complete. A student can browse trainers, see the trainer’s name, specialisms, location, listing tier, and monthly price. The user can filter the directory by specialism, location, and tier. Premium trainers are prioritised and styled differently from Standard trainers.

I also separated the feature into reusable components and hooks, instead of putting all logic directly into the page. This keeps the code easier to extend if the product later adds profile pages, trainer onboarding, subscriptions, or a database.

### Left Out

I deliberately left out the following because the brief asked for a clean working slice rather than a half-finished large build:

* Authentication
* Trainer signup/onboarding
* Stripe subscription payments
* Admin vetting workflow
* Individual trainer profile pages
* Booking flow
* Reviews/testimonials
* Real database connection
* Map view or distance-based search
* Production AI recommendation implementation

The app includes a SQL seed file, but the working app currently uses typed in-memory data because that is the fastest and most reliable approach for a half-day technical test.

### What I Would Do Next

If continuing this into a production feature, I would add:

1. **Trainer profile pages**
   Each trainer should have a public profile with credentials, courses, location, insurance/accreditation details, and contact/booking CTA.

2. **Database-backed directory**
   Move from typed seed data to Postgres or SQLite depending on the environment.

3. **Trainer onboarding and vetting**
   Add a trainer submission flow, admin approval process, and status tracking.

4. **Subscription billing**
   Add Stripe for Standard and Premium recurring payments.

5. **Ranking rules**
   Define exactly how Premium placement works. For example: Premium first, then relevance, then distance, then newest.

6. **Better search**
   Add keyword search across trainer name, specialisms, location, and course type.

7. **AI-assisted recommendations**
   Use an LLM to help students choose trainers based on goals, experience level, preferred location, and specialism.

## Where the Brief Was Unclear or Underspecified

This was the most important part of the brief to clarify.

### 1. “Practitioner” vs “Trainer” is unclear

The product is called a marketplace for aesthetics trainers, but the brief asks for a “public practitioner directory.” Those are not always the same thing.

A practitioner may deliver treatments. A trainer teaches students. The directory should probably use the word **trainer** consistently if the buyer is a student looking for training.

I would change the wording to:

> Build a public trainer directory for vetted UK aesthetics training providers.

### 2. The user type is underspecified

The brief says students discover trainers, but does not say what students care about most.

For example, students might need to know:

* course level
* qualification awarded
* accreditation
* insurance requirements
* dates
* price of the course
* in-person vs online
* beginner vs advanced
* trainer credentials

The current brief only asks for name, specialisms, location, and tier. That is enough for a directory slice, but not enough for a student to confidently choose a trainer.

### 3. The meaning of “tier” is business-facing, not student-facing

Standard and Premium are listing tiers paid by trainers. That matters to the marketplace business, but it may not be meaningful to students.

If students see “Premium,” they may assume the trainer is higher quality, when really it may mean the trainer paid more for visibility. That can create a trust problem.

I would define exactly what Premium means publicly:

* Is it only paid placement?
* Does it imply stronger vetting?
* Can Standard trainers be equally qualified?
* Should Premium be labelled as “Featured” instead of “Premium”?

I would probably show **Featured** to students and keep **Premium** as the internal billing tier.

### 4. Premium ranking rules are not defined

The brief says Premium practitioners should stand out, but does not say how much priority they should get.

That matters because ranking is a product decision. For example:

* Should Premium always appear above Standard?
* Should filters preserve Premium-first ordering?
* Should relevance beat Premium?
* Should distance beat Premium?
* Should Premium appear in a carousel, highlighted card, or both?

For this test, I chose Premium-first sorting and stronger card styling. In production, I would want explicit ranking rules.

### 5. Location filtering is underspecified

The brief says filter by specialism or location. Location can mean different things:

* city
* region
* postcode
* radius search
* online training
* nationwide provider

I used city-level filtering because it is simple and fits the test scope. In production, I would add postcode/radius search and support online or blended training.

### 6. “Vetted” is not represented in the data

The product says trainers are vetted, but the requested fields do not include vetting status, credentials, or proof.

That is a mismatch. If vetting is part of the trust proposition, the directory should show it.

I would add fields like:

* `isVetted`
* `verifiedAt`
* `qualifications`
* `insuranceVerified`
* `accreditations`

### 7. The brief does not say whether this is a student directory or a trainer sales page

The page has two audiences:

* students discovering trainers
* trainers deciding whether to pay for Standard or Premium

Those are different journeys. The current build includes both directory browsing and visible listing prices, but in a real product I would likely separate them:

* `/trainers` for students
* `/for-trainers` for listing plans and subscription sales

### 8. “A clean, working slice” was right

The best part of the brief was the instruction to keep it to roughly half a day. That helped avoid overbuilding. For this test, I intentionally avoided auth, payments, dashboards, and database wiring so the submitted work stays focused and reviewable.
