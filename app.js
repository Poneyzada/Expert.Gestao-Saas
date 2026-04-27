// ============================================
// APP — app.js (Entry point)
// ============================================
const { useState, useEffect } = React;

const App = () => {
  const [isDark, setIsDark] = useState(true);
  const [user, setUser] = useState(null);
  const [active, setActive] = useState('dashboard');

  useEffect(() => {
    if (isDark) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [isDark]);

  const handleLogin = (role) => {
    setUser(role);
    setActive(role === 'admin' ? 'dashboard' : role === 'expert' ? 'kanban' : 'diagnostic');
  };

  const handleLogout = () => { setUser(null); setActive('dashboard'); };

  if (!user) return <AuthScreen onLogin={handleLogin} />;

  const renderTab = () => {
    switch (active) {
      case 'dashboard': return <DashboardTab />;
      case 'crm': return <CRMTab />;
      case 'kanban': return <KanbanTab />;
      case 'experts': return <ExpertsTab />;
      case 'clients': return <ClientsTab />;
      case 'diagnostic': return <DiagnosticTab />;
      case 'reports': return <ReportsTab />;
      case 'settings': return <SettingsTab />;
      default: return <DashboardTab />;
    }
  };

  return (
    <div id="app-root" style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        <Sidebar
          active={active}
          setActive={setActive}
          role={user}
          isDark={isDark}
          toggleTheme={() => setIsDark(!isDark)}
          onLogout={handleLogout}
        />
        <main style={{ flex: 1, overflowY: 'auto', background: 'var(--bg)' }}>
          {renderTab()}
        </main>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
