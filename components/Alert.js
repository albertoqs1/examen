function Alert({ type, message, onClose }) {
  try {
    const bgColor = type === 'error' ? 'bg-red-500' : 'bg-green-500';
    
    React.useEffect(() => {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }, []);

    return (
      <div className="fixed top-4 right-4 z-50" data-name="alert" data-file="components/Alert.js">
        <div className={`${bgColor} text-white px-6 py-4 rounded-lg shadow-lg flex items-center gap-3`}>
          <div className="icon-alert-circle text-xl"></div>
          <span>{message}</span>
          <button onClick={onClose} className="ml-4">
            <div className="icon-x text-lg"></div>
          </button>
        </div>
      </div>
    );
  } catch (error) {
    console.error('Alert component error:', error);
    return null;
  }
}