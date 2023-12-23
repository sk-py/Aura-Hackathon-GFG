import React, { useEffect } from "react";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Menu, Transition } from "@headlessui/react";
import axios from "axios";
import { XMarkIcon } from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  FunnelIcon,
  MinusIcon,
  PlusIcon,
  Squares2X2Icon,
  Loading,
} from "@heroicons/react/20/solid";
import { Link } from "react-router-dom";
// import { use } from "../../../../server/Routes/Auth";

const sortOptions = [
  { name: "Most Recent", href: "#", current: false },
  { name: "Salary: Low to High", href: "#", current: false },
  { name: "Salary: High to Low", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Jobs() {
  const [rows, setRows] = useState(0);
  const [fetchedJobs, setFetchedJobs] = useState([]);
  const [loading, setloading] = useState(true);
  const [FilterApplied, setFilterApplied] = useState(false);
  const [NoData, setNoData] = useState(false);
  const [WorkLocation, setWorkLocation] = useState("");
  const [JobType, setJobType] = useState("");
  const [Level, setLevel] = useState("");
  // const [fetchNow, setfetchNow] = useState(null);

  const userSelections = {
    workLocation: WorkLocation,
    jobType: JobType,
    level: Level,
  };

  // const handleChange = (e) => {
  //   if (e.target.name == "mode[]") {
  //     if (WorkLocation.length > 0) {
  //       WorkLocation.includes(e.target.value)
  //         ? setWorkLocation((prev) => {
  //             return prev.filter((value) => value !== e.target.value);
  //           })
  //         : setWorkLocation((prev) => [...prev, e.target.value]);
  //     } else {
  //       setWorkLocation((prev) => [...prev, e.target.value]);
  //     }
  //   }
  //   if (e.target.name == "location[]") {
  //     if (JobType.length > 0) {
  //       JobType.includes(e.target.value)
  //         ? setJobType((prev) => {
  //             return prev.filter((value) => value !== e.target.value);
  //           })
  //         : setJobType((prev) => [...prev, e.target.value]);
  //     } else {
  //       setJobType((prev) => [...prev, e.target.value]);
  //     }
  //   }
  //   if (e.target.name == "department[]") {
  //     if (Level.length > 0) {
  //       Level.includes(e.target.value)
  //         ? setLevel((prev) => {
  //             return prev.filter((value) => value !== e.target.value);
  //           })
  //         : setLevel((prev) => [...prev, e.target.value]);
  //     } else {
  //       setLevel((prev) => [...prev, e.target.value]);
  //     }
  //   }
  // };

  // const ApplyFilters = async () => {
  //   try {
  //     const res = await fetch("http://localhost:9000/api/jobs/filter", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(userSelections),
  //     });

  //     // Assuming you want to work with JSON response, use res.json()
  //     const data = await res.json();
  //     data.length == 0 ? setNoData(true) : setNoData(false);
  //     setFetchedJobs(data);
  //     setloading(false);
  //     // console.log("Filtered Data:", data);
  //   } catch (err) {
  //     console.error("Error fetching data:", err.message);
  //   }
  // };

  // useEffect(() => {
  //   // console.log("User Selection Object ", );
  //   setloading(true);
  //   // if()
  //   ApplyFilters();
  // }, [WorkLocation, JobType, Level]);

  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  //Function for fetching data in limits and skips
  const fetchData = async () => {
    try {
      const response = await axios.get(
        `http://localhost:9000/api/freelance/getFreelanceJobs/${rows}`
      );
      // Assuming your API response contains an array of jobs in the 'data' property
      const newData = response.data;
      newData.length == 0 ? setNoData(true) : setNoData(false);
      // setRows((prev) => prev + 5);
      setFetchedJobs((prev) => [...prev, ...newData]);
      setloading(false);
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };
  useEffect(() => {
    !NoData && fetchData();
  }, [rows]);

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

    if (scrollTop + clientHeight >= scrollHeight) {
      setloading(true);
      setRows((prev) => prev + 10);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const fetchJobDataInitial = async () => {
      try {
        const initialData = await axios.get(
          `http://192.168.43.66:9000/api/jobs/getjobs/${rows}`
        );

        const fetchedData = initialData.data;
        setFetchedJobs((prev) => [...prev, ...fetchedData]);
      } catch (error) {
        console.error("Error fetching data:", error.message);
      }
    };

    // fetchJobDataInitial();
  }, []);

  return (
    <>
      {/* <div className="mx-5 bg-white p-0 rounded-xl shadow-xl md:shadow-none md:w-fit md:mx-auto"> */}

      <form className="flex my-3 max-w-xl mx-auto px-2 gap-2 flex-wrap justify-center sm:flex-row">
        <div className="relative flex-grow flex items-center">
          <input
            className="border p-2 w-full rounded-xl border-gray-600"
            type="text"
            placeholder="Search for jobs"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6 absolute right-3 text-gray-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
            />
          </svg>
        </div>
        <button className="bg-blue-700 text-white px-2 sm:px-5 py-2 rounded-2xl">
          Search
        </button>
      </form>
      {/* </div> */}

      {/* Template */}

      <div className="bg-white">
        <div>
          {/* Mobile filter dialog */}
          <Transition.Root show={mobileFiltersOpen} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-40 lg:hidden"
              onClose={setMobileFiltersOpen}
            >
              <Transition.Child
                as={Fragment}
                enter="transition-opacity ease-linear duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="transition-opacity ease-linear duration-300"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-25" />
              </Transition.Child>

              <div className="fixed inset-0 z-40 flex">
                <Transition.Child
                  as={Fragment}
                  enter="transition ease-in-out duration-300 transform"
                  enterFrom="translate-x-full"
                  enterTo="translate-x-0"
                  leave="transition ease-in-out duration-300 transform"
                  leaveFrom="translate-x-0"
                  leaveTo="translate-x-full"
                >
                  <Dialog.Panel className="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                    <div className="flex items-center justify-between px-4">
                      <h2 className="text-lg font-medium text-gray-900">
                        Filters
                      </h2>
                      <button
                        type="button"
                        className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
                        onClick={() => setMobileFiltersOpen(false)}
                      >
                        <span className="sr-only">Close menu</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>

                    {/* Filters */}
                    {/* <form className="mt-4 border-t border-gray-200">
                      {filters.map((section) => (
                        <Disclosure
                          as="div"
                          key={section.id}
                          className="border-t border-gray-200 px-4 py-6"
                        >
                          {({ open }) => (
                            <>
                              <h3 className="-mx-2 -my-3 flow-root">
                                <Disclosure.Button className="flex w-full items-center justify-between bg-white px-2 py-3 text-gray-400 hover:text-gray-500">
                                  <span className="font-medium text-gray-900">
                                    {section.name}
                                  </span>
                                  <span className="ml-6 flex items-center">
                                    {open ? (
                                      <MinusIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    ) : (
                                      <PlusIcon
                                        className="h-5 w-5"
                                        aria-hidden="true"
                                      />
                                    )}
                                  </span>
                                </Disclosure.Button>
                              </h3>
                              <Disclosure.Panel className="pt-6">
                                <div className="space-y-6">
                                  {section.options.map((option, optionIdx) => (
                                    <div
                                      key={option.value}
                                      className="flex items-center"
                                    >
                                      <input
                                        id={`filter-mobile-${section.id}-${optionIdx}`}
                                        name={`${section.id}[]`}
                                        value={option.value}
                                        type="checkbox"
                                        defaultChecked={option.checked}
                                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                        onChange={(e) => {
                                          console.log(e.target.value);
                                        }}
                                      />
                                      <label
                                        htmlFor={`filter-mobile-${section.id}-${optionIdx}`}
                                        className="ml-3 min-w-0 flex-1 text-gray-500"
                                      >
                                        {option.label}
                                      </label>
                                    </div>
                                  ))}
                                </div>
                              </Disclosure.Panel>
                            </>
                          )}
                        </Disclosure>
                      ))}
                    </form> */}
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </Dialog>
          </Transition.Root>

          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between border-b border-gray-200 pb-6 pt-0">
              <h1 className="text-2xl font-semibold tracking-tight text-gray-900 ">
                All Freelance Jobs / Projects
              </h1>
              <div></div>

              <div className="flex items-center">
                <Menu as="div" className="relative inline-block text-left">
                  <div>
                    <Menu.Button className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900">
                      Sort
                      <ChevronDownIcon
                        className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                        aria-hidden="true"
                      />
                    </Menu.Button>
                  </div>

                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="py-1">
                        {sortOptions.map((option) => (
                          <Menu.Item key={option.name}>
                            {({ active }) => (
                              <a
                                href={option.href}
                                className={classNames(
                                  option.current
                                    ? "font-medium text-gray-900"
                                    : "text-gray-500",
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm"
                                )}
                              >
                                {option.name}
                              </a>
                            )}
                          </Menu.Item>
                        ))}
                      </div>
                    </Menu.Items>
                  </Transition>
                </Menu>

                <button
                  type="button"
                  className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
                >
                  <span className="sr-only">View grid</span>
                  <Squares2X2Icon className="h-5 w-5" aria-hidden="true" />
                </button>
                <button
                  type="button"
                  className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
                  onClick={() => setMobileFiltersOpen(true)}
                >
                  <span className="sr-only">Filters</span>
                  <FunnelIcon className="h-5 w-5" aria-hidden="true" />
                </button>
              </div>
            </div>

            <section
              aria-labelledby="products-heading"
              className="pb-24 pt-6 items-center"
            >
              <h2 id="products-heading" className="sr-only">
                Products
              </h2>

              <div className="grid place-items-center grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-1">
                {/* Filters */}
                {/* <form className="hidden lg:block">
                  {filters.map((section) => (
                    <Disclosure
                      as="div"
                      key={section.id}
                      className="border-b border-gray-200 py-6"
                    >
                      {({ open }) => (
                        <>
                          <h3 className="-my-3 flow-root">
                            <Disclosure.Button className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500">
                              <span className="font-medium text-gray-900">
                                {section.name}
                              </span>
                              <span className="ml-6 flex items-center">
                                {open ? (
                                  <MinusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                ) : (
                                  <PlusIcon
                                    className="h-5 w-5"
                                    aria-hidden="true"
                                  />
                                )}
                              </span>
                            </Disclosure.Button>
                          </h3>
                          <Disclosure.Panel className="pt-6">
                            <div className="space-y-4">
                              {section.options.map((option, optionIdx) => (
                                <div
                                  key={option.value}
                                  className="flex items-center"
                                >
                                  <input
                                    id={`filter-${section.id}-${optionIdx}`}
                                    name={`${section.id}[]`}
                                    defaultValue={option.value}
                                    type="checkbox"
                                    defaultChecked={option.checked}
                                    onChange={(e) => {
                                      handleChange(e);
                                    }}
                                    className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                                  />
                                  <label
                                    htmlFor={`filter-${section.id}-${optionIdx}`}
                                    className="ml-3 text-sm text-gray-600"
                                  >
                                    {option.label}
                                  </label>
                                </div>
                              ))}
                            </div>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </form> */}

                {/* Product grid */}
                <div className="space-y-4 justify-center  w-[99%] lg:w-[70%] divide-y-2 lg:col-span-3">
                  {/* Your content */}
                  {fetchedJobs.map((job) => {
                    return (
                      <Link
                        to={`/api/freelance/details/${job._id}`}
                        key={job._id}
                      >
                        <div className="flex justify-between p-3 items-center gap-2 hover:bg-slate-50">
                          <div>
                            <h2 className="text-indigo-600 font-semibold md:text-lg">
                              {job.projectName}
                            </h2>
                            <h3 className="text-xs md:text-sm">
                              {job.postedBy[1]}
                            </h3>

                            <div className="flex divide-x-2">
                              <div className="pe-5">
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-4 h-4 me-1 inline-block"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 8.25H9m6 3H9m3 6l-3-3h1.5a3 3 0 100-6M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                  />
                                </svg>
                                <span className="align-middle text-sm">
                                  {job.payment}
                                </span>
                              </div>
                              <div className="px-5">
                                {/* <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="currentColor"
                                  className="w-4 h-4 inline-block me-1"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z"
                                  />
                                </svg> */}
                                {/* <span className="align-middle text-xs">
                                  {job.type.level}
                                  level
                                </span> */}
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center gap-2">
                            <p className="bg-green-50 text-green-600 px-2 rounded-lg truncate text-xs md:text-sm">
                              {job.status}
                            </p>
                            <div className="mt-[0.85rem] flex flex-row gap-2">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                height="14"
                                width="12"
                                viewBox="0 0 384 512"
                                className="mt-1"
                              >
                                <path d="M0 32C0 14.3 14.3 0 32 0H64 320h32c17.7 0 32 14.3 32 32s-14.3 32-32 32V75c0 42.4-16.9 83.1-46.9 113.1L237.3 256l67.9 67.9c30 30 46.9 70.7 46.9 113.1v11c17.7 0 32 14.3 32 32s-14.3 32-32 32H320 64 32c-17.7 0-32-14.3-32-32s14.3-32 32-32V437c0-42.4 16.9-83.1 46.9-113.1L146.7 256 78.9 188.1C48.9 158.1 32 117.4 32 75V64C14.3 64 0 49.7 0 32zM96 64V75c0 25.5 10.1 49.9 28.1 67.9L192 210.7l67.9-67.9c18-18 28.1-42.4 28.1-67.9V64H96zm0 384H288V437c0-25.5-10.1-49.9-28.1-67.9L192 301.3l-67.9 67.9c-18 18-28.1 42.4-28.1 67.9v11z" />
                              </svg>

                              <p className="align-middle inline-block text-xs md:text-sm">
                                {job.duration}
                              </p>
                            </div>
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                  <center>
                    {NoData && !fetchedJobs.length > 0 && (
                      <span>No freelance posts available for now</span>
                    )}
                    {loading && !NoData ? (
                      <div class=" left-1/2 mt-10 -ml-2 h-8 w-4 text-indigo-700">
                        <div class=" z-10 -ml-2 h-8 w-8 animate-bounce">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="animate-spin"
                            fill="currentColor"
                            stroke="currentColor"
                            stroke-width="0"
                            viewBox="0 0 16 16"
                          >
                            <path d="M8 0c-4.418 0-8 3.582-8 8s3.582 8 8 8 8-3.582 8-8-3.582-8-8-8zM8 4c2.209 0 4 1.791 4 4s-1.791 4-4 4-4-1.791-4-4 1.791-4 4-4zM12.773 12.773c-1.275 1.275-2.97 1.977-4.773 1.977s-3.498-0.702-4.773-1.977-1.977-2.97-1.977-4.773c0-1.803 0.702-3.498 1.977-4.773l1.061 1.061c0 0 0 0 0 0-2.047 2.047-2.047 5.378 0 7.425 0.992 0.992 2.31 1.538 3.712 1.538s2.721-0.546 3.712-1.538c2.047-2.047 2.047-5.378 0-7.425l1.061-1.061c1.275 1.275 1.977 2.97 1.977 4.773s-0.702 3.498-1.977 4.773z"></path>
                          </svg>
                        </div>
                        <div
                          class="absolute top-4 h-5 w-4 animate-bounce border-l-2 border-gray-200"
                          // style="rotate: -90deg"
                        ></div>
                        <div
                          class="absolute top-4 h-5 w-4 animate-bounce border-r-2 border-gray-200"
                          // style="rotate: 90deg"
                        ></div>
                      </div>
                    ) : (
                      " "
                    )}
                  </center>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
}
