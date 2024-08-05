import DonateInfo from "../../components/donate/DonateInfo";
import SecondaryCover from "../../layouts/secondaryCover";

const Donate = () => {
  return (
    <>
      <SecondaryCover
        title="Donate"
        description="AuraEd, an educational initiative in Nepal, is driven by a compelling vision: to create a Nepal where every student, regardless of their background or geographical location, has access to quality digital education."
      />
      <DonateInfo />
    </>
  );
};

export default Donate;
