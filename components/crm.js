// ============================================
// CRM PIPELINE — components/crm.js
// ============================================
const CRMTab = () => {
  const { useState } = React;

  const initial = [
    { id: 'col1', title: '🧊 Frio', subtitle: 'Pesquisa inicial', color: '#64748b', leads: [
      { id: 'l1', co: 'Distribuidora XYZ', val: 'R$50k/mês', tag: 'Apenas visualizou o anúncio', img: '12', hot: 'cold', tel: '(11)99999-1111', seg: 'Varejo' },
      { id: 'l2', co: 'Consultoria ABC', val: 'R$80k/mês', tag: 'Abandonou o formulário', img: '13', hot: 'cold', tel: '(11)99999-2222', seg: 'Serviços' },
    ]},
    { id: 'col2', title: '🌡️ Morno', subtitle: 'Consideração', color: 'var(--warn)', leads: [
      { id: 'l3', co: 'Loja do Centro', val: 'R$150k/mês', tag: 'Clicou no link do WhatsApp', img: '25', hot: 'warm', tel: '(11)99999-3333', seg: 'Varejo' },
      { id: 'l4', co: 'Clínica Saúde Vital', val: 'R$200k/mês', tag: 'Assistiu webinar 80%', img: '26', hot: 'warm', tel: '(11)99999-4444', seg: 'Saúde' },
    ]},
    { id: 'col3', title: '🔥 Quente', subtitle: 'Interesse confirmado', color: 'var(--brand)', leads: [
      { id: 'l5', co: 'Indústria Ferros SP', val: 'R$400k/mês', tag: 'Pediu mais informações', img: '32', hot: 'hot', tel: '(11)99999-5555', seg: 'Indústria' },
    ]},
    { id: 'col4', title: '🚨 Super Quente', subtitle: 'Pronto para fechar', color: 'var(--danger)', leads: [
      { id: 'l6', co: 'Tech Solutions Ltda', val: 'R$300k/mês', tag: 'Respondeu bot, pediu proposta!', img: '35', hot: 'superhot', tel: '(11)99999-6666', seg: 'Tecnologia' },
    ]},
    { id: 'col5', title: '✅ Convertido', subtitle: 'Cliente ativo', color: 'var(--success)', leads: [
      { id: 'l7', co: 'Grupo Alfa', val: 'R$5.000/mês', tag: 'Contrato assinado ✓', img: '41', hot: 'win', tel: '(11)99999-7777', seg: 'Varejo' },
      { id: 'l8', co: 'Varejo Prime', val: 'R$8.500/mês', tag: 'Contrato assinado ✓', img: '42', hot: 'win', tel: '(11)99999-8888', seg: 'Varejo' },
    ]},
  ];

  const [cols, setCols] = useState(initial);
  const [dragging, setDragging] = useState(null);
  const [selected, setSelected] = useState(null);
  const [over, setOver] = useState(null);

  const onDragStart = (lead, colId) => setDragging({ lead, colId });
  const onDragEnd = () => { setDragging(null); setOver(null); };
  const onDrop = (targetColId) => {
    if (!dragging || dragging.colId === targetColId) return;
    setCols(prev => prev.map(c => {
      if (c.id === dragging.colId) return { ...c, leads: c.leads.filter(l => l.id !== dragging.lead.id) };
      if (c.id === targetColId) return { ...c, leads: [...c.leads, dragging.lead] };
      return c;
    }));
    setDragging(null); setOver(null);
  };

  const hotClass = { cold: 'badge-cold', warm: 'badge-warm', hot: 'badge-brand', superhot: 'badge-hot', win: 'badge-win' };

  return (
    <div>
      <Topbar title="CRM Pipeline" subtitle="Leads qualificados automaticamente pela IA (n8n)"
        action={<button className="btn btn-brand"><I.Plus /> Novo Lead</button>} />

      {/* Search + Filter bar */}
      <div style={{ padding: '16px 24px', borderBottom: '1px solid var(--border)', display: 'flex', gap: '12px' }}>
        <div style={{ position: 'relative', flex: 1, maxWidth: '320px' }}>
          <span style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)' }}><I.Search /></span>
          <input placeholder="Buscar lead ou empresa..." style={{ paddingLeft: '36px' }} />
        </div>
        <select style={{ width: 'auto' }}><option>Todos os Segmentos</option><option>Varejo</option><option>Indústria</option><option>Tecnologia</option><option>Saúde</option></select>
        <select style={{ width: 'auto' }}><option>Qualquer temperatura</option><option>Super Quente</option><option>Quente</option><option>Morno</option><option>Frio</option></select>
      </div>

      {/* Kanban columns */}
      <div style={{ display: 'flex', gap: '0', overflowX: 'auto', height: 'calc(100vh - 180px)', padding: '0' }}>
        {cols.map(col => (
          <div key={col.id}
            style={{ minWidth: '260px', maxWidth: '260px', borderRight: '1px solid var(--border)', background: over === col.id ? `${col.color}06` : 'transparent', transition: 'background .2s', display: 'flex', flexDirection: 'column' }}
            onDragOver={e => { e.preventDefault(); setOver(col.id); }}
            onDrop={() => onDrop(col.id)}
            onDragLeave={() => setOver(null)}>
            <div style={{ padding: '16px 16px 12px', borderBottom: '1px solid var(--border)', position: 'sticky', top: 0, background: 'var(--sidebar)', zIndex: 1 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text)' }}>{col.title}</div>
                  <div style={{ fontSize: '11px', color: 'var(--muted)' }}>{col.subtitle}</div>
                </div>
                <span style={{ background: `${col.color}18`, color: col.color, fontSize: '12px', fontWeight: 700, padding: '2px 8px', borderRadius: '999px' }}>{col.leads.length}</span>
              </div>
              <div style={{ marginTop: '8px', height: '3px', borderRadius: '2px', background: `${col.color}30' }}>
                <div style={{ height: '100%', width: `${Math.min(col.leads.length * 20, 100)}%`, background: col.color, borderRadius: '2px', transition: 'width .4s' }} />
              </div>
            </div>

            <div style={{ flex: 1, overflowY: 'auto', padding: '12px 10px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {col.leads.map(lead => (
                <div key={lead.id} className="crm-card card" style={{ padding: '12px', cursor: 'grab', borderRadius: '12px', border: `1px solid ${over === col.id && dragging?.lead.id === lead.id ? col.color : 'var(--border)'}` }}
                  draggable onDragStart={() => onDragStart(lead, col.id)} onDragEnd={onDragEnd}
                  onClick={() => setSelected(lead)}>
                  <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginBottom: '10px' }}>
                    <img src={`https://i.pravatar.cc/150?img=${lead.img}`} style={{ width: '36px', height: '36px', borderRadius: '10px', objectFit: 'cover' }} />
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: '13px', fontWeight: 700, color: 'var(--text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{lead.co}</div>
                      <div style={{ fontSize: '11px', color: 'var(--muted)' }}>{lead.seg}</div>
                    </div>
                  </div>
                  <div style={{ fontSize: '11px', fontFamily: 'monospace', color: 'var(--muted)', background: 'var(--bg)', padding: '6px 8px', borderRadius: '6px', marginBottom: '10px', lineHeight: 1.4 }}>
                    IA: {lead.tag}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontSize: '13px', fontWeight: 700, color: 'var(--brand)' }}>{lead.val}</span>
                    <span className={`badge ${hotClass[lead.hot]}`}>
                      {lead.hot === 'cold' ? '🧊' : lead.hot === 'warm' ? '🌡️' : lead.hot === 'hot' ? '🔥' : lead.hot === 'superhot' ? '🚨' : '✅'}
                    </span>
                  </div>
                </div>
              ))}
              <button style={{ width: '100%', padding: '10px', borderRadius: '10px', border: '1px dashed var(--border)', background: 'transparent', color: 'var(--muted)', fontSize: '13px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px' }}>
                <I.Plus /> Adicionar
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Lead Detail Drawer */}
      {selected && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,.5)', backdropFilter: 'blur(4px)', zIndex: 100, display: 'flex', justifyContent: 'flex-end' }} onClick={() => setSelected(null)}>
          <div style={{ width: '420px', background: 'var(--sidebar)', height: '100%', padding: '32px 28px', overflowY: 'auto', borderLeft: '1px solid var(--border)' }} onClick={e => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '28px' }}>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                <img src={`https://i.pravatar.cc/150?img=${selected.img}`} style={{ width: '54px', height: '54px', borderRadius: '14px', objectFit: 'cover' }} />
                <div>
                  <h3 style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text)', marginBottom: '4px' }}>{selected.co}</h3>
                  <span className={`badge ${hotClass[selected.hot]}`}>{selected.seg}</span>
                </div>
              </div>
              <button onClick={() => setSelected(null)} style={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', padding: '6px 10px', cursor: 'pointer', color: 'var(--muted)', fontSize: '16px' }}>✕</button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="card" style={{ padding: '16px' }}>
                <div style={{ fontSize: '11px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--muted)', marginBottom: '12px' }}>Informações</div>
                {[['Faturamento', selected.val], ['Segmento', selected.seg], ['Telefone', selected.tel]].map(([k, v]) => (
                  <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid var(--border)' }}>
                    <span style={{ fontSize: '13px', color: 'var(--muted)' }}>{k}</span>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)' }}>{v}</span>
                  </div>
                ))}
              </div>

              <div className="card" style={{ padding: '16px', background: 'rgba(201,168,76,.06)', borderColor: 'rgba(201,168,76,.2)' }}>
                <div style={{ fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', color: 'var(--brand)', marginBottom: '8px' }}>Análise da IA</div>
                <p style={{ fontSize: '13px', color: 'var(--text)', lineHeight: 1.6 }}>"{selected.tag}". Com base no comportamento analisado, a probabilidade de conversão é alta. Recomendamos contato imediato via WhatsApp.</p>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <button className="btn btn-brand" style={{ width: '100%', justifyContent: 'center' }}><I.WhatsApp /> Enviar WhatsApp</button>
                <button className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center' }}><I.Users /> Atribuir Expert</button>
                <button className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center' }}><I.FileText /> Gerar Proposta PDF</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
