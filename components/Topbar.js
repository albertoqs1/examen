function Topbar({ currentUser, onToggleSidebar }) {
  try {
    const [notificationOpen, setNotificationOpen] = React.useState(false);

    return (
      <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6" data-name="topbar" data-file="components/Topbar.js">
        <div className="flex items-center gap-4">
          <button onClick={onToggleSidebar} className="p-2 hover:bg-gray-100 rounded-lg">
            <div className="icon-menu text-xl text-gray-600"></div>
          </button>
          <button className="px-4 py-2 text-[var(--primary-color)] font-medium hover:bg-blue-50 rounded-lg">
            Inicio
          </button>
        </div>

        <div className="flex items-center gap-4">
          <div className="relative">
            <button 
              onClick={() => setNotificationOpen(!notificationOpen)}
              className="p-2 hover:bg-gray-100 rounded-lg relative"
            >
              <div className="icon-bell text-xl text-gray-600"></div>
              <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
            
            {notificationOpen && (
              <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-xl border border-gray-200 p-4">
                <h3 className="font-semibold mb-3">Notificaciones</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <p>Nueva actualización disponible</p>
                  <p>3 usuarios nuevos registrados</p>
                </div>
              </div>
            )}
          </div>

          <div className="flex items-center gap-3 pl-4 border-l border-gray-200">
            <img 
              src={currentUser.objectData.Avatar} 
              alt={currentUser.objectData.Name}
              className="w-10 h-10 rounded-full"
            />
            <div>
              <p className="text-sm font-medium text-gray-900">{currentUser.objectData.Name}</p>
              <p className="text-xs text-gray-500">{currentUser.objectData.Role}</p>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Topbar component error:', error);
    return null;
  }
}