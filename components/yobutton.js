import React, { useState } from "react";

export default function Modal({ templateId, yoHostUrl, btnText, importerId }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <button
        className="bg-yellow-300 text-black active:bg-blue-300 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        {btnText ? btnText : "Import CSV"}
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full h-full my-6 mx-auto">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full h-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-2 mx-2 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">YoBulk!</h3>
                  <button
                    className="p-1 ml-auto border-0 text-black opacity-50 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    x
                  </button>
                </div>
                {/*body ?templateId=${queryParams.templateKey*/}
                <div className="relative p-6 flex-auto">
                  {importerId ? (
                    <iframe
                      src={`${yoHostUrl}/importer/${importerId}`}
                      title="yocsv"
                      width="100%"
                      height="100%"
                    ></iframe>
                  ) : (
                    <iframe
                      src={`${yoHostUrl}/saasloader/${templateId}`}
                      title="yocsv"
                      width="100%"
                      height="100%"
                    ></iframe>
                  )}
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}
