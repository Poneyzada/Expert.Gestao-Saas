// ============================================
// REPORTS — components/reports.js
// ============================================
const ReportsTab = () => {
  const { useState } = React;
  const [generating, setGenerating] = useState(null);
  const [generated, setGenerated] = useState([]);

  const templates = [
    { id: 'diagnostic', title: 'PDF de Diagnóstico', desc: 'Resumo executivo completo com gráfico radar das 4 métricas, gargalos identificados pela IA e plano de ação sugerido.', icon: <I.Clipboard />, color: 'var(--brand)', badge: 'IA Gerado' },
    { id: 'monthly', title: 'Relatório Mensal de Progresso', desc: 'Comparativo das métricas antes × depois, tarefas concluídas no período e resultados financeiros mensuráveis.', icon: <I.Activity />, color: 'var(--success)', badge: 'Automático' },
    { id: 'proposal', title: 'Proposta Comercial', desc: 'Proposta profissional personalizada com diagnóstico do cliente, solução proposta, investimento e próximos passos.', icon: <I.Dollar />, color: '#6366f1', badge: 'Personalizável' },
    { id: 'closure', title: 'Relatório de Encerramento', desc: 'Documento final de acompanhamento: ROI total gerado, comparativo inicial vs final e carta de recomendação.', icon: <I.Star />, color: '#ec4899', badge: 'Premium' },
  ];

  const recent = [
    { name: 'Diagnóstico — Tech Solutions Ltda', date: '27/04/2025', type: 'Diagnóstico', sent: 'WhatsApp + Email', size: '2.4 MB', client: '35' },
    { name: 'Relatório Mensal — Varejo Prime (Abr)', date: '26/04/2025', type: 'Mensal', sent: 'Email', size: '1.8 MB', client: '42' },
    { name: 'Proposta Comercial — Indústria Ferros', date: '25/04/2025', type: 'Proposta', sent: 'WhatsApp', size: '3.1 MB', client: '32' },
    { name: 'Relatório de Encerramento — Grupo Alfa', date: '20/04/2025', type: 'Encerramento', sent: 'Email + WhatsApp', size: '4.2 MB', client: '41' },
  ];

  const generate = (id) => {
    setGenerating(id);
    setTimeout(() => {
      setGenerating(null);
      setGenerated(prev => [...prev, id]);
    }, 2500);
  };

  return (
    <div>
      <Topbar title="Relatórios PDF" subtitle="Documentos profissionais gerados automaticamente pela IA" />

      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* Templates */}
        <div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text)' }}>Gerar Novo Relatório</h3>
            <div style={{ display: 'flex', gap: '8px' }}>
              <select style={{ width: 'auto', fontSize: '13px', padding: '8px 12px' }}><option>Tech Solutions Ltda</option><option>Varejo Prime</option><option>Grupo Alfa</option><option>Clínica Saúde Vital</option></select>
            </div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
            {templates.map(t => (
              <div key={t.id} className="card" style={{ position: 'relative', borderTop: `3px solid ${t.color}`, transition: 'all .2s' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: `${t.color}18`, color: t.color, display: 'grid', placeItems: 'center' }}>{t.icon}</div>
                  <span className="badge" style={{ background: `${t.color}18`, color: t.color, fontSize: '10px' }}>{t.badge}</span>
                </div>
                <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--text)', marginBottom: '8px' }}>{t.title}</div>
                <div style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.6, marginBottom: '16px' }}>{t.desc}</div>
                <button
                  className={`btn ${generated.includes(t.id) ? 'btn-ghost' : 'btn-brand'}`}
                  style={{ width: '100%', justifyContent: 'center', fontSize: '13px', opacity: generating === t.id ? .7 : 1 }}
                  onClick={() => !generated.includes(t.id) && generate(t.id)}>
                  {generating === t.id ? (
                    <><div style={{ width: '14px', height: '14px', border: '2px solid rgba(255,255,255,.3)', borderTopColor: '#fff', borderRadius: '50%', animation: 'spin .7s linear infinite' }} /> Gerando IA...</>
                  ) : generated.includes(t.id) ? (
                    <><I.Check /> Gerado! Baixar PDF</>
                  ) : (
                    <><I.Download /> Gerar PDF</>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Histórico */}
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text)' }}>Histórico de Relatórios</h3>
            <div style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }}><I.Search /></span>
              <input placeholder="Buscar relatório..." style={{ paddingLeft: '32px', width: '220px', fontSize: '13px', padding: '8px 12px 8px 32px' }} />
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {recent.map((r, i) => (
              <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'center', padding: '14px 0', borderBottom: i < recent.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <img src={`https://i.pravatar.cc/150?img=${r.client}`} style={{ width: '38px', height: '38px', borderRadius: '10px', objectFit: 'cover' }} />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: '14px', color: 'var(--text)', marginBottom: '4px' }}>{r.name}</div>
                  <div style={{ fontSize: '12px', color: 'var(--muted)' }}>{r.date} · Enviado via {r.sent} · {r.size}</div>
                </div>
                <span className="badge badge-brand">{r.type}</span>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <button className="btn btn-ghost" style={{ padding: '7px 12px', fontSize: '12px' }}><I.Eye /> Ver</button>
                  <button className="btn btn-ghost" style={{ padding: '7px 12px', fontSize: '12px' }}><I.Send /> Reenviar</button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* WhatsApp Preview */}
        <div className="card" style={{ background: 'rgba(37,211,102,.04)', borderColor: 'rgba(37,211,102,.15)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ color: '#25d366' }}><I.WhatsApp /></div>
              <div>
                <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--text)' }}>Preview — Mensagem WhatsApp Profissional</div>
                <div style={{ fontSize: '12px', color: 'var(--muted)' }}>Enviada automaticamente após gerar o PDF</div>
              </div>
            </div>
          </div>
          <div style={{ background: '#1a2a1a', borderRadius: '12px', padding: '16px 20px', maxWidth: '480px' }}>
            <div style={{ fontSize: '11px', color: '#25d366', fontWeight: 700, marginBottom: '10px', fontFamily: 'monospace' }}>De: Expert Gestão Platform</div>
            <div style={{ fontSize: '14px', color: '#e5e5e5', lineHeight: 1.8 }}>
              Olá <strong>Carlos</strong> 👋<br /><br />
              Seu <strong>Diagnóstico Avalancha 60K</strong> ficou pronto.<br /><br />
              📊 <strong>2 gargalos críticos identificados:</strong><br />
              1. Ineficiência Operacional: 72% (crítico)<br />
              2. Taxa de Conversão: 32% (abaixo da meta)<br /><br />
              📄 O relatório completo em PDF está em anexo.<br /><br />
              Seu Expert <strong>Marcos Almeida</strong> entra em contato em até <strong>24h</strong> para iniciar o plano de ação.<br /><br />
              <span style={{ color: '#25d366' }}>— Plataforma Expert Gestão | Avalancha 60K</span>
            </div>
          </div>
        </div>
      </div>
      <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
    </div>
  );
};
