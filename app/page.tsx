import Card from "@/src/components/common/card";

export default function Home() {
  return (
    <div className="max-w-screen-xl grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-2 mx-auto px-2">
      <Card
        name="Makro Farm"
        schedule="9:00 - 22:00"
        phone="+998905715200"
        location="485883"
      />
    </div>
  );
}
