import { useState } from 'react';

function App() {
   const [firstName, setFisrtName] = useState({ value: '', status: true, statusSubmit: false });
   const [lastName, setLastName] = useState({ value: '', status: true, statusSubmit: false });
   const [email, setEmail] = useState({ value: '', status: true, statusSubmit: false });
   const [queryType, setQueryType] = useState({ value: false, status: true, statusSubmit: false });
   const [message, setMessage] = useState({ value: '', status: true, statusSubmit: false });
   const [rule, setRule] = useState({ value: '', status: true, statusSubmit: false });
   const [submitOk, setSubmitOk] = useState(false);
   const validname = /^[a-zA-Z\ ]+$/;
   const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
   // const submitHandler = (e) => {
   //    e.preventDefault();
   //    if (firstName.statusSubmit && lastName.statusSubmit && email.statusSubmit && queryType.statusSubmit && message.statusSubmit && rule.statusSubmit) {
   //       setSubmitOk(true);
   //       setTimeout(() => {
   //          setSubmitOk(false);
   //       }, 3000);
   //    }
   //    if (firstName.status === true && firstName.statusSubmit === false) {
   //       setFisrtName({ status: false, statusSubmit: false });
   //    }
   //    if (lastName.status === true && lastName.statusSubmit === false) {
   //       setLastName({ status: false, statusSubmit: false });
   //    }
   //    if (email.status === true && email.statusSubmit === false) {
   //       setEmail({ status: false, statusSubmit: false });
   //    }
   //    if (queryType.status === true && queryType.statusSubmit === false) {
   //       setQueryType({ status: false, statusSubmit: false });
   //    }
   //    if (message.status === true && message.statusSubmit === false) {
   //       setMessage({ status: false, statusSubmit: false });
   //    }
   //    if (rule.status === true && rule.statusSubmit === false) {
   //       setRule({ status: false, statusSubmit: false });
   //    }
   // };
   const subList = [
      {
         state: firstName,
         stateFunc: setFisrtName,
      },
      {
         state: lastName,
         stateFunc: setLastName,
      },
      { state: email, stateFunc: setEmail },
      {
         state: queryType,
         stateFunc: setQueryType,
      },
      {
         state: message,
         stateFunc: setMessage,
      },
      { state: rule, stateFunc: setRule },
   ];
   console.log(subList);

   const submitHandler = (e) => {
      e.preventDefault();
      const notReady = [];
      subList.map((i, index) => {
         if (!i.state.statusSubmit) {
            notReady.push(index);
         }
      });
      notReady.map((i) => {
         const setAlert = subList[i].stateFunc;
         setAlert({ ...subList[i].state, status: false });
      });
      if (!notReady.length) {
         setSubmitOk(true);
      }
      console.log(notReady);
   };

   return (
      <>
         {submitOk ? <div className="bg-red-500 text-center transition-all duration-300 text-4xl pt-12">nice bro ud did it afanar</div> : <div></div>}
         <div className="md:container flex items-center  absolute top-0 bottom-0 right-0 left-0 justify-center ">
            <div className=" bg-white shadow-lg rounded-xl h-auto my-auto px-10 py-12">
               <h1 className="text-4xl font-semibold ml-1">Contact Us</h1>
               <form action="">
                  <div className="flex lg:flex-row flex-col mt-4 gap-x-4">
                     <div className="flex flex-col">
                        <label htmlFor="firstname">First Name</label>
                        <input
                           onChange={(e) => {
                              const firstname = e.target.value;
                              if (validname.test(firstname)) {
                                 setFisrtName({ value: firstname, status: true, statusSubmit: true });
                              } else {
                                 setFisrtName({ value: firstname, status: false, statusSubmit: false });
                              }
                           }}
                           type="text"
                           id="firstname"
                           value={firstName.value}
                           className="border-2 p-2 lg:w-64 cursor-pointer hover:border-green-600 transition-all duration-300 rounded-lg border-gray-300 mt-2"
                        />
                        {!firstName.status && <div className="text-red-600">This field required</div>}
                     </div>
                     <div className="flex flex-col">
                        <label htmlFor="lastname">Last Name</label>
                        <input
                           id="lastname"
                           onChange={(e) => {
                              const lastname = e.target.value;
                              if (validname.test(lastname)) {
                                 setLastName({ value: lastname, status: true, statusSubmit: true });
                              } else {
                                 setLastName({ value: lastname, status: false, statusSubmit: false });
                              }
                           }}
                           type="text"
                           className="border-2 p-2 lg:w-64 rounded-lg hover:border-green-600 transition-all duration-300 border-gray-300 mt-2"
                        />
                        {!lastName.status && <div className="text-red-600">This field required</div>}
                     </div>
                  </div>
                  <div className="my-3">
                     <label htmlFor="email">Email Address</label>
                     <input
                        id="email"
                        onChange={(e) => {
                           const emailname = e.target.value;
                           if (validEmail.test(emailname)) {
                              setEmail({ value: emailname, status: true, statusSubmit: true });
                           } else {
                              setEmail({ value: emailname, status: false, statusSubmit: false });
                           }
                        }}
                        type="text"
                        className="border-2 p-2 w-full rounded-lg hover:border-green-600 transition-all duration-300 cursor-pointer border-gray-300 mt-2"
                     />
                     {!email.status && <div className="text-red-600">Please enter a valid email address</div>}
                  </div>
                  <div className="">
                     <label>Quary Type</label>
                     <div className="w-full flex gap-x-2">
                        <div className="flex gap-x-3 border-2 py-2 hover:border-green-600   px-4 w-1/2 rounded-lg border-gray-300 mt-2 transition-all duration-300 has-[:checked]:bg-green-500/25 has-[:checked]:border-green-500">
                           <input
                              onClick={(e) => {
                                 const checkbox = e.target.checked;
                                 if (checkbox) {
                                    setQueryType({ value: true, status: false, statusSubmit: true });
                                 } else {
                                    setQueryType({ value: false, status: true, statusSubmit: false });
                                 }
                              }}
                              type="radio"
                              name="Quary"
                              id="moz"
                              className="sm:w-8 accent-green-600 cursor-pointer "
                           />
                           <label htmlFor="moz" className=" w-full sm:text-base text-xs cursor-pointer">
                              Genral Enquiry
                           </label>
                        </div>
                        <div className="flex gap-x-3 border-2 py-2 px-4 w-1/2 rounded-lg hover:border-green-600  border-gray-300 mt-2 transition-all duration-300 has-[:checked]:bg-green-500/25 has-[:checked]:border-green-500">
                           <input
                              onClick={(e) => {
                                 const checkbox = e.target.checked;
                                 if (checkbox) {
                                    setQueryType({ value: false, status: true, statusSubmit: true });
                                 } else {
                                    setQueryType({ value: true, status: false, statusSubmit: false });
                                 }
                              }}
                              type="radio"
                              name="Quary"
                              id="moz2"
                              className="sm:w-8 accent-green-600 cursor-pointer "
                           />
                           <label htmlFor="moz2" className=" w-full sm:text-base text-xs cursor-pointer">
                              Suport Request
                           </label>
                        </div>
                     </div>
                     {!queryType.status && <div className="text-red-600">Please select a quary type</div>}
                  </div>
                  <div className="flex flex-col mt-2">
                     <label className="mb-2" htmlFor="textarea">
                        message
                     </label>
                     <textarea
                        onChange={(e) => {
                           const message = e.target.value;
                           if (message) {
                              setMessage({ status: true, statusSubmit: true });
                           } else {
                              setMessage({ status: false, statusSubmit: false });
                           }
                        }}
                        name="textarea"
                        id="textarea"
                        rows="4"
                        cols="50"
                        className="w-full border-2 hover:border-green-600 transition-all cursor-pointer duration-300 rounded-lg p-3 resize-none"
                     ></textarea>
                     {!message.status && <div className="text-red-600">This field required</div>}
                  </div>
                  <div className="flex flex-col  mt-12">
                     <div className="flex gap-x-2">
                        <input
                           onChange={(e) => {
                              const rule = e.target.checked;
                              if (rule) {
                                 setRule({ status: true, statusSubmit: true });
                              } else {
                                 setRule({ status: false, statusSubmit: false });
                              }
                           }}
                           type="checkbox"
                           id="rule"
                           className="accent-green-600 sm:w-4 w-3 cursor-pointer"
                        />
                        <label htmlFor="rule" className='sm:text-base text-xs cursor-pointer'>i consent to being contacted by the team</label>
                     </div>
                     {!rule.status && <span className="text-red-600 sm:text-base text-xs">To submit rhis form,please consent to being contacked</span>}
                  </div>
                  <button onClick={submitHandler} type="submit" className=" mt-5 w-full bg-teal-700 text-white py-3 rounded-lg text-lg">
                     submit
                  </button>
               </form>
            </div>
         </div>
      </>
   );
}

export default App;