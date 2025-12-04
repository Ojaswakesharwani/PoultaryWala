import { useTranslation } from "react-i18next";

export default function PaymentTerms() {
  const { t } = useTranslation();

  const list1 = t("payment.section1_list", { returnObjects: true });
  const list2 = t("payment.section2_list", { returnObjects: true });
  const list3 = t("payment.section3_list", { returnObjects: true });
  const list4 = t("payment.section4_list", { returnObjects: true });

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md my-10 rounded-md">
      <h1 className="text-3xl font-bold mb-6 text-center">
        {t("payment.title")}
      </h1>

      <h2 className="text-lg font-semibold mb-1 text-center">
        {t("payment.subtitle")}
      </h2>

      {/* Section 1 */}
      <h2 className="text-xl font-semibold mt-6">
        {t("payment.section1_title")}
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        {list1.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      {/* Section 2 */}
      <h2 className="text-xl font-semibold mt-6">
        {t("payment.section2_title")}
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        {list2.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      {/* Section 3 */}
      <h2 className="text-xl font-semibold mt-6">
        {t("payment.section3_title")}
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        {list3.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      {/* Section 4 */}
      <h2 className="text-xl font-semibold mt-6">
        {t("payment.section4_title")}
      </h2>
      <ul className="list-disc pl-6 space-y-2">
        {list4.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>

      {/* Section 5 */}
      <h2 className="text-xl font-semibold mt-6">
        {t("payment.section5_title")}
      </h2>
      <p>{t("payment.section5_text")}</p>

      {/* Section 6 */}
      <h2 className="text-xl font-semibold mt-6">
        {t("payment.section6_title")}
      </h2>
      <p>{t("payment.section6_text")}</p>
    </div>
  );
}
