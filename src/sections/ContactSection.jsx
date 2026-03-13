import useData from "../hooks/useData";
import SectionContactLeft from "../component/SectionContactLeft";
import SectionContactRight from "../component/SectionContactRight";

const ContactSection = () => {
  const { contactIcons } = useData();
  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center w-full overflow-hidden lg:flex-row"
    >
      {/* Left Info Section */}
      <SectionContactLeft contactIcons={contactIcons} />

      {/* Right Form Section */}
      <SectionContactRight contactIcons={contactIcons} />

    </div>
  );
};

export default ContactSection;