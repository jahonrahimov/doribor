import Card from "@/src/components/common/card";

export default function Home() {
  const list = [
    {
      name: "Makro Farm Test",
      schedule: "9:00-22:00",
      phone: "+998905715200",
      location: "485883",
    },
  ];

  return (
    <div className="max-w-screen-xl grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-2 mx-auto px-2">
      {list.map((item, i) => (
        <Card
          key={i}
          name={item.name}
          schedule={item.schedule}
          phone={item.phone}
          location={item.location}
        />
      ))}
    </div>
  );
}
