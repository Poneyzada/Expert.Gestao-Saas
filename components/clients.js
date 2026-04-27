// ============================================
// CLIENTS — components/clients.js
// ============================================
const ClientsTab = () => {
  const { useState } = React;
  const [selected, setSelected] = useState(null);

  const clients = [
    { id: 1, name: 'Tech Solutions Ltda', seg: 'Tecnologia', rev: 'R$300k/mês', expert: 'Marcos Almeida', expertImg: '68', status: 'Crítico', img: '35', since: 'Jan/2025', scores: { vendas: 32, ineficiencia: 72, velocidade: 45, ticket: 28 }, timeline: ['Diagnóstico inicial (15/01)', 'Expert alocado (16/01)', 'Script de vendas em execução (20/01)', 'Aguardando resultado (atual)'] },
    { id: 2, name: 'Varejo Prime', seg: 'Varejo', rev: 'R$200k/mês', expert: 'Carla Mendes', expertImg: '47', status: 'Em Progresso', img: '42', since: 'Dez/2024', scores: { vendas: 58, ineficiencia: 41, velocidade: 63, ticket: 50 }, timeline: ['Diagnóstico inicial (10/12)', 'Expert alocado (11/12)', 'Plano LTV iniciado (15/12)', 'Revisão mensal concluída (Jan/2025)'] },
    { id: 3, name: 'Grupo Alfa', seg: 'Varejo', rev: 'R$150k/mês', expert: 'Roberto Silva', expertImg: '11', status: 'Saudável', img: '41', since: 'Nov/2024', scores: { vendas: 78, ineficiencia: 22, velocidade: 82, ticket: 71 }, timeline: ['Diagnóstico inicial (01/11)', 'Expert financeiro alocado', 'Reestruturação de custos (-R$45k)', 'NPS atingido: 87 ✓'] },
    { id: 4, name: 'Clínica Saúde Vital', seg: 'Saúde', rev: 'R$250k/mês', expert: 'Diego Ferreira', expertImg: '33', status: 'Em Progresso', img: '26', since: 'Fev/2025', scores: { vendas: 44, ineficiencia: 58, velocidade: 37, ticket: 62 }, timeline: ['Diagnóstico inicial (05/02)', 'Gargalo: Ineficiência operacional', 'Mapeamento de processos iniciado'] },
  ];

  const statusColor = { Crítico: 'var(--danger)', 'Em Progresso': 'var(--warn)', Saudável: 'var(--success)' };

  const RadarChart = ({ scores }) => {
    const metrics = [
      { label: 'Vendas', value: scores.vendas },
      { label: 'Eficiência', value: 100 - scores.ineficiencia },
      { label: 'Velocidade', value: scores.velocidade },
      { label: 'Ticket', value: scores.ticket },
    ];
    return (
      <div style={{ display: 'grid', gap: '10px' }}>
        {metrics.map(m => (
          <div key={m.label}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
              <span style={{ fontSize: '12px', color: 'var(--muted)', fontWeight: 500 }}>{m.label}</span>
              <span style={{ fontSize: '12px', fontWeight: 700, color: m.value >= 70 ? 'var(--success)' : m.value >= 40 ? 'var(--warn)' : 'var(--danger)' }}>{m.value}%</span>
            </div>
            <div className="stat-bar">
              <div className="stat-bar-fill" style={{ width: `${m.value}%`, background: m.value >= 70 ? 'var(--success)' : m.value >= 40 ? 'var(--warn)' : 'var(--danger)' }} />
            </div>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <Topbar title="Empresas Clientes" subtitle="Diagnóstico, progresso e acompanhamento por empresa"
        action={<button className="btn btn-brand"><I.Plus /> Nova Empresa</button>} />

      <div style={{ display: 'flex', height: 'calc(100vh - 120px)', overflow: 'hidden' }}>
        {/* List */}
        <div style={{ width: selected ? '380px' : '100%', borderRight: selected ? '1px solid var(--border)' : 'none', overflowY: 'auto', padding: '20px', flexShrink: 0 }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {clients.map(c => (
              <div key={c.id} className="card" style={{ cursor: 'pointer', borderColor: selected?.id === c.id ? 'var(--brand)' : 'var(--border)', transition: 'all .2s' }}
                onClick={() => setSelected(selected?.id === c.id ? null : c)}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                  <img src={`https://i.pravatar.cc/150?img=${c.img}`} style={{ width: '48px', height: '48px', borderRadius: '12px', objectFit: 'cover' }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                      <span style={{ fontWeight: 700, fontSize: '15px', color: 'var(--text)' }}>{c.name}</span>
                      <span className="badge" style={{ background: `${statusColor[c.status]}18`, color: statusColor[c.status] }}>{c.status}</span>
                    </div>
                    <div style={{ display: 'flex', gap: '12px', fontSize: '12px', color: 'var(--muted)' }}>
                      <span>{c.seg}</span>
                      <span>·</span>
                      <span>{c.rev}</span>
                      <span>·</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                        <img src={`https://i.pravatar.cc/150?img=${c.expertImg}`} style={{ width: '16px', height: '16px', borderRadius: '50%' }} />
                        {c.expert}
                      </span>
                    </div>
                  </div>
                  <I.ChevronRight />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detail */}
        {selected && (
          <div style={{ flex: 1, overflowY: 'auto', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                <img src={`https://i.pravatar.cc/150?img=${selected.img}`} style={{ width: '64px', height: '64px', borderRadius: '16px', objectFit: 'cover' }} />
                <div>
                  <h2 style={{ fontSize: '22px', fontWeight: 800, color: 'var(--text)', marginBottom: '6px' }}>{selected.name}</h2>
                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span className="badge badge-brand">{selected.seg}</span>
                    <span className="badge" style={{ background: `${statusColor[selected.status]}18`, color: statusColor[selected.status] }}>{selected.status}</span>
                  </div>
                </div>
              </div>
              <button onClick={() => setSelected(null)} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', padding: '8px 14px', cursor: 'pointer', color: 'var(--muted)' }}>✕</button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              <div className="card">
                <div style={{ fontSize: '12px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--muted)', marginBottom: '16px' }}>Diagnóstico Avalancha</div>
                <RadarChart scores={selected.scores} />
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div className="card" style={{ padding: '16px' }}>
                  <div style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '8px', fontWeight: 600 }}>Expert Responsável</div>
                  <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                    <img src={`https://i.pravatar.cc/150?img=${selected.expertImg}`} style={{ width: '40px', height: '40px', borderRadius: '10px' }} />
                    <div>
                      <div style={{ fontWeight: 700, color: 'var(--text)', fontSize: '14px' }}>{selected.expert}</div>
                      <div style={{ fontSize: '12px', color: 'var(--success)' }}>Ativo desde {selected.since}</div>
                    </div>
                  </div>
                </div>
                <button className="btn btn-brand" style={{ justifyContent: 'center' }}><I.Download /> Gerar PDF Auditado</button>
                <button className="btn btn-ghost" style={{ justifyContent: 'center' }}><I.WhatsApp /> Enviar Relatório WhatsApp</button>
                <button className="btn btn-ghost" style={{ justifyContent: 'center' }}><I.Kanban /> Ver Kanban</button>
              </div>
            </div>

            <div className="card">
              <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text)', marginBottom: '16px' }}>Timeline de Atividades</div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {selected.timeline.map((t, i) => (
                  <div key={i} className="timeline-item" style={{ paddingBottom: i < selected.timeline.length - 1 ? '16px' : '0', paddingTop: '2px' }}>
                    <div style={{ position: 'absolute', left: '-26px', top: '4px', width: '10px', height: '10px', borderRadius: '50%', background: i === selected.timeline.length - 1 ? 'var(--brand)' : 'var(--success)', border: '2px solid var(--bg)' }} />
                    <div style={{ fontSize: '13px', color: 'var(--text)' }}>{t}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
