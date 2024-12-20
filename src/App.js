import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://randomuser.me/api/?page=1&results=1&seed=abc"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        const result = await response.json();
        setData(result.results[0]);
        console.log(result.results[0]);
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchData();
  }, [data]);
  return (
    <main className="bg-[#f5f5f5] flex justify-center items-center h-[100vh]">
      {data && (
        <div
          id="user-container"
          className="flex w-[600px] backdrop-blur-md bg-[#000] gap-[12px] justify-center align-center rounded-[17px] shadow-[0px_4px_8px_#00000033]"
        >
          <img
            className="w-[50%] rounded-l-[15px]"
            src={data.picture.large}
            alt="User Picture"
          />
          <div className="w-[50%] pt-[57px] pl-[40px]">
            <div className="flex mb-[24px] gap-[32px]">
              <p className="text-[32px] font-bold text-[#fff] font-semibold">
                {data.name.first}
              </p>
              <p className="text-[32px] font-bold text-[#fff] font-semibold">
                {data.name.last}
              </p>
            </div>
            <p className="text-[18px] text-[#d3d3d3] capitalize">
              {data.gender}
            </p>
            <p className="text-[18px] text-[#d3d3d3] italic capitalize">
              {data.phone}
            </p>
          </div>{" "}
        </div>
      )}
    </main>
  );
}

export default App;
