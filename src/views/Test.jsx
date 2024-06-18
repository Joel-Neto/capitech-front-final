import imgTrail from "../assets/img/home/trails/img_trilhas.png";

export const Test = () => {
  return (
    <main>
      <section className="bg-capi_blue_home_darker text-white text-center gap-8 p-8">
        <h2 className="font-headline font-semibold text-4xl">Javascript</h2>
      </section>
      <section className="container mx-auto max-w-5xl p-10 px-2">
        <div className="w-full flex justify-center mb-5">
          <img
            className="w-full sm:w-4/5"
            src={imgTrail}
            alt="Imagem de um código"
          />
        </div>

        <h2 className="text-center font-headline text-2xl font-semibold text-black mb-5">
          var, let e const
        </h2>

        <div className="w-full">
          <div className="mb-7">
            <h4 className="text-xl font-bold font-headline mb-3">Var: </h4>
            <p className="text-lg mb-3">
              Escopo: As variáveis declaradas com var têm escopo global ou
              escopo de função/local.
            </p>
            <ul className="mb-3">
              <li>
                <b>- Escopo global:</b> Variáveis declaradas fora de funções
                podem ser usadas em todo o código.
              </li>
              <li>
                <b>- Escopo de função:</b> Variáveis declaradas dentro de
                funções só podem ser acessadas dentro dessas funções.
              </li>
            </ul>
            <p className="text-lg mb-3">
              Variáveis <b>var</b> podem ser redeclaradas e atualizadas dentro
              do mesmo escopo.
            </p>
          </div>
          <div className="mb-7">
            <h4 className="text-xl font-bold font-headline mb-3">Let: </h4>
            <p className="text-lg mb-3">
              Escopo: As variáveis declaradas com let têm escopo de bloco.
            </p>
            <ul className="mb-3">
              <li>
                - Isso significa que elas são válidas apenas dentro do bloco
                onde foram declaradas.
              </li>
            </ul>
            <p className="text-lg mb-3">
              Variáveis <b>let</b> não podem ser redeclaradas, mas podem ser
              atualizadas.
            </p>
          </div>
          <div className="mb-7">
            <h4 className="text-xl font-bold font-headline mb-3">Const: </h4>
            <p className="text-lg mb-3">
              Escopo: Assim como let, const tem escopo de bloco.
            </p>
            <p className="text-lg mb-3">
              <b>Valor padrão:</b> As variáveis const também são inicializadas
              com undefined, mas não podem ser reatribuídas após a primeira
              atribuição.
            </p>
            <ul className="mb-3">
              <li>
                - Por exemplo: <b>const instrumento = &quot;bateria&quot;</b>;{" "}
                <b>instrumento = &quot;guitarra&quot;</b>; gerará um erro
                “Assignment to constant variable.”
              </li>
            </ul>
          </div>
          <div className="mb-7">
            <p className="text-lg font-bold mb-3">Em resumo:</p>
            <ul>
              <li>
                - Use let quando precisar de uma variável que pode ser atualizada.
              </li>
              <li>- Use const para criar constantes imutáveis.</li>
              <li>
                - Evite usar var, pois let e const são mais seguros e legíveis.
              </li>
            </ul>
          </div>
        </div>

        <h3 className="text-center text-xl font-semibold mb-5">
          Para se aprofundar no assundo, temos alguns vídeos como recomendação:
        </h3>

        <h3 className=" text-lg font-bold mb-5">-</h3>

        <p className="text-lg mb-3">-</p>

        <a>
          <p className="underline text-blue-500 font-bold transition duration-300 hover:text-blue-800">
            Clique aqui para acessar o curso de Python!
          </p>
        </a>
      </section>
    </main>
  );
};
