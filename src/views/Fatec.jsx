import examIcon from "../assets/img/contato_icon.png";
import fatecImg from "../assets/img/fatec/fatec_img.png";

export const Fatec = () => {
  return (
    <main>
      <section className="relative bg-capi_yellow text-white flex items-center justify-center gap-8 p-8">
        <img
          className="hidden absolute left-28 w-16 md:block"
          src={examIcon}
          alt="Ícone de contato."
        />
        <h2 className="font-headline font-semibold text-4xl">
          Vestibular FATEC
        </h2>
      </section>
      <section className="container mx-auto max-w-5xl p-10 px-4">
        <h3 className="text-center font-headline font-bold text-xl mb-5">
          Siga seu sonho e entre um uma faculdade GRÁTIS!
        </h3>
        <h4 className="text-center font-headline text-md mb-5 sm:text-lg">
          Aqui damos dicas do vestibular, e ajudamos na prova.
        </h4>
        <div className="flex flex-col gap-8 md:flex-row">
          <div className="basis-3/5 ">
            <img
              className="w-full"
              src={fatecImg}
              alt="Imagem Fatec Votorantim no estado de São Paulo."
            />
          </div>
          <div className="basis-2/5">
            {/* <div className="flex gap-10">
              <img className="w-1/4" src={fatecLogo} alt="" />
              <img className="" src={cpsLogo} alt="" />
            </div> */}
            <div className="flex flex-col items-center justify-center h-full">
              <h5 className="text-center text-lg font-texts font-bold">
                Votorantim
              </h5>
              <p className="text-justify text-md sm:text-left sm:text-lg">
                A Faculdade de Tecnologia (Fatec) chegou na cidade de Votorantim
                em abril deste ano, é a primeira unidade da instituição no
                município. Ela está localizada na avenida Juscelino Kubitschek
                de Oliveira, 279, na Vila Protestantes. Atualmente, a unidade
                tem dois cursos, mas futuramente serão implantados outros três:
                Construção Civil – Edifícios, Controle de Obras e Redes de
                Computadores. A inauguração está prevista para dezembro deste
                ano.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-col justify-evenly items-center gap-8 md:flex-row">
        <a href="" className="capiButtons text-black bg-capi_red shadow-xl hover:text-gray-900">
          <span>Inscreva-se no Vestibular FATEC!</span>
        </a>
        <a href="" className="capiButtons text-black bg-capi_blue shadow-xl hover:text-gray-900">
          <span>Acompanhe as provas e gabaritos!</span>
        </a>
      </div>
      </section>
    </main>
  );
};
