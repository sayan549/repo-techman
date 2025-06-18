import ServiceCard from '../components/ServiceCard.jsx';

export default function Services() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-blue-100 p-8">
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full">
        <h1 className="text-3xl font-bold mb-6 text-blue-700 text-center">
          Our Services
        </h1>
        <ServiceCard
          title="Website Development"
          description="Complete frontend UI and backend for your website, including one year of free updates and maintenance. We deliver modern, responsive, and high-performance solutions tailored to your business needs."
          className="mb-4"
        />
        <div className="border-t pt-4 text-gray-500 text-center">
          More services coming soon...
        </div>
      </div>
    </div>
  );
}
