import './utils.css'

// eslint-disable-next-line react/prop-types
function Input({ id, label, type, value }) {

  function inputForm(id, label, type, value) {
    if (type === "text") {
      return (
        <div className='input-cover flex lg:items-center w-full flex-col lg:flex-row select-none'>
          <label htmlFor={id} className='w-24 md:w-40 mb-2 text-nowrap'>{label}</label>
          <input
            className='w-full rounded-md border-1 cursor-not-allowed select-none bg-gray-300'
            id={id}
            type={type}
            value={value === 0 ? '-' : value}
            disabled
            readOnly
          />
          <div className="disabled-form-selection"></div>
        </div>
      )
    }
    if (type === "textarea") {
      return (
        <div className='input-cover flex w-full flex-col lg:flex-row select-none'>
          <label htmlFor={id} className='w-24 md:w-40 mb-2 text-nowrap'>{label}</label>
          <textarea
            className='w-full cursor-not-allowed select-none bg-gray-300'
            id={id}
            rows="5"
            disabled
            readOnly
          >
            {value}
          </textarea>
          <div className="disabled-form-selection"></div>
        </div>
      )
    }
  }

  return (
    <div className='flex w-full items-center gap-4'>
      {inputForm(id, label, type, value)}
    </div>
  )
}

export default Input