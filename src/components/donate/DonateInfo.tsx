import phonepayQR from "../../assets/images/AuraPhonepayQR.png";

function DonateInfo(): JSX.Element {
  return (
    <section id="donate" className="mt-20 -z-1">
      <div className="container flex justify-center items-center h-screen mx-auto">
        {/* Wallets */}
        <div className="flex flex-col items-center space-y-7 w-full text-center">
          <h1 className="text-3xl font-bold">Help Us</h1>
          <div className="flex flex-col items-center mt-10">
            <img src={phonepayQR} alt="Auraed PhonePay QR Scan" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default DonateInfo;
