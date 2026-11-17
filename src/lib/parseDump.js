const NOISE = [
  /surepassexam/i, /passleader/i, /P\s*ass\s*in\s*g\s*Ce/i, /Recommend!!/i,
  /Questions&\s*Answers\s*PDF/i, /IT\s*Stud\s*y/i, /Get\s*Latest/i, /Powered\s*by\s*TCPDF/i,
  /Thank You for Trying Our Product/i, /Practice Exam Features/i, /Instant Download/i,
  /Order ID:/i, /PayPal/i, /Copyright/i, /Vendor:\s*Microsoft/i, /Exam Code:/i, /Version:\s*\d/i
];

function tidy(text) {
  return String(text || '')
    .replace(/\r/g, '')
    .replace(/An\s*s\s*w\s*e\s*r\s*:/gi, 'Answer:')
    .replace(/Q\s*uestio\s*n\s*:/gi, 'Question:')
    .replace(/Ex\s*p\s*lanation\s*:/gi, 'Explanation:')
    .replace(/Questio\s*n\s*:/gi, 'Question:')
    .split('\n')
    .filter((line) => !NOISE.some((re) => re.test(line)))
    .join('\n');
}

export function stripBoilerplate(q) {
  return String(q || '')
    .replace(/-\s*\(\s*Exam Topic\s*\d+\s*\)/gi, ' ')
    .replace(/Note:\s*This question is part of a series[\s\S]*?review screen\./gi, ' ')
    .replace(/Instructions:\s*To answer,[\s\S]*?one point\./gi, ' ')
    .replace(/Instructions:\s*Review the (underlined|undefined|bold)[\s\S]*?statement correct\./gi, ' ')
    .replace(/NOTE:\s*Each correct (selection|match|answer) is worth one point\.?/gi, ' ')
    .replace(/^\s*(HOTSPOT|Hotspot Question|DRAG DROP|Drag and Drop Question|Select and Place:)\s*/gim, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function cleanExplanation(raw) {
  let text = String(raw || '').replace(/^Explanation:\s*/i, '');
  text = text.replace(/References?:\s*/gi, 'References: ');
  text = text.replace(/\s+/g, ' ').trim();
  if (text.length > 1600) text = text.slice(0, 1600).trim() + '...';
  return text;
}

export function parseDump(input) {
  const text = tidy(input);
  const parts = text.split(/(?:^|\n)\s*(?:NEW\s+)?QUESTION\s*:?\s*(\d+)\b/i);
  const items = [];
  let skipped = 0;

  for (let i = 1; i < parts.length; i += 2) {
    const number = Number(parts[i]);
    const body = parts[i + 1] || '';
    const answerSplit = body.split(/Answer:/i);
    if (answerSplit.length < 2) { skipped += 1; continue; }

    const before = answerSplit[0];
    const after = answerSplit.slice(1).join('Answer:');
    const letters = (after.match(/^\s*([A-E](?:\s*[, ]\s*[A-E])*)/) || [])[1];
    if (!letters) { skipped += 1; continue; }

    const answer = letters.toUpperCase().replace(/[^A-E]/g, '');
    const markers = [...before.matchAll(/(?:^|\n|[ \t])([A-E])\.\s+/g)];
    if (markers.length < 2) { skipped += 1; continue; }

    const question = stripBoilerplate(before.slice(0, markers[0].index));
    const options = markers.map((m, idx) => {
      const start = m.index + m[0].length;
      const end = idx + 1 < markers.length ? markers[idx + 1].index : before.length;
      return before.slice(start, end).replace(/\s+/g, ' ').trim();
    });

    if (options.some((o) => /^(not\s+)?mastered$/i.test(o))) { skipped += 1; continue; }
    if (options.some((o) => o.length === 0)) { skipped += 1; continue; }
    if (question.length < 12) { skipped += 1; continue; }

    items.push({
      id: number,
      question,
      options,
      answer,
      explanation: cleanExplanation(after.replace(/^\s*[A-E](?:\s*[, ]\s*[A-E])*\s*/, ''))
    });
  }

  return { items, skipped };
}

export function parseJsonBank(input) {
  const data = typeof input === 'string' ? JSON.parse(input) : input;
  const list = Array.isArray(data) ? data : Array.isArray(data && data.questions) ? data.questions : null;
  if (!list) throw new Error('Expected an array of question objects.');
  return list;
}
