// ============================================
// AUTH — components/auth.js
// ============================================
const AuthScreen = ({ onLogin }) => {
  const { useState } = React;
  const [email, setEmail] = useState('admin@avalancha.com');
  const [pass, setPass] = useState('');
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState('admin');

  const profiles = [
    { id: 'admin', label: 'Gestora (Admin)', color: 'var(--brand)', desc: 'Visão completa da operação' },
    { id: 'expert', label: 'Expert / Consultor', color: 'var(--success)', desc: 'Seus clientes e tarefas' },
    { id: 'client', label: 'Empresa (Cliente)', color: '#818cf8', desc: 'Diagnóstico e acompanhamento' },
  ];

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => { setLoading(false); onLogin(role); }, 1800);
  };

  return (
    <div style={{ height: '100vh', display: 'flex', background: 'var(--bg)' }}>
      {/* Left panel */}
      <div style={{ width: '50%', background: 'var(--sidebar)', borderRight: '1px solid var(--border)', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '64px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-100px', left: '-100px', width: '400px', height: '400px', background: 'var(--brand)', borderRadius: '50%', opacity: .04, filter: 'blur(80px)' }} />
        <div style={{ marginBottom: '48px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '48px' }}>
            <div style={{ width: '36px', height: '36px', background: 'var(--brand)', borderRadius: '10px', display: 'grid', placeItems: 'center', color: 'var(--brand-t)' }}><I.TrendUp /></div>
            <span style={{ fontSize: '18px', fontWeight: 800, color: 'var(--text)' }}>EXPERT<span style={{ color: 'var(--brand)', fontFamily: 'Playfair Display', fontStyle: 'italic', fontWeight: 400 }}>Gestão</span></span>
          </div>
          <h1 style={{ fontSize: '40px', fontWeight: 800, color: 'var(--text)', lineHeight: 1.15, marginBottom: '16px' }}>Plataforma<br /><span style={{ fontFamily: 'Playfair Display', fontStyle: 'italic', color: 'var(--brand)', fontWeight: 400 }}>Avalancha 60K</span></h1>
          <p style={{ color: 'var(--muted)', fontSize: '16px', lineHeight: 1.6 }}>Sistema de gestão que identifica gargalos empresariais e conecta automaticamente com experts para resolver.</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {['✓ CRM Híbrido com IA', '✓ Diagnóstico Avalancha Automático', '✓ PDFs Auditados Gerados pela IA', '✓ WhatsApp Profissional Integrado', '✓ Kanban por Cliente', '✓ Diretório de Experts'].map(f => (
            <div key={f} style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--muted)', fontSize: '14px' }}>
              <span style={{ color: 'var(--success)', fontWeight: 700 }}>{f}</span>
            </div>
          ))}
        </div>
        <div style={{ position: 'absolute', bottom: '32px', left: '64px', display: 'flex', alignItems: 'center', gap: '8px' }}>
          <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--success)', boxShadow: '0 0 8px var(--success)' }} />
          <span style={{ fontSize: '12px', fontFamily: 'monospace', color: 'var(--success)' }}>SISTEMA OPERACIONAL — IA ATIVA</span>
        </div>
      </div>

      {/* Right panel */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '64px', maxWidth: '480px' }}>
        <h2 style={{ fontSize: '28px', fontWeight: 700, color: 'var(--text)', marginBottom: '8px' }}>Bem-vindo de volta</h2>
        <p style={{ color: 'var(--muted)', marginBottom: '40px', fontSize: '14px' }}>Selecione seu perfil e entre no sistema</p>

        {/* Role selector */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
          {profiles.map(p => (
            <button key={p.id} onClick={() => setRole(p.id)} style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 16px', borderRadius: '12px', border: `2px solid ${role === p.id ? p.color : 'var(--border)'}`, background: role === p.id ? `${p.color}10` : 'var(--surface)', cursor: 'pointer', transition: 'all .2s', textAlign: 'left', width: '100%' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: p.color, flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)' }}>{p.label}</div>
                <div style={{ fontSize: '12px', color: 'var(--muted)' }}>{p.desc}</div>
              </div>
              {role === p.id && <div style={{ marginLeft: 'auto', color: p.color }}><I.Check /></div>}
            </button>
          ))}
        </div>

        <div style={{ marginBottom: '16px' }}>
          <label>E-mail</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="seu@email.com" />
        </div>
        <div style={{ marginBottom: '28px' }}>
          <label>Senha</label>
          <input type="password" value={pass} onChange={e => setPass(e.target.value)} placeholder="••••••••" />
        </div>

        <button className="btn btn-brand" onClick={handleLogin} disabled={loading} style={{ width: '100%', justifyContent: 'center', padding: '14px', fontSize: '15px', borderRadius: '12px', opacity: loading ? .7 : 1 }}>
          {loading ? <><div style={{ width: '18px', height: '18px', border: '2px solid rgba(255,255,255,.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin .7s linear infinite' }} /> Entrando...</> : 'Entrar no Sistema'}
        </button>

        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
      </div>
    </div>
  );
};
