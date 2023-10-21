import React, { useState, useEffect } from "react";
import { getparentcategory } from "../../apis/Apis";
import { useNavigate } from "react-router-dom";

function Category() {
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    (async function invoke() {
      await getparentcategory().then((res) => {
        setCategories(res?.data?.parentcategory);
      });
    })();
  }, []);

  const handleInputChange = (event) => {
    const { value } = event.target;

    navigate(`/sublist/${value}`);
  };
  return (
    <div>
      <form className="bg-white mx-auto my-6 flex flex-col w-full   max-w-2xl ">
        <div className="py-6">
          <div className="flex bg-white rounded-lg  overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
            <div className="w-full p-8 ">
              <p className="text-2xl font-semibold text-center myb-4 text-siteviolet">
                PRODUCTS
              </p>

              <div className="mt-4">
                <div className="flex justify-between">
                  <label className="block text-gray-700 text-sm font-bold mb-2">
                    CATEGORY
                  </label>
                </div>
                <select
                  className=" text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none"
                  name="parentCategory"
                  // value={parentCategory}
                  onChange={handleInputChange}
                >
                  {categories.map((category) => (
                    <option key={category._id} value={category._id}>
                      {category?.categoryname}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Category;
