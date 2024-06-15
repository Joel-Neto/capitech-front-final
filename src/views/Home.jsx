import { HomeFrames } from "../components/home/HomeFrames";
import { HomeSectionTrails } from "../components/home/HomeSectionTrails";
import { HomeContents } from "../components/home/HomeContents";

import pathIcon from "../assets/img/home/trilha.png";
import chatVideoIcon from "../assets/img/home/chat-de-video.png";
import academicIcon from "../assets/img/home/academico.png";
import { FaArrowRightLong } from "react-icons/fa6";

import imgContent01 from "../assets/img/home/home_img1.png";
import imgContent02 from "../assets/img/home/home_img2.png";
import imgContent04 from "../assets/img/home/home_img4.png";
import imgContent05 from "../assets/img/home/home_img5.png";
import imgContent06 from "../assets/img/home/home_img6.png";
import { Link } from "react-router-dom";

export const Home = () => {
  const homeFrames = [
    {
      img: pathIcon,
      title: "Trilhas de aprendizagem",
      content:
        "Conheça nossas trilhas de aprendizagem e acompanhem novos conteudos.",
      color: "bg-capi_green",
    },
    {
      img: chatVideoIcon,
      title: "Seu Desenvolvimento",
      content:
        "Conheça nossas trilhas de aprendizagem e acompanhem novos conteudos.",
      color: "bg-capi_blue",
    },
    {
      img: academicIcon,
      title: "Vestibular FATEC",
      content:
        "Conheça as oportunidades de estudar de graça, com professores especializados.",
      color: "bg-capi_red",
    },
  ];

  const homeContents = [
    {
      img: imgContent01,
      title: "Qual tecnologia você quer trilhar?",
      content:
        "Aqui, oferecemos um processo de aprendizado acessível e bem orientado, pensado especialmente para guiá-lo em cada etapa da sua jornada de estudos. Com nossos recursos e suporte, você terá as ferramentas necessárias para desenvolver suas habilidades e se tornar um profissional de TI. Nosso programa é estruturado para atender tanto iniciantes quanto aqueles que já possuem algum conhecimento na área, proporcionando um caminho claro e eficaz para alcançar seus objetivos na carreira de tecnologia da informação.",
    },
    {
      img: imgContent02,
      title: "O lugar certo para aprender programação e testar conhecimentos.",
      content:
        "Tenha o ambiente de faculdade de onde estiver, é um ambiente propício para a criação de redes de contatos e conexões profissionais.",
    },
    {
      img: "",
      title: "Aprendendo com quem aprende.",
      content:
        "Aqui, oferecemos um processo de aprendizado acessível e bem orientado, pensado especialmente para guiá-lo em cada etapa da sua jornada de estudos. Através da distribuição estratégica de tarefas e responsabilidades, você poderá focar em áreas específicas, otimizando seu tempo e esforço. Além disso, nossa plataforma permite que você esclareça dúvidas e receba ajuda colaborativa, o que acelera significativamente o processo de aprendizagem.",
    },
    {
      img: "",
      title: "Aprendizado Guiado Colaboratiovo.",
      content:
        "Aqui, oferecemos um processo de aprendizado acessível e bem orientado, pensado especialmente para guiá-lo em cada etapa da sua jornada de estudos. Através da distribuição estratégica de tarefas e responsabilidades, você poderá focar em áreas específicas, otimizando seu tempo e esforço. Além disso, nossa plataforma permite que você esclareça dúvidas e receba ajuda colaborativa, o que acelera significativamente o processo de aprendizagem.",
    },
    {
      img: "",
      title: "Sobre a FATEC.",
      content:
        "A Faculdade de Tecnologia (FATEC) é uma instituição pública de ensino superior no Brasil, conhecida pela excelência na formação de profissionais nas áreas de tecnologia e inovação. Com unidades espalhadas pelo estado de São Paulo, a FATEC oferece cursos de graduação tecnológica que combinam teoria e prática, preparando os alunos para os desafios do mercado de trabalho. Sua infraestrutura moderna, professores qualificados e forte conexão com o setor industrial fazem dela uma referência em educação tecnológica no país.",
    },
    {
      img: "",
      title: "Curso de Desenvolvimento de Software Multiplataforma",
      content:
        "O curso de Desenvolvimento de Software Multiplataforma da FATEC é ideal para quem deseja ingressar no mundo da tecnologia da informação. Capacitando os alunos a desenvolver aplicativos e sistemas para diversas plataformas, como web, mobile e desktop, o curso oferece uma grade curricular abrangente. Disciplinas como programação, engenharia de software e banco de dados equipam os estudantes com as habilidades necessárias para criar soluções tecnológicas inovadoras e eficientes. O curso também enfatiza metodologias ágeis e práticas colaborativas, preparando os futuros profissionais para atuarem em equipes multidisciplinares.",
    },
  ];

  return (
    <main className="pt-8">
      <div className="px-4">
        <div className="container mx-auto max-w-5xl">
          <section className="flex flex-col gap-7 md:flex-row mb-10">
            {homeFrames.map((frame, i) => (
              <HomeFrames
                key={`frame-${i}`}
                img={frame.img}
                title={frame.title}
                content={frame.content}
                classColor={frame.color}
              />
            ))}
          </section>

          <section className="flex flex-col gap-10">
            <HomeContents
              img={imgContent01}
              title={homeContents[0].title}
              content={homeContents[0].content}
              flexRowReverse={false}
              bgColor={"bg-capi_gray_home"}
            />
            <HomeContents
              img={imgContent02}
              title={homeContents[1].title}
              content={homeContents[0].content}
              flexRowReverse={true}
              bgColor={"bg-capi_gray_home"}
            />
          </section>
        </div>
      </div>

      <div className="bg-capi_blue_home my-10 py-10 px-4">
        <div className="container mx-auto max-w-5xl">
          <section className="flex flex-col gap-10 ">
            <HomeContents
              img={imgContent01}
              title={homeContents[2].title}
              content={homeContents[2].content}
              flexRowReverse={false}
              bgColor={"bg-capi_blue_home_darker"}
            />
            <HomeContents
              img={imgContent04}
              title={homeContents[3].title}
              content={homeContents[3].content}
              flexRowReverse={true}
              bgColor={"bg-capi_blue_home_darker"}
            />
          </section>
        </div>
      </div>

      <div className="px-4">
        <div className="container mx-auto max-w-5xl">
          <section className="flex flex-col gap-10">
            <HomeContents
              img={imgContent05}
              title={homeContents[4].title}
              content={homeContents[4].content}
              flexRowReverse={false}
              bgColor={"bg-capi_gray_home"}
            />
            <HomeContents
              img={imgContent06}
              title={homeContents[5].title}
              content={homeContents[5].content}
              flexRowReverse={true}
              bgColor={"bg-capi_gray_home"}
            />
          </section>
        </div>
      </div>

      <div className="mt-10 mb-8 flex justify-center items-center">
        <Link
          to="/vestibular"
          className="flex gap-5 justify-center items-center font-headline font-semibold px-10 py-2 rounded-xl transition text-white bg-capi_red hover:text-gray-300"
        >
          <span>Conheça a FATEC</span>
          <FaArrowRightLong />
        </Link>
      </div>

      <section className="bg-capi_gray_home_darker px-4 py-10">
        <h2 className="font-headline text-white text-2xl font-semibold text-center mb-8">
          Escolha uma tecnologia para começar sua jornada!
        </h2>
        <HomeSectionTrails />
      </section>
    </main>
  );
};
