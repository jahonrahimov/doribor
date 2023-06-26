import Alert from "@/src/components/common/alert";
import Logo from "@/src/components/common/logo";
import Select from "@/src/components/common/select";
import Dropdown from "@/src/components/common/dropdown";

const Header = () => {
  const options = [
    {
      label: "Андижон тумани",
      href: "/andijon-tumani",
    },
    {
      label: "Асака тумани",
      href: "/asaka-tumani",
    },
    {
      label: "Балиқчи тумани",
      href: "/baliqchi-tumani",
    },
    {
      label: "Бўстон тумани",
      href: "/boston-tumani",
    },
    {
      label: "Булоқбоши тумани",
      href: "/buloqboshi-tumani",
    },
    {
      label: "Жалақудуқ тумани",
      href: "/jalaquduq-tumani",
    },
    {
      label: "Избоскан тумани",
      href: "/izboskan-tumani",
    },
    {
      label: "Қўрғонтепа тумани",
      href: "/qorgontepa-tumani",
    },
    {
      label: "Марҳамат тумани",
      href: "/marhamat-tumani",
    },
    {
      label: "Олтинкўл тумани",
      href: "/oltinkol-tumani",
    },
    {
      label: "Пахтаобод тумани",
      href: "/pahtaobod-tumani",
    },
    {
      label: "Улуғнор тумани",
      href: "/ulugnor-tumani",
    },
    {
      label: "Хўжаобод тумани",
      href: "/xojaobod-tumani",
    },
    {
      label: "Шаҳрихон тумани",
      href: "/shahrihon-tumani",
    },
  ];

  return (
    <>
      <Alert title="Ҳозирда бизнинг қўлланма бутун Андижон вилояти бўйлаб ишламоқда" />
      <div className="bg-white border-gray-200 dark:bg-gray-900 shadow">
        <div className="max-w-screen-xl flex flex-wrap items-center md:justify-start justify-between mx-auto p-4">
          <Logo />
          <Dropdown title="Туманни танланг" options={options} />
        </div>
      </div>
    </>
  );
};

export default Header;
