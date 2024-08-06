export default function Dropdown() {
  return (
    <div>
      <label htmlFor='' className='text-sm font-bold text-gray-600 block'>
        Priority (1-5, 5 being critical)
      </label>
      <select
        name=''
        id=''
        className='w-full p-2 border border-gray-300 rounded mt-1'>
        <option value='1'>1</option>
        <option value='2'>2</option>
        <option value='3'>3</option>
      </select>
    </div>
  );
}
