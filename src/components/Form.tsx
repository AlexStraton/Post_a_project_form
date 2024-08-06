import Date from "./Date";
import Dropdown from "./Dropdown";

export default function Form() {
  return (
    <main className='min-h-screen bg-gray-50 flex flex-col justify-center '>
      <section className='max-w-ad w-full mx-auto '>
        <div className='text-center font-medium text-xl text-green'>
          Set up a project
        </div>
        <div className='text-center text-green text-3xl font-bold text-gray-900 mt-2'>
          Something Here
        </div>
      </section>
      <section className='max-w-md w-full mx-auto mt-4 bg-light-green p-8 border rounded-md border-gray-300'>
        <form action='' className='space-y-6'>
          <div>
            <label
              htmlFor=''
              className='text-green text-sm font-bold text-gray-600 block'>
              Project Owner
            </label>
            <div className='flex items-center justify-between gap-2'>
              <input
                type='text'
                className='w-full p-2 border border-gray-300 rounded mt-1'
                placeholder='First Name'
              />

              <input
                type='text'
                className='w-full p-2 border border-gray-300 rounded mt-1'
                placeholder='First Name'
              />
            </div>
          </div>

          <div>
            <div className='flex items-center justify-between gap-2'>
              <div>
                <label
                  htmlFor=''
                  className='text-green text-sm font-bold text-gray-600 block'>
                  Department
                </label>
                <input
                  type='text'
                  className='w-full p-2 border border-gray-300 rounded mt-1'
                  placeholder='Department'
                />
              </div>
              <div>
                <label
                  htmlFor=''
                  className='text-green text-sm font-bold text-gray-600 block'>
                  Manager
                </label>
                <input
                  type='text'
                  className='w-full p-2 border border-gray-300 rounded mt-1'
                  placeholder='Manager'
                />
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor=''
              className='text-green text-sm font-bold text-gray-600 block'>
              Project Title
            </label>
            <input
              type='text'
              className='w-full p-2 border border-gray-300 rounded mt-1'
            />
          </div>

          <div>
            <label
              htmlFor=''
              className='text-green text-sm font-bold text-gray-600 block'>
              Description
            </label>
            <textarea
              name=''
              id=''
              className='text-green w-full p-2 border border-gray-300 rounded mt-1'
            />
          </div>
          <Dropdown />
          {/* <div className='flex items-center justify-between'>
            <div className='flex items-center'>
              <input
                type='checkbox'
                className='h4 w-4 text-green-300 rounded'
              />
              <label htmlFor='' className='ml-2 text-ml text-gray-600'>
                Tick if project is completed
              </label>
            </div>
          </div> */}
          <Date />
          <button className='w-full py-2 px-4 bg-green-600 hover:bg-blue-900 rounded-md text-white text-sm'>
            Submit
          </button>
        </form>
      </section>
    </main>
  );
}
