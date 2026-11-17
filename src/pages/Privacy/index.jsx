import React from 'react';
import { Link } from 'react-router-dom';
import '../Legal/legal.css';

const SECTIONS = [
  ['what-we-collect', 'What this site stores'],
  ['where-it-lives', 'Where your data lives'],
  ['third-parties', 'Third parties that receive data'],
  ['cookies', 'Cookies and tracking'],
  ['your-control', 'Your control over your data'],
  ['retention', 'Retention and deletion'],
  ['security', 'Security'],
  ['children', 'Children'],
  ['changes', 'Changes to this policy'],
  ['contact', 'Contact']
];

export default function Privacy() {
  return (
    <div className="page legal">
      <header className="legal-head">
        <Link className="legal-back" to="/">Back to study</Link>
        <span className="legal-eyebrow">Legal</span>
        <h1>Privacy policy</h1>
        <div className="legal-meta">
          <span>Effective 18 November 2026</span>
          <span>Version 1.0</span>
          <span>Applies to AZ-900 Trainer</span>
        </div>
        <p className="legal-lede">
          This trainer has no accounts, no sign-in and no database. Everything you do in it stays in your
          own browser. This page sets out exactly what is stored, where it sits, who else can see it and
          how you erase it.
        </p>
      </header>

      <div className="legal-summary">
        <div className="legal-fact is-ok">
          <b>No account required</b>
          <span>We never ask for your name, email address, phone number or password.</span>
        </div>
        <div className="legal-fact">
          <b>Answers stay on device</b>
          <span>Your responses, scores and history are written to local storage, not to a server.</span>
        </div>
        <div className="legal-fact is-azure">
          <b>No advertising or analytics</b>
          <span>No ad networks, no tracking pixels, no session recording, no fingerprinting.</span>
        </div>
        <div className="legal-fact is-amber">
          <b>Two external requests</b>
          <span>Google Fonts and the hosting provider receive standard connection data. Details below.</span>
        </div>
      </div>

      <nav className="legal-toc" aria-label="Contents">
        <h2>Contents</h2>
        <ol>
          {SECTIONS.map(([id, label], i) => (
            <li key={id}><a href={'#' + id}>{String(i + 1).padStart(2, '0')}. {label}</a></li>
          ))}
        </ol>
      </nav>

      <div className="legal-body">
        <section className="legal-sec" id="what-we-collect">
          <h2><i>01</i> What this site stores</h2>
          <p>
            The trainer keeps a small set of records so that your progress survives a page reload. These
            are written by the application itself and are never transmitted to us.
          </p>
          <table className="legal-table">
            <thead>
              <tr><th>Record</th><th>Contents</th><th>Purpose</th></tr>
            </thead>
            <tbody>
              <tr><td>Settings</td><td>Theme choice, shuffle preference, feedback mode, default test length, timer setting</td><td>Remembers how you like to study</td></tr>
              <tr><td>Answer statistics</td><td>Per question attempt count, correct count, last result, timestamp</td><td>Builds accuracy, coverage and weak spot lists</td></tr>
              <tr><td>Test history</td><td>The last twelve completed runs with score, duration, objective breakdown and the answers you gave</td><td>Lets you reopen a past review</td></tr>
              <tr><td>Session</td><td>The active test, its question order, your answers, flags and elapsed time</td><td>Resumes an interrupted test</td></tr>
              <tr><td>Bookmarks</td><td>Question identifiers you saved</td><td>Runs targeted drills</td></tr>
              <tr><td>Your questions</td><td>Any text you paste or write on the data and bank pages, plus edits and removals you make</td><td>Extends the bank with your own material</td></tr>
              <tr><td>Saved views and tray</td><td>Named filter sets and hand picked question order</td><td>Restores your working setup</td></tr>
            </tbody>
          </table>
          <p>
            We do not collect your name, email address, postal address, telephone number, payment details,
            location, contacts, camera, microphone or any device identifier. There is no registration form
            anywhere in the application.
          </p>
        </section>

        <section className="legal-sec" id="where-it-lives">
          <h2><i>02</i> Where your data lives</h2>
          <p>
            Every record above is held in your browser's <code>localStorage</code> under keys beginning
            with <code>az900.</code>. It sits on the device you used, inside that browser profile. It is
            not uploaded, not synchronised between your devices and not visible to us or to any other
            visitor.
          </p>
          <p>
            Because the data is local, opening the site on a different phone, laptop or browser starts
            with a clean record. Clearing your browser's site data removes it permanently, and we cannot
            restore it for you because we never held a copy.
          </p>
        </section>

        <section className="legal-sec" id="third-parties">
          <h2><i>03</i> Third parties that receive data</h2>
          <p>
            Two parties receive standard connection information when you load the site. Neither receives
            your answers, scores or question text.
          </p>
          <ul>
            <li>
              <strong>Google Fonts.</strong> Typefaces are requested from <code>fonts.googleapis.com</code>
              and <code>fonts.gstatic.com</code>. Those requests carry your IP address, browser user agent
              and the referring page to Google, as any font request does. Google's own privacy terms
              govern that transfer. If you prefer to avoid it, blocking those two domains in your browser
              leaves the site fully usable with system fonts.
            </li>
            <li>
              <strong>Netlify.</strong> The site is served by Netlify, which keeps ordinary web server
              logs containing IP address, user agent, requested path and timestamp for security and
              abuse prevention. Those logs are controlled by Netlify's privacy policy.
            </li>
          </ul>
          <p>
            There are no other third party scripts. No social widgets, no embedded video, no chat
            widget, no A/B testing tool and no error reporting service that transmits your activity.
          </p>
        </section>

        <section className="legal-sec" id="cookies">
          <h2><i>04</i> Cookies and tracking</h2>
          <p>
            The application sets no cookies of its own. It uses <code>localStorage</code>, which is a
            functional store rather than a tracking mechanism, so there is no cookie banner to dismiss.
            The hosting provider may set a cookie for its own operational purposes, such as routing a
            request to the correct build.
          </p>
          <div className="legal-callout is-ok">
            <strong>No cross site tracking.</strong> We do not build advertising profiles, do not sell or
            share data with brokers, and do not track you across other websites.
          </div>
        </section>

        <section className="legal-sec" id="your-control">
          <h2><i>05</i> Your control over your data</h2>
          <ul>
            <li><strong>Reset in the app.</strong> The Progress page has a Reset action that erases answer statistics, test history and the stored result. It offers an Undo for a short window, after which the removal is final.</li>
            <li><strong>Remove single questions.</strong> Deleting a question in the Bank hides it from your bank and offers Undo. Restoring removed questions brings them back.</li>
            <li><strong>Clear imported material.</strong> The data page can clear everything you pasted, with Undo.</li>
            <li><strong>Export a copy.</strong> The Progress page exports your statistics, history and bookmarks as a JSON file that you keep.</li>
            <li><strong>Erase everything.</strong> Clear site data for this domain in your browser settings. That removes every record listed in section 01 at once.</li>
          </ul>
          <p>
            Because we hold no personal data on a server, there is nothing for us to look up, correct,
            port or delete on your behalf. Your browser is the only place the record exists, which means
            you already have full control of it.
          </p>
        </section>

        <section className="legal-sec" id="retention">
          <h2><i>06</i> Retention and deletion</h2>
          <p>
            Local records persist until you clear them or your browser evicts them under storage pressure.
            Test history is capped at the twelve most recent runs, and older runs are dropped automatically.
            Server logs held by the hosting provider follow that provider's retention schedule, which is
            measured in weeks rather than years.
          </p>
        </section>

        <section className="legal-sec" id="security">
          <h2><i>07</i> Security</h2>
          <p>
            The site is served over HTTPS. Because there is no account and no server side record of your
            answers, there is no central database of user activity to be breached. The practical risk is
            local: anyone with access to your unlocked device and browser profile can read your study
            record. Use your device lock, and clear site data before handing a shared machine to someone else.
          </p>
        </section>

        <section className="legal-sec" id="children">
          <h2><i>08</i> Children</h2>
          <p>
            This is a professional certification revision tool aimed at adults. It is not directed at
            children under 13 and we do not knowingly collect information from them. Since no personal
            information is collected from any visitor, there is nothing to remove if a child uses the site.
          </p>
        </section>

        <section className="legal-sec" id="changes">
          <h2><i>09</i> Changes to this policy</h2>
          <p>
            If the application changes in a way that affects what is stored or who receives it, this page
            will be updated and the effective date and version above will change. Material changes will be
            noted at the top of the page. Continuing to use the site after an update means the revised
            policy applies to your use.
          </p>
        </section>

        <section className="legal-sec" id="contact">
          <h2><i>10</i> Contact</h2>
          <p>
            Questions about this policy, or a report of something the site stores that is not listed here,
            can be raised on the project's issue tracker at{' '}
            <a href="https://github.com/kingsilent47/az900-study-guide/issues" target="_blank" rel="noreferrer">
              github.com/kingsilent47/az900-study-guide/issues
            </a>. Please do not paste personal information into a public issue.
          </p>
        </section>
      </div>

      <footer className="legal-foot">
        <p>Read alongside the terms and conditions, which cover permitted use and the limits of this study material.</p>
        <div className="legal-foot-links">
          <Link className="legal-btn legal-btn-outline" to="/terms">Terms and conditions</Link>
          <Link className="legal-btn legal-btn-primary" to="/">Back to study</Link>
        </div>
      </footer>
    </div>
  );
}
