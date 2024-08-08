'use client'
import InputComponent from "@/components/formElements/InputComponent";
import ComponentLevelLoader from "@/components/loader/ComponentLevelLoader";
import { createNewLead, getAllLeads, leadDelete, updateLead } from "@/service/lead";
import leadTypes from "@/types/leadTypes";
import { leadFormControls } from "@/utils";
import { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { toast } from "react-toastify";

const initialFormdata: leadTypes = {
  name: "",
  email: "",
  mobilenumber: 0,
  product: "A"
}
export default function Home() {
  const [formData, setFormData] = useState(initialFormdata);
  const [loader, setLoader] = useState(false);
  const [addLeadModal, setAddLeadModal] = useState(false);
  const [leadsData, setLeadsData] = useState<leadTypes[]>([])


  function isValidForm() {
    return formData &&
      formData.email &&
      formData.email.trim() !== "" &&
      formData.email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/) &&
      formData.name &&
      formData.name.trim() !== "" &&
      formData.mobilenumber &&
      formData.mobilenumber !== 0 &&
      formData.product &&
      formData.product.trim() !== ""
      ? true
      : false;
  }

  const handleLead = async () => {
    if (formData._id) {
      //update user
      setLoader(true);
      const res = await updateLead(formData);
      if (res.success) {
        getLeads();
        toast.success(res.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        setFormData(initialFormdata);
        setLoader(false);
      } else {
        toast.error(res.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        setLoader(false);
      }
    } else {
      //add Lead
      setLoader(true);
      const res = await createNewLead(formData);
      if (res.success) {
        getLeads();
        toast.success(res.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        setFormData(initialFormdata);
        setLoader(false);
      } else {
        toast.error(res.message, {
          position: toast.POSITION.TOP_RIGHT,
        });
        setLoader(false);
      }
    };
    setAddLeadModal(false);
  };

  const editLead = (lead: any = null) => {
    setFormData(initialFormdata);
    if (lead) {
      let json = JSON.parse(JSON.stringify(lead));
      setFormData(json);
    }
    setAddLeadModal(true);
  };

  const deleteLead = async (id: string) => {
    setLoader(true);
    const res = await leadDelete(id)
    if (res.success) {
      getLeads();
      toast.success(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setLoader(false);
    } else {
      toast.error(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setLoader(false);
    }
  };

  async function getLeads() {
    setLoader(true);
    const res = await getAllLeads();
    if (res.success) {
      setLeadsData(res.data);
      toast.success(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setLoader(false);
    } else {
      toast.error(res.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
      setLoader(false);
    }
  }

  useEffect(() => {
    getLeads();
  }, [])


  const [search, setSearch] = useState<any>('');
  const [filteredLeads, setFilteredLeads] = useState<leadTypes[]>(leadsData);

  useEffect(() => {
    setFilteredLeads(() => {
      return leadsData.filter((item) => {
        return item.name.toLowerCase().includes(search.toLowerCase());
      });
    });
  }, [search, leadsData]);

  return (
    <div>
      <div className="max-w-screen-2xl mx-auto px-4 flex items-center justify-between flex-wrap gap-4">
        <h2 className="text-xl">Lead Application</h2>
        <div className="flex sm:flex-row flex-col sm:items-center sm:gap-3 gap-4 w-full sm:w-auto">
          <button type="button"
            className="inline-flex w-full rounded items-center justify-center bg-blue-600 px-5 py-2 text-lg
            text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide"
            onClick={() => editLead()}
          >
            Add Lead
          </button>
          <div className="relative">
            <input type="text" placeholder="Search Blog" className="form-input text-black rounded py-2 px-4 peer" value={search} onChange={(e) => setSearch(e.target.value)} />
            <button type="button" className="absolute left-0 top-1/2 -translate-y-1/2 text-black">
              <CiSearch className="mx-auto" />
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-screen-2xl mx-auto px-4 mt-10 flex justify-center">
        <div className="overflow-x-auto overflow-y-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead>
              <tr className="bg-gray-500 font-medium uppercase tracking-wider">
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Email</th>
                <th className="px-6 py-3 text-left">Mobile No.</th>
                <th className="px-6 py-3 text-left">Product</th>
                <th className="px-6 py-3 text-center">Action</th>
              </tr>
            </thead>
            <tbody className="">
              {
                filteredLeads && filteredLeads.length === 0 ?
                  <tr className="font-medium uppercase tracking-wider h-20">
                    <td colSpan={5} className="text-center align-middle">
                      No data found
                    </td>
                  </tr>

                  :
                  null
              }
              {
                filteredLeads && filteredLeads.map((lead, index) => (
                  <tr key={index}
                    className={`${index % 2 == 0 ? "" : "bg-[#222E3A]/[6%]"}`}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">{lead.name}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{lead.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{lead.mobilenumber}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{lead.product}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button className="px-4 py-2 font-medium text-white bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:shadow-outline-blue active:bg-blue-600 transition duration-150 ease-in-out"
                        onClick={() => editLead(lead)}
                      >
                        Edit
                      </button>
                      <button className="ml-2 px-4 py-2 font-medium text-white bg-red-600 rounded-md hover:bg-red-500 focus:outline-none focus:shadow-outline-red active:bg-red-600 transition duration-150 ease-in-out"
                        onClick={() => deleteLead(lead._id as string)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>

      {
        addLeadModal &&
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none bg-black bg-opacity-50">
          <div className="relative w-full max-w-2xl mx-auto my-6">
            <div className="bg-white rounded-lg shadow-lg flex flex-col items-center p-6 md:p-10">
              <div className="flex items-center justify-between w-full border-b pb-4 mb-4">
                <h3 className="text-2xl text-black font-semibold text-center w-full">
                  {formData._id ? 'Edit Lead' : 'Add Lead'}
                </h3>
                <button
                  className="text-black bg-transparent border-0 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                  onClick={() => setAddLeadModal(!addLeadModal)}
                >
                  <span className="bg-transparent text-black h-6 w-6 text-2xl block outline-none focus:outline-none">
                    ×
                  </span>
                </button>
              </div>
              <div className="w-full mt-4 space-y-8">
                {leadFormControls.map((controlItem) => (
                  <InputComponent
                    key={controlItem.id}
                    type={controlItem.type}
                    placeholder={controlItem.placeholder}
                    label={controlItem.label}
                    value={formData[controlItem.id] as string}
                    onChange={(event) => {
                      setFormData({
                        ...formData,
                        [controlItem.id]: event.target.value,
                      });
                    }}
                  />
                ))}

                <div className="relative">
                  <label className="absolute -top-3 left-2 text-gray-600 bg-white px-2">
                    Product
                  </label>
                  <select
                    name="product"
                    id="product"
                    className="border placeholder-gray-400 text-gray-800 focus:outline-none focus:border-black w-full pt-4 pr-4 pb-4 pl-4 mr-0 mt-0 ml-0 text-base block bg-white border-gray-300 rounded-md"
                    onChange={(event) => {
                      setFormData({
                        ...formData,
                        product: event.target.value,
                      });
                    }}
                    defaultValue="A"
                  >
                    <option value="A">A</option>
                    <option value="B">B</option>
                    <option value="C">C</option>
                  </select>
                </div>

                <button
                  className="disabled:opacity-50 inline-flex w-full rounded items-center justify-center bg-blue-600 px-6 py-4 text-lg 
                  text-white transition-all duration-200 ease-in-out focus:shadow font-medium uppercase tracking-wide"
                  disabled={!isValidForm()}
                  onClick={handleLead}
                >
                  {loader ? (
                    <ComponentLevelLoader
                      text={formData._id ? "Update Lead" : "Add New Lead"}
                      color={"#ffffff"}
                      loading={loader}
                    />
                  ) : (
                    formData._id ? "Update Lead" : "Add New Lead"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      }
    </div>
  );
}
