export const RESPIRATORY_DISEASES = [
  {
    id: 0,
    symptom_value: "breathlessness",
    symptom_question_th: "คุณรู้สึกหายใจลำบากหรือไม่?",
  },
  {
    id: 1,
    symptom_value: "chest_pain",
    symptom_question_th: "คุณมีอาการเจ็บหน้าอกหรือไม่?",
  },
  {
    id: 2,
    symptom_value: "chills",
    symptom_question_th: "คุณมีอาการหนาวสั่นหรือไม่?",
  },
  {
    id: 3,
    symptom_value: "congestion",
    symptom_question_th: "คุณรู้สึกคัดจมูกหรือไม่?",
  },
  {
    id: 4,
    symptom_value: "continuous_sneezing",
    symptom_question_th: "คุณมีอาการจามต่อเนื่องหรือไม่?",
  },
  {
    id: 5,
    symptom_value: "cough",
    symptom_question_th: "คุณมีอาการไอหรือไม่?",
  },
  {
    id: 6,
    symptom_value: "family_history",
    symptom_question_th: "มีประวัติครอบครัวเป็นโรคทางเดินหายใจหรือไม่?",
  },
  {
    id: 7,
    symptom_value: "fast_heart_rate",
    symptom_question_th: "คุณมีอัตราการเต้นของหัวใจที่เร็วผิดปกติหรือไม่?",
  },
  {
    id: 8,
    symptom_value: "fatigue",
    symptom_question_th: "คุณรู้สึกอ่อนเพลียหรือเหนื่อยล้าหรือไม่?",
  },
  {
    id: 9,
    symptom_value: "headache",
    symptom_question_th: "คุณมีอาการปวดศีรษะหรือไม่?",
  },
  {
    id: 10,
    symptom_value: "high_fever",
    symptom_question_th: "คุณมีไข้สูงหรือไม่?",
  },
  {
    id: 11,
    symptom_value: "loss_of_smell",
    symptom_question_th: "คุณสูญเสียความสามารถในการดมกลิ่นหรือไม่?",
  },
  {
    id: 12,
    symptom_value: "malaise",
    symptom_question_th: "คุณรู้สึกไม่สบายตัวหรือมีอาการเพลียหรือไม่?",
  },
  {
    id: 13,
    symptom_value: "mucoid_sputum",
    symptom_question_th: "คุณมีเสมหะข้นเหนียวหรือไม่?",
  },
  {
    id: 14,
    symptom_value: "muscle_pain",
    symptom_question_th: "คุณมีอาการปวดกล้ามเนื้อหรือไม่?",
  },
  {
    id: 15,
    symptom_value: "phlegm",
    symptom_question_th: "คุณมีเสมหะเวลาที่ไอหรือไม่?",
  },
  {
    id: 16,
    symptom_value: "redness_of_eyes",
    symptom_question_th: "คุณมีอาการตาแดงหรือไม่?",
  },
  {
    id: 17,
    symptom_value: "runny_nose",
    symptom_question_th: "คุณมีน้ำมูกไหลหรือไม่?",
  },
  {
    id: 18,
    symptom_value: "rusty_sputum",
    symptom_question_th: "เสมหะของคุณมีสีสนิมหรือไม่?",
  },
  {
    id: 19,
    symptom_value: "sinus_pressure",
    symptom_question_th: "คุณรู้สึกเจ็บหรือปวดบริเวณไซนัสหรือไม่?",
  },
  {
    id: 20,
    symptom_value: "sweating",
    symptom_question_th: "คุณมีเหงื่อออกผิดปกติหรือไม่?",
  },
  {
    id: 21,
    symptom_value: "swelled_lymph_nodes",
    symptom_question_th: "ต่อมน้ำเหลืองของคุณบวมโตหรือไม่?",
  },
  {
    id: 22,
    symptom_value: "throat_irritation",
    symptom_question_th: "คุณมีอาการระคายเคืองหรือเจ็บคอหรือไม่?",
  },
];

