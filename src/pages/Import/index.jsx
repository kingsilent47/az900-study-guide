import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useApp } from '../../state/AppState';
import { parseDump, parseJsonBank } from '../../lib/parseDump';
import { buildBank } from '../../lib/bank';
import { DOMAINS } from '../../data/domains';
import { useToast, Stat } from '../../components/ui';
import { IconUpload, IconTrash, IconCheck } from '../../components/Icons';

const SAMPLE = 'QUESTION 1\nWhich service provides serverless computing in Azure?\nA. Azure Virtual Machines\nB. Azure Functions\nC. Azure Storage\nD. Azure Container Instances\nAnswer: B\nExplanation:\nAzure Functions runs event-triggered code without provisioning infrastructure.';

export default function Import() {
  const { bank, imported, addImported, clearImported, issues } = useApp();
  const [text, setText] = useState('');
  const [mode, setMode] = useState('dump');
  const [toast, setToast] = useToast();

  const preview = useMemo(() => {
    if (!text.trim()) return null;
    try {
      const items = mode === 'dump' ? parseDump(text).items : parseJsonBank(text);
      const merged = buildBank([{ name: 'existing', items: bank.items }, { name: 'preview', items }]);
      const added = merged.size - bank.size;
      const counts = {};
      DOMAINS.forEach((d) => { counts[d.id] = merged.byDomain[d.id].length - bank.byDomain[d.id].length; });
      return { ok: true, found: items.length, added, duplicates: items.length - added, counts };
    } catch (err) {
      return { ok: false, message: err.message };
    }
  }, [text, mode, bank]);

  const onFile = (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const content = String(reader.result || '');
      setText(content);
      setMode(file.name.toLowerCase().endsWith('.json') ? 'json' : 'dump');
      setToast({ message: 'Loaded ' + file.name, tone: 'info' });
    };
    reader.onerror = () => setToast({ message: 'Could not read that file.', tone: 'no' });
    reader.readAsText(file);
    event.target.value = '';
  };

  const merge = () => {
    if (!preview || !preview.ok) return;
    const items = mode === 'dump' ? parseDump(text).items : parseJsonBank(text);
    addImported(items);
    setText('');
    setToast({ message: 'Merged into the bank. New tests will use it immediately.', tone: 'ok' });
  };

  return (
    <div className="page import">
      {toast}
      <header className="page-head">
        <div>
          <span className="eyebrow">Data</span>
          <h1>Feed the bank</h1>
          <p className="lede">
            Data loads at runtime, so a broken file can never fail your build again. Drop files into <code>public/</code> for automatic loading,
            or paste text below to merge it into this device.
          </p>
        </div>
      </header>

      <section className="section">
        <div className="card">
          <div className="card-head"><h2>Loaded sources</h2><span>{bank.size.toLocaleString()} unique questions</span></div>
          <table className="sources">
            <thead><tr><th>Source</th><th>Provided</th><th>Kept</th><th>Duplicates</th><th>Rejected</th></tr></thead>
            <tbody>
              {bank.report.map((r) => (
                <tr key={r.name}>
                  <td><code>{r.name}</code></td>
                  <td>{r.provided}</td>
                  <td className="ok">{r.kept}</td>
                  <td>{r.dup}</td>
                  <td>{r.bad}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {issues.length ? (
            <div className="panel-alert">
              {issues.map((i) => <div key={i.file}><strong>{i.file}</strong>: {i.message}</div>)}
            </div>
          ) : null}
          <div className="how">
            <h3>Automatic loading</h3>
            <ol>
              <li>In GitHub, open <code>src/questions.json</code>, click the pencil, and change the filename to <code>public/questions.json</code>. Commit.</li>
              <li>Do the same for <code>az900_raw.txt</code>, renaming it to <code>public/az900_raw.txt</code>. Commit.</li>
              <li>Reload this page. Both files are parsed in the browser and merged with the built-in core set.</li>
            </ol>
            <p className="muted">Rejected rows are placeholder hotspots, items with no answer key, and entries with fewer than two real options.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="card">
          <div className="card-head"><h2>Paste or upload</h2><span>merged on this device</span></div>
          <div className="import-controls">
            <div className="seg">
              <button type="button" className={mode === 'dump' ? 'is-on' : ''} onClick={() => setMode('dump')}>PDF text</button>
              <button type="button" className={mode === 'json' ? 'is-on' : ''} onClick={() => setMode('json')}>JSON array</button>
            </div>
            <label className="btn btn-outline file-btn">
              <IconUpload width={16} height={16} /> Choose a .txt or .json file
              <input type="file" accept=".txt,.json,text/plain,application/json" onChange={onFile} />
            </label>
            <button type="button" className="btn btn-ghost btn-sm" onClick={() => { setText(SAMPLE); setMode('dump'); }}>Load an example</button>
          </div>

          <textarea
            className="import-area"
            value={text}
            onChange={(e) => setText(e.target.value)}
            spellCheck={false}
            placeholder={mode === 'dump' ? 'Paste the raw question text, including the QUESTION numbers, options and Answer: lines.' : 'Paste a JSON array of { question, options, answer, explanation, topic } objects.'}
            aria-label="Question data"
          />

          {preview ? (
            preview.ok ? (
              <div className="preview">
                <Stat label="Parsed" value={preview.found} />
                <Stat label="New to the bank" value={preview.added} tone="ok" />
                <Stat label="Already present" value={preview.duplicates} />
                <div className="preview-domains">
                  {DOMAINS.map((d) => (
                    <span key={d.id} style={{ '--hue': d.hex }}><i className="chip-dot" />{d.short} +{preview.counts[d.id]}</span>
                  ))}
                </div>
              </div>
            ) : (
              <div className="panel-alert"><strong>Could not parse:</strong> {preview.message}</div>
            )
          ) : null}

          <div className="import-actions">
            <button type="button" className="btn btn-primary" onClick={merge} disabled={!preview || !preview.ok || !preview.found}>
              <IconCheck width={16} height={16} /> Merge into bank
            </button>
            <Link className="btn btn-outline" to="/">Back to study</Link>
            {imported.length ? (
              <button type="button" className="btn btn-danger" onClick={() => { if (window.confirm('Remove all pasted imports from this device?')) { clearImported(); setToast({ message: 'Imported items removed.', tone: 'info' }); } }}>
                <IconTrash width={16} height={16} /> Clear {imported.length} imported
              </button>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}
