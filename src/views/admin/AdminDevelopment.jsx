import { useState } from "react";
import RenderHtml from "../../components/admin/adminDevelopment/RenderHtml";

export const AdminDevelopment = () => {
  // const [htmlCode, setHtmlCode] = useState(null);
  // const [showCode, setShowCode] = useState(false);

  // const showDevelopmentTest = (ev) => {
  //   ev.preventDefault();
  //   setShowCode(true)
  // }

  // return (
  //   <main className="py-10 px-4">
  //     <div className="container max-w-5xl mx-auto">
  //       <form onSubmit={showDevelopmentTest}>
  //         <div className="flex flex-col gap-5 mb-3">
  //           <label htmlFor="htmlTextarea">Insira seu código aqui!</label>
  //           <textarea
  //             className="w-full border border-black text-white  bg-capi_gray_development shadow-xl py-3 px-3 rounded-md min-h-80"
  //             id="htmlTextarea"
  //             value={htmlCode}
  //             onChange={(ev) => setHtmlCode(ev.target.value)}
  //           ></textarea>
  //         </div>
  //         <div className="text-center">
  //           <button className="capiButtons text-black bg-capi_green shadow-xl hover:text-gray-800" type="submit">Validar Código</button>
  //         </div>
  //       </form>
  //     </div>
  //     <section>
  //       {showCode && (
  //         <div className="w-full" dangerouslySetInnerHTML={{__html: htmlCode}}>
  //         </div>
  //       )}
  //     </section>
  //   </main>
  // );
  const [htmlCode, setHtmlCode] = useState('');
  // const [showCode, setShowCode] = useState(false);

  // const showDevelopmentTest = (ev) => {
  //   ev.preventDefault();
  //   setShowCode(true);
  // };

  return (
    <main className="py-10 px-4">
      <div className="container max-w-5xl mx-auto mb-5">
        {/* <form onSubmit={showDevelopmentTest}> */}
        <form>
          <div className="flex flex-col gap-5 mb-5">
            <label 
            className="text-lg font-headline"
            htmlFor="htmlTextarea">Insira seu código aqui!</label>
            <textarea
              className="w-full border border-black text-white bg-capi_gray_development shadow-xl py-3 px-3 rounded-md min-h-80"
              id="htmlTextarea"
              value={htmlCode}
              onChange={(ev) => setHtmlCode(ev.target.value)}
            ></textarea>
          </div>
          {/* <div className="text-center">
            <button className="capiButtons text-black bg-capi_green shadow-xl hover:text-gray-800" type="submit">
              Validar Código
            </button>
          </div> */}
        </form>
      </div>
      <hr />
      <section>
        {/* {showCode && (
          <RenderHtml htmlContent={htmlCode}/>
        )} */}
        <RenderHtml htmlContent={htmlCode}/>
      </section>
    </main>
  );
};
