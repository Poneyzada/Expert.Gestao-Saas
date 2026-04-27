// ============================================
// SETTINGS — components/settings.js
// ============================================
const SettingsTab = () => {
  const { useState } = React;
  const [brand, setBrand] = useState('#C9A84C');
  const [name, setName] = useState('Expert Gestão');

  return (
    <div>
      <Topbar title="Configurações" subtitle="Personalização e integrações da plataforma" />
      <div style={{ padding: '24px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', maxWidth: '900px' }}>

        <div className="card">
          <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text)', marginBottom: '20px' }}>Identidade Visual (White-Label)</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div><label>Nome da Plataforma</label><input value={name} onChange={e => setName(e.target.value)} /></div>
            <div>
              <label>Cor Principal da Marca</label>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <input type="color" value={brand} onChange={e => { setBrand(e.target.value); document.documentElement.style.setProperty('--brand', e.target.value); }} style={{ width: '48px', height: '48px', borderRadius: '8px', cursor: 'pointer', padding: '4px' }} />
                <input value={brand} onChange={e => setBrand(e.target.value)} style={{ flex: 1 }} />
              </div>
            </div>
            <div><label>Logo da Empresa</label>
              <div style={{ border: '2px dashed var(--border)', borderRadius: '12px', padding: '24px', textAlign: 'center', color: 'var(--muted)', fontSize: '13px', cursor: 'pointer' }}>
                Clique ou arraste o logo aqui (PNG/SVG)
              </div>
            </div>
            <button className="btn btn-brand">Salvar Identidade</button>
          </div>
        </div>

        <div className="card">
          <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text)', marginBottom: '20px' }}>Integrações</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              { name: 'n8n Webhooks', desc: 'Automação de leads e notificações', status: 'Conectado', color: 'var(--success)' },
              { name: 'WhatsApp Business API', desc: 'Envio de mensagens profissionais', status: 'Conectado', color: 'var(--success)' },
              { name: 'Supabase (Banco de Dados)', desc: 'PostgreSQL em produção', status: 'Conectado', color: 'var(--success)' },
              { name: 'OpenAI / Claude API', desc: 'Motor de análise dos diagnósticos', status: 'Conectado', color: 'var(--success)' },
              { name: 'Stripe / Asaas', desc: 'Pagamentos e assinaturas', status: 'Pendente', color: 'var(--warn)' },
              { name: 'Google Calendar', desc: 'Agendamento de reuniões', status: 'Pendente', color: 'var(--warn)' },
            ].map((int, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px', borderRadius: '10px', border: '1px solid var(--border)', background: 'var(--bg)' }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: '13px', color: 'var(--text)' }}>{int.name}</div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)' }}>{int.desc}</div>
                </div>
                <span className="badge" style={{ background: `${int.color}18`, color: int.color }}>{int.status}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text)', marginBottom: '20px' }}>Perguntas do Diagnóstico</h3>
          <p style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '16px' }}>Personalize as perguntas do formulário Avalancha para adaptar ao nicho do cliente.</p>
          <button className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center' }}><I.Edit /> Editar Perguntas</button>
        </div>

        <div className="card">
          <h3 style={{ fontSize: '15px', fontWeight: 700, color: 'var(--text)', marginBottom: '20px' }}>Usuários & Acessos</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '16px' }}>
            {[
              { name: 'Dra. Ana Silva', role: 'Admin', img: '47' },
              { name: 'Marcos Almeida', role: 'Expert', img: '68' },
              { name: 'Carla Mendes', role: 'Expert', img: '47' },
            ].map((u, i) => (
              <div key={i} style={{ display: 'flex', gap: '10px', alignItems: 'center', padding: '10px', border: '1px solid var(--border)', borderRadius: '10px', background: 'var(--bg)' }}>
                <img src={`https://i.pravatar.cc/150?img=${u.img}`} style={{ width: '32px', height: '32px', borderRadius: '50%' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)' }}>{u.name}</div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)' }}>{u.role}</div>
                </div>
                <button style={{ background: 'none', border: 'none', color: 'var(--muted)', cursor: 'pointer' }}><I.Edit /></button>
              </div>
            ))}
          </div>
          <button className="btn btn-brand" style={{ width: '100%', justifyContent: 'center' }}><I.Plus /> Convidar Usuário</button>
        </div>
      </div>
    </div>
  );
};
