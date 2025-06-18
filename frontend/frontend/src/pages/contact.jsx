import ContactForm from '../components/ContactForm.jsx';

export default function Contact() {
  return (
    <div className="animate-fade-in flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200">
      <h1 className="text-4xl font-bold mb-4 animate-slide-down">Contact Us</h1>
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg animate-pop">
        <ContactForm />
      </div>
      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 1s ease;
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          .animate-slide-down {
            animation: slideDown 0.7s cubic-bezier(0.4,0,0.2,1);
          }
          @keyframes slideDown {
            from { transform: translateY(-40px); opacity: 0; }
            to { transform: translateY(0); opacity: 1; }
          }
          .animate-pop {
            animation: popIn 0.6s cubic-bezier(0.4,0,0.2,1);
          }
          @keyframes popIn {
            0% { transform: scale(0.8); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
    </div>
  );
}
