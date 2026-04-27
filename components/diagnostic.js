// ============================================
// DIAGNOSTIC — components/diagnostic.js
// ============================================
const DiagnosticTab = () => {
  const { useState } = React;
  const [step, setStep] = useState(0);
  const [analyzing, setAnalyzing] = useState(false);
  const [done, setDone] = useState(false);
  const [aiStep, setAiStep] = useState(0);

  const steps = [
    { title: 'Dados da Empresa', fields: [
      { label: 'Nome da Empresa', type: 'text', placeholder: 'Ex: Tech Solutions Ltda' },
      { label: 'CNPJ', type: 'text', placeholder: '00.000.000/0001-00' },
      { label: 'Segmento de Atuação', type: 'select', opts: ['Tecnologia', 'Varejo', 'Saúde', 'Indústria', 'Serviços', 'Outro'] },
      { label: 'Nº de Funcionários', type: 'select', opts: ['1-5', '6-20', '21-50', '51-200', '200+'] },
    ]},
    { title: 'Financeiro', fields: [
      { label: 'Faturamento Médio Mensal', type: 'select', opts: ['Até R$50k', 'R$50k-R$100k', 'R$100k-R$300k', 'R$300k-R$1M', 'Acima de R$1M'] },
      { label: 'Margem de Lucro Atual (%)', type: 'text', placeholder: 'Ex: 15' },
      { label: 'Já investiu em cursos / consultoria?', type: 'select', opts: ['Sim, sem resultado', 'Sim, com resultado parcial', 'Não'] },
      { label: 'Qual é o seu maior custo operacional?', type: 'select', opts: ['Pessoal/RH', 'Marketing/Aquisição', 'Logística', 'Tecnologia', 'Outro'] },
    ]},
    { title: 'Vendas & Clientes', fields: [
      { label: 'Quantos leads gera por mês?', type: 'text', placeholder: 'Ex: 200' },
      { label: 'Qual sua taxa de conversão estimada?', type: 'select', opts: ['Menos de 5%', '5-15%', '15-30%', 'Acima de 30%'] },
      { label: 'Qual o ticket médio por cliente?', type: 'text', placeholder: 'Ex: R$2.500' },
      { label: 'Seu maior desafio em vendas?', type: 'select', opts: ['Pouco volume de leads', 'Baixa conversão', 'Ticket baixo', 'Recompra baixa', 'Equipe desalinhada'] },
    ]},
    { title: 'Operações', fields: [
      { label: 'Como você avalia sua eficiência operacional?', type: 'select', opts: ['Muito ruim (muito retrabalho)', 'Ruim', 'Regular', 'Boa', 'Excelente'] },
      { label: 'Tempo médio para entregar seu produto/serviço?', type: 'select', opts: ['Muito lento (> 30 dias)', 'Lento (15-30 dias)', 'Regular (7-15 dias)', 'Rápido (< 7 dias)'] },
      { label: 'Sua equipe segue processos documentados?', type: 'select', opts: ['Não, tudo na memória', 'Parcialmente', 'Sim, maioria dos processos', 'Sim, 100% documentado'] },
    ]},
  ];

  const runAnalysis = () => {
    setAnalyzing(true);
    const ticks = [800, 2000, 3500, 5000];
    ticks.forEach((t, i) => setTimeout(() => setAiStep(i + 1), t));
    setTimeout(() => { setAnalyzing(false); setDone(true); }, 6000);
  };

  if (done) {
    return (
      <div>
        <Topbar title="Diagnóstico Avalancha" subtitle="Resultado gerado pela IA" />
        <div style={{ padding: '32px', maxWidth: '860px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'rgba(16,185,129,.12)', color: 'var(--success)', display: 'grid', placeItems: 'center', margin: '0 auto 16px', fontSize: '32px' }}>✓</div>
            <h2 style={{ fontSize: '28px', fontWeight: 800, color: 'var(--text)', marginBottom: '8px' }}>Diagnóstico Concluído</h2>
            <p style={{ color: 'var(--muted)', fontSize: '15px' }}>A IA identificou 2 gargalos críticos e atribuiu o Expert Marcos Almeida automaticamente.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
            {[
              { label: 'Taxa de Vendas', value: 32, color: 'var(--danger)', note: 'Abaixo do esperado' },
              { label: 'Ineficiência', value: 72, color: 'var(--danger)', note: 'Crítico — Sangria de R$34k' },
              { label: 'Velocidade de Entrega', value: 45, color: 'var(--warn)', note: 'Atenção necessária' },
              { label: 'Ticket Médio', value: 58, color: 'var(--warn)', note: 'Pode ser melhorado' },
            ].map((m, i) => (
              <div key={i} className="card" style={{ borderTop: `3px solid ${m.color}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--muted)' }}>{m.label}</span>
                  <span style={{ fontSize: '20px', fontWeight: 800, color: m.color }}>{m.value}%</span>
                </div>
                <div className="stat-bar">
                  <div className="stat-bar-fill" style={{ width: `${m.value}%`, background: m.color }} />
                </div>
                <div style={{ fontSize: '12px', color: m.color, marginTop: '8px', fontWeight: 600 }}>{m.note}</div>
              </div>
            ))}
          </div>

          <div className="card" style={{ background: 'rgba(201,168,76,.05)', borderColor: 'rgba(201,168,76,.3)', marginBottom: '16px' }}>
            <div style={{ fontWeight: 700, color: 'var(--brand)', marginBottom: '12px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '.06em' }}>Resumo Executivo da IA</div>
            <p style={{ fontSize: '14px', color: 'var(--text)', lineHeight: 1.8 }}>A empresa apresenta <strong>ineficiência operacional crítica (72%)</strong> causando uma sangria estimada de <strong>R$34.000/mês</strong>. A baixa taxa de conversão de vendas (32%) indica desalinhamento no processo comercial. Recomendamos intervenção imediata nos módulos de Vendas e Operações. O Expert <strong>Marcos Almeida</strong> foi acionado automaticamente e iniciará o plano de ação em até 24h.</p>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            <button className="btn btn-brand" style={{ flex: 1, justifyContent: 'center' }}><I.Download /> Gerar PDF Auditado</button>
            <button className="btn btn-ghost" style={{ flex: 1, justifyContent: 'center' }}><I.WhatsApp /> Enviar para Cliente</button>
            <button className="btn btn-ghost" onClick={() => { setStep(0); setDone(false); setAiStep(0); }} style={{ justifyContent: 'center' }}>Novo Diagnóstico</button>
          </div>
        </div>
      </div>
    );
  }

  if (analyzing) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div className="card" style={{ maxWidth: '460px', width: '100%', padding: '40px', textAlign: 'center', position: 'relative', overflow: 'hidden', borderColor: 'rgba(201,168,76,.3)' }}>
          <div className="scanner-line"></div>
          <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'rgba(201,168,76,.1)', color: 'var(--brand)', display: 'grid', placeItems: 'center', margin: '0 auto 20px', animation: 'pulseGlow 2s infinite' }}>
            <I.CPU />
          </div>
          <h3 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text)', fontFamily: 'Playfair Display', fontStyle: 'italic', marginBottom: '8px' }}>Análise n8n + IA</h3>
          <p style={{ color: 'var(--muted)', fontSize: '14px', marginBottom: '28px' }}>Processando respostas e identificando gargalos...</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left' }}>
            {[
              'Recebendo formulário (Webhook n8n)...',
              'Agente IA analisando métricas Avalancha...',
              'Calculando custo do gargalo em R$...',
              'Selecionando Expert homologado...',
            ].map((msg, i) => (
              <div key={i} style={{ padding: '10px 14px', borderRadius: '8px', border: `1px solid ${aiStep > i ? 'var(--brand)' : 'var(--border)'}`, background: aiStep > i ? 'rgba(201,168,76,.06)' : 'var(--bg)', color: aiStep > i ? 'var(--brand)' : 'var(--muted)', fontSize: '13px', fontFamily: 'monospace', transition: 'all .4s' }}>
                {aiStep > i ? '✓ ' : '⟳ '}{msg}
              </div>
            ))}
          </div>
          <style>{`@keyframes pulseGlow { 0%,100%{box-shadow:0 0 0 0 rgba(201,168,76,.3)} 50%{box-shadow:0 0 0 16px rgba(201,168,76,0)} }`}</style>
        </div>
      </div>
    );
  }

  const current = steps[step];
  return (
    <div>
      <Topbar title="Diagnóstico Avalancha 60K" subtitle={`Etapa ${step + 1} de ${steps.length}: ${current.title}`} />
      <div style={{ maxWidth: '680px', margin: '0 auto', padding: '40px 24px' }}>
        {/* Progress */}
        <div style={{ display: 'flex', gap: '8px', marginBottom: '40px' }}>
          {steps.map((s, i) => (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px', cursor: i <= step ? 'pointer' : 'default' }} onClick={() => i <= step && setStep(i)}>
              <div style={{ height: '4px', borderRadius: '2px', background: i <= step ? 'var(--brand)' : 'var(--border)', transition: 'background .3s' }} />
              <span style={{ fontSize: '11px', color: i === step ? 'var(--brand)' : 'var(--muted)', fontWeight: i === step ? 700 : 400 }}>{s.title}</span>
            </div>
          ))}
        </div>

        <div className="card">
          <h2 style={{ fontSize: '22px', fontWeight: 700, color: 'var(--text)', marginBottom: '24px' }}>{current.title}</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            {current.fields.map((f, i) => (
              <div key={i}>
                <label>{f.label}</label>
                {f.type === 'select'
                  ? <select><option value="">Selecione...</option>{f.opts.map(o => <option key={o}>{o}</option>)}</select>
                  : <input type={f.type} placeholder={f.placeholder} />}
              </div>
            ))}
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '28px' }}>
            <button className="btn btn-ghost" onClick={() => setStep(Math.max(0, step - 1))} style={{ opacity: step === 0 ? 0 : 1 }}>← Anterior</button>
            {step < steps.length - 1
              ? <button className="btn btn-brand" onClick={() => setStep(step + 1)}>Próximo →</button>
              : <button className="btn btn-brand" onClick={runAnalysis}><I.CPU /> Analisar com IA</button>}
          </div>
        </div>
      </div>
    </div>
  );
};
