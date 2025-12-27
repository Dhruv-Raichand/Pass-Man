import React, { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { v4 as uuidv4 } from 'uuid';

const Manager = () => {
  const ref = useRef();
  const passwordRef = useRef();
  const [form, setform] = useState({ site: "", username: "", password: "" });

  const [passwordArray, setpasswordArray] = useState([]);

  useEffect(() => {
    let passwords = localStorage.getItem("passwords");
    if (passwords) {
      setpasswordArray(JSON.parse(passwords));
    }
  }, []);

  const copyText = (text) => {
    toast("🦄 Copied! " + text, {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    navigator.clipboard.writeText(text);
  };

  const showPassword = () => {
    passwordRef.current.type = "text";
    console.log(ref.current.src);
    if (ref.current.src.includes("icons/eyecross.png")) {
      ref.current.src = "icons/eye.png";
      passwordRef.current.type = "password";
    } else {
      ref.current.src = "icons/eyecross.png";
      passwordRef.current.type = "text";
    }
  };

  const savePassword = () => {
    setpasswordArray([...passwordArray, {...form, id: uuidv4()}]);
    localStorage.setItem("passwords", JSON.stringify([...passwordArray, {...form, id: uuidv4()}]));
    console.log(passwordArray);
    setform({ site: "", username: "", password: "" })
    toast("🦄 Password Saved! ", {
      position: "top-right",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const deletePassword = (id) => {
    let c = confirm("Do you really want to delete this password")
    if(c){
      setpasswordArray(passwordArray.filter(item=>item.id!==id));
      localStorage.setItem("passwords", JSON.stringify(passwordArray.filter(item=>item.id!==id)));
      console.log(passwordArray);
      toast("🦄 Deleted! ", {
        position: "top-right",
        autoClose: 4000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
  };

const editPassword = (id)=>{
  setform(passwordArray.filter(i=>i.id===id)[0])
 setpasswordArray(passwordArray.filter(item=>item.id!==id)) 
 
}

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };
  return (
    <>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <div>
        <div className="absolute inset-0 -z-10 h-full w-full bg-green-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
          <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-green-400 opacity-20 blur-[100px]"></div>
        </div>
        <div className="p-3 md:container md:px-40 md:py-16 md:mx-auto min-h-[88.2vh]">
          <h1 className="text-4xl font-bold text-center">
            <span className="text-green-500"> &lt;</span>
            PASS
            <span className="text-green-500"> MAN/&gt;</span>
          </h1>
          <p className="text-green-700 text-lg text-center">
            Your own Password Manager
          </p>
          <div className="flex flex-col p-4 text-black gap-8 items-center">
            <input
              name="site"
              onChange={handleChange}
              value={form.site}
              type="text"
              className="rounded-full border border-green-500 w-full p-4 py-1"
              placeholder="Enter website URL"
            />
            <div className="flex w-full justify-between gap-8">
              <input
                name="username"
                onChange={handleChange}
                value={form.username}
                type="text"
                className="rounded-full border border-green-500 w-full p-4 py-1"
                placeholder="Enter Username"
              />
              <div className="relative w-full">
                <input
                  ref={passwordRef}
                  name="password"
                  onChange={handleChange}
                  value={form.password}
                  type="password"
                  className="rounded-full border border-green-500 w-full p-4 py-1"
                  placeholder="Enter Password"
                />
                <span
                  className="absolute right-[3px] top-[4px] cursor-pointer"
                  onClick={showPassword}
                >
                  <img ref={ref} width={26} src="icons/eye.png" alt="" />
                </span>
              </div>
            </div>
            <button
              onClick={savePassword}
              className="flex justify-center items-center gap-2 bg-green-400 hover:bg-green-300 rounded-full px-8 py-2 w-fit hover:border border-green-900"
            >
              <lord-icon
                src="https://cdn.lordicon.com/sbnjyzil.json"
                trigger="hover"
                stroke="bold"
                state="hover-swirl"
                colors="primary:#121331,secondary:#ffffff"
              ></lord-icon>
              Add Password
            </button>
          </div>
          <div className="passwords">
            <h2 className="font-bold text-2xl py-4">Your Passwords</h2>
            {passwordArray.length === 0 && <div>No Passwords to show</div>}
            {passwordArray.length != 0 && (
              <table className="table-auto w-full rounded-md overflow-hidden">
                <thead className="bg-green-800 text-white">
                  <tr>
                    <th className="py-2">Site</th>
                    <th className="py-2">Username</th>
                    <th className="py-2">Password</th>
                    <th className="py-2">Actions</th>
                  </tr>
                </thead>
                <tbody className="bg-green-100">
                  {passwordArray.map((item, index) => {
                    return (
                      <tr key={index}>
                        <td className="text-center w-32 py-2 border border-white">
                          <div className="flex justify-center items-center">
                            <a href={item.site} target="_blank">
                              {item.site}
                            </a>
                            <div
                              className="lordiconcopy size-7 cursor-pointer"
                              onClick={() => {
                                copyText(item.site);
                              }}
                            >
                              <lord-icon
                                style={{
                                  width: "25px",
                                  height: "25px",
                                  paddingTop: "3px",
                                  paddingLeft: "3px",
                                }}
                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                trigger="hover"
                              ></lord-icon>
                            </div>
                          </div>
                        </td>
                        <td className="text-center w-32 py-2 border border-white">
                          <div className="flex justify-center items-center">
                            <a href={item.username} target="_blank">
                              {item.username}
                            </a>
                            <div
                              className="lordiconcopy size-7 cursor-pointer"
                              onClick={() => {
                                copyText(item.username);
                              }}
                            >
                              <lord-icon
                                style={{
                                  width: "25px",
                                  height: "25px",
                                  paddingTop: "3px",
                                  paddingLeft: "3px",
                                }}
                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                trigger="hover"
                              ></lord-icon>
                            </div>
                          </div>
                        </td>
                        <td className="text-center w-32 py-2 border border-white">
                          <div className="flex justify-center items-center">
                            <a href={item.password} target="_blank">
                              {item.password}
                            </a>
                            <div
                              className="lordiconcopy size-7 cursor-pointer"
                              onClick={() => {
                                copyText(item.password);
                              }}
                            >
                              <lord-icon
                                style={{
                                  width: "25px",
                                  height: "25px",
                                  paddingTop: "3px",
                                  paddingLeft: "3px",
                                }}
                                src="https://cdn.lordicon.com/iykgtsbt.json"
                                trigger="hover"
                              ></lord-icon>
                            </div>
                          </div>
                        </td>
                        <td className="text-center w-32 py-2 border border-white">
                          <div className="flex justify-center items-center">
                            <span
                              className="cursor-pointer mx-1"
                              onClick={() => {
                                editPassword(item.id);
                              }}
                            >
                              <lord-icon
                                src="https://cdn.lordicon.com/gwlusjdu.json"
                                trigger="hover"
                                style={{ width: "25px", height: "25px" }}
                              ></lord-icon>
                            </span>
                            <span
                              className="cursor-pointer mx-1"
                              onClick={() => {
                                deletePassword(item.id);
                              }}
                            >
                              <lord-icon
                                src="https://cdn.lordicon.com/skkahier.json"
                                trigger="hover"
                                style={{ width: "25px", height: "25px" }}
                              ></lord-icon>
                            </span>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Manager;
