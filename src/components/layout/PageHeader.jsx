export default function PageHeader({ title, subtitle }) {
  return (
    <div className="border-b border-gray-700 pb-4">
      <h1 className="text-2xl font-bold">{title}</h1>
      {subtitle && <p className="text-gray-400">{subtitle}</p>}
    </div>
  );
}
