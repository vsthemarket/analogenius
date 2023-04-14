export default async function search() {
  return (
    <>
      <div className="overflow-x-auto w-full flex flex-col justify-center items-center">
        {/* Search */}
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered input-info w-full max-w-xs mb-5"
        />

        <table className="table table-zebra w-full max-w-7xl gap-2 p-5">
          {/* head */}
          <thead>
            <tr>
              <th>Concept</th>
              <th>Analog</th>
              <th>Tags</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            <tr className="hover cursor-pointer">
              <td>Cy Ganderton</td>
              <td>Quality Control Specialist</td>
              <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr className="hover cursor-pointer">
              <td>Hart Hagerty</td>
              <td>Desktop Support Technician</td>
              <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr className="hover cursor-pointer">
              <td>Brice Swyre</td>
              <td>Tax Accountant</td>
              <td>Red</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
