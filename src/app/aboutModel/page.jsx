import styles from "./aboutModel.module.scss";

export default function AboutModel() {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h1>MODEL BASED ON NAIVE BAYES</h1>
        <p>
          ระบบวิเคราะห์อาการนี้ใช้โมเดล Machine Learning ชนิด Naive Bayes
          ซึ่งเหมาะสำหรับงานจำแนกประเภท โดยอ้างอิงจากทฤษฎีของเบย์ (Bayes'
          Theorem)
        </p>
        <ul className={styles.list}>
          <li>
            ใช้อัลกอริธึม <strong>Naive Bayes</strong>{" "}
            สำหรับจำแนกโรคตามอาการที่ผู้ใช้ระบุ
          </li>
          <li>
            ข้อมูลชุดฝึกถูก <strong>แปลง (Transform)</strong> ให้เหมาะกับโมเดล
            เช่น อาการทั้งหมดถูกแทนด้วยค่า <code>true/false</code>
          </li>
          <li>
            มีการ <strong>ทำความสะอาดข้อมูล (Data Cleaning)</strong> เช่น
            ลบข้อมูลที่ซ้ำหรือลบแถวที่ไม่มีข้อมูลโรคกำกับ
          </li>
          <li>
            แบ่งข้อมูลออกเป็น <strong>Training set และ Testing set</strong>{" "}
            เพื่อประเมินประสิทธิภาพของโมเดล
          </li>
          <li>
            ประเมินผลด้วย <strong>accuracy, precision, recall</strong>{" "}
            โดยรวมแล้วโมเดลมีความแม่นยำในระดับที่น่าพอใจ
          </li>
          <li>
            เมื่อผู้ใช้เลือกอาการ
            ระบบจะสร้างเวกเตอร์ข้อมูลและส่งเข้าโมเดลเพื่อทำนายโรคพร้อม{" "}
            <strong>เปอร์เซ็นต์ความมั่นใจ</strong>
          </li>
        </ul>
        <p>
          ระบบวิเคราะห์ด้วยโมเดล Naive Bayes เป็นส่วนหนึ่งของการศึกษา AI ในวิชา
          CSC472
        </p>
      </div>
    </div>
  );
}
