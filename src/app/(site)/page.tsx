import TitleSection from "@/components/landingpage/title-section";

const HomePage = () => {
  return (
    <>
      <section
        className=" overflow-hidden
      px-4
      sm:px-6
      mt-10
      sm:flex
      sm:flex-col
      gap-4
      md:justify-center
      md:items-center"
      >
        <TitleSection
          pill="🌟 Your workspace, Perfected"
          title="All-In-One Collaboration and productivity Platform"
        />
      </section>
    </>
  );
};

export default HomePage;
