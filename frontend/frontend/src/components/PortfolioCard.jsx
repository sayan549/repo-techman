const PortfolioCard = ({ projectName, description }) => {
  return (
    <div className="border p-4 rounded shadow mb-4">
      <h3 className="text-xl font-semibold">{projectName}</h3>
      <p>{description}</p>
    </div>
  );
}
export default PortfolioCard;
