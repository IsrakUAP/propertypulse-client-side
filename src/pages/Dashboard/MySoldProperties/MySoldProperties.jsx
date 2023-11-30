import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import useAgent from "../../../Hooks/useAgent";
import useOffer from "../../../Hooks/useOffer";

const MySoldProperties = () => {
  const [offers] = useOffer();
  const [isAgent] = useAgent();

  return (
    <div>
      <SectionHeader heading={"My Sold Properties"}></SectionHeader>
      <table className="min-w-full border border-gray-300 divide-y divide-gray-300">
        <thead className="bg-gray-200">
          <tr>
            <th className="border p-2">Property Title</th>
            <th className="border p-2">Property Location</th>
            <th className="border p-2">Buyer Email</th>
            <th className="border p-2">Buyer Name</th>
            <th className="border p-2">Sold Price</th>
          </tr>
        </thead>
        <tbody>
          {offers.map((offer) => (
            <tr key={offer._id}>
              <td className="border p-2">{offer.propertyTitle}</td>
              <td className="border p-2">{offer.propertyLocation}</td>
              <td className="border p-2">{offer.buyerEmail}</td>
              <td className="border p-2">{offer.buyerName}</td>
              <td className="border p-2">{offer.offeredAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MySoldProperties;
