// ============================================
// KANBAN — components/kanban.js
// ============================================
const KanbanTab = () => {
  const { useState } = React;

  const clients = ['Tech Solutions Ltda', 'Varejo Prime', 'Clínica Saúde Vital'];
  const [activeClient, setActiveClient] = useState(0);

  const initialCols = [
    { id: 'backlog', title: 'Backlog', color: 'var(--muted)', cards: [
      { id: 'k1', title: 'Auditoria do Processo de Vendas', priority: 'Alta', assignee: '68', due: '02/05', tag: 'Vendas', done: false },
      { id: 'k2', title: 'Revisão do Funil de Retenção (LTV)', priority: 'Média', assignee: '47', due: '05/05', tag: 'Marketing', done: false },
    ]},
    { id: 'doing', title: 'Em Execução', color: 'var(--brand)', cards: [
      { id: 'k3', title: 'Treinamento Script de Vendas — Equipe Comercial', priority: 'Crítica', assignee: '68', due: '29/04', tag: 'Vendas', done: false, checklist: [{ t: 'Montar roteiro', ok: true }, { t: 'Gravar vídeo demo', ok: true }, { t: 'Aplicar com equipe', ok: false }] },
    ]},
    { id: 'review', title: 'Em Revisão', color: 'var(--warn)', cards: [
      { id: 'k4', title: 'Proposta Comercial Revisada', priority: 'Alta', assignee: '11', due: '28/04', tag: 'Financeiro', done: false },
    ]},
    { id: 'done', title: 'Concluído', color: 'var(--success)', cards: [
      { id: 'k5', title: 'Diagnóstico Avalancha Inicial', priority: 'Baixa', assignee: '47', due: '20/04', tag: 'Diagnóstico', done: true },
      { id: 'k6', title: 'Setup CRM e onboarding', priority: 'Baixa', assignee: '11', due: '18/04', tag: 'Operações', done: true },
    ]},
  ];

  const [cols, setCols] = useState(initialCols);
  const [dragging, setDragging] = useState(null);
  const [expanded, setExpanded] = useState(null);
  const [over, setOver] = useState(null);

  const onDragStart = (card, colId) => setDragging({ card, colId });
  const onDragEnd = () => { setDragging(null); setOver(null); };
  const onDrop = (targetColId) => {
    if (!dragging || dragging.colId === targetColId) return;
    setCols(prev => prev.map(c => {
      if (c.id === dragging.colId) return { ...c, cards: c.cards.filter(x => x.id !== dragging.card.id) };
      if (c.id === targetColId) return { ...c, cards: [...c.cards, { ...dragging.card, done: targetColId === 'done' }] };
      return c;
    }));
    setDragging(null); setOver(null);
  };

  const prioColor = { Crítica: 'var(--danger)', Alta: 'var(--warn)', Média: 'var(--brand)', Baixa: 'var(--success)' };
  const tagColors = { Vendas: '#6366f1', Marketing: '#ec4899', Financeiro: 'var(--brand)', Diagnóstico: 'var(--success)', Operações: '#64748b' };

  return (
    <div>
      <Topbar title="Plano de Ação" subtitle="Gestão de tarefas por empresa cliente" />

      {/* Client tabs */}
      <div style={{ display: 'flex', gap: '8px', padding: '16px 24px', borderBottom: '1px solid var(--border)', overflowX: 'auto' }}>
        {clients.map((c, i) => (
          <button key={i} onClick={() => setActiveClient(i)} style={{ padding: '8px 18px', borderRadius: '999px', border: `1px solid ${activeClient === i ? 'var(--brand)' : 'var(--border)'}`, background: activeClient === i ? 'rgba(201,168,76,.12)' : 'var(--surface)', color: activeClient === i ? 'var(--brand)' : 'var(--muted)', fontWeight: activeClient === i ? 700 : 400, fontSize: '13px', cursor: 'pointer', whiteSpace: 'nowrap', transition: 'all .2s' }}>{c}</button>
        ))}
        <button style={{ padding: '8px 14px', borderRadius: '999px', border: '1px dashed var(--border)', background: 'transparent', color: 'var(--muted)', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}><I.Plus /> Cliente</button>
      </div>

      {/* Board */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '0', height: 'calc(100vh - 180px)', overflow: 'hidden' }}>
        {cols.map(col => (
          <div key={col.id}
            style={{ borderRight: '1px solid var(--border)', display: 'flex', flexDirection: 'column', background: over === col.id ? `${col.color}06` : 'transparent', transition: 'background .2s' }}
            onDragOver={e => { e.preventDefault(); setOver(col.id); }}
            onDrop={() => onDrop(col.id)}
            onDragLeave={() => setOver(null)}>
            {/* Col header */}
            <div style={{ padding: '16px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: `3px solid ${col.color}` }}>
              <div>
                <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text)' }}>{col.title}</span>
                <span style={{ marginLeft: '8px', fontSize: '11px', background: 'var(--surface)', border: '1px solid var(--border)', padding: '1px 7px', borderRadius: '999px', color: 'var(--muted)' }}>{col.cards.length}</span>
              </div>
              <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--muted)', display: 'grid', placeItems: 'center' }}><I.Plus /></button>
            </div>

            {/* Cards */}
            <div style={{ flex: 1, overflowY: 'auto', padding: '12px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {col.cards.map(card => (
                <div key={card.id} className="kanban-card card" style={{ padding: '14px', borderRadius: '14px', opacity: card.done ? .65 : 1, borderLeft: `3px solid ${prioColor[card.priority] || 'var(--brand)'}` }}
                  draggable onDragStart={() => onDragStart(card, col.id)} onDragEnd={onDragEnd}
                  onClick={() => setExpanded(expanded?.id === card.id ? null : card)}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px', gap: '8px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: card.done ? 'var(--muted)' : 'var(--text)', lineHeight: 1.4, textDecoration: card.done ? 'line-through' : 'none', flex: 1 }}>{card.title}</span>
                  </div>

                  {/* Tags */}
                  <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '10px' }}>
                    <span className="tag" style={{ color: tagColors[card.tag] || 'var(--muted)', borderColor: `${tagColors[card.tag]}30` }}>{card.tag}</span>
                    <span className="tag" style={{ color: prioColor[card.priority] }}>⚡ {card.priority}</span>
                  </div>

                  {/* Checklist preview */}
                  {card.checklist && (
                    <div style={{ marginBottom: '10px' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '4px' }}>
                        <span style={{ fontSize: '11px', color: 'var(--muted)' }}>Progresso</span>
                        <span style={{ fontSize: '11px', color: 'var(--muted)' }}>{card.checklist.filter(x=>x.ok).length}/{card.checklist.length}</span>
                      </div>
                      <div className="stat-bar">
                        <div className="stat-bar-fill" style={{ width: `${(card.checklist.filter(x=>x.ok).length / card.checklist.length) * 100}%`, background: 'var(--brand)' }} />
                      </div>
                    </div>
                  )}

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <img src={`https://i.pravatar.cc/150?img=${card.assignee}`} style={{ width: '22px', height: '22px', borderRadius: '50%', border: '2px solid var(--bg)' }} />
                      <span style={{ fontSize: '11px', color: 'var(--muted)' }}>{card.due}</span>
                    </div>
                  </div>

                  {/* Expanded checklist */}
                  {expanded?.id === card.id && card.checklist && (
                    <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid var(--border)' }}>
                      {card.checklist.map((item, j) => (
                        <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '4px 0' }}>
                          <div style={{ width: '16px', height: '16px', borderRadius: '4px', border: `2px solid ${item.ok ? 'var(--success)' : 'var(--border)'}`, background: item.ok ? 'var(--success)' : 'transparent', display: 'grid', placeItems: 'center', flexShrink: 0 }}>
                            {item.ok && <I.Check />}
                          </div>
                          <span style={{ fontSize: '12px', color: item.ok ? 'var(--muted)' : 'var(--text)', textDecoration: item.ok ? 'line-through' : 'none' }}>{item.t}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
