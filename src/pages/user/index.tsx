import { For, createResource } from "solid-js";
import { PanelContent } from "../../components";
import { fetchUserData } from "../../utils/store/getDataUsers";
import {useNavigate} from "@solidjs/router";

const User = () => {
  const [user] = createResource(2, fetchUserData);
  const navigate = useNavigate();

  return (
    <PanelContent title="Group Name">
      <div class="relative flex flex-col w-full h-full text-gray-700 bg-white shadow-md rounded-xl bg-clip-border">
        <div class="relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white rounded-none bg-clip-border">
          <div class="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div class="w-full md:w-72">
              <div class="relative h-10 w-full min-w-[200px]">
                <div class="absolute grid w-5 h-5 top-2/4 right-3 -translate-y-2/4 place-items-center text-blue-gray-500">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    class="w-5 h-5"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                    />
                  </svg>
                </div>
                <input
                  class="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 !pr-9 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />
                <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:!border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:!border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
                  Search
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="p-6 px-0 overflow-scroll">
          <table class="w-full mt-4 text-left table-auto min-w-max">
            <thead>
              <tr>
                <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Application Name Employer Dept Contract
                  </p>
                </th>
                <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Exam Type
                  </p>
                </th>
                <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Date of Exam
                  </p>
                </th>
                <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Date Received
                  </p>
                </th>
                <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Date Complete
                  </p>
                </th>
                <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    initial Rec.
                  </p>
                </th>
                <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Final Rec.
                  </p>
                </th>
                <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    RDQA DEadline
                  </p>
                </th>
                <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Follow-Up
                  </p>
                </th>
                <th class="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50">
                  <p class="block font-sans text-sm antialiased font-normal leading-none text-blue-gray-900 opacity-70">
                    Deployment Date
                  </p>
                </th>
              </tr>
            </thead>
            <tbody>
              <For each={user()?.data}>
                {(item) => (
                  <tr class="cursor-pointer" onClick={()=>   navigate(`/users/${item.id}`)}>
                    <td class="p-4">
                      <div class="flex items-center gap-3">
                        <img
                          src={item.avatar}
                          alt="Richard Gran"
                          class="relative inline-block h-9 w-9 !rounded-full object-cover object-center"
                        />
                        <div class="flex flex-col">
                          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                            {item.first_name}
                          </p>
                          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900 opacity-70">
                            {item.email}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td class="p-4">
                      <div class="flex flex-col">
                        <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                          Exam Type
                        </p>
                      </div>
                    </td>
                    <td class="p-4">
                      <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        04/10/21
                      </p>
                    </td>
                    <td class="p-4">
                      <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        04/10/21
                      </p>
                    </td>
                    <td class="p-4">
                      <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        04/10/21
                      </p>
                    </td>
                    <td class="p-4">
                      <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        04/10/21
                      </p>
                    </td>
                    <td class="p-4">
                      <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        04/10/21
                      </p>
                    </td>
                    <td class="p-4">
                      <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        04/10/21
                      </p>
                    </td>
                    <td class="p-4">
                      <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        04/10/21
                      </p>
                    </td>
                    <td class="p-4">
                      <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
                        04/10/21
                      </p>
                    </td>

                  </tr>
                )}
              </For>
            </tbody>
          </table>
        </div>
        <div class="flex items-center justify-between p-4 border-t border-blue-gray-50">
          <p class="block font-sans text-sm antialiased font-normal leading-normal text-blue-gray-900">
            Page 1 of 10
          </p>
          <div class="flex gap-2">
            <button
              class="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Previous
            </button>
            <button
              class="select-none rounded-lg border border-gray-900 py-2 px-4 text-center align-middle font-sans text-xs font-bold uppercase text-gray-900 transition-all hover:opacity-75 focus:ring focus:ring-gray-300 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </PanelContent>
  );
};

export default User;
