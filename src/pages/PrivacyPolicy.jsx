import { useTranslation } from "react-i18next";

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-md my-10 rounded-md">
      <h1 className="text-3xl font-bold mb-6 text-center">
        {t("privacy.title")}
      </h1>

      <div className="space-y-4 text-gray-800 leading-relaxed">

        <p><strong>{t("privacy.effective_date_label")}</strong> {t("privacy.effective_date")}</p>

        <p>{t("privacy.intro1")}</p>
        <p>{t("privacy.intro2")}</p>

        {/* ========== SECTION 1 ========== */}
        <h2 className="text-xl font-semibold mt-6">
          {t("privacy.section1_title")}
        </h2>
        <p>{t("privacy.section1_intro")}</p>

        <h3 className="font-semibold mt-4">{t("privacy.section1_a_title")}</h3>
        <ul className="list-disc pl-6">
          {t("privacy.section1_a_list", { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3 className="font-semibold mt-4">{t("privacy.section1_b_title")}</h3>
        <ul className="list-disc pl-6">
          {t("privacy.section1_b_list", { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        <h3 className="font-semibold mt-4">{t("privacy.section1_c_title")}</h3>
        <ul className="list-disc pl-6">
          {t("privacy.section1_c_list", { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* ========== SECTION 2 ========== */}
        <h2 className="text-xl font-semibold mt-6">
          {t("privacy.section2_title")}
        </h2>
        <ul className="list-disc pl-6">
          {t("privacy.section2_list", { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* ========== SECTION 3 ========== */}
        <h2 className="text-xl font-semibold mt-6">
          {t("privacy.section3_title")}
        </h2>
        <ul className="list-disc pl-6">
          {t("privacy.section3_list", { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* ========== SECTION 4 ========== */}
        <h2 className="text-xl font-semibold mt-6">
          {t("privacy.section4_title")}
        </h2>
        <ul className="list-disc pl-6">
          {t("privacy.section4_list", { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>

        {/* ========== SECTION 5 ========== */}
        <h2 className="text-xl font-semibold mt-6">
          {t("privacy.section5_title")}
        </h2>
        <p>{t("privacy.section5_intro")}</p>
        <ul className="list-disc pl-6">
          {t("privacy.section5_list", { returnObjects: true }).map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <p>{t("privacy.section5_note")}</p>

        {/* ========== SECTION 6 ========== */}
        <h2 className="text-xl font-semibold mt-6">
          {t("privacy.section6_title")}
        </h2>
        <p>{t("privacy.section6_text")}</p>

        {/* ========== SECTION 7 ========== */}
        <h2 className="text-xl font-semibold mt-6">
          {t("privacy.section7_title")}
        </h2>
        <p>{t("privacy.section7_text")}</p>

        {/* ========== SECTION 8 ========== */}
        <h2 className="text-xl font-semibold mt-6">
          {t("privacy.section8_title")}
        </h2>
        <p>{t("privacy.section8_text")}</p>

        {/* ========== SECTION 9 ========== */}
        <h2 className="text-xl font-semibold mt-6">
          {t("privacy.section9_title")}
        </h2>
        <p>Ninjafarm Services Private Limited</p>
        <p>{t("privacy.section9_address")}</p>
        <p>{t("privacy.section9_email")}</p>
        <p>{t("privacy.section9_phone")}</p>

      </div>
    </div>
  );
}
