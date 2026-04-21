import React from "react";

import Teaser from "../common/Teaser";
import teaser6 from "../../assets/kios-layanan-mandiri-teaser-6.webp";

function italicizeCheckIn(text) {
  const regex = /(check-in)/gi;
  return text.split(regex).map((part, index) =>
    regex.test(part) ? <i key={index}>{part}</i> : part
  );
}

function KiosLayananMandiriTeaser5() {
  return (
    <section className="bg-primary">
      <Teaser
        preTitle=""
        title={
          <>
            {italicizeCheckIn('Check-in Kiosk')} 10" <i>Printerless</i>
          </>
        }
        description={
          <>
            <p>
              {italicizeCheckIn(
                "Mesin Check-in Kiosk 10” Tanpa Printer adalah pilihan ideal bagi organisasi yang ingin menyediakan layanan check-in tanpa tiket dan antrian tanpa antrean."
              )}
            </p>
            <br />
            <p>
              {italicizeCheckIn(
                "Mesin check-in kiosk dilengkapi dengan layar sentuh 10 inci yang memiliki keandalan tingkat komersial dan kompatibel dengan pemindai barcode. Layar sentuh ini menawarkan respons cepat dan sensitif, serta dipasang pada tiang penyangga yang stabil namun ultra-tipis."
              )}
            </p>
          </>
        }
        imageSrc={teaser6}
        imageAlt="teaser6 Check-in Kiosk 22 Value"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={true}
        disableButton={true}
      />
    </section>
  );
}

export default KiosLayananMandiriTeaser5;
