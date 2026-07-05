import CVImage1 from "./CV-image-1.png";
import fondDePlan from "./fond-de-plan.png";

const architectureProjects = [
  "Projet d'Urbanisme en Val-de-Seine",
  "• Relevé de l'existant à l'echelle du territoire",
  "• Projet d’immeuble de logement en lien avec de l’existant",
  "• Projet d’école s’inscrivant dans une démarche par l’abstraction",
];

export const Acceuil = (): JSX.Element => {
  return (
    <main className="bg-[linear-gradient(0deg,rgba(255,246,237,1)_0%,rgba(255,246,237,1)_100%)] w-full min-w-[1280px] min-h-[1806px] relative text-black">
      <aside
        className="fixed top-0 left-0 flex w-[340px] flex-col items-start justify-center gap-2.5 bg-[#fff6ed] pl-5 pr-[50px] py-0"
        aria-label="Illustration latérale"
      >
        <img
          className="relative w-[296px] h-[832px] mr-[-26px]"
          alt="Fond de plan"
          src={fondDePlan}
        />
      </aside>
      <img
        className="fixed top-0 left-[27px] w-[283px] h-[467px] aspect-[0.58]"
        alt="Portrait CV"
        src={CVImage1}
      />
      <header className="fixed top-[-69px] left-[calc(50.00%_-_324px)] flex h-[180px] w-[964px] items-end overflow-hidden bg-[linear-gradient(0deg,rgba(255,246,237,1)_0%,rgba(255,246,237,1)_100%)]">
        <h1 className="mb-4 -ml-px flex h-[77px] w-[965px] items-center justify-center [font-family:'Kiwari_Mono-Regular',Helvetica] text-[64px] font-normal leading-[normal] text-black text-center">
          <span className="tracking-[-2.05px]">Balthazar</span>
          <span className="[font-family:'Kiwari_Mono-Medium',Helvetica] font-medium tracking-[0]">
            &nbsp;
          </span>
          <span className="[font-family:'Kiwari_Mono-Medium',Helvetica] font-medium tracking-[7.78px]">
            MARTI
          </span>
        </h1>
      </header>
      <section
        className="absolute left-[calc(50.00%_-_250px)] top-[109px] w-[817px]"
        aria-labelledby="formation"
      >
        <p className="flex h-[72px] items-center [font-family:'Kiwari_Mono-Regular',Helvetica] text-xl font-normal leading-[normal] text-black text-justify tracking-[0]">
          <span className="[font-family:'Kiwari_Mono-Regular',Helvetica] font-normal text-black text-xl tracking-[0]">
            Élève en 3e année de Licence à l&apos;ENSA Paris la Villette, je
            cherche un stage de{" "}
          </span>
          <strong className="[font-family:'Kiwari_Mono-SemiBold',Helvetica] font-semibold">
            3 semaines
          </strong>
          <span className="[font-family:'Kiwari_Mono-Regular',Helvetica] font-normal text-black text-xl tracking-[0]">
            {" "}
            pour{" "}
          </span>
          <strong className="[font-family:'Kiwari_Mono-SemiBold',Helvetica] font-semibold">
            valider ma licence et parfaire mes connaissances en agence
          </strong>
          <span className="[font-family:'Kiwari_Mono-Regular',Helvetica] font-normal text-black text-xl tracking-[0]">
            .
          </span>
        </p>
        <h2
          id="formation"
          className="mt-[22px] flex h-6 items-center [font-family:'Kiwari_Mono-SemiBold',Helvetica] text-xl font-semibold leading-[normal] text-black text-justify tracking-[0] underline"
        >
          Formation
        </h2>
        <div className="mt-0.5 flex h-6 w-[817px]">
          <p className="flex w-[817px] flex-1 items-center [font-family:'Kiwari_Mono-Regular',Helvetica] text-xl font-normal leading-[normal] text-black text-justify tracking-[0]">
            <span className="[font-family:'Kiwari_Mono-Regular',Helvetica] font-normal text-black text-xl tracking-[0]">
              Licence d&apos;Architecture à l&apos;ENSA Paris la Villette{" "}
            </span>
            <span className="text-sm">2023-2026 en cours</span>
          </p>
        </div>
        <ul className="m-0 list-none p-0">
          {architectureProjects.map((item, index) => (
            <li
              key={index}
              className={`flex h-6 w-[817px] ${index === 0 ? "mt-0" : "mt-0"}`}
            >
              <p className="flex w-[817px] flex-1 items-center [font-family:'Kiwari_Mono-Regular',Helvetica] text-xl font-normal leading-[normal] text-black text-justify tracking-[0]">
                {item}
              </p>
            </li>
          ))}
        </ul>
        <div className="mt-[42px] flex h-[72px] w-[817px]">
          <p className="flex w-[817px] flex-1 items-center [font-family:'Kiwari_Mono-Regular',Helvetica] text-xl font-normal leading-[normal] text-black text-justify tracking-[0]">
            Baccalauréat professionnel Artisanat et métiers d&apos;art, option
            Communication visuelle pluri média, Lycée L&apos;Initiative, Paris
            19 (Juillet 2023)
          </p>
        </div>
      </section>
    </main>
  );
};
