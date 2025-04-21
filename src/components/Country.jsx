export default function Country({ country }) {
  const { common, png } = country;
  return (
    <div className="countryCard border p-4 rounded-lg text-center border-gray-300">
      <img
        src={png}
        alt={`${common} flag`}
        width={180}
        height={180}
        className="object-cover"
      />
      <h2>{common}</h2>
    </div>
  );
}
