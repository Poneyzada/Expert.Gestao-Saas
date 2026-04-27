// ============================================
// DASHBOARD — components/dashboard.js
// ============================================
const DashboardTab = () => {
  const kpis = [
    { label: 'Receita MRR', value: 'R$ 87.400', delta: '+18% mês', cls: 'kpi-good', icon: <I.Dollar />, color: 'var(--success)' },
    { label: 'Clientes Ativos', value: '24', delta: '3 novos esta semana', cls: 'kpi-brand', icon: <I.Building />, color: 'var(--brand)' },
    { label: 'Gargalos Críticos', value: '3', delta: 'Requer ação imediata', cls: 'kpi-critical', icon: <I.Activity />, color: 'var(--danger)' },
    { label: 'Ticket Médio', value: 'R$ 3.642', delta: '+5% mês', cls: 'kpi-good', icon: <I.TrendUp />, color: 'var(--success)' },
    { label: 'Conversão CRM', value: '34%', delta: 'Leads qualificados', cls: 'kpi-brand', icon: <I.Filter />, color: 'var(--brand)' },
    { label: 'Taxa Ineficiência', value: '22%', delta: '-6% vs mês anterior', cls: 'kpi-warn', icon: <I.TrendDown />, color: 'var(--warn)' },
    { label: 'Experts Ativos', value: '8', delta: '2 disponíveis agora', cls: 'kpi-good', icon: <I.Users />, color: 'var(--success)' },
    { label: 'NPS Clientes', value: '87', delta: 'Excelente', cls: 'kpi-good', icon: <I.Star />, color: 'var(--success)' },
  ];

  const alerts = [
    { co: 'Tech Solutions Ltda', expert: 'Marcos Almeida', issue: 'Perda de Vendas — R$34k/mês', urgency: 'CRÍTICO', color: 'var(--danger)', img: '68' },
    { co: 'Grupo Distribuidora XP', expert: 'Não atribuído', issue: 'Ineficiência Operacional — 41%', urgency: 'ALTO', color: 'var(--warn)', img: '' },
    { co: 'Varejo Prime', expert: 'Carla Mendes', issue: 'Baixo LTV — Churn 28%', urgency: 'MÉDIO', color: 'var(--brand)', img: '47' },
  ];

  const recentActivity = [
    { text: 'Diagnóstico concluído — Tech Solutions Ltda', time: '2min atrás', icon: <I.Clipboard />, color: 'var(--brand)' },
    { text: 'PDF Auditado enviado para Varejo Prime', time: '18min atrás', icon: <I.FileText />, color: 'var(--success)' },
    { text: 'Lead Grupo XP movido para "Super Quente"', time: '1h atrás', icon: <I.Filter />, color: 'var(--danger)' },
    { text: 'Marcos Almeida concluiu tarefa: Script de Vendas', time: '3h atrás', icon: <I.Check />, color: 'var(--success)' },
    { text: 'WhatsApp enviado para 3 leads mormos', time: '5h atrás', icon: <I.WhatsApp />, color: '#25d366' },
  ];

  return (
    <div style={{ padding: '0' }}>
      <Topbar title="Dashboard" subtitle="Visão geral da operação Avalancha 60K"
        action={<button className="btn btn-brand"><I.Plus /> Novo Lead</button>} />

      <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', gap: '24px' }}>
        {/* KPI Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
          {kpis.map((k, i) => (
            <div key={i} className={`card ${k.cls} fade-up`} style={{ animationDelay: `${i * 0.05}s`, position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '80px', height: '80px', borderRadius: '50%', background: k.color, opacity: .06 }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: `${k.color}18`, color: k.color, display: 'grid', placeItems: 'center' }}>{k.icon}</div>
              </div>
              <div style={{ fontSize: '11px', color: 'var(--muted)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '4px' }}>{k.label}</div>
              <div style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text)', fontFamily: 'Playfair Display', marginBottom: '6px' }}>{k.value}</div>
              <div style={{ fontSize: '12px', color: k.color, fontWeight: 600 }}>{k.delta}</div>
            </div>
          ))}
        </div>

        {/* Alerts + Activity */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: '16px' }}>
          {/* Gargalos críticos */}
          <div className="card">
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text)' }}>Gargalos Críticos</h3>
              <span className="badge badge-hot">Requer Ação</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {alerts.map((a, i) => (
                <div key={i} style={{ display: 'flex', gap: '14px', alignItems: 'center', padding: '14px', borderRadius: '12px', border: `1px solid ${a.color}30`, background: `${a.color}06`, cursor: 'pointer', transition: 'all .2s' }}
                  onMouseEnter={e => e.currentTarget.style.transform = 'translateX(4px)'}
                  onMouseLeave={e => e.currentTarget.style.transform = 'none'}>
                  <div style={{ position: 'relative' }}>
                    {a.img
                      ? <img src={`https://i.pravatar.cc/150?img=${a.img}`} style={{ width: '44px', height: '44px', borderRadius: '12px', objectFit: 'cover' }} />
                      : <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: 'var(--surface)', border: '1px solid var(--border)', display: 'grid', placeItems: 'center', color: 'var(--muted)' }}><I.Users /></div>}
                    <div style={{ position: 'absolute', bottom: '-2px', right: '-2px', width: '12px', height: '12px', borderRadius: '50%', background: a.color, border: '2px solid var(--bg)' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: '14px', color: 'var(--text)', marginBottom: '3px' }}>{a.co}</div>
                    <div style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '6px' }}>{a.issue}</div>
                    <div style={{ fontSize: '11px', color: 'var(--muted)' }}>Expert: <span style={{ color: a.expert === 'Não atribuído' ? 'var(--danger)' : 'var(--success)', fontWeight: 600 }}>{a.expert}</span></div>
                  </div>
                  <span className="badge" style={{ background: `${a.color}18`, color: a.color }}>{a.urgency}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Atividade recente */}
          <div className="card">
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text)', marginBottom: '20px' }}>Atividade Recente</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
              {recentActivity.map((a, i) => (
                <div key={i} className="timeline-item" style={{ paddingBottom: '18px', paddingTop: '2px' }}>
                  <div style={{ position: 'absolute', left: '-26px', top: '2px', width: '10px', height: '10px', borderRadius: '50%', background: a.color, border: '2px solid var(--bg)' }} />
                  <div style={{ fontSize: '13px', color: 'var(--text)', fontWeight: 500, marginBottom: '4px', lineHeight: 1.4 }}>{a.text}</div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)' }}>{a.time}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Progress bars resumo experts */}
        <div className="card">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: 'var(--text)' }}>Carga dos Experts</h3>
            <span style={{ fontSize: '12px', color: 'var(--muted)' }}>Esta semana</span>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px' }}>
            {[
              { name: 'Marcos Almeida', role: 'Vendas', load: 85, img: '68', clients: 5 },
              { name: 'Carla Mendes', role: 'Retenção', load: 40, img: '47', clients: 2 },
              { name: 'Roberto Silva', role: 'Financeiro', load: 60, img: '11', clients: 3 },
              { name: 'Ana Beatriz', role: 'Marketing', load: 90, img: '5', clients: 6 },
            ].map((e, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <img src={`https://i.pravatar.cc/150?img=${e.img}`} style={{ width: '36px', height: '36px', borderRadius: '50%', border: `2px solid ${e.load > 80 ? 'var(--danger)' : e.load > 60 ? 'var(--warn)' : 'var(--success)'}` }} />
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)' }}>{e.name}</div>
                    <div style={{ fontSize: '11px', color: 'var(--muted)' }}>{e.role} · {e.clients} clientes</div>
                  </div>
                </div>
                <div className="stat-bar">
                  <div className="stat-bar-fill" style={{ width: `${e.load}%`, background: e.load > 80 ? 'var(--danger)' : e.load > 60 ? 'var(--warn)' : 'var(--success)' }} />
                </div>
                <div style={{ fontSize: '11px', color: 'var(--muted)', textAlign: 'right' }}>{e.load}% capacidade</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
