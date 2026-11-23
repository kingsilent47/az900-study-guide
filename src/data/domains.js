export const DOMAINS = [
  {
    id: 'cloud',
    label: 'Describe cloud concepts',
    short: 'Cloud concepts',
    weight: 0.25,
    hex: '#0ea5b7',
    note: '25-30% of the exam',
    blurb: 'Cloud models, shared responsibility, consumption pricing, CapEx and OpEx.',
    aliases: ['cloud concepts', 'describe cloud concepts'],
    keywords: ['capex', 'opex', 'capital expenditure', 'operational expenditure', 'iaas', 'paas', 'saas',
      'public cloud', 'private cloud', 'hybrid cloud', 'cloud computing', 'elasticity', 'agility',
      'economies of scale', 'consumption', 'shared responsibility', 'predictability', 'scalability',
      'high availability', 'disaster recovery', 'fault tolerance', 'pay as you go', 'pay-as-you-go']
  },
  {
    id: 'arch',
    label: 'Describe Azure architecture and services',
    short: 'Architecture and services',
    weight: 0.40,
    hex: '#2f81f7',
    note: '35-40% of the exam',
    blurb: 'Regions, zones, compute, storage, networking, databases, identity-aware services.',
    aliases: ['azure services', 'architecture', 'describe azure architecture and services',
      'describe azure architecture and services'],
    keywords: ['virtual machine', 'vm', 'scale set', 'virtual network', 'vnet', 'subnet', 'region',
      'availability zone', 'availability set', 'fault domain', 'storage account', 'blob', 'azure files',
      'queue', 'table storage', 'disk', 'cosmos', 'sql database', 'synapse', 'databricks', 'hdinsight',
      'app service', 'functions', 'logic app', 'container', 'kubernetes', 'aks', 'aci', 'expressroute',
      'vpn gateway', 'load balancer', 'application gateway', 'front door', 'traffic manager', 'cdn',
      'dns', 'iot hub', 'iot central', 'machine learning', 'cognitive', 'data factory', 'data lake',
      'arc', 'migrate', 'virtual desktop', 'bastion', 'peering', 'service endpoint', 'private link']
  },
  {
    id: 'gov',
    label: 'Describe Azure management and governance',
    short: 'Management and governance',
    weight: 0.17,
    hex: '#f5a524',
    note: 'Part of the 30-35% governance domain',
    blurb: 'Resource hierarchy, policy, RBAC, templates, cost management, monitoring, support.',
    aliases: ['management', 'governance', 'pricing', 'pricing & support', 'pricing and support',
      'describe azure management and governance'],
    keywords: ['resource group', 'subscription', 'management group', 'azure policy', 'initiative',
      'blueprint', 'tag', 'lock', 'rbac', 'role based access', 'role-based access', 'reader',
      'contributor', 'owner', 'arm template', 'resource manager', 'bicep', 'infrastructure as code',
      'advisor', 'monitor', 'log analytics', 'application insights', 'service health', 'activity log',
      'cost management', 'budget', 'pricing calculator', 'tco', 'support plan', 'sla', 'lifecycle',
      'quota', 'cloud shell', 'azure portal', 'cli', 'powershell', 'preview']
  },
  {
    id: 'sec',
    label: 'Describe security, privacy, and compliance',
    short: 'Security and compliance',
    weight: 0.18,
    hex: '#ff5a5f',
    note: 'Part of the 30-35% governance domain',
    blurb: 'Entra ID, authentication, Defender for Cloud, Sentinel, encryption, trust and compliance.',
    aliases: ['security', 'security & compliance', 'security and compliance',
      'describe security, privacy, and compliance', 'identity'],
    keywords: ['authentication', 'authorization', 'mfa', 'multifactor', 'multi-factor', 'conditional access',
      'identity protection', 'privileged identity', 'pim', 'azure ad', 'active directory', 'entra',
      'single sign-on', 'sso', 'b2b', 'b2c', 'key vault', 'secret', 'certificate', 'encryption',
      'disk encryption', 'defender', 'sentinel', 'siem', 'soar', 'playbook', 'ddos', 'firewall',
      'network security group', 'nsg', 'waf', 'information protection', 'sensitivity label',
      'compliance manager', 'trust center', 'privacy statement', 'gdpr', 'iso', 'nist', 'government',
      'secure score', 'zero trust', 'passwordless']
  }
];

export const DOMAIN_BY_ID = DOMAINS.reduce((acc, d) => { acc[d.id] = d; return acc; }, {});

const norm = (s) => String(s || '').toLowerCase().replace(/[^a-z0-9 ]/g, ' ').replace(/\s+/g, ' ').trim();

export function getDomainByTopic(topicString) {
  if (!topicString) return 'arch'; // Default fallback
  const normalized = topicString.toLowerCase().trim();
  
  const domain = DOMAINS.find(d => 
    d.label.toLowerCase() === normalized || 
    d.aliases.some(alias => normalized.includes(alias.toLowerCase()))
  );
  
  return domain ? domain.id : 'arch';
}

export function domainFromLabel(label) {
  const n = norm(label);
  if (!n) return null;
  for (const d of DOMAINS) {
    if (d.aliases.some((a) => norm(a) === n)) return d.id;
    if (norm(d.label) === n) return d.id;
  }
  for (const d of DOMAINS) {
    if (d.aliases.some((a) => n.includes(norm(a)))) return d.id;
  }
  return null;
}

export function classify(text) {
  const hay = ' ' + norm(text) + ' ';
  let best = 'arch';
  let bestScore = 0;
  for (const d of DOMAINS) {
    let score = 0;
    for (const k of d.keywords) {
      const needle = ' ' + norm(k) + ' ';
      if (hay.includes(needle)) score += k.includes(' ') ? 2 : 1;
    }
    if (score > bestScore) { bestScore = score; best = d.id; }
  }
  return best;
}
