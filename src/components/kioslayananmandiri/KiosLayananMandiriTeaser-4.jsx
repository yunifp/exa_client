import React from "react";
import Teaser from "../common/Teaser";

import teaser5 from "../../assets/kios-layanan-mandiri-teaser-5.webp";

function KiosLayananMandiriTeaser4() {
  return (
    <section className="bg-primary">
      {/* Teaser 5 */}
      <Teaser
        preTitle=""
        title={
          <>
            <i>Check-in Kiosk</i> 10"
          </>
        }
        description={
          <>
            <p>
              Kiosk Pendaftaran 10” adalah kiosk yang kuat dan kompak dengan
              printer terintegrasi dan layar sentuh 10 inci yang responsif dan
              cepat, dilengkapi dengan keandalan tingkat komersial.
            </p>
            <br />
            <p>
              Dengan ukuran yang kompak, Anda dapat dengan mudah menempatkannya
              di ruang yang sempit di berbagai lingkungan, seperti toko ritel,
              kantor publik, laboratorium, dan apotek.
            </p>
            <br />
            <p>
              Kiosk pendaftaran ini dapat dipasang sebagai unit berdiri di
              lantai atau diletakkan di atas meja.
            </p>
          </>
        }
        imageSrc={teaser5}
        imageAlt="teaser5 Check-in Kiosk 22 Value"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={false}
        disableButton={true}
      />
    </section>
  );
}

export default KiosLayananMandiriTeaser4;
