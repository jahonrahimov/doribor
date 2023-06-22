import Alert from "@/src/components/common/alert";
import Logo from "@/src/components/common/logo";
import Select from "@/src/components/common/select";

const Header = () => {
  const options = [
    {
      label: "Андижон тумани",
      value: "Андижон тумани",
    },
    {
      label: "Олтинкўл тумани",
      value: "Олтинкўл тумани",
    },
    {
      label: "Асака тумани",
      value: "Асака тумани",
    },
    {
      label: "Балиқчи тумани",
      value: "Балиқчи тумани",
    },
    {
      label: "Бўстон тумани",
      value: "Бўстон тумани",
    },
    {
      label: "Булоқбоши тумани",
      value: "Булоқбоши тумани",
    },
    {
      label: "Жалақудуқ тумани",
      value: "Жалақудуқ тумани",
    },
    {
      label: "Избоскан тумани",
      value: "Избоскан тумани",
    },
    {
      label: "Қўрғонтепа тумани",
      value: "Қўрғонтепа тумани",
    },
    {
      label: "Марҳамат тумани",
      value: "Марҳамат тумани",
    },
    {
      label: "Пахтаобод тумани",
      value: "Пахтаобод тумани",
    },
    {
      label: "Улуғнор тумани",
      value: "Улуғнор тумани",
    },
    {
      label: "Хўжаобод тумани",
      value: "Хўжаобод тумани",
    },
    {
      label: "Шаҳрихон тумани",
      value: "Шаҳрихон тумани",
    },
  ];

  return (
    <>
      <Alert title="Хозирда бизнинг справочник Андижон бойича ишламокда." />
      <div className="bg-white border-gray-200 dark:bg-gray-900 shadow">
        <div className="max-w-screen-xl flex flex-wrap items-center md:justify-start justify-between mx-auto p-4">
          <Logo />
          <Select options={options} className="w-[200px]" />
        </div>
      </div>
    </>
  );
};

export default Header;
