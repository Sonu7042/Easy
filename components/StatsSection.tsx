export default function StatsSection() {
  const stats = [
    {
      value: "500k+",
      label: "HAPPY CUSTOMERS",
    },
    {
      value: "1M+",
      label: "SERVICES DONE",
    },
    {
      value: "25+",
      label: "CITIES SERVED",
    },
    {
      value: "45m",
      label: "AVG RESPONSE",
    },
  ];

  return (
    <section className="bg-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {stats.map((item, index) => (
            <div key={index}>
              <h2 className="text-[#b81f32] text-4xl md:text-5xl font-bold">
                {item.value}
              </h2>

              <p className="mt-3 text-[11px] md:text-xs tracking-[3px] uppercase text-gray-500 font-semibold">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t border-gray-200" />
      </div>
    </section>
  );
}