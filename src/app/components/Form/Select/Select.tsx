export function Select({ ...props }) {
    console.log(props);
    return (
        <select
            className="w-full rounded-md border border-gray-300  px-3 py-2 text-sm shadow-sm 
                 placeholder:text-gray-400 focus-visible:outline-none 
                 focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 
                 disabled:cursor-not-allowed disabled:opacity-50 transition"
        >
            {/* <option value="1" className="p-5 bg-black">Item</option>
            <option value="1" className=" bg-black">Item</option>
            <option value="1" className=" bg-black">Item</option>
            <option value="1" className=" bg-black">Item</option>
            <option value="1" className=" bg-black">Item</option>
            <option value="1" className=" bg-black">Item</option> */}
        </select>
    );
}
