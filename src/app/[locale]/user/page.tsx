import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations('user');
  return (
    <h3>{ t('userList') }</h3>
  );
}
