export default function Country({ country }) {
  const { name, flag } = country;
  return (
    <div className="countryCard border p-4 rounded-lg text-center border-gray-300">
      <img
        src={flag}
        alt={`${name} flag`}
        width={180}
        height={180}
        className="object-cover"
      />
      <h2>{name}</h2>
    </div>
  );
}
