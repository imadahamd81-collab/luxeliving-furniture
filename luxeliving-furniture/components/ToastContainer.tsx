import React from 'react';
import { useToast } from '../context/ToastContext';
import { CheckCircle, XCircle, Info, AlertTriangle, X } from 'lucide-react';

const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useToast();

  const icons = {
    success: <CheckCircle className="w-5 h-5 text-green-500" />,
    error: <XCircle className="w-5 h-5 text-red-500" />,
    info: <Info className="w-5 h-5 text-blue-500" />,
    warning: <AlertTriangle className="w-5 h-5 text-yellow-500" />,
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 max-w-sm w-full">
      {toasts.map(({ id, message, type }) => (
        <div
          key={id}
          className={`bg-white rounded-2xl shadow-2xl p-4 flex items-start gap-3 border-l-4 ${
            type === 'success' ? 'border-green-500' :
            type === 'error' ? 'border-red-500' :
            type === 'warning' ? 'border-yellow-500' :
            'border-blue-500'
          } animate-slide-up`}
        >
          {icons[type]}
          <p className="flex-1 text-sm text-gray-800">{message}</p>
          <button onClick={() => removeToast(id)} className="text-gray-400 hover:text-gray-600">
            <X className="w-4 h-4" />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ToastContainer;