export const CATEGORIES = [
  {
    id: 1,
    cat_name: "🦠 โรคติดเชื้อ (Infectious Diseases)",
    cat_description:
      "ไวรัส บัคทีเรีย มาเต็ม! หมวดนี้รวมโรคที่เกิดจากการติดเชื้อ เช่น ไวรัส แบคทีเรีย เชื้อรา หรือพยาธิ ใครติดแล้วจะมีไข้ มีผื่น หรือท้องเสียได้ง่าย",
    cat_example: "📌 เช่น ไข้เลือดออก วัณโรค ตับอักเสบ หวัด ท้องเสีย ฯลฯ",
  },
  {
    id: 2,
    cat_name: "🧠 โรคระบบประสาท (Neurological Disorders)",
    cat_description:
      "หัวหมุน มึน ตื้อ สมองไม่รับแขก เป็นกลุ่มโรคที่เกี่ยวกับสมอง เส้นประสาท หรือไขสันหลัง มักทำให้เวียนหัว ปวดหัว หรือมีอาการชา อ่อนแรง",
    cat_example: "📌 เช่น ไมเกรน บ้านหมุน อัมพาต คอเสื่อม",
  },
  {
    id: 3,
    cat_name: "❤️ โรคหัวใจและหลอดเลือด (Cardiovascular Diseases)",
    cat_description:
      "หัวใจไม่ค่อยแข็งแรง เลือดก็ไหลไม่ดี โรคกลุ่มนี้เกี่ยวกับหัวใจและเส้นเลือด อาการยอดฮิตคือแน่นหน้าอก ใจสั่น หรือขาบวม",
    cat_example: "📌 เช่น หัวใจวาย ความดันสูง เส้นเลือดขอด",
  },
  {
    id: 4,
    cat_name: "🫁 โรคระบบทางเดินหายใจ (Respiratory Diseases)",
    cat_description:
      "ไอแค่กๆ หายใจไม่ทั่วปอด เมื่อปอดหรือทางเดินหายใจไม่โอเค มักจะไอ หอบ จาม เสียงแหบ บางทีก็หายใจแล้วมีเสียงดังฟืดฟาด",
    cat_example: "📌 เช่น หืด หวัด ปอดบวม",
  },
  {
    id: 5,
    cat_name: "🍔 โรคทางเดินอาหารและตับ (Gastrointestinal & Liver Disorders)",
    cat_description:
      "ท้องป่วน ปวดแสบแผลในใจ เอ๊ย ในท้อง อาการจะเกี่ยวกับกระเพาะ ลำไส้ ตับ และการย่อยอาหาร เช่น ปวดท้อง คลื่นไส้ หรือมีอาการตัวเหลือง",
    cat_example: "📌 เช่น กรดไหลย้อน แผลในกระเพาะ ตับอักเสบ ดีซ่าน",
  },
  {
    id: 6,
    cat_name: "🩸 โรคต่อมไร้ท่อและเมตาบอลิซึม (Endocrine & Metabolic)",
    cat_description:
      "ฮอร์โมนเพี้ยน น้ำตาลปั่นป่วน โรคที่เกี่ยวกับฮอร์โมนและการเผาผลาญของร่างกาย เช่น เบาหวาน หรือไทรอยด์ อาการมักมีผลกับน้ำหนัก พลังงาน หรืออารมณ์",
    cat_example: "📌 เช่น เบาหวาน น้ำตาลต่ำ ไทรอยด์ต่ำ-สูง",
  },
  {
    id: 7,
    cat_name: "🦴 โรคกระดูกและข้อ (Musculoskeletal Disorders)",
    cat_description:
      "ขยับแล้วกร๊อบ! เจ็บเหมือนอายุ 80 เจ็บข้อ ปวดกระดูก โดยเฉพาะเวลาขยับ เดิน หรือตื่นนอนแล้วลุกไม่ขึ้น",
    cat_example: "📌 เช่น ข้ออักเสบ ข้อเสื่อม",
  },
  {
    id: 8,
    cat_name: "🧴 โรคผิวหนัง (Dermatological Disorders)",
    cat_description:
      "ผื่นมา สิวมา คันยิกๆ เกี่ยวกับผิวหนังล้วนๆ จะเป็นสิว ผื่น แผล หรือติดเชื้อก็อยู่ในหมวดนี้",
    cat_example: "📌 เช่น สิว สะเก็ดเงิน ผื่นแพ้ กลากเกลื้อน",
  },
  {
    id: 9,
    cat_name: "🤧 โรคภูมิแพ้ และภูมิคุ้มกันผิดปกติ (Immune-related / Allergic)",
    cat_description:
      "ฝุ่นนิดเดียว น้ำมูกไหลเหมือนฝนตก ใครแพ้อะไรง่ายๆ อยู่หมวดนี้เลยครับ มักจาม คัดจมูก หรือผื่นขึ้นเร็วเกินเหตุ",
    cat_example: "📌 เช่น ภูมิแพ้ ผื่นแพ้ ยา",
  },
  {
    id: 10,
    cat_name: "🚽 อื่นๆ (Others)",
    cat_description:
      "ไม่รู้จะไปอยู่หมวดไหน ก็จับลงหมวดนี้แหละ! โรคที่ไม่เข้ากลุ่มไหนชัดเจน หรือเป็นอาการเฉพาะจุด",
    cat_example: "📌 เช่น ริดสีดวง อัมพาตจากสมองแตก",
  },
];
