import React from "react";

import Teaser from "../common/Teaser";
import teaser4 from "../../assets/kios-layanan-mandiri-teaser-4.webp";

function KiosLayananMandiriTeaser3() {
  return (
    <section className="bg-primary">
      {/* Teaser 4 */}
      <Teaser
        preTitle=""
        title={<><i>Check-in Kiosk</i> 22" Value</>}
        description={
          <>
            <p>
              Kiosk Pendaftaran 22” Value adalah kiosk komersial dengan desain
              ramping dan printer terintegrasi yang menyediakan semua fitur
              esensial yang diperlukan untuk pendaftaran janji temu dan antrian.
            </p>
            <br />
            <p>
              Layar sentuh 22 inci dapat digunakan dalam orientasi <i>potrait/landscape</i> dan dipasang di atas meja atau dudukan
              lantai.
            </p>
            <br />
            <p>
              Desain ramping dan ringan membuatnya cocok untuk ruang apa pun dan
              ideal untuk lingkungan publik dengan lalu lintas tinggi seperti
              toko ritel, kantor pemerintah, dan rumah sakit.
            </p>
          </>
        }
        imageSrc={teaser4}
        imageAlt="teaser4 Check-in Kiosk 22 Value"
        buttonText="Permintaan Demo"
        buttonLink="/demo"
        imageOnRight={true}
        disableButton={true}
      />
    </section>
  );
}

export default KiosLayananMandiriTeaser3;
