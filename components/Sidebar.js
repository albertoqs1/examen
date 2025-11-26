function Sidebar({ isOpen, currentUser }) {
  try {
    const [activeMenu, setActiveMenu] = React.useState('inicio');
    const [menuExpanded, setMenuExpanded] = React.useState({});

    const menuItems = [
      { id: 'inicio', label: 'Inicio', icon: 'home', link: 'dashboard.html' },
      { 
        id: 'configuraciones', 
        label: 'Configuraciones', 
        icon: 'settings',
        submenu: [
          { id: 'general', label: 'General' },
          { id: 'seguridad', label: 'Seguridad' }
        ]
      },
      { id: 'usuarios', label: 'Usuarios', icon: 'users', link: 'users.html' }
    ];

    const toggleSubmenu = (id) => {
      setMenuExpanded(prev => ({ ...prev, [id]: !prev[id] }));
    };

    return (
      <div 
        className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 transition-all duration-300 ${isOpen ? 'w-[var(--sidebar-width)]' : 'w-0'} overflow-hidden`}
        data-name="sidebar" 
        data-file="components/Sidebar.js"
      >
        <div className="p-6">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-[var(--primary-color)] flex items-center justify-center">
              <div className="icon-layout-dashboard text-xl text-white"></div>
            </div>
            <h2 className="text-xl font-bold text-gray-900">Sistema</h2>
          </div>

          <nav className="space-y-2">
            {menuItems.map(item => (
              <div key={item.id}>
                <button
                  onClick={() => {
                    if (item.submenu) {
                      toggleSubmenu(item.