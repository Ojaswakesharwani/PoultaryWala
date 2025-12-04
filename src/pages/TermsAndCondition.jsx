import { useTranslation } from "react-i18next";

export default function TermsAndCondition() {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md my-10 rounded-md">

      {/* Page Title */}
      <h1 className="text-3xl font-bold mb-6 text-center">
        {t("terms.title")}
      </h1>

      <div className="space-y-4 text-gray-800 leading-relaxed">

        {/* Header Info */}
        <p><strong>{t("terms.effective_date")}</strong></p>
        <p><strong>{t("terms.platform_owner")}</strong></p>
        <p><strong>{t("terms.platform")}</strong></p>

        <p>{t("terms.intro")}</p>

        {/* Section 1 */}
        <h2 className="text-xl font-semibold mt-6">{t("terms.section1_title")}</h2>
        <ul className="list-disc pl-6">
          <li>{t("terms.section1_point1")}</li>
          <li>{t("terms.section1_point2")}</li>
          <li>{t("terms.section1_point3")}</li>
        </ul>

        {/* Section 2 */}
        <h2 className="text-xl font-semibold mt-6">{t("terms.section2_title")}</h2>
        <ul className="list-disc pl-6">
          <li>{t("terms.section2_point1")}</li>
          <li>{t("terms.section2_point2")}</li>
          <li>{t("terms.section2_point3")}</li>
          <li>{t("terms.section2_point4")}</li>
        </ul>

        {/* Section 3 */}
        <h2 className="text-xl font-semibold mt-6">{t("terms.section3_title")}</h2>
        <ul className="list-disc pl-6">
          <li>{t("terms.section3_point1")}</li>
          <li>{t("terms.section3_point2")}</li>
          <li>{t("terms.section3_point3")}</li>
          <li>{t("terms.section3_point4")}</li>
        </ul>

        {/* Section 4 */}
        <h2 className="text-xl font-semibold mt-6">{t("terms.section4_title")}</h2>
        <ul className="list-disc pl-6">
          <li>{t("terms.section4_point1")}</li>
          <li>{t("terms.section4_point2")}</li>
        </ul>

        {/* Section 5 */}
        <h2 className="text-xl font-semibold mt-6">{t("terms.section5_title")}</h2>
        <ul className="list-disc pl-6">
          <li>{t("terms.section5_point1")}</li>
          <li>{t("terms.section5_point2")}</li>
          <li>{t("terms.section5_point3")}</li>
        </ul>

        {/* Section 6 */}
        <h2 className="text-xl font-semibold mt-6">{t("terms.section6_title")}</h2>
        <ul className="list-disc pl-6">
          <li>{t("terms.section6_point1")}</li>
          <li>{t("terms.section6_point2")}</li>
        </ul>

        {/* Section 7 */}
        <h2 className="text-xl font-semibold mt-6">{t("terms.section7_title")}</h2>
        <ul className="list-disc pl-6">
          <li>{t("terms.section7_point1")}</li>
          <li>{t("terms.section7_point2")}</li>
        </ul>

        {/* Section 8 */}
        <h2 className="text-xl font-semibold mt-6">{t("terms.section8_title")}</h2>
        <ul className="list-disc pl-6">
          <li>{t("terms.section8_point1")}</li>
          <li>{t("terms.section8_point2")}</li>
          <li>{t("terms.section8_point3")}</li>
        </ul>

        {/* Section 9 */}
        <h2 className="text-xl font-semibold mt-6">{t("terms.section9_title")}</h2>
        <ul className="list-disc pl-6">
          <li>{t("terms.section9_point1")}</li>
          <li>{t("terms.section9_point2")}</li>
        </ul>

        {/* Section 10 */}
        <h2 className="text-xl font-semibold mt-6">{t("terms.section10_title")}</h2>
        <ul className="list-disc pl-6">
          <li>{t("terms.section10_point1")}</li>
          <li>{t("terms.section10_point2")}</li>
          <li>{t("terms.section10_point3")}</li>
          <li>{t("terms.section10_point4")}</li>
          <li>{t("terms.section10_point5")}</li>
          <li>{t("terms.section10_point6")}</li>
        </ul>

        {/* Section 11 */}
        <h2 className="text-xl font-semibold mt-6">{t("terms.section11_title")}</h2>
        <ul className="list-disc pl-6">
          <li>{t("terms.section11_point1")}</li>
          <li>{t("terms.section11_point2")}</li>
        </ul>

        {/* Section 12 */}
        <h2 className="text-xl font-semibold mt-6">{t("terms.section12_title")}</h2>
        <p>{t("terms.section12_point")}</p>

        {/* Section 13 */}
        <h2 className="text-xl font-semibold mt-6">{t("terms.section13_title")}</h2>
        <p>{t("terms.section13_point")}</p>

        {/* Section 14 */}
        <h2 className="text-xl font-semibold mt-6">{t("terms.section14_title")}</h2>
        <p>{t("terms.contact_name")}</p>
        <p>{t("terms.contact_email")}</p>
        <p>{t("terms.contact_phone")}</p>
        <p>{t("terms.contact_address")}</p>

      </div>
    </div>
  );
}
