import React from 'react'

const Card = ({ id, img, nombre, rol, t1, t2 }) => {
  return (
    <>
      {img !== undefined ? (
        <div id={id} className='card relative px-4 py-4 my-4 mx-4 imagen-card'>
          {/* <p className='pink poppinsSemiBold italic px-4 pt-4 text-9xl'> “ </p> */}
          <img
            src={img}
            id={id}
            className='absolute object-cover  max-h-full min-w-full object-top imagen-card'
            alt=''
          />
          <div id={id} className='absolute bottom-0 left-6'>
            {/* <img
        className='absolute formita-card '
        src='images/formita-cita.png'
        alt=''
      /> */}
            <p id={id} className='poppinsBold px-2 yellow pt-2 '>
              {nombre}
            </p>
            <p id={id} className='poppinsRegular px-2 yellow pt-2  '>
              {rol}
            </p>
          </div>
        </div>
      ) : (
        <div
          id={id}
          // style={{ borderColor: 'yellow' }}
          className='card relative px-4 py-4 my-4 mx-4 text-xs  border-solid rounded-3xl border-2 border-yellow-300'
        >
          {/* <p className='pink poppinsSemiBold italic px-4 pt-4 text-9xl'> “ </p> */}

          <div className=''>
            <p id={id} className='poppinsBold white p-2 pb-0'>
              {t1}
            </p>
            <p id={id} className='poppinsBold white p-2 pt-0 '>
              {t2}
            </p>
          </div>

          {/* <img
        className='absolute formita-card '
        src='images/formita-cita.png'
        alt=''
      /> */}
        </div>
      )}
    </>
  )
}

export default Card
