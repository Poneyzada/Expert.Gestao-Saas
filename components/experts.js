// ============================================
// EXPERTS — components/experts.js
// ============================================
const ExpertsTab = () => {
  const { useState } = React;
  const [selected, setSelected] = useState(null);

  const experts = [
    { id: 1, name: 'Marcos Almeida', role: 'Especialista em Vendas & Conversão', img: '68', status: 'Ocupado', clients: 5, maxClients: 6, rating: 4.9, tags: ['Vendas', 'Script', 'CRM'], bio: 'Especialista em estruturação de times comerciais e otimização de funis de vendas para empresas de médio porte. Mais de 80 clientes atendidos.', results: 'R$1.2M gerado para clientes', email: 'marcos@avalancha.com', whats: '(11)99000-1111', cases: ['Tech Solutions +R$120k', 'Varejo Prime +R$80k'] },
    { id: 2, name: 'Carla Mendes', role: 'Retenção de Clientes & LTV', img: '47', status: 'Disponível', clients: 2, maxClients: 6, rating: 4.8, tags: ['Retenção', 'LTV', 'CS'], bio: 'Focada em reduzir churn e aumentar o LTV de carteiras de clientes. Especialista em estratégias de fidelização para serviços recorrentes.', results: 'Churn médio reduzido de 22% para 7%', email: 'carla@avalancha.com', whats: '(11)99000-2222', cases: ['Clínica Saúde -15pts churn', 'Grupo Alfa LTV +40%'] },
    { id: 3, name: 'Roberto Silva', role: 'Gestão Financeira & Precificação', img: '11', status: 'Disponível', clients: 3, maxClients: 6, rating: 4.7, tags: ['Financeiro', 'Custos', 'Fluxo'], bio: 'Estrutura precificação saudável, organiza fluxo de caixa e elimina sangrias financeiras invisíveis. Especialista em empresas com faturamento R$100k+.', results: 'Margem EBITDA média melhorada em 12pts', email: 'roberto@avalancha.com', whats: '(11)99000-3333', cases: ['Distribuidora XP -R$45k custos', 'Indústria SP +18% margem'] },
    { id: 4, name: 'Ana Beatriz', role: 'Aquisição & Marketing de Performance', img: '5', status: 'Ocupado', clients: 6, maxClients: 6, rating: 4.9, tags: ['Tráfego', 'Meta Ads', 'SEO'], bio: 'Especialista em tráfego pago e orgânico para negócios B2B e B2C de ticket alto. Foco total em CAC eficiente e escala previsível.', results: 'CAC reduzido em média 38% nos últimos 12m', email: 'ana@avalancha.com', whats: '(11)99000-4444', cases: ['Tech Solutions -R$80 CAC', 'Loja Centro x3 ROAS'] },
    { id: 5, name: 'Diego Ferreira', role: 'Operações & Processos (BPO)', img: '33', status: 'Disponível', clients: 1, maxClients: 6, rating: 4.6, tags: ['Processos', 'Eficiência', 'Automação'], bio: 'Mapeia e redesenha processos operacionais para eliminar gargalos de ineficiência. Especialista em automação de fluxos com ferramentas modernas.', results: 'Ineficiência operacional reduzida em média 35%', email: 'diego@avalancha.com', whats: '(11)99000-5555', cases: ['Clínica Saúde -41% retrabalho', 'Varejo Prime +28% velocidade'] },
    { id: 6, name: 'Fernanda Costa', role: 'RH & Cultura Organizacional', img: '9', status: 'Disponível', clients: 0, maxClients: 6, rating: 4.8, tags: ['RH', 'Cultura', 'Liderança'], bio: 'Desenvolve times de alta performance e estrutura políticas de retenção de talentos. Especialista em diagnóstico cultural e planos de carreira.', results: 'Turnover médio reduzido de 45% para 12%', email: 'fernanda@avalancha.com', whats: '(11)99000-6666', cases: ['Grupo Alfa turnover -33pts', 'Indústria SP cultura +NPS 40'] },
  ];

  return (
    <div>
      <Topbar title="Diretório de Experts" subtitle="Profissionais homologados para o método Avalancha 60K"
        action={<button className="btn btn-brand"><I.Plus /> Novo Expert</button>} />

      <div style={{ padding: '24px', display: 'grid', gridTemplateColumns: selected ? '1fr 400px' : '1fr', gap: '20px', height: 'calc(100vh - 120px)', overflow: 'hidden' }}>
        {/* Grid */}
        <div style={{ overflowY: 'auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '16px' }}>
            {experts.map(e => (
              <div key={e.id} className="card" style={{ cursor: 'pointer', transition: 'all .2s', borderColor: selected?.id === e.id ? 'var(--brand)' : 'var(--border)', background: selected?.id === e.id ? 'rgba(201,168,76,.04)' : 'var(--surface)' }}
                onClick={() => setSelected(selected?.id === e.id ? null : e)}
                onMouseEnter={el => el.currentTarget.style.transform = 'translateY(-3px)'}
                onMouseLeave={el => el.currentTarget.style.transform = 'none'}>
                <div style={{ display: 'flex', gap: '14px', alignItems: 'flex-start', marginBottom: '16px' }}>
                  <div style={{ position: 'relative' }}>
                    <img src={`https://i.pravatar.cc/150?img=${e.img}`} style={{ width: '54px', height: '54px', borderRadius: '14px', objectFit: 'cover' }} />
                    <div style={{ position: 'absolute', bottom: '-2px', right: '-2px', width: '14px', height: '14px', borderRadius: '50%', background: e.status === 'Disponível' ? 'var(--success)' : 'var(--warn)', border: '2px solid var(--bg)' }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontWeight: 700, fontSize: '15px', color: 'var(--text)', marginBottom: '3px' }}>{e.name}</div>
                    <div style={{ fontSize: '12px', color: 'var(--muted)', lineHeight: 1.4 }}>{e.role}</div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '3px', color: 'var(--brand)', fontSize: '12px', fontWeight: 700 }}>
                    <I.Star />{e.rating}
                  </div>
                </div>

                {/* Tags */}
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
                  {e.tags.map(t => <span key={t} className="tag">{t}</span>)}
                </div>

                {/* Load bar */}
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <span style={{ fontSize: '12px', color: 'var(--muted)' }}>Capacidade</span>
                    <span style={{ fontSize: '12px', fontWeight: 600, color: e.clients >= e.maxClients ? 'var(--danger)' : e.clients >= 4 ? 'var(--warn)' : 'var(--success)' }}>{e.clients}/{e.maxClients} clientes</span>
                  </div>
                  <div className="stat-bar">
                    <div className="stat-bar-fill" style={{ width: `${(e.clients / e.maxClients) * 100}%`, background: e.clients >= e.maxClients ? 'var(--danger)' : e.clients >= 4 ? 'var(--warn)' : 'var(--success)' }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detail panel */}
        {selected && (
          <div className="card" style={{ overflowY: 'auto', position: 'sticky', top: 0, alignSelf: 'flex-start', maxHeight: 'calc(100vh - 150px)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div style={{ display: 'flex', gap: '14px', alignItems: 'center' }}>
                <img src={`https://i.pravatar.cc/150?img=${selected.img}`} style={{ width: '54px', height: '54px', borderRadius: '14px', objectFit: 'cover' }} />
                <div>
                  <h3 style={{ fontWeight: 700, fontSize: '16px', color: 'var(--text)' }}>{selected.name}</h3>
                  <span style={{ fontSize: '12px', color: 'var(--muted)' }}>{selected.role}</span>
                </div>
              </div>
              <button onClick={() => setSelected(null)} style={{ background: 'none', border: '1px solid var(--border)', borderRadius: '8px', padding: '6px 10px', cursor: 'pointer', color: 'var(--muted)' }}>✕</button>
            </div>

            <div style={{ fontSize: '13px', color: 'var(--muted)', lineHeight: 1.7, marginBottom: '20px', padding: '14px', background: 'var(--bg)', borderRadius: '10px' }}>{selected.bio}</div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
              <div className="card" style={{ padding: '12px', background: 'rgba(16,185,129,.06)', borderColor: 'rgba(16,185,129,.2)' }}>
                <div style={{ fontSize: '11px', color: 'var(--success)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', marginBottom: '4px' }}>Resultado Comprovado</div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text)' }}>{selected.results}</div>
              </div>
              <div>
                <div style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '8px', fontWeight: 600 }}>Cases Recentes</div>
                {selected.cases.map((c, i) => <div key={i} style={{ fontSize: '13px', color: 'var(--text)', padding: '6px 0', borderBottom: i < selected.cases.length - 1 ? '1px solid var(--border)' : 'none' }}>✓ {c}</div>)}
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button className="btn btn-brand" style={{ width: '100%', justifyContent: 'center' }}><I.Users /> Atribuir Cliente</button>
              <button className="btn btn-ghost" style={{ width: '100%', justifyContent: 'center' }}><I.WhatsApp /> Contato WhatsApp</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
