// ============================================
// SIDEBAR — components/sidebar.js
// ============================================
const Sidebar = ({ active, setActive, role, isDark, toggleTheme, onLogout }) => {
  const adminNav = [
    { id: 'dashboard', label: 'Dashboard', icon: <I.Home /> },
    { id: 'crm', label: 'CRM Pipeline', icon: <I.Filter /> },
    { id: 'clients', label: 'Empresas Clientes', icon: <I.Building /> },
    { id: 'kanban', label: 'Plano de Ação', icon: <I.Kanban /> },
    { id: 'experts', label: 'Diretório de Experts', icon: <I.Users /> },
    { id: 'diagnostic', label: 'Diagnóstico Avalancha', icon: <I.Clipboard /> },
    { id: 'reports', label: 'Relatórios PDF', icon: <I.FileText /> },
    { id: 'settings', label: 'Configurações', icon: <I.Settings /> },
  ];
  const expertNav = [
    { id: 'kanban', label: 'Meu Plano de Ação', icon: <I.Kanban /> },
    { id: 'clients', label: 'Meus Clientes', icon: <I.Building /> },
    { id: 'reports', label: 'Relatórios', icon: <I.FileText /> },
  ];
  const clientNav = [
    { id: 'diagnostic', label: 'Meu Diagnóstico', icon: <I.Clipboard /> },
    { id: 'kanban', label: 'Meu Plano de Ação', icon: <I.Kanban /> },
    { id: 'reports', label: 'Meus Relatórios', icon: <I.FileText /> },
  ];
  const nav = role === 'admin' ? adminNav : role === 'expert' ? expertNav : clientNav;

  return (
    <aside className="sidebar" style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Logo */}
      <div style={{ padding: '20px 20px 12px', borderBottom: '1px solid var(--border)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '32px', height: '32px', background: 'var(--brand)', borderRadius: '8px', display: 'grid', placeItems: 'center', color: 'var(--brand-t)', flexShrink: 0 }}><I.TrendUp /></div>
          <div>
            <div style={{ fontSize: '15px', fontWeight: 800, color: 'var(--text)' }}>EXPERT<span style={{ color: 'var(--brand)', fontFamily: 'Playfair Display', fontStyle: 'italic', fontWeight: 400 }}>Gestão</span></div>
            <div style={{ fontSize: '10px', color: 'var(--muted)', fontFamily: 'monospace', textTransform: 'uppercase' }}>{role === 'admin' ? 'Admin' : role === 'expert' ? 'Expert' : 'Cliente'}</div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ flex: 1, overflowY: 'auto', padding: '12px 0' }}>
        {nav.map(item => (
          <div key={item.id} className={`sidebar-item ${active === item.id ? 'active' : ''}`} onClick={() => setActive(item.id)}>
            {item.icon}
            <span>{item.label}</span>
          </div>
        ))}
      </nav>

      {/* Bottom */}
      <div style={{ borderTop: '1px solid var(--border)', padding: '12px 8px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 8px' }}>
          <img src="https://i.pravatar.cc/150?img=47" style={{ width: '32px', height: '32px', borderRadius: '50%', border: '2px solid var(--brand)' }} />
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: '13px', fontWeight: 600, color: 'var(--text)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {role === 'admin' ? 'Dra. Ana Silva' : role === 'expert' ? 'Marcos Almeida' : 'Tech Solutions'}
            </div>
            <div style={{ fontSize: '11px', color: 'var(--muted)' }}>{role}</div>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '4px', padding: '0 8px' }}>
          <button onClick={toggleTheme} style={{ flex: 1, padding: '8px', borderRadius: '8px', background: 'var(--surface)', border: '1px solid var(--border)', cursor: 'pointer', color: 'var(--muted)', display: 'grid', placeItems: 'center' }}>
            {isDark ? <I.Sun /> : <I.Moon />}
          </button>
          <button onClick={onLogout} style={{ flex: 1, padding: '8px', borderRadius: '8px', background: 'var(--surface)', border: '1px solid var(--border)', cursor: 'pointer', color: 'var(--muted)', display: 'grid', placeItems: 'center' }}>
            <I.LogOut />
          </button>
        </div>
      </div>
    </aside>
  );
};

const Topbar = ({ title, subtitle, action }) => (
  <div className="topbar">
    <div>
      <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--text)' }}>{title}</div>
      {subtitle && <div style={{ fontSize: '13px', color: 'var(--muted)' }}>{subtitle}</div>}
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', fontFamily: 'monospace', color: 'var(--success)', background: 'rgba(16,185,129,.08)', border: '1px solid rgba(16,185,129,.2)', padding: '4px 10px', borderRadius: '999px' }}>
        <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--success)', animation: 'pulse 2s infinite' }} />
        n8n IA Ativa
      </div>
      <button style={{ padding: '8px', borderRadius: '8px', background: 'var(--surface)', border: '1px solid var(--border)', cursor: 'pointer', color: 'var(--muted)', position: 'relative', display: 'grid', placeItems: 'center' }}>
        <I.Bell />
        <span style={{ position: 'absolute', top: '6px', right: '6px', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--danger)', border: '2px solid var(--sidebar)' }} />
      </button>
      {action}
    </div>
    <style>{`@keyframes pulse { 0%,100%{opacity:1} 50%{opacity:.4} }`}</style>
  </div>
);
