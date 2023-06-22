import Alert from "@/src/components/common/alert";
import Logo from "@/src/components/common/logo";
import Select from "@/src/components/common/select";
import Dropdown from "@/src/components/common/dropdown";

const Header = () => {
  const options = [
    {
      label: "Андижон тумани",
      href: "/izboskan-tumani",
    },
    {
      label: "Олтинкўл тумани",
      href: "/izboskan-tumani",
    },
    {
      label: "Асака тумани",
      href: "/izboskan-tumani",
    },
    {
      label: "Балиқчи тумани",
      href: "/izboskan-tumani",
    },
    {
      label: "Бўстон тумани",
      href: "/izboskan-tumani",
    },
    {
      label: "Булоқбоши тумани",
      href: "/izboskan-tumani",
    },
    {
      label: "Жалақудуқ тумани",
      href: "/izboskan-tumani",
    },
    {
      label: "Избоскан тумани",
      href: "/izboskan-tumani",
    },
    {
      label: "Қўрғонтепа тумани",
      href: "/izboskan-tumani",
    },
    {
      label: "Марҳамат тумани",
      href: "/izboskan-tumani",
    },
    {
      label: "Пахтаобод тумани",
      href: "/izboskan-tumani",
    },
    {
      label: "Улуғнор тумани",
      href: "/izboskan-tumani",
    },
    {
      label: "Хўжаобод тумани",
      href: "/izboskan-tumani",
    },
    {
      label: "Шаҳрихон тумани",
      href: "/izboskan-tumani",
    },
  ];

  return (
    <>
      <Alert title="Хозирда бизнинг справочник Андижон бойича ишламокда." />
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
