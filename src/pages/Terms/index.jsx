import React from 'react';
import { Link } from 'react-router-dom';
import '../Legal/legal.css';

const SECTIONS = [
  ['agreement', 'Agreement to these terms'],
  ['service', 'What the service is'],
  ['affiliation', 'No affiliation with Microsoft'],
  ['accuracy', 'Accuracy of the material'],
  ['scoring', 'Scores and the pass mark'],
  ['your-content', 'Material you add'],
  ['acceptable-use', 'Acceptable use'],
  ['ownership', 'Intellectual property'],
  ['availability', 'Availability and changes'],
  ['disclaimer', 'Disclaimer of warranties'],
  ['liability', 'Limitation of liability'],
  ['law', 'Governing law'],
  ['contact', 'Contact']
];

export default function Terms() {
  return (
    <div className="page legal">
      <header className="legal-head">
        <Link className="legal-back" to="/">Back to study</Link>
        <span className="legal-eyebrow">Legal</span>
        <h1>Terms and conditions</h1>
        <div className="legal-meta">
          <span>Effective 18 November 2026</span>
          <span>Version 1.0</span>
          <span>Applies to AZ-900 Trainer</span>
        </div>
        <p className="legal-lede">
          These terms govern your use of the AZ-900 Trainer. They are written plainly on purpose. The
          important points are that this is an independent revision aid, that it is not official Microsoft
          material, and that your exam result remains your own responsibility.
        </p>
      </header>

      <div className="legal-callout">
        <strong>Read this before you rely on a score.</strong> The percentage and scaled figure this app
        shows are study indicators calculated from the questions in your local bank. They are not a
        Microsoft score report and they do not predict your result. Only Pearson VUE and Microsoft can
        report an official AZ-900 outcome.
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
        <section className="legal-sec" id="agreement">
          <h2><i>01</i> Agreement to these terms</h2>
          <p>
            By loading or using this site you accept these terms and the accompanying{' '}
            <Link to="/privacy">privacy policy</Link>. If you do not accept them, stop using the site.
            There is no account to close and nothing to cancel, because the service is free and holds
            no subscription.
          </p>
        </section>

        <section className="legal-sec" id="service">
          <h2><i>02</i> What the service is</h2>
          <p>
            AZ-900 Trainer is a browser based revision tool for the Microsoft Azure Fundamentals exam.
            It presents practice questions grouped by the published objective areas, builds weighted
            mock tests, records your answers on your own device, and shows where you are strong and weak.
            It also lets you edit the question bank and add your own material.
          </p>
          <p>
            It is not a training course, not a substitute for the official Microsoft Learn path, and not
            an exam booking or voucher service. It issues no certificate and confers no qualification.
          </p>
        </section>

        <section className="legal-sec" id="affiliation">
          <h2><i>03</i> No affiliation with Microsoft</h2>
          <p>
            This project is independent. It is not published, reviewed, endorsed, sponsored or approved by
            Microsoft Corporation, and it is not affiliated with Pearson VUE or any examination provider.
          </p>
          <p>
            <strong>Microsoft</strong>, <strong>Microsoft Azure</strong>, <strong>Azure</strong> and
            <strong> AZ-900</strong> are trademarks of Microsoft Corporation. They are used here only to
            identify the subject of the revision material. All other product and service names are the
            property of their respective owners.
          </p>
        </section>

        <section className="legal-sec" id="accuracy">
          <h2><i>04</i> Accuracy of the material</h2>
          <p>
            Questions, answer keys and explanations are study aids assembled from revision material and
            from documentation available at the time of writing. Azure changes continuously. Service
            names, tiers, limits, portal paths and retirement dates move, and items in the bank can
            become out of date or contain errors.
          </p>
          <ul>
            <li>Treat <a href="https://learn.microsoft.com/credentials/certifications/azure-fundamentals/" target="_blank" rel="noreferrer">Microsoft Learn</a> and the current official study guide as the authoritative source.</li>
            <li>Where a question here conflicts with Microsoft documentation, the documentation wins.</li>
            <li>Some items reference services that have been renamed or retired. They may still appear in the bank until removed.</li>
            <li>You can correct any item yourself using the edit action in the Bank, and revert your edit at any time.</li>
          </ul>
          <p>
            No promise is made that the bank covers every examinable skill, that its weighting matches the
            live exam exactly, or that any question will appear in your actual exam.
          </p>
        </section>

        <section className="legal-sec" id="scoring">
          <h2><i>05</i> Scores and the pass mark</h2>
          <p>
            The app reports a percentage of correct answers and an indicative figure out of 1000 against
            the published 700 pass mark. That figure is a simple linear conversion for motivation and
            tracking. Microsoft uses a scaled scoring model that is not a straight percentage, and the
            number of questions, their weighting and the difficulty of your live paper will differ.
          </p>
          <p>
            A high score here does not guarantee a pass, and a low score here does not mean you would fail.
            Use the objective breakdown to direct your revision rather than treating the headline number
            as a prediction.
          </p>
        </section>

        <section className="legal-sec" id="your-content">
          <h2><i>06</i> Material you add</h2>
          <p>
            The data page and the Bank let you paste question text, write your own items, edit existing
            ones and remove items. That material is stored only in your browser and is never uploaded to
            us. You keep whatever rights you already held in it.
          </p>
          <ul>
            <li>You are responsible for having the right to use anything you paste into the app.</li>
            <li>Do not paste live exam content obtained in breach of a non disclosure agreement, or material you are not licensed to reproduce.</li>
            <li>Do not paste other people's personal information into question text.</li>
            <li>Because the material is local, we cannot recover it if you clear your browser data. Export a copy if it matters to you.</li>
          </ul>
        </section>

        <section className="legal-sec" id="acceptable-use">
          <h2><i>07</i> Acceptable use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>present this site or its output as official Microsoft or Pearson VUE material;</li>
            <li>use it to reproduce or distribute actual examination content;</li>
            <li>attempt to disrupt the site, probe its hosting infrastructure without permission, or interfere with other visitors' use;</li>
            <li>scrape or mirror the site in a way that imposes unreasonable load on the hosting account;</li>
            <li>remove the trademark and affiliation notices in the footer or on this page.</li>
          </ul>
          <p>
            Personal study, classroom revision, study groups and linking to the site are all welcome.
          </p>
        </section>

        <section className="legal-sec" id="ownership">
          <h2><i>08</i> Intellectual property</h2>
          <p>
            The application code, interface design, layout and original written explanations are the
            property of the project author, offered for personal revision use. Third party names and
            marks belong to their owners. Open source libraries used by the application remain under
            their own licences. Nothing in these terms transfers ownership of any material to you, and
            nothing removes rights you already have in content you added.
          </p>
        </section>

        <section className="legal-sec" id="availability">
          <h2><i>09</i> Availability and changes</h2>
          <p>
            The site is provided as is, without an uptime commitment. Hosting, the domain, the question
            bank and the feature set may change, be reduced or be withdrawn at any time without notice.
            Because your progress lives on your device, a change to the hosted site does not by itself
            erase your record, though a change to the storage format may make older records unreadable.
          </p>
        </section>

        <section className="legal-sec" id="disclaimer">
          <h2><i>10</i> Disclaimer of warranties</h2>
          <p>
            To the fullest extent permitted by law, the service is provided <strong>as is</strong> and
            <strong> as available</strong>, without warranties of any kind, whether express, implied,
            statutory or otherwise. This includes any implied warranty of merchantability, fitness for a
            particular purpose, accuracy, title and non infringement. No warranty is given that the site
            will be uninterrupted, error free, secure, or that the material is complete, current or correct.
          </p>
        </section>

        <section className="legal-sec" id="liability">
          <h2><i>11</i> Limitation of liability</h2>
          <p>
            To the fullest extent permitted by law, the project author is not liable for any indirect,
            incidental, special, consequential or punitive loss, and not liable for any loss of profit,
            data, goodwill, study time, examination fee, voucher cost, or for a failed examination attempt
            or a lost certification opportunity, arising from or connected with your use of the site or
            your reliance on its material.
          </p>
          <p>
            Because the service is supplied free of charge, the total aggregate liability arising from it
            is limited to zero. Nothing in these terms excludes liability that cannot lawfully be excluded,
            including liability for fraud or for death or personal injury caused by negligence.
          </p>
        </section>

        <section className="legal-sec" id="law">
          <h2><i>12</i> Governing law</h2>
          <p>
            These terms are governed by the laws of the Republic of South Africa, and the courts of
            Gauteng have jurisdiction over any dispute arising from them, without prejudice to any
            mandatory consumer protection rights you hold in your own country of residence.
          </p>
          <p>
            If any provision is held unenforceable, that provision is severed or read down to the minimum
            extent necessary and the remaining provisions continue in force. These terms, together with
            the privacy policy, form the whole agreement between you and the project author about this site.
          </p>
        </section>

        <section className="legal-sec" id="contact">
          <h2><i>13</i> Contact</h2>
          <p>
            Questions about these terms, requests to correct an item in the bank, or reports of material
            that should not be here can be raised at{' '}
            <a href="https://github.com/kingsilent47/az900-study-guide/issues" target="_blank" rel="noreferrer">
              github.com/kingsilent47/az900-study-guide/issues
            </a>.
          </p>
        </section>
      </div>

      <footer className="legal-foot">
        <p>Independent revision material. Verify anything that matters against the current Microsoft documentation.</p>
        <div className="legal-foot-links">
          <Link className="legal-btn legal-btn-outline" to="/privacy">Privacy policy</Link>
          <Link className="legal-btn legal-btn-primary" to="/">Back to study</Link>
        </div>
      </footer>
    </div>
  );
}
