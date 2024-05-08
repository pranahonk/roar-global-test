import { Show, For, createSignal } from "solid-js";
import { removeItem, setLoading } from "../../../utils";
import { useNavigate } from "@solidjs/router";

const Header = () => {
  const navigate = useNavigate();

  const [isDropdownOpen, setDropdownOpen] = createSignal(false);

  const handleDropdownToggle = () => {
    setDropdownOpen(!isDropdownOpen());
  };

  const handleLogout = () => {
    setLoading({ screen: true });
    removeItem("userdata");
    setTimeout(() => {
      navigate("/");
      setLoading({ screen: false });
    }, 3000);
  };

  const handleProfile = () => {};
  return (
    <header class="border-b-1 sticky top-0 z-40 border-b border-wuiSlate-200 bg-white/90 backdrop-blur-sm">
      <div class="relative mx-auto max-w-full px-6 lg:max-w-5xl xl:max-w-7xl 2xl:max-w-[96rem]">
        <nav
          aria-label="main navigation"
          class="flex h-[3.5rem] items-stretch justify-between font-medium text-slate-700"
          role="navigation"
        >
          <a
            id="WindUI"
            aria-label="WindUI logo"
            aria-current="page"
            class="flex items-center gap-2 py-3 text-lg whitespace-nowrap focus:outline-none lg:flex-1"
          >
          </a>
          <button
            class="relative self-center order-10 visible block w-10 h-10 opacity-100 lg:hidden"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <div class="absolute w-6 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
              <span
                aria-hidden="true"
                class="absolute block h-0.5 w-9/12 -translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
              />
              <span
                aria-hidden="true"
                class="absolute block h-0.5 w-6 transform rounded-full bg-slate-900 transition duration-300"
              />
              <span
                aria-hidden="true"
                class="absolute block h-0.5 w-1/2 origin-top-left translate-y-2 transform rounded-full bg-slate-900 transition-all duration-300"
              />
            </div>
          </button>

          <div class="flex items-center px-6 ml-auto lg:ml-3 lg:p-0 ">
            <div class="relative inline-flex items-center justify-center w-auto h-10 text-black rounded-full">
              <div class="inline-block h-[40px] min-h-[1em] w-0.5 self-stretch bg-black"></div>
              <p class="cursor-pointer pl-2" onClick={handleDropdownToggle}>John Doe</p>
              <Show when={isDropdownOpen()}>
                <div class="absolute right-0 mt-32 w-48 bg-white border border-gray-300 rounded-md shadow-lg">
                  <For each={["Profile", "Logout"]}>
                    {(option) => (
                      <button
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                        onClick={
                          option === "Profile" ? handleProfile : handleLogout
                        }
                      >
                        {option}
                      </button>
                    )}
                  </For>
                </div>
              </Show>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
